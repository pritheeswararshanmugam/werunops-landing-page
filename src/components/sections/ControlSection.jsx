import { Reveal } from '../ui/Reveal';

function ControlFeatureIcon({ index }) {
  const icons = [
    <path key="roof" d="m3.5 11.5 8.5-7 8.5 7M6 10v9h12v-9M9 19v-5h6v5" />,
    <path key="metal" d="M5 19V8l7-4 7 4v11M8 19v-6h8v6M9 9h.01M12 9h.01M15 9h.01" />,
    <path key="gutter" d="M4 6h16M5.5 6v5c0 3.8 2.2 6 6.5 6s6.5-2.2 6.5-6V6M12 17v3" />,
    <path key="build" d="M4 20h16M6 20V9h5v11M13 20V4h5v16M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1" />,
    <path key="team" d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19c.7-3.3 2.5-5 5.5-5s4.8 1.7 5.5 5M16 11a2.5 2.5 0 1 0 0-5M15 14c2.8 0 4.5 1.5 5 4.5" />,
    <path key="growth" d="M4 19V5M4 19h16M7 15l3.5-4 3 2 5-6M15.5 7H19v3.5" />,
  ];

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[25px] w-[25px] shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[index] ?? icons[0]}
    </svg>
  );
}

function ControlPanelArtwork() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-ink">
      <img
        src="/images/control-section.jpeg"
        alt="Roofing and trade business operations support"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function ControlVisual({ stat }) {
  return (
    <div className="relative mx-auto w-full max-w-[568px] pb-[40px] min-[1280px]:mx-0">
      <div className="elevation-deep relative aspect-square w-full rounded-[16px] border-[8px] border-frame bg-ink text-ink">
        <ControlPanelArtwork />
      </div>

      <div className="elevation-deep absolute bottom-0 left-0 flex min-h-[142px] w-[82%] max-w-[320px] flex-col justify-center rounded-[8px] border-[1px] border-border/[0.102] bg-paper px-[24px] py-[20px] text-ink sm:left-[-24px] sm:min-h-[166px] sm:px-[32px]">
        <p className="font-body text-[17px] font-[900] leading-[22px] text-brandText sm:text-[18px] sm:leading-[23px]">{stat.value}</p>
        <p className="mt-[8px] font-body text-[14px] font-[700] leading-[20px] text-ink">{stat.label}</p>
        <p className="mt-[5px] font-body text-[12px] font-[400] leading-[16px] text-muted">{stat.detail}</p>
      </div>
    </div>
  );
}

export function ControlSection({ control }) {
  return (
    <section id="control" className="surface-texture border-t border-border/20 bg-section py-[96px] text-ink lg:py-[120px]">
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-[48px] px-[20px] sm:px-[24px] md:px-[32px] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-[48px]">
        <Reveal className="flex w-full flex-col gap-[22px] lg:min-w-0">
          <p className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[2.4px] text-brandText">
            {control.eyebrow}
          </p>
          <h2 className="w-full max-w-[500px] font-display text-[36px] font-[800] leading-[40px] tracking-[-0.9px] text-ink min-[1280px]:w-[568px] min-[1280px]:max-w-none">
            {control.title}
          </h2>

          <div className="flex w-full max-w-[520px] flex-col gap-[16px] min-[1280px]:w-[568px] min-[1280px]:max-w-none">
            {control.features.map((feature, index) => (
              <div key={feature} className="flex min-h-[50px] w-full items-center gap-[16px]">
                <span className="icon-tile elevation-surface bg-paper text-ink">
                  <ControlFeatureIcon index={index} />
                </span>
                <p className="min-w-0 font-display text-[16px] font-[700] leading-[24px] text-ink">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <p className="w-full max-w-[500px] border-l-[4px] border-brand py-[6px] pl-[20px] font-display text-[20px] font-[700] leading-[28px] text-ink min-[1280px]:w-[568px] min-[1280px]:max-w-none">
            {control.callout}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="w-full lg:flex lg:justify-end">
          <ControlVisual stat={control.stat} />
        </Reveal>
      </div>
    </section>
  );
}
