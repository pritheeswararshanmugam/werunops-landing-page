import { Reveal } from '../ui/Reveal';

export function ObjectionSection({ objection }) {
  const supportPoints = objection.supportPoints ?? [];

  return (
    <Reveal className="w-full max-w-[520px]">
      <div className="flex w-full max-w-[520px] flex-col items-start gap-[20px] text-left lg:gap-[24px]">
        <h2 className="w-full max-w-[520px] font-display text-[30px] font-extrabold leading-[36px] text-paper">
          {objection.title}
        </h2>

        <p className="w-full max-w-[520px] font-body text-[20px] font-normal leading-[32px] text-faded">
          {objection.body}
        </p>

        {supportPoints.length ? (
          <div className="flex w-full max-w-[520px] flex-col items-start gap-[14px] border-t border-paper/10 pt-[18px]">
            <h3 className="font-display text-[14px] font-bold uppercase leading-[18px] tracking-[1.4px] text-brand">
              {objection.supportTitle}
            </h3>

            <div className="flex w-full flex-col gap-[10px]">
              {supportPoints.map((point) => (
                <div key={point} className="flex w-full items-start gap-[12px] rounded-[12px] border border-paper/10 bg-paper/[0.03] px-[14px] py-[12px]">
                  <span className="mt-[7px] h-[6px] w-[6px] flex-none rounded-full bg-brand" aria-hidden="true" />
                  <p className="font-body text-[14px] font-semibold leading-[20px] text-paper">{point}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
