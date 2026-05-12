import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function SolutionTick() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-[16px] w-[16px]" fill="none">
      <path d="M4.8 10.4 8.15 13.75 15.25 6.65" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SolutionSection({ solution }) {
  return (
    <section
      id="solution"
      className="paper-texture bg-paper shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto box-border w-full max-w-[1280px] px-[32px] py-[128px]">
        <div className="grid items-start gap-[64px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-[40px] min-[1280px]:grid-cols-[568px_568px] min-[1280px]:gap-[80px]">
          <Reveal className="w-full max-w-[568px] lg:max-w-none min-[1280px]:translate-y-[3.25px]">
            <div className="w-full max-w-[568px] lg:max-w-none">
              <div className="paper-texture relative flex h-[420px] w-full max-w-[512px] flex-col overflow-hidden rounded-[4px] border-[1px] border-border/10 bg-panel text-ink shadow-[0px_1px_2px_rgba(0,0,0,0.05)] lg:h-[440px] lg:max-w-none min-[1280px]:h-[512px] min-[1280px]:max-w-[512px]">
                <img
                  src="/images/Solution Section.png"
                  alt="Admin support workflow showing quoting, estimates, scheduling coordination, invoicing, and follow-up"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex w-full max-w-[568px] flex-col gap-[16px] lg:max-w-none min-[1280px]:w-[568px] min-[1280px]:translate-y-[9.75px]">
            <SectionHeading align="left" title={solution.title} description={solution.description} />

            <ul className="flex w-full max-w-[568px] flex-col gap-[24px] px-[0px] pt-[24px] pb-[32px]">
              {solution.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-[16px]">
                  <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[12px] border border-brand/20 bg-brand/[0.12] text-brand shadow-[0px_14px_24px_-18px_rgba(9,20,38,0.5)]">
                    <SolutionTick />
                  </span>
                  <span className="font-display text-[16px] font-[700] leading-[24px] text-ink">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <div className="box-border flex min-h-[40px] w-full max-w-[568px] items-center border-l-[4px] border-brand py-[8px] pl-[24px]">
              <p className="w-full max-w-[459.56px] font-display text-[16px] font-[800] italic leading-[24px] text-ink">
                {solution.callout}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
