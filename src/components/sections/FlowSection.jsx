import { Reveal } from '../ui/Reveal';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function FlowIcon({ step }) {
  const common = 'h-[26px] w-[26px]';

  if (step === 'Lead') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.5" y="6.5" width="15" height="11" rx="1.75" />
        <path d="m6.5 8.5 5.5 4.25 5.5-4.25" />
      </svg>
    );
  }

  if (step === 'Quote') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4.75h6.75L18 8v11.25H8z" />
        <path d="M14.75 4.75V8H18" />
        <path d="M10 11h6M10 14.5h6M10 18h4.5" />
      </svg>
    );
  }

  if (step === 'Schedule') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="6.5" width="14" height="12.5" rx="1.6" />
        <path d="M8 4.5v4M16 4.5v4M5 10h14" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    );
  }

  if (step === 'Complete') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </svg>
    );
  }

  if (step === 'Invoice') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4.75h6.5L18 8v11.25H8z" />
        <path d="M14.5 4.75V8H18M12 10.5v6.5" />
        <path d="M14.35 11.75c-.3-.85-1.03-1.25-2.2-1.25-1.11 0-1.9.48-1.9 1.35 0 .94.82 1.26 2 1.55 1.24.31 2.35.63 2.35 1.86 0 1.05-.88 1.69-2.25 1.69-1.17 0-2.04-.43-2.42-1.32" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4.25" y="6.25" width="15.5" height="11.5" rx="2" />
      <path d="M4.75 10h14.5M8.5 14h2.75" />
    </svg>
  );
}

function HelpIcon({ index }) {
  const paths = [
    <path key="enquiry" d="M5 7h14v10H5zM6.5 8.5 12 12.7l5.5-4.2" />,
    <path key="quote" d="M7 4.5h7l3 3v12H7zM14 4.5v3h3M9.5 11h5M9.5 14.5h5" />,
    <path key="crew" d="M5 7h14v12H5zM8 4.5v5M16 4.5v5M5 10.5h14M9 15l1.5 1.5L15 12" />,
    <path key="materials" d="m4.5 8 7.5-4 7.5 4-7.5 4-7.5-4ZM4.5 12l7.5 4 7.5-4M4.5 16l7.5 4 7.5-4" />,
    <path key="invoice" d="M7 4.5h7l3 3v12H7zM14 4.5v3h3M12 10v6M14 11.2c-.35-.8-1-1.2-2-1.2-1.1 0-1.8.45-1.8 1.25 0 .9.8 1.2 1.9 1.45 1.2.3 2.2.6 2.2 1.75 0 .95-.8 1.55-2.15 1.55-1.05 0-1.85-.4-2.2-1.2" />,
    <path key="payment" d="M5 7h11v9H5zM6.5 8.5l5 3.8 4.5-3.4M17 10h2M17 14h2M18.5 12l1.5 1.5-1.5 1.5" />,
  ];

  return (
    <span className="icon-tile icon-tile--compact">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[23px] w-[23px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[index] ?? paths[0]}
      </svg>
    </span>
  );
}

