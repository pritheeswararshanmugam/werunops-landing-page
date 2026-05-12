import { Reveal } from '../ui/Reveal';

function SupportPill({ text }) {
  if (!text) {
    return null;
  }

  return (
    <span className="inline-flex items-center gap-[8px] rounded-[999px] border border-paper/10 bg-paper/[0.03] px-[14px] py-[8px]">
      <span className="h-[6px] w-[6px] rounded-full bg-brand" aria-hidden="true" />
      <span className="font-body text-[12px] font-[700] uppercase leading-[16px] tracking-[1.2px] text-faded">
        {text}
      </span>
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

      <div className="relative mx-auto box-border w-full max-w-[1280px] px-[32px] py-[128px]">
        <div className="grid items-start gap-[64px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-[36px] min-[1280px]:grid-cols-[520px_632px] min-[1280px]:gap-[64px]">
          <Reveal className="w-full max-w-[608px] lg:max-w-none lg:pr-[8px] min-[1280px]:w-[520px] min-[1280px]:max-w-[520px] min-[1280px]:pr-0">
            <div className="flex w-full flex-col items-start gap-[24px] lg:-translate-y-[28px] min-[1280px]:-translate-y-[42px]">
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

              <div className="flex w-full max-w-[576px] flex-col items-start gap-[16px] pt-[16px] min-[1280px]:flex-row">
                <a
                  href={hero.primaryCta.href}
                  className="btn-primary w-full whitespace-nowrap sm:w-auto"
                >
                  {hero.primaryCta.label}
                </a>
              </div>

              <div className="flex w-full max-w-[576px] flex-col items-start gap-[10px] pt-[8px]">
                <SupportPill text={hero.badge} />
                <SupportPill text={hero.supportNote} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative h-[392px] w-full max-w-[632px] shrink-0 lg:ml-auto lg:h-[400px] lg:max-w-none min-[1280px]:h-[432px] min-[1280px]:w-[632px] min-[1280px]:max-w-[632px]">
            <div className="relative mx-auto h-[392px] w-full max-w-[632px] lg:ml-auto lg:h-[400px] lg:max-w-none lg:-translate-y-[12px] min-[1280px]:h-[432px] min-[1280px]:max-w-[632px] min-[1280px]:translate-y-0">
              <div className="pointer-events-none absolute inset-[-16px] rounded-[8px] bg-brand/10 blur-[32px]" />
              <div className="relative flex h-[392px] w-full flex-col overflow-hidden rounded-[16px] border-[8px] border-frame bg-deep text-paper shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] lg:h-[400px] min-[1280px]:h-[432px]">
                <img
                  src="/images/Hero Section.png"
                  alt="Trade back-office visibility showing quotes, schedule, invoices, and payment follow-up"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
