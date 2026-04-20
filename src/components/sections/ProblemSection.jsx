import { Reveal } from '../ui/Reveal';

const PROBLEM_CARD_LAYOUTS = [
  { backgroundClass: 'bg-paper', borderClass: 'border-ink/10' },
  { backgroundClass: 'bg-panel', borderClass: 'border-brand/12' },
  { backgroundClass: 'bg-paper', borderClass: 'border-ink/10' },
  { backgroundClass: 'bg-panel', borderClass: 'border-brand/12' },
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
    <section id="problem" className="surface-texture bg-surface py-[128px]">
      <div className="container-shell flex flex-col items-start gap-[48px]">
        <Reveal className="w-full max-w-[1216px]">
          <div className="w-full max-w-[1216px] pb-[32px]">
            <h2 className="w-full font-display text-[42px] font-extrabold leading-[42px] tracking-[-1px] text-ink sm:text-[48px] sm:leading-[48px] sm:tracking-[-1.2px]">
              {problem.title}
            </h2>
          </div>
        </Reveal>

        <Reveal className="w-full max-w-[1216px]" delay={0.05}>
          <div className="grid w-full max-w-[1216px] gap-[20px] md:grid-cols-2 xl:grid-cols-4">
            {problem.cards.map((card, index) => {
              const layout = PROBLEM_CARD_LAYOUTS[index];

              return (
                <article
                  key={card.title}
                  className={[
                    'box-border flex min-h-[220px] w-full flex-col items-start gap-[18px] rounded-[20px] border p-[32px] ring-1 ring-paper/80 shadow-[0px_18px_30px_-24px_rgba(9,20,38,0.35)]',
                    layout.backgroundClass,
                    layout.borderClass,
                  ].join(' ')}
                >
                  <span className="inline-flex h-[64px] w-[64px] items-center justify-center rounded-[18px] border border-brand/15 bg-brand/[0.08] text-brand">
                    <ProblemIcon type={card.icon} className="h-[38px] w-[38px]" />
                  </span>

                  <div className="flex w-full flex-col items-start gap-[10px]">
                    <h3 className="w-full max-w-[222.75px] font-display text-[20px] font-bold leading-[28px] text-ink">
                      {card.title}
                    </h3>

                    <p className="w-full max-w-[222.75px] font-body text-[14px] font-semibold leading-[22px] text-muted">
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
