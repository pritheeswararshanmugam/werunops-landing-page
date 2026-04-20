import { Reveal } from '../ui/Reveal';

function TrustIcon({ index }) {
  const common = 'h-[28px] w-[28px]';

  if (index === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20s6-3.8 6-9.2V5.9L12 3.5 6 5.9v4.9C6 16.2 12 20 12 20Z" />
        <path d="m9.7 12 1.6 1.6 3.2-3.4" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 10.5V8.2a4.5 4.5 0 1 1 9 0v2.3" />
        <rect x="5.5" y="10.5" width="13" height="9" rx="2" />
        <path d="M12 14v2.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12a7.5 7.5 0 1 1 2.2 5.3" />
      <path d="M4.5 18v-4.2h4.2" />
      <path d="M9 12h3l1.8-3 1.7 6 1.1-3H19.5" />
    </svg>
  );
}

export function TrustSection({ trust }) {
  return (
    <Reveal delay={0.08} className="w-full max-w-[568px]">
      <div className="flex w-full max-w-[568px] flex-col items-start gap-[32px] text-left">
        <h2 className="w-full max-w-[568px] font-display text-[30px] font-extrabold leading-[36px] text-paper">{trust.title}</h2>

        <div className="flex w-full max-w-[568px] flex-col items-start gap-[24px]">
          {trust.items.map((item, index) => (
            <article key={item.title} className="flex min-h-[104px] w-full max-w-[568px] items-center gap-[20px] rounded-[20px] border border-paper/10 bg-card/[0.78] px-[20px] py-[18px] shadow-[0px_20px_32px_-28px_rgba(0,0,0,0.8)]">
              <div className="flex h-[64px] w-[64px] flex-none items-center justify-center rounded-[16px] border border-paper/10 bg-paper/[0.04] text-brand">
                <TrustIcon index={index} />
              </div>

              <div className="flex max-w-[360px] flex-col items-start gap-[4px]">
                <h3 className="w-full font-body text-[16px] font-bold leading-[24px] text-paper">{item.title}</h3>
                <p className="w-full font-body text-[14px] font-normal leading-[20px] text-faded">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
