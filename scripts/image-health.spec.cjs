const path = require('node:path');
const { mkdir } = require('node:fs/promises');
const { test, expect } = require('@playwright/test');

const url = 'http://127.0.0.1:4173/';
const outputDir = path.join(process.cwd(), 'audit-screenshots', 'verification');

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

function isImageUrl(urlToCheck) {
  return /\.(png|jpe?g|svg|webp)(\?|$)/i.test(urlToCheck);
}

function collectImageFailures(page, failures) {
  const onResponse = (response) => {
    const responseUrl = response.url();

    if (isImageUrl(responseUrl) && response.status() >= 400) {
      failures.push({ url: responseUrl, status: response.status() });
    }
  };

  const onRequestFailed = (request) => {
    const requestUrl = request.url();

    if (isImageUrl(requestUrl)) {
      failures.push({
        url: requestUrl,
        status: 'requestfailed',
        errorText: request.failure()?.errorText || null,
      });
    }
  };

  page.on('response', onResponse);
  page.on('requestfailed', onRequestFailed);

  return () => {
    page.off('response', onResponse);
    page.off('requestfailed', onRequestFailed);
  };
}

test('image assets load without failures in preview', async ({ browser }) => {
  await mkdir(outputDir, { recursive: true });

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
    const page = await context.newPage();
    const failures = [];
    const detach = collectImageFailures(page, failures);

    try {
      await page.goto(url, { waitUntil: 'networkidle' });

      const images = await page.locator('img').evaluateAll((items) => items.map((img) => ({
        src: img.getAttribute('src'),
        currentSrc: img.currentSrc,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      })));

      const brokenDomImages = images.filter((image) => image.naturalWidth === 0 || image.naturalHeight === 0);

      expect.soft(brokenDomImages, `${viewport.name} rendered images should have intrinsic dimensions`).toEqual([]);
      expect(failures, `${viewport.name} should not have failed image requests`).toEqual([]);

      await page.screenshot({
        path: path.join(outputDir, `${viewport.name}-full-page.png`),
        fullPage: true,
      });

      console.log(JSON.stringify({ viewport: viewport.name, images }, null, 2));
    } finally {
      detach();
      await context.close();
    }
  }
});