export function FlowSection({ flow }) {
  const isCompact = useMediaQuery('(max-width: 1023px)');
  const visibleHelpItems = isCompact ? flow.helpItems.slice(0, 3) : flow.helpItems;
  const additionalHelpItems = flow.helpItems.slice(3);

  return (
    <section id="system" className="surface-texture border-t border-border/20 bg-surface py-[56px] sm:py-[68px] lg:py-[104px] xl:py-[112px]">
      <div className="container-shell">
        <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center">
          <Reveal className="w-full">
            <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-[14px] text-center lg:gap-[16px]">
              <p className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[2.4px] text-brandText">
                {flow.eyebrow}
              </p>
              <h2 className="font-display text-[34px] font-extrabold leading-[38px] tracking-[-0.9px] text-ink lg:text-[40px] lg:leading-[44px] xl:text-[52px] xl:leading-[56px] xl:tracking-[-0.05em]">
                {flow.title}
              </h2>
              <p className="max-w-[780px] text-[16px] font-medium leading-[24px] text-muted lg:leading-[26px] xl:text-[17px] xl:leading-[28px]">
                {flow.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="w-full" delay={0.04}>
            <div className="mt-[26px] w-full lg:mt-[44px] xl:mt-[52px]">
              <div className="relative grid grid-cols-2 gap-x-[14px] gap-y-[20px] lg:grid-cols-6 lg:gap-y-0">
                <div className="absolute left-[8.333%] right-[8.333%] top-[31px] hidden h-[2px] bg-border/55 lg:block" />

                {flow.steps.map((step, index) => {
                  const isLast = index === flow.steps.length - 1;

                  return (
                    <Reveal
                      key={step}
                      className={['w-full max-w-[160px] justify-self-center xl:w-[128px] xl:max-w-none', isLast ? 'col-span-2 lg:col-span-1' : ''].join(' ')}
                      delay={index * 0.08}
                      duration={0.4}
                      y={15}
                    >
                      <div className="flex w-full flex-col items-center gap-[12px] text-center lg:gap-[13px]">
                        <div
                          className={[
                            'relative z-[1] grid h-[64px] w-[64px] place-items-center rounded-[999px] border',
                            isLast
                              ? 'border-brand bg-brand text-paper shadow-orange'
                              : 'border-[rgb(var(--color-ink)/0.12)] bg-[rgb(var(--color-paper)/0.96)] text-ink shadow-[0px_16px_26px_-18px_rgba(9,20,38,0.38)]',
                          ].join(' ')}
                        >
                          <FlowIcon step={step} />
                        </div>

                        <h3 className="min-h-[18px] font-body text-[13px] font-black uppercase leading-[18px] tracking-[0.08em] text-ink xl:text-[14px]">
                          {step}
                        </h3>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <p className="mt-[24px] text-center font-display text-[18px] font-extrabold leading-[26px] tracking-[-0.04em] text-ink lg:mt-[34px] lg:text-[20px] lg:leading-[28px] xl:text-[24px] xl:leading-[32px]">
                {flow.bridge}
              </p>
            </div>
          </Reveal>

          <Reveal className="w-full" delay={0.08}>
            <div className="mt-[36px] w-full border-t border-border/20 pt-[32px] lg:mt-[48px] lg:pt-[40px]">
              <h3 className="text-center font-display text-[22px] font-extrabold leading-[30px] text-ink lg:text-[24px] lg:leading-[32px]">
                {flow.helpTitle}
              </h3>

              <ul className="mx-auto mt-[24px] grid w-full max-w-[1040px] gap-[14px] md:grid-cols-2 lg:grid-cols-3">
                {visibleHelpItems.map((item, index) => (
                  <li key={item} className="card-base card-light card-compact flex min-h-[76px] items-center gap-[12px]">
                    <HelpIcon index={index} />
                    <span className="font-body text-[14px] font-semibold leading-[21px] text-ink">{item}</span>
                  </li>
                ))}
              </ul>

              {isCompact && additionalHelpItems.length ? (
                <details className="mobile-disclosure mx-auto mt-[12px] max-w-[1040px]">
                  <summary>
                    <span>See more ways we help</span>
                    <span className="mobile-disclosure__icon" aria-hidden="true" />
                  </summary>
                  <ul className="grid gap-[12px] pt-[12px] md:grid-cols-2">
                    {additionalHelpItems.map((item, index) => (
                      <li key={item} className="card-base card-light card-compact flex min-h-[76px] items-center gap-[12px]">
                        <HelpIcon index={index + 3} />
                        <span className="font-body text-[14px] font-semibold leading-[21px] text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : null}

              <div className="mx-auto mt-[26px] max-w-[880px] text-center lg:mt-[32px]">
                <p className="font-display text-[14px] font-bold uppercase leading-[20px] tracking-[1.4px] text-brandText">
                  {flow.resultTitle}
                </p>
                <p className="mt-[10px] font-display text-[22px] font-extrabold leading-[31px] text-ink">
                  {flow.footer}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
