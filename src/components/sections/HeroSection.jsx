import { Reveal } from '../ui/Reveal';
import { useMediaQuery } from '../../hooks/useMediaQuery';

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

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
      <path d="M20 11.6a7.8 7.8 0 0 1-11.55 6.83L4 20l1.5-4.34A7.8 7.8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.05 8.2c.2-.45.42-.46.72-.47h.25c.16 0 .34.06.44.3l.68 1.64c.08.2.04.37-.08.54l-.5.62c-.13.15-.1.3-.02.44.35.64.82 1.19 1.4 1.65.6.47 1.1.7 1.7.94.16.06.3.03.4-.1l.72-.87c.16-.2.34-.17.52-.1l1.53.72c.2.1.33.15.38.25.05.1.05.6-.14 1.16-.2.55-1.14 1.06-1.6 1.13-.42.06-.95.1-1.54-.08-.36-.1-.82-.25-1.4-.5a9.8 9.8 0 0 1-3.8-3.36c-.28-.4-.76-1.07-.76-2.04 0-.98.5-1.46.68-1.67l.48-.2Z" fill="currentColor" />
    </svg>
  );
}

export function HeroSection({ hero, whatsapp }) {
  const isCompact = useMediaQuery('(max-width: 1023px)');

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink text-paper shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    >
      <div className="pointer-events-none absolute inset-0 hidden bg-hero-radial opacity-[0.1] lg:block" />

      <div className="relative mx-auto box-border w-full max-w-[1280px] px-[16px] py-[52px] sm:px-[24px] sm:py-[64px] md:px-[32px] md:py-[72px] lg:py-[112px]">
        <div className="grid min-w-0 items-start gap-[32px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-[32px] min-[1280px]:grid-cols-[520px_648px] min-[1280px]:gap-[48px]">
          <Reveal className="min-w-0 w-full max-w-[608px] lg:max-w-none lg:pr-[8px] min-[1280px]:w-[520px] min-[1280px]:max-w-[520px] min-[1280px]:pr-0">
            <div className="flex w-full flex-col items-start gap-[18px] lg:gap-[24px]">
              <span className="block w-full max-w-[576px] font-display text-[12px] font-[700] leading-[16px] tracking-[2.4px] uppercase text-brand">
                {hero.eyebrow}
              </span>

              <div className="w-full max-w-[576px]">
                <h1 className="font-display text-[36px] font-[800] leading-[39px] tracking-[-0.9px] text-paper min-[480px]:text-[40px] min-[480px]:leading-[42px] sm:text-[44px] sm:leading-[46px] lg:text-display-hero lg:leading-[48px] lg:tracking-[-1.2px] min-[1280px]:text-[60px] min-[1280px]:leading-[60px] min-[1280px]:tracking-[-1.5px]">
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

              <p className="w-full max-w-[576px] pt-[4px] font-body text-[16px] font-[400] leading-[25px] text-faded lg:pt-[8px] lg:text-[18px] lg:leading-[28px] min-[1280px]:text-[20px]">
                {hero.description}
              </p>

              <div className="flex w-full max-w-[576px] flex-col gap-[10px] pt-[4px] lg:gap-[12px] lg:pt-[8px]">
                <p className="font-display text-[14px] font-bold uppercase leading-[20px] tracking-[1.4px] text-paper">
                  {hero.gainsTitle}
                </p>

                <ul className="grid w-full grid-cols-2 gap-x-[12px] gap-y-[10px] sm:gap-x-[16px]">
                  {hero.gains.map((gain) => (
                    <li key={gain} className="flex items-center gap-[10px]">
                      <GainIcon />
                      <span className="font-body text-[14px] font-semibold leading-[20px] text-faded">{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid w-full max-w-[576px] grid-cols-1 gap-[10px] pt-[10px] sm:grid-cols-2 lg:flex lg:flex-col lg:items-start lg:gap-[16px] lg:pt-[16px] min-[1280px]:flex-row">
                <a href={hero.primaryCta.href} className="btn-primary w-full px-[16px] text-center tracking-[0.1em] sm:w-auto sm:px-[32px] sm:tracking-[0.14em]">
                  {hero.primaryCta.label}
                </a>

                {whatsapp ? (
                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[56px] w-full items-center justify-center gap-[9px] rounded-[4px] border border-paper/20 bg-paper/[0.04] px-[16px] py-[14px] font-body text-[13px] font-black uppercase leading-[20px] tracking-[0.1em] text-paper sm:w-auto lg:hidden"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                ) : null}
              </div>

              <div className="flex w-full max-w-[576px] flex-row flex-wrap items-start gap-[8px] pt-[4px] lg:gap-[10px] lg:pt-[8px]">
                <SupportPill text={hero.badge} />
                <SupportPill text={hero.supportNote} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative min-w-0 w-full max-w-[648px] lg:ml-auto lg:max-w-none lg:shrink-0 min-[1280px]:w-[648px] min-[1280px]:max-w-[648px]">
            <div className="relative mx-auto aspect-square min-w-0 w-full max-w-[320px] sm:max-w-[400px] lg:ml-auto lg:max-w-none">
              <div className="pointer-events-none absolute inset-[-16px] hidden rounded-[8px] bg-brand/10 blur-[32px] lg:block" />
              <div className="relative flex aspect-square w-full flex-col overflow-hidden rounded-[16px] border-[8px] border-frame bg-deep text-paper shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <img
                  src={isCompact ? '/images/hero-section-mobile.webp' : '/images/hero-section.jpeg'}
                  alt="Trade operations covering estimating, quoting, scheduling, invoicing, and payment follow-ups"
                  width={isCompact ? 640 : 1254}
                  height={isCompact ? 640 : 1254}
                  fetchPriority="high"
                  decoding="async"
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
