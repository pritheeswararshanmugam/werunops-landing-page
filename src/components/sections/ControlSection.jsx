import { Reveal } from '../ui/Reveal';

const CONTROL_FEATURE_ICONS = [
  {
    viewBox: '51.5833 4804.88 12.8334 8.75',
    width: '12.83px',
    height: '8.75px',
    path:
      'M58 4811.88C58.7292 4811.88 59.349 4811.62 59.8594 4811.11C60.3698 4810.6 60.625 4809.98 60.625 4809.25C60.625 4808.52 60.3698 4807.9 59.8594 4807.39C59.349 4806.88 58.7292 4806.62 58 4806.62C57.2708 4806.62 56.651 4806.88 56.1406 4807.39C55.6302 4807.9 55.375 4808.52 55.375 4809.25C55.375 4809.98 55.6302 4810.6 56.1406 4811.11C56.651 4811.62 57.2708 4811.88 58 4811.88ZM58 4810.82C57.5625 4810.82 57.1906 4810.67 56.8844 4810.37C56.5781 4810.06 56.425 4809.69 56.425 4809.25C56.425 4808.81 56.5781 4808.44 56.8844 4808.13C57.1906 4807.83 57.5625 4807.67 58 4807.67C58.4375 4807.67 58.8094 4807.83 59.1156 4808.13C59.4219 4808.44 59.575 4808.81 59.575 4809.25C59.575 4809.69 59.4219 4810.06 59.1156 4810.37C58.8094 4810.67 58.4375 4810.82 58 4810.82ZM58 4813.62C56.5806 4813.62 55.2875 4813.23 54.1208 4812.44C52.9542 4811.64 52.1083 4810.58 51.5833 4809.25C52.1083 4807.92 52.9542 4806.86 54.1208 4806.06C55.2875 4805.27 56.5806 4804.88 58 4804.88C59.4194 4804.88 60.7125 4805.27 61.8792 4806.06C63.0458 4806.86 63.8917 4807.92 64.4167 4809.25C63.8917 4810.58 63.0458 4811.64 61.8792 4812.44C60.7125 4813.23 59.4194 4813.62 58 4813.62ZM58 4812.46C59.0986 4812.46 60.1073 4812.17 61.026 4811.59C61.9448 4811.01 62.6472 4810.23 63.1333 4809.25C62.6472 4808.27 61.9448 4807.49 61.026 4806.91C60.1073 4806.33 59.0986 4806.04 58 4806.04C56.9014 4806.04 55.8927 4806.33 54.974 4806.91C54.0552 4807.49 53.3528 4808.27 52.8667 4809.25C53.3528 4810.23 54.0552 4811.01 54.974 4811.59C55.8927 4812.17 56.9014 4812.46 58 4812.46Z',
  },
  {
    viewBox: '51.5833 4868.58 12.8334 9.34',
    width: '12.83px',
    height: '9.34px',
    path:
      'M51.5833 4877.92V4876.28C51.5833 4875.95 51.6684 4875.65 51.8385 4875.37C52.0087 4875.09 52.2347 4874.88 52.5167 4874.74C53.1194 4874.44 53.7319 4874.21 54.3542 4874.06C54.9764 4873.91 55.6083 4873.83 56.25 4873.83C56.8917 4873.83 57.5236 4873.91 58.1458 4874.06C58.7681 4874.21 59.3806 4874.44 59.9833 4874.74C60.2653 4874.88 60.4913 4875.09 60.6615 4875.37C60.8316 4875.65 60.9167 4875.95 60.9167 4876.28V4877.92H51.5833ZM62.0833 4877.92V4876.17C62.0833 4875.74 61.9642 4875.33 61.726 4874.93C61.4879 4874.54 61.15 4874.2 60.7125 4873.92C61.2083 4873.98 61.675 4874.08 62.1125 4874.22C62.55 4874.36 62.9583 4874.53 63.3375 4874.74C63.6875 4874.93 63.9549 4875.15 64.1396 4875.39C64.3243 4875.62 64.4167 4875.88 64.4167 4876.17V4877.92H62.0833ZM56.25 4873.25C55.6083 4873.25 55.059 4873.02 54.6021 4872.56C54.1451 4872.11 53.9167 4871.56 53.9167 4870.92C53.9167 4870.28 54.1451 4869.73 54.6021 4869.27C55.059 4868.81 55.6083 4868.58 56.25 4868.58C56.8917 4868.58 57.441 4868.81 57.8979 4869.27C58.3549 4869.73 58.5833 4870.28 58.5833 4870.92C58.5833 4871.56 58.3549 4872.11 57.8979 4872.56C57.441 4873.02 56.8917 4873.25 56.25 4873.25ZM62.0833 4870.92C62.0833 4871.56 61.8549 4872.11 61.3979 4872.56C60.941 4873.02 60.3917 4873.25 59.75 4873.25C59.6431 4873.25 59.5069 4873.24 59.3417 4873.21C59.1764 4873.19 59.0403 4873.16 58.9333 4873.13C59.1958 4872.82 59.3976 4872.48 59.5385 4872.1C59.6795 4871.72 59.75 4871.33 59.75 4870.92C59.75 4870.51 59.6795 4870.11 59.5385 4869.74C59.3976 4869.36 59.1958 4869.01 58.9333 4868.7C59.0694 4868.65 59.2056 4868.62 59.3417 4868.61C59.4778 4868.59 59.6139 4868.58 59.75 4868.58C60.3917 4868.58 60.941 4868.81 61.3979 4869.27C61.8549 4869.73 62.0833 4870.28 62.0833 4870.92ZM52.75 4876.75H59.75V4876.28C59.75 4876.18 59.7233 4876.08 59.6698 4875.99C59.6163 4875.9 59.5458 4875.84 59.4583 4875.79C58.9333 4875.53 58.4035 4875.33 57.8688 4875.2C57.334 4875.07 56.7944 4875 56.25 4875C55.7056 4875 55.166 4875.07 54.6313 4875.2C54.0965 4875.33 53.5667 4875.53 53.0417 4875.79C52.9542 4875.84 52.8837 4875.9 52.8302 4875.99C52.7767 4876.08 52.75 4876.18 52.75 4876.28V4876.75ZM56.25 4872.08C56.5708 4872.08 56.8455 4871.97 57.074 4871.74C57.3024 4871.51 57.4167 4871.24 57.4167 4870.92C57.4167 4870.6 57.3024 4870.32 57.074 4870.09C56.8455 4869.86 56.5708 4869.75 56.25 4869.75C55.9292 4869.75 55.6545 4869.86 55.426 4870.09C55.1976 4870.32 55.0833 4870.6 55.0833 4870.92C55.0833 4871.24 55.1976 4871.51 55.426 4871.74C55.6545 4871.97 55.9292 4872.08 56.25 4872.08Z',
  },
  {
    viewBox: '51.5833 4996.29 12.8334 9.92',
    width: '12.83px',
    height: '9.92px',
    path:
      'M52.75 5006.21C52.4292 5006.21 52.1545 5006.09 51.926 5005.87C51.6976 5005.64 51.5833 5005.36 51.5833 5005.04C51.5833 5004.72 51.6976 5004.45 51.926 5004.22C52.1545 5003.99 52.4292 5003.87 52.75 5003.87C52.8083 5003.87 52.8594 5003.87 52.9031 5003.87C52.9469 5003.87 52.9931 5003.88 53.0417 5003.9L55.6958 5001.25C55.6764 5001.2 55.6667 5001.16 55.6667 5001.11C55.6667 5001.07 55.6667 5001.02 55.6667 5000.96C55.6667 5000.64 55.7809 5000.36 56.0094 5000.13C56.2378 4999.91 56.5125 4999.79 56.8333 4999.79C57.1542 4999.79 57.4288 4999.91 57.6573 5000.13C57.8858 5000.36 58 5000.64 58 5000.96C58 5000.98 57.9903 5001.07 57.9708 5001.25L59.4583 5002.74C59.5069 5002.72 59.5531 5002.71 59.5969 5002.71C59.6406 5002.71 59.6917 5002.71 59.75 5002.71C59.8083 5002.71 59.8594 5002.71 59.9031 5002.71C59.9469 5002.71 59.9931 5002.72 60.0417 5002.74L62.1125 5000.67C62.0931 5000.62 62.0833 5000.57 62.0833 5000.53C62.0833 5000.48 62.0833 5000.43 62.0833 5000.37C62.0833 5000.05 62.1976 4999.78 62.426 4999.55C62.6545 4999.32 62.9292 4999.21 63.25 4999.21C63.5708 4999.21 63.8455 4999.32 64.074 4999.55C64.3024 4999.78 64.4167 5000.05 64.4167 5000.37C64.4167 5000.7 64.3024 5000.97 64.074 5001.2C63.8455 5001.43 63.5708 5001.54 63.25 5001.54C63.1917 5001.54 63.1406 5001.54 63.0969 5001.54C63.0531 5001.54 63.0069 5001.53 62.9583 5001.51L60.8875 5003.58C60.9069 5003.63 60.9167 5003.68 60.9167 5003.72C60.9167 5003.77 60.9167 5003.82 60.9167 5003.87C60.9167 5004.2 60.8024 5004.47 60.574 5004.7C60.3455 5004.93 60.0708 5005.04 59.75 5005.04C59.4292 5005.04 59.1545 5004.93 58.926 5004.7C58.6976 5004.47 58.5833 5004.2 58.5833 5003.87C58.5833 5003.82 58.5833 5003.77 58.5833 5003.72C58.5833 5003.68 58.5931 5003.63 58.6125 5003.58L57.125 5002.1C57.0764 5002.12 57.0302 5002.12 56.9865 5002.12C56.9427 5002.12 56.8917 5002.12 56.8333 5002.12C56.8139 5002.12 56.7167 5002.12 56.5417 5002.1L53.8875 5004.75C53.9069 5004.8 53.9167 5004.84 53.9167 5004.89C53.9167 5004.93 53.9167 5004.98 53.9167 5005.04C53.9167 5005.36 53.8024 5005.64 53.574 5005.87C53.3455 5006.09 53.0708 5006.21 52.75 5006.21ZM53.3333 5000.36L52.9688 4999.57L52.1813 4999.21L52.9688 4998.84L53.3333 4998.06L53.6979 4998.84L54.4854 4999.21L53.6979 4999.57L53.3333 5000.36ZM59.75 4999.79L59.1958 4998.6L58 4998.04L59.1958 4997.49L59.75 4996.29L60.3042 4997.49L61.5 4998.04L60.3042 4998.6L59.75 4999.79Z',
  },
];

