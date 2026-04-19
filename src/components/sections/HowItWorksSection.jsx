import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const DESKTOP_ROW_TOPS = ['0px', '74px', '148px', '222px'];
const DESKTOP_DOT_TOPS = ['29px', '103px', '177px', '251px'];

export function HowItWorksSection({ howItWorks }) {
  return (
    <section id="how-it-works" className="bg-surface py-[128px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[96px] px-[32px]">
        <Reveal className="w-full">
          <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[24px]">
            <SectionHeading
              align="center"
              title={howItWorks.title}
              className="[&_h2]:max-w-[566.36px]"
            />
            <span className="h-[4px] w-[96px] bg-brand" />
          </div>
        </Reveal>

        <div className="w-full max-w-[1216px]">
          <div className="relative w-full max-w-[568px] pl-[40px] lg:hidden">
            <div className="pointer-events-none absolute left-[7.5px] top-[36px] bottom-[36px] w-[1px] bg-border/[0.3]" />

            <div className="flex flex-col gap-[32px]">
              {howItWorks.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.06} className="relative w-full max-w-[504px]">
                  <span className="pointer-events-none absolute left-[0px] top-[-10px] font-body text-[60px] font-black leading-[60px] text-border/[0.2]">
                    {step.number}
                  </span>

                  <div className="relative pt-[32px]">
                    <h3 className="font-display text-[24px] font-bold leading-[32px] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-[16px] font-body text-[16px] font-normal leading-[26px] text-muted">
                      {step.body}
                    </p>
                  </div>

                  <span className="absolute left-[0px] top-[34px] h-[16px] w-[16px] rounded-[12px] bg-brand" />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[296px] w-full lg:block">
            <div className="pointer-events-none absolute left-[calc(50%-0.5px)] top-[0px] h-[296px] w-[1px] bg-border/[0.3]" />

            {howItWorks.steps.map((step, index) => {
              const rowTop = DESKTOP_ROW_TOPS[index];
              const dotTop = DESKTOP_DOT_TOPS[index];
              const isRightColumn = index % 2 === 0;

              return (
                <Reveal key={step.number} delay={index * 0.06} className="absolute inset-0">
                  {isRightColumn ? (
                    <>
                      <div className="absolute left-[0px] flex h-[60px] w-[568px] items-center justify-end pr-[64px]" style={{ top: `calc(${rowTop} + 7px)` }}>
                        <span className="font-body text-[60px] font-black leading-[60px] text-border/[0.2]">
                          {step.number}
                        </span>
                      </div>

                      <div className="absolute left-[648px] flex h-[74px] w-[568px] flex-col items-start gap-[16px] pl-[64px]" style={{ top: rowTop }}>
                        <h3 className="w-[504px] font-display text-[24px] font-bold leading-[32px] text-ink">
                          {step.title}
                        </h3>
                        <p className="w-[504px] font-body text-[16px] font-normal leading-[26px] text-muted">
                          {step.body}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute left-[0px] flex h-[74px] w-[568px] flex-col items-end gap-[16px] pr-[64px] text-right" style={{ top: rowTop }}>
                        <h3 className="w-[504px] font-display text-[24px] font-bold leading-[32px] text-ink">
                          {step.title}
                        </h3>
                        <p className="w-[504px] font-body text-[16px] font-normal leading-[26px] text-muted">
                          {step.body}
                        </p>
                      </div>

                      <div className="absolute left-[648px] flex h-[60px] w-[568px] items-center pl-[64px]" style={{ top: `calc(${rowTop} + 7px)` }}>
                        <span className="font-body text-[60px] font-black leading-[60px] text-border/[0.2]">
                          {step.number}
                        </span>
                      </div>
                    </>
                  )}

                  <span
                    className="absolute left-[calc(50%-8px)] h-[16px] w-[16px] rounded-[12px] bg-brand"
                    style={{ top: dotTop }}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="w-full" delay={0.08}>
          <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center pt-[32px]">
            <p className="w-full max-w-[367.1px] text-center font-display text-[20px] font-bold leading-[28px] text-ink">
              {howItWorks.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
