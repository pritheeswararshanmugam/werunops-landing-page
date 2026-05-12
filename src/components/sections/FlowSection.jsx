import { Reveal } from '../ui/Reveal';

const FLOW_STEP_LAYOUTS = [
  { desktopClassName: 'xl:absolute xl:left-[16px] xl:top-0' },
  { desktopClassName: 'xl:absolute xl:left-[192px] xl:top-0' },
  { desktopClassName: 'xl:absolute xl:left-[368px] xl:top-0' },
  { desktopClassName: 'xl:absolute xl:left-[544px] xl:top-0' },
  { desktopClassName: 'xl:absolute xl:left-[720px] xl:top-0' },
  { desktopClassName: 'xl:absolute xl:left-[896px] xl:top-0' },
  { desktopClassName: 'xl:absolute xl:left-[1072px] xl:top-0' },
];

function FlowIcon({ step }) {
  const common = 'h-[26px] w-[26px]';

  if (step === 'Enquiry') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.5" y="6.5" width="15" height="11" rx="1.75" />
        <path d="m6.5 8.5 5.5 4.25 5.5-4.25" />
        <path d="M8.5 17.5h7" />
      </svg>
    );
  }

  if (step === 'Quotation' || step === 'Quote Sent') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4.75h6.75L18 8v11.25H8z" />
        <path d="M14.75 4.75V8H18" />
        <path d="M10 11h6" />
        <path d="M10 14.5h6" />
        <path d="M10 18h4.5" />
      </svg>
    );
  }

  if (step === 'Onboarding' || step === 'Job Booked') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10.5" cy="9" r="2.75" />
        <path d="M5.75 18c.85-2.8 2.58-4.2 5.18-4.2 2.55 0 4.21 1.4 4.97 4.2" />
        <path d="M18 8v6" />
        <path d="M15 11h6" />
      </svg>
    );
  }

  if (step === 'Scheduling') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="6.5" width="14" height="12.5" rx="1.6" />
        <path d="M8 4.5v4" />
        <path d="M16 4.5v4" />
        <path d="M5 10h14" />
        <path d="M8.5 12.75h.01" />
        <path d="M12 12.75h.01" />
        <path d="M15.5 12.75h.01" />
        <path d="M8.5 16h.01" />
        <path d="M12 16h.01" />
        <path d="M15.5 16h.01" />
      </svg>
    );
  }

  if (step === 'Invoicing') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4.75h6.5L18 8v11.25H8z" />
        <path d="M14.5 4.75V8H18" />
        <path d="M12 10.5v6.5" />
        <path d="M14.35 11.75c-.3-.85-1.03-1.25-2.2-1.25-1.11 0-1.9.48-1.9 1.35 0 .94.82 1.26 2 1.55 1.24.31 2.35.63 2.35 1.86 0 1.05-.88 1.69-2.25 1.69-1.17 0-2.04-.43-2.42-1.32" />
      </svg>
    );
  }

  if (step === 'Follow-ups') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.5" y="6.5" width="11.5" height="8.75" rx="1.5" />
        <path d="m5.9 8.4 4.35 3.35 4.35-3.35" />
        <path d="M18 8.25h2.25" />
        <path d="M18 14h2.25" />
        <path d="M17.75 11.1h3.25" />
        <path d="m19.6 9.25 1.85 1.85-1.85 1.85" />
      </svg>
    );
  }

  if (step === 'Payment') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.25" y="6.25" width="15.5" height="11.5" rx="2" />
        <path d="M4.75 10h14.5" />
        <path d="M8.5 14h2.75" />
        <path d="M14.15 13.2c-.22-.76-.84-1.12-1.89-1.12-.97 0-1.62.43-1.62 1.1 0 .74.65 1 1.74 1.25 1.09.25 2.05.54 2.05 1.58 0 .92-.76 1.47-1.94 1.47-.98 0-1.73-.37-2.02-1.08" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5v9" />
      <path d="M14.9 9.65c-.33-1.15-1.22-1.71-2.74-1.71-1.39 0-2.44.63-2.44 1.84 0 1.21 1.05 1.67 2.61 2.02 1.53.35 2.91.77 2.91 2.34 0 1.39-1.13 2.26-2.9 2.26-1.55 0-2.66-.61-3.08-1.89" />
    </svg>
  );
}

export function FlowSection({ flow }) {
  return (
    <section id="system" className="surface-texture bg-surface py-[84px] lg:py-[92px] xl:py-[112px]">
      <div className="container-shell">
        <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center">
          <Reveal className="w-full">
            <div className="mx-auto flex max-w-[920px] flex-col items-center gap-[14px] text-center xl:max-w-[1040px] lg:gap-[16px]">
              <h2 className="font-display text-[34px] font-extrabold leading-[38px] tracking-[-0.9px] text-ink lg:text-[40px] lg:leading-[44px] xl:text-[52px] xl:leading-[56px] xl:tracking-[-0.05em]">
                {flow.title}
              </h2>
              <p className="max-w-[720px] text-[16px] font-medium leading-[24px] text-muted lg:text-[16px] lg:leading-[26px] xl:max-w-[780px] xl:text-[17px] xl:leading-[28px]">
                {flow.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="w-full" delay={0.04}>
            <div className="mt-[32px] w-full lg:mt-[44px] xl:mt-[52px]">
              <div className="relative grid grid-cols-2 gap-x-[14px] gap-y-[20px] lg:grid-cols-[repeat(7,minmax(0,1fr))] lg:gap-x-[14px] lg:gap-y-0 xl:block xl:h-[104px]">
                <div className="absolute left-[calc(7.143%+8px)] right-[calc(7.143%+8px)] top-[28px] hidden h-px bg-ink/16 lg:block xl:left-[80px] xl:right-[80px] xl:top-[28px]" />

                {flow.steps.map((step, index) => {
                  const isLast = index === flow.steps.length - 1;
                  const layout = FLOW_STEP_LAYOUTS[index] ?? { desktopClassName: '' };

                  return (
                    <Reveal
                      key={step}
                      className={['w-full max-w-[160px] justify-self-center xl:w-[128px] xl:max-w-none', isLast ? 'col-span-2 lg:col-span-1' : '', layout.desktopClassName].join(' ')}
                      delay={index * 0.1}
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

                        <h3 className={['min-h-[18px] font-body text-[13px] font-black uppercase leading-[18px] tracking-[0.08em] text-ink lg:text-[13px] xl:text-[14px]', isLast ? 'text-ink' : 'text-ink'].join(' ')}>
                          {step}
                        </h3>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <p className="mt-[24px] text-center font-display text-[20px] font-extrabold leading-[28px] tracking-[-0.04em] text-ink lg:mt-[30px] xl:mt-[36px] xl:text-[24px] xl:leading-[32px]">
                {flow.footer}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
