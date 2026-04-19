import { Reveal } from '../ui/Reveal';

const PROBLEM_CARD_LAYOUTS = [
  {
    backgroundClass: 'bg-paper',
    desktopClassName: 'h-[200.15px] lg:absolute lg:left-[1px] lg:top-[1px] lg:w-[303.75px]',
    iconClassName: 'h-[32.4px] w-[29.7px]',
  },
  {
    backgroundClass: 'bg-panel',
    desktopClassName: 'h-[197.9px] lg:absolute lg:left-[304.75px] lg:top-[1px] lg:w-[303.75px]',
    iconClassName: 'h-[30.15px] w-[29.74px]',
  },
  {
    backgroundClass: 'bg-paper',
    desktopClassName: 'h-[191.75px] lg:absolute lg:left-[608.5px] lg:top-[1px] lg:w-[303.75px]',
    iconClassName: 'h-[24px] w-[33px]',
  },
  {
    backgroundClass: 'bg-panel',
    desktopClassName: 'h-[197.82px] lg:absolute lg:left-[912.25px] lg:top-[1px] lg:w-[303.75px]',
    iconClassName: 'h-[30.08px] w-[30px]',
  },
];

function QuotesLateIcon({ className = 'h-[32px] w-[32px]' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="7" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M9.5 3h5" />
      <path d="m4.5 5.5 2 2" />
      <path d="m19.5 5.5-2 2" />
      <path d="M5 20 19 6" />
    </svg>
  );
}

function JobsIcon({ className = 'h-[32px] w-[32px]' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 7 12 12" />
      <path d="m11 5 8 8" />
      <path d="m5 13 6 6" />
      <path d="m15 4 5 5" />
      <path d="m4 15 5 5" />
      <path d="m3.5 10.5 3-3" />
      <path d="m17.5 20.5 3-3" />
    </svg>
  );
}

function InvoiceIcon({ className = 'h-[32px] w-[32px]' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="7" width="17" height="10" rx="1.8" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M6.5 10.3h.01" />
      <path d="M17.5 13.7h.01" />
    </svg>
  );
}

function FollowUpsIcon({ className = 'h-[32px] w-[32px]' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 17.5h8" />
      <path d="M10 20c.5.67 1.17 1 2 1s1.5-.33 2-1" />
      <path d="M6 17.5V11a6 6 0 1 1 12 0v6.5" />
      <path d="M4 10.5v3" />
      <path d="M20 10.5v3" />
    </svg>
  );
}

function ProblemIcon({ type, className }) {
  if (type === 'quotes') {
    return <QuotesLateIcon className={className} />;
  }

  if (type === 'jobs') {
    return <JobsIcon className={className} />;
  }

  if (type === 'invoices') {
    return <InvoiceIcon className={className} />;
  }

  return <FollowUpsIcon className={className} />;
}

export function ProblemSection({ problem }) {
  return (
    <section id="problem" className="bg-surface py-[128px]">
      <div className="container-shell flex flex-col items-start gap-[48px]">
        <Reveal className="w-full max-w-[1216px]">
          <div className="w-full max-w-[1216px] pb-[32px]">
            <h2 className="w-full font-display text-[42px] font-extrabold leading-[42px] tracking-[-1px] text-ink sm:text-[48px] sm:leading-[48px] sm:tracking-[-1.2px]">
              {problem.title}
            </h2>
          </div>
        </Reveal>

        <Reveal className="w-full max-w-[1216px]" delay={0.05}>
          <div className="relative w-full max-w-[1216px] overflow-hidden border-l-[1px] border-t-[1px] border-border/20 lg:h-[208.75px]">
            {problem.cards.map((card, index) => {
              const layout = PROBLEM_CARD_LAYOUTS[index];

              return (
                <article
                  key={card.title}
                  className={[
                    'box-border flex w-full flex-col items-start gap-[11px] border-b-[1px] border-r-[1px] border-border/20 p-[40px]',
                    layout.backgroundClass,
                    layout.desktopClassName,
                  ].join(' ')}
                >
                  <span className="inline-flex items-center justify-start text-brand">
                    <ProblemIcon type={card.icon} className={layout.iconClassName} />
                  </span>

                  <div className="flex w-full flex-col items-start pt-[13px]">
                    <h3 className="w-full max-w-[222.75px] font-display text-[20px] font-bold leading-[28px] text-ink">
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex w-full flex-col items-start pb-[0.75px]">
                    <p className="w-full max-w-[222.75px] font-body text-[14px] font-semibold leading-[23px] text-muted">
                      {`→ ${card.detail}`}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="w-full max-w-[1216px]" delay={0.08}>
          <p className="w-full font-display text-[24px] font-extrabold uppercase leading-[32px] tracking-[-0.6px] text-brand">
            {problem.kicker}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
