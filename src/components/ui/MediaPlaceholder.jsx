function cx(...classNames) {
  return classNames.filter(Boolean).join(' ');
}

function WireframeLine({ widthClassName, toneClassName = 'bg-border/20', className = '' }) {
  return <span className={cx('block h-[8px] rounded-[999px]', toneClassName, widthClassName, className)} />;
}

function LightCard({ className = '', children }) {
  return <div className={cx('rounded-[4px] border-[1px] border-border/10 bg-paper', className)}>{children}</div>;
}

function DashboardWireframe({ label }) {
  return (
    <div className="relative flex-1 overflow-hidden rounded-[12px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 text-paper/[0.04]"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div aria-hidden="true" className="absolute left-[28px] top-[28px] flex items-center gap-[8px]">
        <span className="h-[8px] w-[8px] rounded-[999px] bg-brand/70" />
        <span className="h-[8px] w-[8px] rounded-[999px] bg-paper/20" />
        <span className="h-[8px] w-[8px] rounded-[999px] bg-paper/10" />
      </div>

      <div aria-hidden="true" className="absolute left-[28px] top-[56px] h-[10px] w-[112px] rounded-[999px] bg-paper/10" />
      <div aria-hidden="true" className="absolute left-[28px] top-[78px] h-[10px] w-[164px] rounded-[999px] bg-paper/[0.08]" />

      <div aria-hidden="true" className="absolute right-[28px] top-[36px] flex items-center gap-[8px] rounded-[999px] border-[1px] border-paper/10 bg-paper/[0.04] px-[12px] py-[8px]">
        <span className="h-[8px] w-[8px] rounded-[999px] bg-brand" />
        <span className="h-[6px] w-[56px] rounded-[999px] bg-paper/15" />
      </div>

      <div aria-hidden="true" className="absolute left-[28px] right-[28px] top-[118px] grid h-[178px] grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)] gap-[18px] md:left-[40px] md:right-[40px] md:top-[128px]">
        <div className="relative overflow-hidden rounded-[16px] border-[1px] border-paper/10 bg-paper/[0.04]">
          <div className="absolute inset-x-[20px] top-[20px] h-[10px] rounded-[999px] bg-paper/10" />
          <div className="absolute inset-x-[20px] top-[46px] h-[10px] rounded-[999px] bg-paper/[0.06]" />
          <div className="absolute bottom-[26px] left-[24px] right-[24px] flex items-end justify-between gap-[10px]">
            {[72, 116, 88, 142, 102, 156].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={cx('block w-[14%] rounded-t-[12px]', index === 3 || index === 5 ? 'bg-brand/80' : 'bg-paper/12')}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[16px] border-[1px] border-paper/10 bg-paper/[0.04]">
          <div className="absolute left-[18px] right-[18px] top-[20px] flex items-center justify-between">
            <WireframeLine widthClassName="w-[82px]" toneClassName="bg-paper/12" />
            <WireframeLine widthClassName="w-[52px]" toneClassName="bg-paper/[0.08]" className="h-[6px]" />
          </div>

          <svg aria-hidden="true" viewBox="0 0 220 124" className="absolute inset-x-[16px] top-[54px] h-[112px] w-[calc(100%-32px)] text-brand/80" fill="none">
            <path d="M8 89C28 89 32 36 55 36C79 36 83 102 108 102C134 102 139 20 165 20C186 20 195 54 212 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {[8, 55, 108, 165, 212].map((cxValue, index) => (
              <circle key={`${cxValue}-${index}`} cx={cxValue} cy={[89, 36, 102, 20, 54][index]} r="5.5" fill="currentColor" />
            ))}
          </svg>
        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-[28px] left-[28px] right-[28px] grid gap-[14px] md:grid-cols-[minmax(0,1fr)_204px]">
        <div className="grid grid-cols-3 gap-[12px]">
          {['w-[76px]', 'w-[64px]', 'w-[58px]'].map((widthClassName, index) => (
            <div key={`${widthClassName}-${index}`} className="rounded-[14px] border-[1px] border-paper/10 bg-paper/[0.05] px-[16px] py-[14px]">
              <WireframeLine widthClassName={widthClassName} toneClassName="bg-paper/12" />
              <WireframeLine widthClassName="w-[86px]" toneClassName={index === 1 ? 'bg-brand/50' : 'bg-paper/[0.08]'} className="mt-[12px] h-[6px]" />
            </div>
          ))}
        </div>

        <div className="rounded-[14px] border-[1px] border-paper/10 bg-paper/[0.06] p-[16px]">
          <div className="flex items-center justify-between">
            <WireframeLine widthClassName="w-[68px]" toneClassName="bg-paper/12" />
            <span className="h-[8px] w-[8px] rounded-[999px] bg-brand" />
          </div>
          <div className="mt-[14px] flex flex-col gap-[10px]">
            {['w-[148px]', 'w-[132px]', 'w-[156px]'].map((widthClassName) => (
              <div key={widthClassName} className="flex items-center gap-[10px]">
                <span className="h-[7px] w-[7px] rounded-[999px] bg-paper/15" />
                <WireframeLine widthClassName={widthClassName} toneClassName="bg-paper/[0.08]" className="h-[6px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoWireframe({ label }) {
  return (
    <div className="flex flex-1 flex-col p-[24px]">
      <div className="flex flex-1 flex-col gap-[16px]">
        <div aria-hidden="true" className="flex items-center justify-between rounded-[14px] border-[1px] border-border/10 bg-paper px-[18px] py-[14px]">
          <div className="flex items-center gap-[10px]">
            <span className="h-[10px] w-[10px] rounded-[999px] bg-brand/70" />
            <WireframeLine widthClassName="w-[116px]" toneClassName="bg-ink/10" />
          </div>
          <div className="flex items-center gap-[8px]">
            {['w-[44px]', 'w-[32px]', 'w-[28px]'].map((widthClassName, index) => (
              <WireframeLine key={`${widthClassName}-${index}`} widthClassName={widthClassName} toneClassName={index === 0 ? 'bg-brand/20' : 'bg-border/30'} className="h-[8px]" />
            ))}
          </div>
        </div>

        <LightCard className="flex-[1_1_0%] overflow-hidden p-[20px]">
          <div className="flex h-full flex-col gap-[16px]">
            <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] gap-[16px]">
              <div className="rounded-[12px] border-[1px] border-border/10 bg-surface p-[16px]">
                <WireframeLine widthClassName="w-[88px]" toneClassName="bg-ink/10" />
                <div className="mt-[14px] flex flex-col gap-[10px]">
                  {['w-full', 'w-[92%]', 'w-[74%]', 'w-[86%]'].map((widthClassName, index) => (
                    <div key={`${widthClassName}-${index}`} className="grid grid-cols-[92px_minmax(0,1fr)_52px] items-center gap-[10px] rounded-[10px] bg-paper px-[12px] py-[10px]">
                      <WireframeLine widthClassName="w-[64px]" toneClassName="bg-ink/10" className="h-[7px]" />
                      <WireframeLine widthClassName={widthClassName} toneClassName={index === 1 ? 'bg-brand/25' : 'bg-border/35'} className="h-[7px]" />
                      <WireframeLine widthClassName="w-[38px]" toneClassName="bg-border/25" className="h-[7px]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[12px] border-[1px] border-border/10 bg-surface p-[16px]">
                <WireframeLine widthClassName="w-[76px]" toneClassName="bg-ink/10" />
                <div className="mt-[14px] flex flex-col gap-[10px]">
                  {['bg-brand/15', 'bg-panel', 'bg-panel'].map((toneClassName, index) => (
                    <div key={`${toneClassName}-${index}`} className={cx('rounded-[10px] p-[12px]', toneClassName)}>
                      <WireframeLine widthClassName="w-[72px]" toneClassName="bg-ink/10" />
                      <WireframeLine widthClassName="w-[112px]" toneClassName="bg-border/30" className="mt-[10px] h-[6px]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-[16px] md:grid-cols-[176px_minmax(0,1fr)]">
              <LightCard className="h-[96px] p-[16px]">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <WireframeLine widthClassName="w-[88px]" toneClassName="bg-ink/10" />
                    <WireframeLine widthClassName="w-[120px]" toneClassName="bg-border/35" className="h-[6px]" />
                  </div>

                  <div className="flex items-end gap-[8px]">
                    {[26, 40, 22, 34].map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className={cx('block w-[18px] rounded-t-[6px]', index === 1 ? 'bg-brand/35' : 'bg-border/30')}
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>
              </LightCard>

              <LightCard className="h-[96px] p-[16px]">
                <div className="flex h-full flex-col justify-between gap-[12px]">
                  <div className="grid grid-cols-3 gap-[8px]">
                    <div className="h-[40px] rounded-[8px] bg-panel" />
                    <div className="h-[40px] rounded-[8px] bg-brand/10" />
                    <div className="h-[40px] rounded-[8px] bg-panel" />
                  </div>

                  <WireframeLine widthClassName="w-[148px]" toneClassName="bg-ink/10" className="h-[6px]" />
                </div>
              </LightCard>
            </div>
          </div>
        </LightCard>
      </div>
    </div>
  );
}

function DeviceWireframe({ label }) {
  return (
    <div className="flex flex-1 flex-col p-[24px]">
      {label ? (
        <span className="mb-[24px] inline-flex w-fit items-center rounded-[4px] border-[1px] border-border/10 bg-paper px-[12px] py-[8px] text-[12px] font-[700] leading-[16px] uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      ) : null}

      <div className="flex flex-1 items-center justify-center py-[24px]">
        <div className="w-full max-w-[401.2px] rotate-[-14deg] rounded-[4px] border-[2px] border-brand bg-deep p-[35.7px] text-paper shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex h-[58.8px] flex-col justify-between">
              <WireframeLine widthClassName="w-[96px]" toneClassName="bg-paper/15" />
              <WireframeLine widthClassName="w-[196px]" toneClassName="bg-paper/10" className="h-[6px]" />
            </div>

            <div className="flex flex-col gap-[16px]">
              {[
                ['w-[224px]', 'w-[72px]'],
                ['w-[248px]', 'w-[88px]'],
                ['w-[208px]', 'w-[80px]'],
              ].map(([titleWidthClassName, metaWidthClassName]) => (
                <div key={`${titleWidthClassName}-${metaWidthClassName}`} className="flex h-[49px] items-center justify-between rounded-[4px] border-[1px] border-paper/10 bg-paper/5 px-[16px] py-[14px]">
                  <WireframeLine widthClassName={titleWidthClassName} toneClassName="bg-paper/15" />
                  <WireframeLine widthClassName={metaWidthClassName} toneClassName="bg-paper/10" className="h-[6px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MediaPlaceholder({ label, variant = 'dashboard', className = '' }) {
  const shellClassName =
    variant === 'dashboard'
      ? 'rounded-[16px] border-[8px] border-frame bg-deep text-paper shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]'
      : 'rounded-[4px] border-[1px] border-border/10 bg-panel text-ink shadow-[0px_1px_2px_rgba(0,0,0,0.05)]';

  return (
    <div className={cx('relative flex h-full flex-col overflow-hidden', shellClassName, className)}>
      {variant === 'dashboard' ? <DashboardWireframe label={label} /> : null}
      {variant === 'photo' ? <PhotoWireframe label={label} /> : null}
      {variant === 'device' ? <DeviceWireframe label={label} /> : null}
    </div>
  );
}
