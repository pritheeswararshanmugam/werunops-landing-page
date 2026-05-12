const path = require('node:path');
const { mkdir } = require('node:fs/promises');
const { chromium } = require('playwright');

const rootDir = process.cwd();
const outputDir = path.join(rootDir, 'audit-screenshots');
const url = 'http://127.0.0.1:4173/';

const viewports = [
  { name: 'desktop-27in', width: 2560, height: 1440 },
  { name: 'laptop-14in', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

function sectionTargets(page) {
  return [
    ['01-Header-Navigation.png', page.locator('header[data-site-header="true"]')],
    ['02-Hero.png', page.locator('section#home')],
    ['03-Problem.png', page.locator('section#problem')],
    ['04-Flow-Workflow.png', page.locator('section#system')],
    ['05-Solution-Services.png', page.locator('section#solution')],
    ['06-Results.png', page.locator('section#results')],
    ['07-How-It-Works.png', page.locator('section#how-it-works')],
    ['08-Control-Visibility.png', page.locator('section#control')],
    ['09-Pricing.png', page.locator('section#pricing')],
    ['10-Objection-Trust.png', page.locator('main > section').filter({ has: page.getByRole('heading', { name: /If admin keeps landing back on you/i }) })],
    ['11-Final-CTA-Form.png', page.locator('section#contact')],
    ['12-Footer.png', page.locator('footer')],
  ];
}

async function preparePage(page, viewport) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);
}

async function captureElement(page, viewportName, fileName, locator, delayMs = 350) {
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(delayMs);
  const destination = path.join(outputDir, viewportName, fileName);
  await locator.screenshot({ path: destination });
  return `${viewportName}/${fileName}`;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const generated = [];

  try {
    for (const viewport of viewports) {
      await mkdir(path.join(outputDir, viewport.name), { recursive: true });
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
      const page = await context.newPage();

      await preparePage(page, viewport);

      for (const [fileName, locator] of sectionTargets(page)) {
        generated.push(await captureElement(page, viewport.name, fileName, locator));
      }

      await preparePage(page, viewport);

      if (viewport.name === 'mobile') {
        await page.locator('button[aria-label="Toggle navigation"]').click();
        await page.waitForTimeout(350);
        await page.locator('header[data-site-header="true"]').screenshot({ path: path.join(outputDir, viewport.name, '13-Mobile-Menu-Open.png') });
        generated.push(`${viewport.name}/13-Mobile-Menu-Open.png`);

        await preparePage(page, viewport);
        generated.push(await captureElement(page, viewport.name, '14-Pricing-All-Tiers.png', page.locator('section#pricing')));
      } else {
        generated.push(await captureElement(page, viewport.name, '13-Pricing-All-Tiers.png', page.locator('section#pricing')));
      }

      await context.close();
    }

    console.log(JSON.stringify({ generated }, null, 2));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});