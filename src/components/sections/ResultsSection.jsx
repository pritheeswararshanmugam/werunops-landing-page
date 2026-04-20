import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ResultsSection({ results }) {
  return (
    <section id="results" className="desktop-snap-section bg-ink py-[128px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[72px] px-[32px]">
        <Reveal className="w-full">
          <SectionHeading align="center" title={results.title} className="[&_h2]:max-w-[642.42px] [&_h2]:text-paper" />
        </Reveal>

        <div className="grid gap-[20px] md:grid-cols-2 xl:grid-cols-4">
          {results.cards.map((card, index) => (
            <Reveal key={card.stat} delay={index * 0.05} className="w-full">
              <article className="flex min-h-[208px] w-full flex-col items-start gap-[16px] rounded-[20px] border border-paper/10 bg-card/[0.96] p-[28px] shadow-[0px_18px_30px_-24px_rgba(0,0,0,0.7)]">
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
