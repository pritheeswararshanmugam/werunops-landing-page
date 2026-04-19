import { Reveal } from '../ui/Reveal';

export function ObjectionSection({ objection }) {
  return (
    <Reveal className="w-full max-w-[568px]">
      <div className="flex w-full max-w-[568px] flex-col items-start gap-[32px] text-left">
        <h2 className="w-full max-w-[568px] font-display text-[30px] font-extrabold leading-[36px] text-paper">
          {objection.title}
        </h2>

        <p className="w-full max-w-[568px] font-body text-[20px] font-normal leading-[32px] text-faded">
          {objection.body}
        </p>
      </div>
    </Reveal>
  );
}