const CONTROL_FEATURE_TEXT_MAX_WIDTHS = ['160.8px', '178.42px', '198.7px'];

const DEEP_SHADOW_STYLE = {
  boxShadow: '0px 25px 50px -12px color-mix(in srgb, currentColor 25%, transparent)',
};

const SURFACE_SHADOW_STYLE = {
  boxShadow: '0px 1px 2px color-mix(in srgb, currentColor 5%, transparent)',
};

const SECTION_SHADOW_STYLE = {
  boxShadow: '0px 4px 4px color-mix(in srgb, currentColor 25%, transparent)',
};

function ControlFeatureIcon({ index }) {
  const icon = CONTROL_FEATURE_ICONS[index] ?? CONTROL_FEATURE_ICONS[0];

  return (
    <svg
      aria-hidden="true"
      viewBox={icon.viewBox}
      style={{ width: icon.width, height: icon.height }}
      className="shrink-0 scale-[1.45] text-brand"
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

function ControlPanelArtwork() {
  return (
    <div className="relative h-[552px] w-[552px] overflow-hidden rounded-[12px] bg-ink opacity-[0.9]">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-card to-ink" />
      <div aria-hidden="true" className="absolute left-[0px] top-[0px] h-[188px] w-[188px] rounded-full bg-brand/[0.149] blur-[48px]" />
      <div aria-hidden="true" className="absolute right-[0px] top-[0px] h-[168px] w-[168px] rounded-full bg-paper/[0.078] blur-[40px]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 text-paper/[0.031] opacity-[0.45]"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      />

      <div aria-hidden="true" className="absolute left-[32px] top-[32px] flex gap-[10px]">
        <span className="h-[10px] w-[10px] rounded-[999px] bg-paper/[0.122]" />
        <span className="h-[10px] w-[10px] rounded-[999px] bg-paper/[0.122]" />
        <span className="h-[10px] w-[10px] rounded-[999px] bg-brand" />
      </div>

      <div aria-hidden="true" className="absolute left-[32px] top-[64px] h-[10px] w-[118px] rounded-[999px] bg-paper/[0.078]" />
      <div aria-hidden="true" className="absolute left-[32px] top-[86px] h-[10px] w-[176px] rounded-[999px] bg-paper/[0.059]" />

      <div aria-hidden="true" className="absolute left-[32px] top-[126px] h-[196px] w-[256px] rounded-[24px] border-[1px] border-paper/[0.078] bg-paper/[0.031]">
        <div className="absolute left-[24px] top-[24px] h-[10px] w-[92px] rounded-[999px] bg-paper/[0.078]" />
        <div className="absolute left-[24px] top-[48px] h-[10px] w-[154px] rounded-[999px] bg-paper/[0.059]" />
        <div className="absolute left-[24px] top-[88px] h-[84px] w-[208px] rounded-[18px] bg-paper/[0.059]" />
        <div className="absolute left-[42px] top-[110px] h-[8px] w-[102px] rounded-[999px] bg-brand" />
        <div className="absolute left-[42px] top-[130px] h-[8px] w-[138px] rounded-[999px] bg-paper/[0.078]" />
        <div className="absolute bottom-[22px] left-[24px] flex gap-[10px]">
          <span className="h-[52px] w-[18px] rounded-[999px] bg-paper/[0.078]" />
          <span className="h-[76px] w-[18px] rounded-[999px] bg-brand" />
          <span className="h-[64px] w-[18px] rounded-[999px] bg-paper/[0.102]" />
          <span className="h-[90px] w-[18px] rounded-[999px] bg-paper/[0.078]" />
          <span className="h-[72px] w-[18px] rounded-[999px] bg-paper/[0.102]" />
        </div>
      </div>

      <div aria-hidden="true" className="absolute right-[32px] top-[126px] h-[144px] w-[216px] rounded-[24px] border-[1px] border-paper/[0.078] bg-paper/[0.031]">
        <div className="absolute left-[24px] top-[24px] h-[10px] w-[82px] rounded-[999px] bg-paper/[0.078]" />
        <div className="absolute left-[24px] top-[52px] h-[10px] w-[110px] rounded-[999px] bg-paper/[0.059]" />
        <div className="absolute left-[24px] right-[24px] top-[86px] flex items-end justify-between">
          <span className="h-[26px] w-[22px] rounded-t-[12px] bg-paper/[0.078]" />
          <span className="h-[44px] w-[22px] rounded-t-[12px] bg-paper/[0.102]" />
          <span className="h-[64px] w-[22px] rounded-t-[12px] bg-brand" />
          <span className="h-[52px] w-[22px] rounded-t-[12px] bg-paper/[0.078]" />
        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-[32px] left-[32px] h-[164px] w-[302px] rounded-[24px] border-[1px] border-paper/[0.078] bg-paper/[0.031]">
        <div className="absolute left-[24px] top-[24px] h-[10px] w-[96px] rounded-[999px] bg-paper/[0.078]" />
        <div className="absolute left-[24px] top-[52px] h-[10px] w-[128px] rounded-[999px] bg-paper/[0.059]" />
        <div className="absolute left-[24px] top-[92px] h-[12px] w-[254px] rounded-[999px] bg-paper/[0.071]" />
        <div className="absolute left-[24px] top-[118px] h-[12px] w-[212px] rounded-[999px] bg-brand" />
        <div className="absolute left-[24px] top-[144px] h-[12px] w-[174px] rounded-[999px] bg-paper/[0.071]" />
      </div>

      <div aria-hidden="true" className="absolute bottom-[32px] right-[32px] h-[204px] w-[216px] rounded-[24px] border-[1px] border-paper/[0.078] bg-paper/[0.031]">
        <div className="absolute left-[24px] top-[24px] h-[10px] w-[76px] rounded-[999px] bg-paper/[0.078]" />
        <div className="absolute left-[24px] top-[52px] h-[10px] w-[118px] rounded-[999px] bg-paper/[0.059]" />
        <div className="absolute left-[24px] right-[24px] top-[92px] flex flex-col gap-[14px]">
          <div className="flex items-center gap-[14px]">
            <span className="h-[15px] w-[15px] rounded-[999px] bg-brand" />
            <span className="h-[10px] w-[132px] rounded-[999px] bg-paper/[0.078]" />
          </div>
          <div className="flex items-center gap-[14px]">
            <span className="h-[15px] w-[15px] rounded-[999px] bg-paper/[0.102]" />
            <span className="h-[10px] w-[112px] rounded-[999px] bg-paper/[0.071]" />
          </div>
          <div className="flex items-center gap-[14px]">
            <span className="h-[15px] w-[15px] rounded-[999px] bg-paper/[0.102]" />
            <span className="h-[10px] w-[148px] rounded-[999px] bg-paper/[0.071]" />
          </div>
          <div className="flex items-center gap-[14px]">
            <span className="h-[15px] w-[15px] rounded-[999px] bg-brand" />
            <span className="h-[10px] w-[94px] rounded-[999px] bg-paper/[0.078]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ControlVisual({ stat }) {
  return (
    <div className="relative mx-auto h-[504px] w-full max-w-[456px] overflow-visible min-[1180px]:h-[548px] min-[1180px]:max-w-[500px] min-[1280px]:mx-0 min-[1280px]:h-[568px] min-[1280px]:w-[568px] min-[1280px]:max-w-[568px]">
      <div className="absolute left-0 top-0 origin-top-left scale-[0.8028] min-[1180px]:scale-[0.8803] min-[1280px]:relative min-[1280px]:scale-100">
        <div
          className="relative flex h-[568px] w-[568px] items-center justify-center rounded-[16px] border-[8px] border-frame bg-ink text-ink"
          style={DEEP_SHADOW_STYLE}
        >
          <ControlPanelArtwork />
        </div>

        <div
          className="absolute bottom-[-40px] left-[-40px] h-[166px] w-[320px] rounded-[8px] border-[1px] border-border/[0.102] bg-paper text-ink"
          style={DEEP_SHADOW_STYLE}
        >
          <p className="absolute left-[33px] top-[33px] font-body text-[30px] font-[900] leading-[36px] text-brand">{stat.value}</p>
          <p className="absolute left-[33px] top-[73px] font-body text-[14px] font-[700] uppercase leading-[20px] text-ink">{stat.label}</p>
          <p className="absolute left-[33px] top-[100.5px] w-[237.38px] font-body text-[12px] font-[400] leading-[16px] text-muted">
            {stat.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ControlSection({ control }) {
  return (
    <section id="control" className="desktop-snap-section surface-texture bg-section py-[128px] text-ink" style={SECTION_SHADOW_STYLE}>
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-[48px] px-[20px] md:px-[32px] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-[40px] min-[1280px]:block min-[1280px]:h-[568px] min-[1280px]:px-0">
        <Reveal className="flex w-full flex-col gap-[24px] lg:min-w-0 min-[1280px]:absolute min-[1280px]:left-[32px] min-[1280px]:top-[78px] min-[1280px]:h-[412px] min-[1280px]:w-[568px]">
          <h2 className="w-full max-w-[440px] font-display text-[36px] font-[800] leading-[40px] tracking-[-0.9px] text-ink min-[1280px]:w-[568px] min-[1280px]:max-w-none">
            {control.title}
          </h2>

          <div className="flex w-full max-w-[456px] flex-col gap-[24px] min-[1280px]:w-[568px] min-[1280px]:max-w-none">
            {control.features.map((feature, index) => (
              <div key={feature} className="flex min-h-[40px] w-full items-center gap-[16px]">
                <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] border border-border/10 bg-paper text-ink" style={SURFACE_SHADOW_STYLE}>
                  <ControlFeatureIcon index={index} />
                </span>
                <p
                  className="min-w-0 font-display text-[16px] font-[700] leading-[24px] text-ink"
                  style={{ maxWidth: CONTROL_FEATURE_TEXT_MAX_WIDTHS[index] ?? '100%' }}
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <p className="w-full max-w-[440px] pt-[24px] font-display text-[20px] font-[700] leading-[28px] text-ink min-[1280px]:w-[568px] min-[1280px]:max-w-none">
            {control.callout}
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="w-full lg:flex lg:justify-end min-[1280px]:absolute min-[1280px]:right-[32px] min-[1280px]:top-[0px] min-[1280px]:block min-[1280px]:h-[568px] min-[1280px]:w-[568px]"
        >
          <ControlVisual stat={control.stat} />
        </Reveal>
      </div>
    </section>
  );
}
