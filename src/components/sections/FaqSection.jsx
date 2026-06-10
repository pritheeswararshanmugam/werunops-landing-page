import { Reveal } from '../ui/Reveal';

function FaqIcon({ index }) {
  const common = 'h-[26px] w-[26px]';

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
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="12" height="9" rx="2" />
        <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10M12 14v2" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.5v4.7l3 1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4.5h10v15H7z" />
      <path d="M9.5 8h5M9.5 12h5M9.5 16h3" />
    </svg>
  );
}

export function FaqSection({ objection, trust }) {
  const items = [...objection.items, ...trust.items];

  return (
    <section id="faq" className="bg-ink px-[20px] py-[88px] text-paper sm:px-[24px] md:px-[32px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1216px]">
        <Reveal>
          <h2 className="text-center font-display text-[32px] font-extrabold leading-[38px] tracking-[-0.8px] text-paper sm:text-[38px] sm:leading-[44px]">
            {objection.title}
          </h2>
        </Reveal>

        <div className="mt-[40px] grid gap-[14px] md:grid-cols-2 lg:gap-[18px]">
          {items.map((item, index) => (
            <Reveal
              key={item.question}
              delay={index * 0.06}
              className={index === items.length - 1 ? 'md:col-span-2 md:mx-auto md:w-full md:max-w-[568px]' : 'w-full'}
            >
              <article className="card-base card-dark flex min-h-[124px] h-full items-start gap-[16px] px-[18px] py-[20px] sm:px-[22px]">
                <span className="icon-tile flex-none">
                  <FaqIcon index={index} />
                </span>

                <div className="flex min-w-0 flex-col gap-[6px]">
                  <h3 className="font-body text-[16px] font-bold leading-[24px] text-paper">{item.question}</h3>
                  <p className="font-body text-[14px] font-normal leading-[21px] text-faded">{item.answer}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
