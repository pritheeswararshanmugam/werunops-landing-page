import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

export function SolutionSection({ solution }) {
  return (
    <section
      id="solution"
      className="bg-paper shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto box-border w-full max-w-[1280px] px-[32px] py-[128px]">
        <div className="grid items-start gap-[64px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-[40px] min-[1280px]:h-[518.5px] min-[1280px]:grid-cols-[568px_568px] min-[1280px]:gap-[80px]">
          <Reveal className="w-full max-w-[568px] lg:max-w-none min-[1280px]:translate-y-[3.25px]">
            <div className="w-full max-w-[568px] lg:max-w-none">
              <MediaPlaceholder
                variant="photo"
                className="h-[420px] w-full max-w-[512px] lg:h-[440px] lg:max-w-none min-[1280px]:h-[512px] min-[1280px]:max-w-[512px]"
              />
            </div>
        </Reveal>

          <Reveal delay={0.08} className="flex w-full max-w-[568px] flex-col gap-[16px] lg:max-w-none min-[1280px]:h-[499px] min-[1280px]:w-[568px] min-[1280px]:translate-y-[9.75px]">
            <SectionHeading align="left" title={solution.title} description={solution.description} />

            <ul className="flex w-full max-w-[568px] flex-col gap-[24px] px-[0px] pt-[24px] pb-[32px]">
              {solution.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-[16px]">
                  <span className="flex h-[24px] w-[20px] flex-none flex-col pt-[4px]">
                    <span className="block h-[20px] w-[20px] rounded-[999px] bg-brand" />
                  </span>
                  <span className="font-display text-[16px] font-[700] leading-[24px] text-ink">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <div className="box-border flex min-h-[40px] w-full max-w-[568px] items-center border-l-[4px] border-brand py-[8px] pl-[24px]">
              <p className="w-full max-w-[459.56px] font-display text-[16px] font-[800] italic leading-[24px] text-ink">
                {solution.callout}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
