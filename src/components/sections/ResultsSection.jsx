import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ResultsSection({ results }) {
  return (
    <section id="results" className="bg-ink py-[128px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[80px] px-[32px]">
        <Reveal className="w-full">
          <SectionHeading align="center" title={results.title} className="[&_h2]:max-w-[642.42px] [&_h2]:text-paper" />
        </Reveal>

        <div className="grid justify-center gap-[32px] md:grid-cols-[repeat(2,280px)] xl:grid-cols-[repeat(4,280px)]">
          {results.cards.map((card, index) => (
            <Reveal key={card.stat} delay={index * 0.05} className="w-full max-w-[280px]">
              <article className="flex h-[202px] w-full max-w-[280px] flex-col items-start gap-[16px] rounded-[4px] border border-paper/5 bg-card p-[32px]">
                <div className="flex h-[80px] w-[214px] items-center">
                  <h3 className="font-display text-[36px] font-extrabold leading-[40px] text-brand">{card.stat}</h3>
                </div>

                <div className="flex h-[40px] w-[214px] items-center">
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
