import { Reveal } from '../ui/Reveal';

function QuestionIcon() {
  return (
    <span className="inline-flex h-[44px] w-[44px] flex-none items-center justify-center rounded-[14px] bg-brand/[0.14] text-brand">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[24px] w-[24px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.3 9a3 3 0 1 1 4.6 2.5c-1.25.8-1.9 1.45-1.9 2.5" />
        <path d="M12 18h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    </span>
  );
}

export function ObjectionSection({ objection }) {
  return (
    <Reveal className="w-full max-w-[520px]">
      <div className="flex w-full max-w-[520px] flex-col items-start gap-[24px] text-left">
        <h2 className="w-full max-w-[520px] font-display text-[30px] font-extrabold leading-[36px] text-paper">
          {objection.title}
        </h2>

        <div className="flex w-full flex-col gap-[14px]">
          {objection.items.map((item) => (
            <article key={item.question} className="card-base card-dark flex min-h-[116px] w-full items-start gap-[16px] px-[18px] py-[18px]">
              <QuestionIcon />
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-body text-[16px] font-bold leading-[24px] text-paper">{item.question}</h3>
                <p className="font-body text-[14px] font-normal leading-[21px] text-faded">{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
