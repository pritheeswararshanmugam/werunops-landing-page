import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function TierCheck({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 13 10" className={[className, 'shrink-0 text-brand'].join(' ')} fill="none">
      <path d="M1 5.4L4.15 8.3L12 1.45" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingSection({ pricing }) {
  const trustSignals = ['Australian-based support', 'Secure process handovers', 'Weekly visibility across every tier'];

  return (
    <section id="pricing" className="desktop-snap-section paper-texture bg-paper py-[80px] lg:py-[72px] xl:py-[92px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px]">
        <Reveal className="w-full">
          <SectionHeading
            align="center"
            title={pricing.title}
            description={pricing.description}
            className="gap-[12px] xl:gap-[6px] [&_h2]:max-w-[640px] [&_h2]:text-[34px] [&_h2]:leading-[38px] lg:[&_h2]:text-[34px] lg:[&_h2]:leading-[38px] [&_p]:max-w-[470px] [&_p]:text-[16px] [&_p]:leading-[24px] xl:[&_p]:text-[17px] xl:[&_p]:leading-[26px]"
          />
        </Reveal>

        <div className="mt-[30px] grid w-full gap-[18px] lg:mt-[24px] lg:grid-cols-[repeat(3,minmax(0,1fr))] lg:items-stretch xl:mt-[32px] xl:grid-cols-[384px_384px_384px] xl:justify-center xl:gap-x-[24px] xl:gap-y-0">
          {pricing.tiers.map((tier, index) => {
            const featured = Boolean(tier.featured);
            const cardMinHeight = 'lg:min-h-[398px] xl:min-h-[428px]';
            const cardWidth = 'w-full';
            const introPadding = featured ? 'pb-[12px] xl:pb-[16px]' : 'pb-[12px] xl:pb-[16px]';
            const pricePadding = featured ? 'pb-[14px] xl:pb-[18px]' : 'pb-[14px] xl:pb-[18px]';
            const listPadding = featured ? 'pb-[16px] xl:pb-[18px]' : 'pb-[16px] xl:pb-[18px]';

            return (
              <Reveal key={tier.name} delay={index * 0.06} className="h-full w-full overflow-visible">
                <article
                  className={[
                    'relative flex h-full w-full flex-col overflow-visible rounded-[4px] p-[22px] xl:p-[24px]',
                    cardMinHeight,
                    featured
                      ? 'border-[2px] border-brand bg-ink text-paper ring-1 ring-brand/10'
                      : 'border border-border/10 bg-panel text-ink ring-1 ring-border/10',
                  ].join(' ')}
                >
                  {featured ? (
                    <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-[12px] items-center rounded-[12px] bg-brand px-[14px] py-[4px] font-body text-[10px] font-black uppercase leading-[15px] tracking-[1px] text-paper xl:-translate-y-[14px] xl:px-[16px]">
                      {tier.badge}
                    </span>
                  ) : null}

                  <div className={[cardWidth, 'flex h-full w-full flex-col'].join(' ')}>
                    <div className={introPadding}>
                      <div className="pb-[6px] xl:pb-[8px]">
                        <p className={['font-display text-[15px] font-bold uppercase leading-[22px] tracking-[1.4px] xl:text-[16px] xl:leading-[24px] xl:tracking-[1.6px]', featured ? 'text-brand' : 'text-muted'].join(' ')}>
                          {tier.name}
                        </p>
                      </div>

                      <p className={['font-body text-[13px] font-semibold leading-[18px] xl:text-[14px] xl:leading-[20px]', featured ? 'text-paper' : 'text-ink'].join(' ')}>
                        {tier.subtitle}
                      </p>
                    </div>

                    <div className={['flex items-end gap-[4px]', pricePadding].join(' ')}>
                      <span className={['font-body text-[28px] font-black leading-[32px] xl:text-[30px] xl:leading-[36px]', featured ? 'text-paper' : 'text-ink'].join(' ')}>
                        {tier.price}
                      </span>

                      <span className={['font-body text-[13px] font-normal leading-[18px] xl:text-[14px] xl:leading-[20px]', featured ? 'text-faded' : 'text-muted'].join(' ')}>
                        {tier.cadence}
                      </span>
                    </div>

                    <div className={['flex flex-1 flex-col', listPadding].join(' ')}>
                      <ul className="flex flex-col items-start gap-[10px] xl:gap-[12px]">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex w-full items-center gap-[12px]">
                            <TierCheck className={featured ? 'h-[9.47px] w-[12.84px]' : 'h-[9.02px] w-[12.23px]'} />

                            <span className={['font-body text-[13px] font-normal leading-[18px] xl:text-[14px] xl:leading-[20px]', featured ? 'text-faded' : 'text-muted'].join(' ')}>
                              {feature}
                            </span>
                          </li>
                        ))}

                        {tier.callout ? (
                          <li className="flex w-full items-start gap-[12px] pt-[4px] xl:pt-[8px]">
                            <TierCheck className={featured ? 'h-[11.02px] w-[11.02px]' : 'h-[10.5px] w-[10.5px]'} />

                            <span className={['font-body text-[13px] font-bold leading-[18px] xl:text-[14px] xl:leading-[20px]', featured ? 'text-paper' : 'text-ink'].join(' ')}>
                              {tier.callout}
                            </span>
                          </li>
                        ) : null}
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      className={[
                        'inline-flex w-full items-center justify-center rounded-[4px] px-0 font-body text-[11px] font-black uppercase leading-[16px] tracking-[1.1px] xl:text-[12px] xl:tracking-[1.2px]',
                        featured
                          ? 'h-[44px] bg-brand text-paper ring-1 ring-brand/10 xl:h-[46px]'
                          : 'h-[44px] border-[2px] border-ink bg-transparent text-ink xl:h-[48px]',
                      ].join(' ')}
                    >
                      {tier.buttonLabel}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08} className="pt-[14px] lg:pt-[12px] xl:pt-[16px]">
          <div className="mx-auto flex w-full max-w-[992px] flex-col items-center gap-[8px] rounded-[4px] border border-border/10 bg-surface px-[14px] py-[10px] xl:px-[18px] xl:py-[12px]">
            <div className="flex flex-wrap items-center justify-center gap-x-[18px] gap-y-[8px]">
              {trustSignals.map((signal) => (
                <span key={signal} className="inline-flex items-center gap-[8px] font-body text-[12px] font-[600] leading-[16px] text-muted">
                  <span className="h-[6px] w-[6px] rounded-[999px] bg-brand" />
                  {signal}
                </span>
              ))}
            </div>

            <p className="text-center font-body text-[13px] font-[500] leading-[18px] text-muted">
              {pricing.footnote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
