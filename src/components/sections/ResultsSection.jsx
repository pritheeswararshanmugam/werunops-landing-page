import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ResultsSection({ results }) {
  return (
    <section id="results" className="bg-ink py-[120px] lg:py-[124px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[56px] lg:gap-[64px] px-[32px]">
        <Reveal className="w-full">
          <SectionHeading align="center" title={results.title} className="[&_h2]:max-w-[642.42px] [&_h2]:text-paper" />
        </Reveal>

        <div className="grid gap-[16px] md:grid-cols-2 md:gap-[18px] xl:grid-cols-4">
          {results.cards.map((card, index) => (
            <Reveal key={card.stat} delay={index * 0.1} duration={0.4} y={15} className="w-full">
              <article className="card-base card-dark flex min-h-[208px] w-full flex-col items-start gap-[16px] p-[24px] xl:p-[28px]">
                <div className="flex min-h-[80px] w-full items-center">
                  <h3 className="font-display text-[36px] font-extrabold leading-[40px] text-brand">{card.stat}</h3>
                </div>

                <div className="flex min-h-[40px] w-full items-center">
                  <p className="font-body text-[14px] font-semibold leading-[20px] text-faded">{card.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
