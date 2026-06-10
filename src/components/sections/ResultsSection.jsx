import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function ResultIcon({ index }) {
  const icons = [
    <path key="estimate" d="M5 4.5h14v15H5zM8 8h8M8 12h2M14 12h2M8 16h2M14 16h2" />,
    <path key="time" d="M12 4a8 8 0 1 0 8 8M12 7v5l3 2M15.5 4.5H20V9" />,
    <path key="invoice" d="M7 4.5h7l3 3v12H7zM14 4.5v3h3M9.5 11h5M9.5 14.5h5" />,
    <path key="cash" d="M4 19V5M4 19h16M7 15l3.5-4 3 2 5-6M15.5 7H19v3.5" />,
    <path key="visibility" d="M3.5 12s3-5 8.5-5 8.5 5 8.5 5-3 5-8.5 5-8.5-5-8.5-5ZM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  ];

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[26px] w-[26px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[index] ?? icons[0]}
    </svg>
  );
}

export function ResultsSection({ results, cta }) {
  return (
    <section id="results" className="bg-ink py-[96px] lg:py-[112px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[44px] px-[20px] sm:px-[24px] md:px-[32px] lg:gap-[52px]">
        <Reveal className="w-full">
          <SectionHeading align="center" title={results.title} className="[&_h2]:max-w-[642.42px] [&_h2]:text-paper" />
        </Reveal>

        <div className="grid gap-[14px] md:grid-cols-2 md:gap-[18px] lg:grid-cols-6">
          {results.cards.map((card, index) => (
            <Reveal
              key={card.stat}
              delay={index * 0.08}
              duration={0.4}
              y={15}
              className={[
                'w-full lg:col-span-2',
                index === 3 ? 'lg:col-start-2' : '',
                index === 4 ? 'md:col-span-2 md:mx-auto md:max-w-[calc(50%-9px)] lg:mx-0 lg:max-w-none' : '',
              ].join(' ')}
            >
              <article className="card-base card-dark flex h-full min-h-[210px] w-full flex-col items-start gap-[18px] p-[22px] sm:p-[24px]">
                <div className="flex w-full items-center gap-[14px]">
                  <span className="icon-tile">
                    <ResultIcon index={index} />
                  </span>
                  <h3 className="font-display text-[24px] font-extrabold leading-[30px] text-brand">{card.stat}</h3>
                </div>

                <p className="font-body text-[14px] font-semibold leading-[22px] text-faded">{card.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {cta ? (
          <Reveal className="flex justify-center">
            <a href={cta.href} className="btn-primary w-full sm:w-auto">
              {cta.label}
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
