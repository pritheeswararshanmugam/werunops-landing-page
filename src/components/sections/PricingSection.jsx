import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

function TierCheck({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 13 10" className={[className, 'shrink-0 text-brand'].join(' ')} fill="none">
      <path d="M1 5.4L4.15 8.3L12 1.45" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureList({ items, featured = false }) {
  return (
    <ul className="flex flex-col items-start gap-[9px]">
      {items.map((item) => (
        <li key={item} className="flex w-full items-start gap-[12px]">
          <TierCheck className="mt-[5px] h-[9px] w-[12px]" />
          <span className={['font-body text-[13px] font-normal leading-[19px] xl:text-[14px] xl:leading-[20px]', featured ? 'text-faded' : 'text-muted'].join(' ')}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function PricingSection({ pricing }) {
  const replacementTier = pricing.tiers.find((tier) => tier.replacements);

  return (
    <section id="pricing" className="paper-texture border-t border-border/20 bg-paper py-[80px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[20px] sm:px-[24px] md:px-[32px]">
        <Reveal className="w-full">
          <div className="mx-auto flex max-w-[900px] flex-col items-center gap-[12px] text-center">
            <p className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[2.4px] text-brandText">
              {pricing.eyebrow}
            </p>
            <SectionHeading
              align="center"
              title={pricing.title}
              description={pricing.description}
              className="gap-[12px] [&_h2]:max-w-[760px] [&_h2]:text-[34px] [&_h2]:leading-[38px] lg:[&_h2]:text-[40px] lg:[&_h2]:leading-[44px] [&_p]:max-w-[760px] [&_p]:text-[16px] [&_p]:leading-[25px]"
            />
          </div>
        </Reveal>

        <div className="mt-[36px] grid w-full gap-[18px] lg:grid-cols-[repeat(3,minmax(0,1fr))] lg:items-stretch xl:grid-cols-[384px_384px_384px] xl:justify-center xl:gap-x-[20px]">
          {pricing.tiers.map((tier, index) => {
            const featured = Boolean(tier.featured);

            return (
              <Reveal key={tier.name} delay={index * 0.06} className="h-full w-full overflow-visible">
                <article
                  className={[
                    'card-base relative flex h-full w-full flex-col overflow-visible p-[22px] xl:p-[24px]',
                    featured
                      ? 'card-featured'
                      : 'card-light text-ink',
                  ].join(' ')}
                >
                  <div className="flex h-full w-full flex-col">
                    <div className="border-b border-border/15 pb-[18px]">
                      <p className={['font-display text-[16px] font-bold uppercase leading-[24px] tracking-[1.6px]', featured ? 'text-brand' : 'text-muted'].join(' ')}>
                        {tier.name}
                      </p>
                      <p className={['mt-[10px] font-body text-[27px] font-black leading-[33px]', featured ? 'text-paper' : 'text-ink'].join(' ')}>
                        {tier.price}
                      </p>
                      <h3 className={['mt-[14px] font-display text-[18px] font-extrabold leading-[25px]', featured ? 'text-paper' : 'text-ink'].join(' ')}>
                        {tier.subtitle}
                      </h3>
                      <p className={['mt-[8px] font-body text-[14px] font-medium leading-[21px]', featured ? 'text-faded' : 'text-muted'].join(' ')}>
                        {tier.description}
                      </p>
                    </div>

                    <div className="py-[18px]">
                      <h4 className={['mb-[12px] font-display text-[13px] font-bold uppercase leading-[18px] tracking-[1.2px]', featured ? 'text-paper' : 'text-ink'].join(' ')}>
                        {tier.featuresTitle}
                      </h4>
                      <FeatureList items={tier.features} featured={featured} />
                    </div>

                    <div className={['mt-auto border-t pt-[18px]', featured ? 'border-paper/10' : 'border-border/15'].join(' ')}>
                      <h4 className={['font-display text-[13px] font-bold uppercase leading-[18px] tracking-[1.2px]', featured ? 'text-paper' : 'text-ink'].join(' ')}>
                        {tier.idealTitle}
                      </h4>
                      <p className={['mt-[8px] font-body text-[14px] font-semibold leading-[21px]', featured ? 'text-faded' : 'text-muted'].join(' ')}>
                        {tier.ideal}
                      </p>
                      <a href="#contact" className="btn-primary mt-[18px] w-full">
                        {tier.cta}
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {replacementTier ? (
          <Reveal delay={0.06} className="mx-auto mt-[28px] w-full max-w-[1216px]">
            <div className="card-base card-dark grid gap-[24px] p-[24px] sm:p-[32px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-[48px]">
              <div>
                <h3 className="font-display text-[15px] font-bold uppercase leading-[21px] tracking-[1.4px] text-brand">
                  {replacementTier.replacementTitle}
                </h3>
                <p className="mt-[12px] font-body text-[16px] font-semibold leading-[24px] text-paper">
                  {replacementTier.replacementIntro}
                </p>
                <p className="mt-[14px] font-body text-[15px] font-semibold leading-[23px] text-faded">
                  {replacementTier.replacementSummary}
                </p>
              </div>

              <div className="grid gap-[10px] sm:grid-cols-3 lg:grid-cols-1">
                {replacementTier.replacements.map((item) => (
                  <div key={item} className="flex items-start gap-[12px] rounded-[12px] border border-paper/10 bg-paper/[0.04] px-[14px] py-[12px]">
                    <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[10px] border border-brand/25 bg-brand/10">
                      <TierCheck className="h-[9px] w-[12px]" />
                    </span>
                    <span className="pt-[3px] font-body text-[14px] font-semibold leading-[21px] text-paper">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={0.08} className="mx-auto mt-[28px] w-full max-w-[1216px]">
          <div className="card-base card-light grid items-center gap-[24px] p-[24px] sm:p-[32px] lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <h3 className="font-display text-[24px] font-extrabold leading-[32px] text-ink">{pricing.custom.title}</h3>
              <div className="mt-[12px] flex flex-col gap-[6px]">
                {pricing.custom.lines.map((line) => (
                  <p key={line} className="font-body text-[15px] font-semibold leading-[23px] text-muted">{line}</p>
                ))}
              </div>
            </div>
            <a href="#contact" className="btn-primary w-full lg:w-auto lg:whitespace-nowrap">
              {pricing.custom.cta}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-[28px] w-full max-w-[1216px]">
          <div className="card-base card-light p-[24px] sm:p-[32px]">
            <h3 className="text-center font-display text-[22px] font-extrabold leading-[30px] text-ink">
              {pricing.includedTitle}
            </h3>
            <ul className="mt-[22px] grid gap-x-[24px] gap-y-[12px] sm:grid-cols-2 lg:grid-cols-3">
              {pricing.included.map((item) => (
                <li key={item} className="flex items-start gap-[12px]">
                  <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[10px] border border-brand/20 bg-brand/10">
                    <TierCheck className="h-[9px] w-[12px]" />
                  </span>
                  <span className="pt-[3px] font-body text-[14px] font-semibold leading-[21px] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
