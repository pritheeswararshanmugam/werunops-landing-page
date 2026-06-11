import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function SolutionTick() {
  return (
    <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[10px] border border-brand/20 bg-brand/[0.12] text-brand">
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-[14px] w-[14px]" fill="none">
        <path d="M4.8 10.4 8.15 13.75 15.25 6.65" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ServiceGroup({ group, compact }) {
  if (compact) {
    return (
      <article className="card-base card-light card-compact flex flex-col gap-[10px]">
        <h3 className="font-display text-[17px] font-extrabold leading-[24px] text-ink">{group.title}</h3>
        <ul className="grid gap-[9px]">
          {group.items.map((item) => (
            <li key={item} className="flex items-start gap-[10px]">
              <SolutionTick />
              <span className="pt-[3px] font-body text-[14px] font-semibold leading-[21px] text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <h3 className="font-display text-[17px] font-extrabold leading-[24px] text-ink">{group.title}</h3>
      <ul className="grid gap-x-[16px] gap-y-[10px] sm:grid-cols-2">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-[10px]">
            <SolutionTick />
            <span className="pt-[3px] font-body text-[14px] font-semibold leading-[21px] text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileEstimating({ estimating }) {
  return (
    <details className="mobile-disclosure mobile-disclosure--prominent">
      <summary>
        <span>{estimating.title}</span>
        <span className="mobile-disclosure__icon" aria-hidden="true" />
      </summary>

      <div className="flex flex-col gap-[18px] pt-[18px]">
        {estimating.intro.map((line) => (
          <p key={line} className="font-body text-[16px] font-medium leading-[26px] text-muted">
            {line}
          </p>
        ))}

        <div className="card-base card-light card-compact">
          <h3 className="font-display text-[19px] font-extrabold leading-[27px] text-ink">{estimating.whyTitle}</h3>
          <div className="mt-[12px] flex flex-col gap-[8px]">
            {estimating.whyLines.map((line) => (
              <p key={line} className="font-body text-[14px] font-semibold leading-[22px] text-muted">{line}</p>
            ))}
          </div>
          <h3 className="mt-[18px] font-display text-[21px] font-extrabold leading-[29px] text-brandText">{estimating.fixTitle}</h3>
          <p className="mt-[8px] font-body text-[15px] font-semibold leading-[24px] text-ink">{estimating.footer}</p>
        </div>

        <div className="card-base card-light card-compact">
          <h3 className="font-display text-[21px] font-extrabold leading-[29px] text-ink">{estimating.gainsTitle}</h3>
          <ul className="mt-[18px] flex flex-col gap-[12px]">
            {estimating.gains.map((gain) => (
              <li key={gain} className="flex items-start gap-[10px]">
                <SolutionTick />
                <span className="pt-[3px] font-body text-[14px] font-semibold leading-[22px] text-ink">{gain}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

export function SolutionSection({ solution }) {
  const isCompact = useMediaQuery('(max-width: 1023px)');

  return (
    <section
      id="solution"
      className="paper-texture border-t border-border/20 bg-paper"
    >
      <div className="mx-auto box-border w-full max-w-[1280px] px-[16px] py-[56px] sm:px-[24px] sm:py-[68px] md:px-[32px] lg:py-[120px]">
        <div className="grid items-start gap-[32px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[40px] min-[1280px]:grid-cols-[568px_568px] min-[1280px]:gap-[80px]">
          <Reveal className="order-2 mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:order-none lg:sticky lg:top-[104px] lg:mx-0 lg:max-w-none">
            <div className="w-full max-w-[568px] lg:max-w-none">
              <div className="paper-texture relative flex aspect-square w-full max-w-[568px] flex-col overflow-hidden rounded-[12px] border-[1px] border-border/10 bg-panel text-ink shadow-[0px_20px_38px_-28px_rgba(9,20,38,0.45)] lg:max-w-none">
                <img
                  src={isCompact ? '/images/solution-section-mobile.webp' : '/images/solution-section.jpeg'}
                  alt="Estimating, quoting, scheduling, invoicing, and cash flow operations support"
                  width={isCompact ? 640 : 1254}
                  height={isCompact ? 640 : 1254}
                  loading={isCompact ? 'lazy' : 'eager'}
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-1 mx-auto flex w-full max-w-[568px] flex-col gap-[18px] lg:order-none lg:mx-0 lg:max-w-none lg:gap-[22px] min-[1280px]:w-[568px]">
            <p className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[2.4px] text-brandText">
              {solution.eyebrow}
            </p>
            <SectionHeading align="left" title={solution.title} description={solution.description} />

            <div className="flex flex-col gap-[12px] pt-[4px] lg:gap-[24px] lg:pt-[8px]">
              {solution.serviceGroups.map((group) => (
                <ServiceGroup key={group.title} group={group} compact={isCompact} />
              ))}
            </div>

            <div className="flex flex-col gap-[12px] border-t border-border/20 pt-[22px]">
              <h3 className="font-display text-[17px] font-extrabold leading-[24px] text-ink">{solution.systemsTitle}</h3>
              <ul className="flex flex-wrap gap-[8px]">
                {solution.systems.map((system) => (
                  <li key={system} className="inline-flex items-center gap-[8px] rounded-[999px] border border-border/20 bg-surface px-[12px] py-[8px]">
                    <span className="h-[6px] w-[6px] rounded-full bg-brand" aria-hidden="true" />
                    <span className="font-body text-[13px] font-bold leading-[18px] text-ink">{system}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="box-border flex min-h-[40px] w-full max-w-[568px] items-center border-l-[4px] border-brand py-[8px] pl-[24px]">
              <p className="w-full max-w-[459.56px] font-display text-[16px] font-[800] italic leading-[24px] text-ink">
                {solution.callout}
              </p>
            </div>
          </Reveal>
        </div>

        {isCompact ? (
          <div className="mt-[48px] border-t border-border/25 pt-[40px]">
            <MobileEstimating estimating={solution.estimating} />
          </div>
        ) : (
          <div className="mt-[72px] border-t border-border/25 pt-[64px] lg:mt-[88px] lg:pt-[72px]">
            <Reveal className="mx-auto w-full max-w-[1040px]">
              <h2 className="text-center font-display text-[34px] font-extrabold leading-[40px] tracking-[-0.8px] text-ink lg:text-[44px] lg:leading-[50px]">
                {solution.estimating.title}
              </h2>
            </Reveal>

            <div className="mt-[40px] grid gap-[32px] lg:mt-[48px] lg:grid-cols-2 lg:gap-[64px]">
              <Reveal className="flex flex-col gap-[20px]">
                {solution.estimating.intro.map((line) => (
                  <p key={line} className="font-body text-[18px] font-medium leading-[29px] text-muted">
                    {line}
                  </p>
                ))}

                <div className="card-base card-light mt-[8px] p-[24px]">
                  <h3 className="font-display text-[20px] font-extrabold leading-[28px] text-ink">
                    {solution.estimating.whyTitle}
                  </h3>
                  <div className="mt-[14px] flex flex-col gap-[8px]">
                    {solution.estimating.whyLines.map((line) => (
                      <p key={line} className="font-body text-[15px] font-semibold leading-[23px] text-muted">{line}</p>
                    ))}
                  </div>
                  <h3 className="mt-[20px] font-display text-[22px] font-extrabold leading-[30px] text-brandText">
                    {solution.estimating.fixTitle}
                  </h3>
                  <p className="mt-[10px] font-body text-[16px] font-semibold leading-[25px] text-ink">
                    {solution.estimating.footer}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="card-base card-light p-[24px] sm:p-[32px]">
                <h3 className="font-display text-[24px] font-extrabold leading-[32px] text-ink">
                  {solution.estimating.gainsTitle}
                </h3>
                <ul className="mt-[22px] flex flex-col gap-[14px]">
                  {solution.estimating.gains.map((gain) => (
                    <li key={gain} className="flex items-start gap-[12px]">
                      <SolutionTick />
                      <span className="pt-[3px] font-body text-[15px] font-semibold leading-[23px] text-ink">{gain}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
