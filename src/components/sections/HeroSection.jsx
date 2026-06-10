import { Reveal } from '../ui/Reveal';

function SupportPill({ text }) {
  if (!text) {
    return null;
  }

  return (
    <span className="inline-flex max-w-full items-center gap-[8px] rounded-[999px] border border-paper/10 bg-paper/[0.03] px-[14px] py-[8px]">
      <span className="h-[6px] w-[6px] rounded-full bg-brand" aria-hidden="true" />
      <span className="min-w-0 font-body text-[12px] font-[700] uppercase leading-[16px] tracking-[1.2px] text-faded">
        {text}
      </span>
    </span>
  );
}

function GainIcon() {
  return (
    <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[10px] border border-brand/25 bg-brand/10 text-brand">
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-[14px] w-[14px]" fill="none">
        <path d="M4.8 10.4 8.15 13.75 15.25 6.65" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function HeroSection({ hero }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink text-paper shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-[0.1]" />

      <div className="relative mx-auto box-border w-full max-w-[1280px] px-[20px] py-[88px] sm:px-[24px] md:px-[32px] md:py-[104px] lg:py-[112px]">
        <div className="grid min-w-0 items-start gap-[48px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-[32px] min-[1280px]:grid-cols-[520px_648px] min-[1280px]:gap-[48px]">
          <Reveal className="min-w-0 w-full max-w-[608px] lg:max-w-none lg:pr-[8px] min-[1280px]:w-[520px] min-[1280px]:max-w-[520px] min-[1280px]:pr-0">
            <div className="flex w-full flex-col items-start gap-[24px]">
              <span className="block w-full max-w-[576px] font-display text-[12px] font-[700] leading-[16px] tracking-[2.4px] uppercase text-brand">
                {hero.eyebrow}
              </span>

              <div className="w-full max-w-[576px]">
                <h1 className="font-display text-display-hero font-[800] leading-[48px] tracking-[-1.2px] text-paper min-[1280px]:text-[60px] min-[1280px]:leading-[60px] min-[1280px]:tracking-[-1.5px]">
                  {hero.titleLeadLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}

                  <span className="block text-brand">
                    {hero.titleAccentLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </h1>
              </div>

              <p className="w-full max-w-[576px] pt-[8px] font-body text-[18px] font-[400] leading-[28px] text-faded min-[1280px]:text-[20px]">
                {hero.description}
              </p>

              <div className="flex w-full max-w-[576px] flex-col gap-[12px] pt-[8px]">
                <p className="font-display text-[14px] font-bold uppercase leading-[20px] tracking-[1.4px] text-paper">
                  {hero.gainsTitle}
                </p>

                <ul className="grid w-full gap-x-[16px] gap-y-[10px] sm:grid-cols-2">
                  {hero.gains.map((gain) => (
                    <li key={gain} className="flex items-center gap-[10px]">
                      <GainIcon />
                      <span className="font-body text-[14px] font-semibold leading-[20px] text-faded">{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full max-w-[576px] flex-col items-start gap-[16px] pt-[16px] min-[1280px]:flex-row">
                <a href={hero.primaryCta.href} className="btn-primary w-full px-[16px] text-center tracking-[0.1em] sm:w-auto sm:px-[32px] sm:tracking-[0.14em]">
                  {hero.primaryCta.label}
                </a>
              </div>

              <div className="flex w-full max-w-[576px] flex-row flex-wrap items-start gap-[10px] pt-[8px]">
                <SupportPill text={hero.badge} />
                <SupportPill text={hero.supportNote} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative min-w-0 w-full max-w-[648px] lg:ml-auto lg:max-w-none lg:shrink-0 min-[1280px]:w-[648px] min-[1280px]:max-w-[648px]">
            <div className="relative mx-auto aspect-square min-w-0 w-full max-w-[648px] lg:ml-auto lg:max-w-none">
              <div className="pointer-events-none absolute inset-[-16px] rounded-[8px] bg-brand/10 blur-[32px]" />
              <div className="relative flex aspect-square w-full flex-col overflow-hidden rounded-[16px] border-[8px] border-frame bg-deep text-paper shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <img
                  src="/images/hero-section.jpeg"
                  alt="Trade operations covering estimating, quoting, scheduling, invoicing, and payment follow-ups"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
