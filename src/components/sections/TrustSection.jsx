import { Reveal } from '../ui/Reveal';

function AnswerIcon({ index }) {
  if (index === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[28px] w-[28px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.5v4.7l3 1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[28px] w-[28px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s6-3.8 6-9.2V5.9L12 3.5 6 5.9v4.9C6 16.2 12 20 12 20Z" />
      <path d="m9.7 12 1.6 1.6 3.2-3.4" />
    </svg>
  );
}

export function TrustSection({ trust }) {
  return (
    <Reveal delay={0.08} className="w-full max-w-[568px] lg:pt-[60px]">
      <div className="flex w-full max-w-[568px] flex-col items-start gap-[14px] text-left">
        {trust.items.map((item, index) => (
          <article key={item.question} className="card-base card-dark flex min-h-[116px] w-full max-w-[568px] items-start gap-[16px] px-[18px] py-[18px] lg:px-[20px]">
            <span className="inline-flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[14px] bg-brand/[0.14] text-brand">
              <AnswerIcon index={index} />
            </span>

            <div className="flex max-w-[420px] flex-col items-start gap-[6px]">
              <h3 className="w-full font-body text-[16px] font-bold leading-[24px] text-paper">{item.question}</h3>
              <p className="w-full font-body text-[14px] font-normal leading-[21px] text-faded">{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
