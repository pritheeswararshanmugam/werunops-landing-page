import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const DESKTOP_ROW_TOPS = ['0px', '70px', '140px', '210px'];
const DESKTOP_DOT_TOPS = ['24px', '94px', '164px', '234px'];

export function HowItWorksSection({ howItWorks }) {
  return (
    <section id="how-it-works" className="surface-texture bg-surface py-[104px] lg:py-[112px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[56px] px-[32px] md:gap-[72px]">
        <Reveal className="w-full">
          <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[18px] md:gap-[20px]">
            <SectionHeading
              align="center"
              title={howItWorks.title}
              className="[&_h2]:max-w-[640px]"
            />
            <span className="h-[4px] w-[96px] bg-brand" />
          </div>
        </Reveal>

        <div className="w-full max-w-[1216px]">
          <div className="relative mt-[4px] w-full max-w-[568px] pl-[34px] pt-[12px] lg:hidden">
            <div className="pointer-events-none absolute bottom-[24px] left-[6.5px] top-[22px] w-[1px] bg-border/[0.24]" />

            <div className="flex flex-col gap-[24px]">
              {howItWorks.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.1} duration={0.4} y={15} className="relative w-full max-w-[504px]">
                  <div className="relative overflow-hidden pt-[18px] pr-[56px]">
                    <span className="pointer-events-none absolute right-[10px] top-[-14px] z-0 select-none font-body text-[30px] font-black leading-[30px] text-border/[0.18]">
                      {step.number}
                    </span>

                    <div className="relative z-10">
                      <h3 className="max-w-[300px] font-display text-[22px] font-bold leading-[28px] text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-[12px] font-body text-[16px] font-normal leading-[27px] text-muted">
                        {step.body}
                      </p>
                    </div>
                  </div>

                  <span className="absolute left-[0px] top-[22px] h-[13px] w-[13px] rounded-[999px] bg-brand" />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[286px] w-full lg:block">
            <div className="pointer-events-none absolute left-[calc(50%-0.5px)] top-[0px] h-[286px] w-[1px] bg-border/[0.24]" />

            {howItWorks.steps.map((step, index) => {
              const rowTop = DESKTOP_ROW_TOPS[index];
              const dotTop = DESKTOP_DOT_TOPS[index];
              const isRightColumn = index % 2 === 0;

              return (
                <Reveal key={step.number} delay={index * 0.1} duration={0.4} y={15} className="absolute inset-0">
                  {isRightColumn ? (
                    <>
                      <div className="absolute left-[624px] w-[592px] overflow-hidden pl-[96px] pr-[48px] pt-[4px]" style={{ top: rowTop }}>
                        <span className="pointer-events-none absolute left-[28px] top-[8px] z-0 select-none font-body text-[40px] font-black leading-[40px] text-border/[0.2]">
                          {step.number}
                        </span>

                        <div className="relative z-10 flex flex-col items-start gap-[12px]">
                          <h3 className="w-[448px] font-display text-[23px] font-bold leading-[30px] text-ink">
                            {step.title}
                          </h3>
                          <p className="w-[448px] font-body text-[16px] font-normal leading-[27px] text-muted">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute left-[0px] w-[592px] overflow-hidden pl-[48px] pr-[96px] pt-[4px] text-right" style={{ top: rowTop }}>
                        <span className="pointer-events-none absolute right-[28px] top-[8px] z-0 select-none font-body text-[40px] font-black leading-[40px] text-border/[0.2]">
                          {step.number}
                        </span>

                        <div className="relative z-10 flex flex-col items-end gap-[12px]">
                          <h3 className="w-[448px] font-display text-[23px] font-bold leading-[30px] text-ink">
                            {step.title}
                          </h3>
                          <p className="w-[448px] font-body text-[16px] font-normal leading-[27px] text-muted">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  <span
                    className="absolute left-[calc(50%-7px)] h-[14px] w-[14px] rounded-[999px] bg-brand"
                    style={{ top: dotTop }}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="w-full" delay={0.08}>
          <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center pt-[20px] lg:pt-[24px]">
            <p className="w-full max-w-[367.1px] text-center font-display text-[20px] font-bold leading-[28px] text-ink">
              {howItWorks.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
