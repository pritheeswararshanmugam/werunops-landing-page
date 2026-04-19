import { Reveal } from '../ui/Reveal';

export function TrustSection({ trust }) {
  const iconSizes = ['w-[25px] h-[22.5px]', 'w-[20px] h-[25px]', 'w-[20px] h-[25px]'];
  const textWidths = ['max-w-[330.33px]', 'max-w-[337.92px]', 'max-w-[353.5px]'];

  return (
    <Reveal delay={0.08} className="w-full max-w-[568px]">
      <div className="flex w-full max-w-[568px] flex-col items-start gap-[32px] text-left">
        <h2 className="w-full max-w-[568px] font-display text-[30px] font-extrabold leading-[36px] text-paper">{trust.title}</h2>

        <div className="flex w-full max-w-[568px] flex-col items-start gap-[24px]">
          {trust.items.map((item, index) => (
            <article key={item.title} className="flex min-h-[64px] w-full max-w-[568px] items-center gap-[24px]">
              <div className="flex h-[64px] w-[64px] flex-none items-center justify-center rounded-[4px] bg-card">
                <div aria-hidden="true" className={[iconSizes[index] ?? 'w-[20px] h-[25px]', 'bg-brand'].join(' ')} />
              </div>

              <div className={['flex flex-col items-start', textWidths[index] ?? 'max-w-[353.5px]'].join(' ')}>
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
