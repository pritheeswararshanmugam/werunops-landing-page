import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function StepNumber({ number, side = 'right' }) {
  return (
    <span
      aria-hidden="true"
      className={[
        'pointer-events-none absolute top-[2px] z-0 select-none font-body text-[40px] font-black leading-[40px] text-border/[0.2]',
        side === 'left' ? 'right-0' : 'left-0',
      ].join(' ')}
    >
      {number}
    </span>
  );
}

export function HowItWorksSection({ howItWorks }) {
  return (
    <section id="how-it-works" className="surface-texture border-t border-border/20 bg-surface py-[88px] lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[48px] px-[20px] sm:px-[24px] md:px-[32px] lg:gap-[64px]">
        <Reveal className="w-full">
          <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[14px] md:gap-[18px]">
            <p className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[2.4px] text-brandText">
              {howItWorks.eyebrow}
            </p>
            <SectionHeading align="center" title={howItWorks.title} className="[&_h2]:max-w-[640px]" />
            <span className="h-[4px] w-[96px] bg-brand" />
          </div>
        </Reveal>

        <div className="w-full max-w-[1216px]">
          <div className="relative w-full max-w-[568px] pl-[34px] pt-[4px] lg:hidden">
            <div className="pointer-events-none absolute bottom-[24px] left-[6px] top-[18px] w-[1px] bg-border/[0.24]" />

            <div className="flex flex-col gap-[28px]">
              {howItWorks.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08} duration={0.4} y={15} className="relative w-full">
                  <div className="relative overflow-hidden pr-[54px] pt-[16px]">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[8px] top-[-10px] z-0 select-none font-body text-[30px] font-black leading-[30px] text-border/[0.18]"
                    >
                      {step.number}
                    </span>

                    <div className="relative z-10">
                      <h3 className="font-display text-[22px] font-bold leading-[28px] text-ink">
                        <span className="sr-only">{`Step ${index + 1}: `}</span>
                        {step.title}
                      </h3>
                      <p className="mt-[10px] font-body text-[16px] font-normal leading-[27px] text-muted">{step.body}</p>
                    </div>
                  </div>

                  <span aria-hidden="true" className="absolute left-[-34px] top-[20px] h-[13px] w-[13px] rounded-full bg-brand" />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative hidden w-full lg:block">
            <div className="pointer-events-none absolute bottom-[28px] left-1/2 top-[18px] w-[1px] -translate-x-1/2 bg-border/[0.24]" />

            <div className="flex flex-col gap-[22px]">
              {howItWorks.steps.map((step, index) => {
                const isRightColumn = index % 2 === 0;

                return (
                  <Reveal key={step.title} delay={index * 0.08} duration={0.4} y={15}>
                    <div className="grid min-h-[108px] grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] items-start">
                      <div className={isRightColumn ? 'col-start-3 pl-[32px]' : 'col-start-1 row-start-1 pr-[32px] text-right'}>
                        <div className={['relative overflow-hidden pt-[4px]', isRightColumn ? 'pl-[64px]' : 'pr-[64px]'].join(' ')}>
                          <StepNumber number={step.number} side={isRightColumn ? 'right' : 'left'} />
                          <div className="relative z-10">
                            <h3 className="font-display text-[23px] font-bold leading-[30px] text-ink">
                              <span className="sr-only">{`Step ${index + 1}: `}</span>
                              {step.title}
                            </h3>
                            <p className="mt-[10px] font-body text-[16px] font-normal leading-[27px] text-muted">{step.body}</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-start-2 row-start-1 flex justify-center">
                        <span aria-hidden="true" className="mt-[12px] h-[14px] w-[14px] rounded-full bg-brand" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <Reveal className="w-full" delay={0.08}>
          <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
            <p className="font-display text-[14px] font-bold uppercase leading-[20px] tracking-[1.4px] text-brandText">
              {howItWorks.noteTitle}
            </p>
            <p className="mt-[8px] w-full font-display text-[20px] font-bold leading-[28px] text-ink">
              {howItWorks.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
