import { Reveal } from '../ui/Reveal';

function QuotesLateIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="7" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M9.5 3h5" />
      <path d="M5 20 19 6" />
    </svg>
  );
}

function JobsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4.5h10v15H7z" />
      <path d="M9.5 8h5" />
      <path d="M9.5 12h5" />
      <path d="m9.5 16 1.4 1.4 3.6-3.6" />
    </svg>
  );
}

function MaterialsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 8 8-4 8 4-8 4-8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  );
}

function InvoiceIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="7" width="17" height="10" rx="1.8" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M6.5 10.3h.01" />
      <path d="M17.5 13.7h.01" />
    </svg>
  );
}

function FollowUpsIcon({ className }) {
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

function OwnerIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.8 19c.7-3.2 2.4-4.8 5.2-4.8 1.7 0 3 .6 3.9 1.7" />
      <circle cx="17" cy="16" r="3.5" />
      <path d="M17 14.3v2.1l1.4.9" />
    </svg>
  );
}

function ProblemIcon({ type, className }) {
  const icons = {
    quotes: QuotesLateIcon,
    jobs: JobsIcon,
    materials: MaterialsIcon,
    invoices: InvoiceIcon,
    followups: FollowUpsIcon,
    owner: OwnerIcon,
  };
  const Icon = icons[type] ?? FollowUpsIcon;
  return <Icon className={className} />;
}

export function ProblemSection({ problem }) {
  return (
    <section id="problem" className="surface-texture border-t border-border/20 bg-surface py-[88px] lg:py-[112px]">
      <div className="container-shell flex flex-col items-start gap-[36px] lg:gap-[40px]">
        <Reveal className="w-full max-w-[1216px]">
          <div className="flex w-full max-w-[1216px] flex-col gap-[14px] pb-[18px]">
            <p className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[2.4px] text-brandText">
              {problem.eyebrow}
            </p>
            <h2 className="w-full font-display text-[42px] font-extrabold leading-[42px] tracking-[-1px] text-ink sm:text-[48px] sm:leading-[48px] sm:tracking-[-1.2px]">
              {problem.title}
            </h2>
            <p className="font-body text-[20px] font-semibold leading-[30px] text-muted">{problem.description}</p>
            <p className="pt-[8px] font-display text-[16px] font-bold uppercase leading-[22px] tracking-[1.4px] text-ink">
              {problem.listTitle}
            </p>
          </div>
        </Reveal>

        <div className="grid w-full max-w-[1216px] items-stretch gap-[14px] md:grid-cols-2 md:gap-[18px] xl:grid-cols-3">
          {problem.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} duration={0.4} y={15} className="h-full w-full">
              <article className="card-base card-light box-border flex h-full min-h-[138px] w-full flex-row items-center gap-[18px] p-[20px] sm:min-h-[180px] sm:flex-col sm:items-start sm:p-[24px] xl:min-h-[188px] xl:p-[28px]">
                <span className="icon-tile icon-tile--large">
                  <ProblemIcon type={card.icon} className="h-[38px] w-[38px]" />
                </span>

                <h3 className="w-full font-display text-[19px] font-bold leading-[27px] text-ink sm:text-[20px] sm:leading-[28px]">
                  {card.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="w-full max-w-[1216px]" delay={0.08}>
          <div className="flex flex-col items-start gap-[24px]">
            <p className="w-full font-display text-[24px] font-extrabold leading-[32px] tracking-[-0.6px] text-brand">
              {problem.kicker}
            </p>
            <a href={problem.cta.href} className="btn-primary">
              {problem.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
