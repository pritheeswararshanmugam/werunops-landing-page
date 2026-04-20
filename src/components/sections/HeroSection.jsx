import { Reveal } from '../ui/Reveal';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

export function HeroSection({ hero }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink text-paper shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-[0.1]" />

      <div className="relative mx-auto box-border w-full max-w-[1280px] px-[32px] pt-[128px] pb-[128px] min-[1280px]:pt-[192px]">
        <div className="grid items-start gap-[64px] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-[28px] min-[1280px]:h-[478px] min-[1280px]:grid-cols-[576px_576px] min-[1280px]:gap-[64px]">
          <Reveal className="flex w-full max-w-[608px] flex-col items-start gap-[24px] lg:max-w-none lg:pr-[18px] min-[1280px]:w-[576px] min-[1280px]:max-w-[576px] min-[1280px]:translate-y-[-18.5px] min-[1280px]:pr-0">
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
                className="inline-flex h-[58px] w-[259.67px] shrink-0 items-center justify-center rounded-[4px] bg-brand px-[32px] py-[17px] font-body text-[16px] font-[700] leading-[24px] tracking-[1.6px] uppercase text-paper"
              >
                {hero.primaryCta.label}
              </a>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-[58px] w-[201.45px] shrink-0 items-center justify-center rounded-[4px] border-[1px] border-border/30 px-[32px] py-[16px] font-body text-[16px] font-[500] leading-[24px] text-paper hover:border-paper/40 hover:bg-paper/[0.05]"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="flex w-full max-w-[576px] flex-col items-start gap-[14px] pt-[8px]">
              <span className="inline-flex items-center gap-[8px] rounded-[999px] border border-paper/10 bg-paper/[0.03] px-[14px] py-[8px] font-body text-[12px] font-[700] uppercase leading-[16px] tracking-[1.2px] text-faded">
                <span className="h-[8px] w-[8px] rounded-[999px] bg-brand" />
                Australian-Based Operations
              </span>

              <div className="flex w-full max-w-[520px] items-center gap-[12px]">
                <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center text-brand">
                  <svg
                    aria-hidden="true"
                    className="h-[24px] w-[24px]"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1.3125C15.7985 1.3125 19.6875 5.20152 19.6875 10C19.6875 14.7985 15.7985 18.6875 11 18.6875C6.20152 18.6875 2.3125 14.7985 2.3125 10C2.3125 5.20152 6.20152 1.3125 11 1.3125Z"
                      fill="currentColor"
                      fillOpacity="0.18"
                    />
                    <path
                      d="M7.5625 10.1562L9.84375 12.4375L14.4375 7.84375"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="w-full max-w-[468.88px] font-body text-[13px] font-[600] leading-[20px] tracking-[0.02em] text-faded sm:text-[14px]">
                  {hero.supportNote}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative h-[392px] w-full max-w-[576px] shrink-0 lg:ml-auto lg:h-[400px] lg:max-w-none min-[1280px]:h-[432px] min-[1280px]:w-[576px] min-[1280px]:max-w-[576px] min-[1280px]:translate-y-[23px]">
            <div className="relative mx-auto h-[392px] w-full max-w-[548px] lg:ml-auto lg:h-[400px] lg:max-w-none min-[1280px]:h-[432px] min-[1280px]:max-w-[576px]">
              <div className="pointer-events-none absolute inset-[-16px] rounded-[8px] bg-brand/10 blur-[32px]" />
              <MediaPlaceholder variant="dashboard" className="relative h-[392px] w-full lg:h-[400px] min-[1280px]:h-[432px]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
