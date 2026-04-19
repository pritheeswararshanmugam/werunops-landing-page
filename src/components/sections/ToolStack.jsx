const toolPlaceholders = [
  { id: '01', name: 'Quotes sent late', detail: 'Logo placeholder' },
  { id: '02', name: 'Software 02', detail: 'Logo placeholder' },
  { id: '03', name: 'Software 03', detail: 'Logo placeholder' },
  { id: '04', name: 'Software 04', detail: 'Logo placeholder' },
];

const TOOL_CARD_LAYOUTS = [
  {
    backgroundClass: 'bg-paper',
    cardHeightClass: 'h-[200.15px]',
    placeholderClassName: 'h-[32.4px] w-[29.7px]',
  },
  {
    backgroundClass: 'bg-panel',
    cardHeightClass: 'h-[197.9px]',
    placeholderClassName: 'h-[30.15px] w-[29.74px]',
  },
  {
    backgroundClass: 'bg-paper',
    cardHeightClass: 'h-[191.75px]',
    placeholderClassName: 'h-[24px] w-[33px]',
  },
  {
    backgroundClass: 'bg-panel',
    cardHeightClass: 'h-[197.82px]',
    placeholderClassName: 'h-[30.08px] w-[30px]',
  },
];

function ToolLogoPlaceholder({ id, className }) {
  return (
    <span
      className={[
        'box-border inline-flex items-center justify-center rounded-[8px] border-[1px] border-brand/20 bg-brand/10 font-body text-[10px] font-black uppercase leading-[10px] tracking-[0.12em] text-brand',
        className,
      ].join(' ')}
    >
      {id}
    </span>
  );
}

export function ToolStack({ items = toolPlaceholders }) {
  return (
    <div className="mt-[48px] w-full">
      <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div
          aria-label="Software tool stack"
          className="mx-auto flex w-max overflow-hidden border-l-[1px] border-t-[1px] border-border/20"
        >
          {items.map((item, index) => {
            const layout = TOOL_CARD_LAYOUTS[index % TOOL_CARD_LAYOUTS.length];

            return (
              <article
                key={item.id}
                className={[
                  'box-border flex w-[303.75px] shrink-0 flex-col items-start gap-[11px] border-b-[1px] border-r-[1px] border-border/20 p-[40px]',
                  layout.backgroundClass,
                  layout.cardHeightClass,
                ].join(' ')}
              >
                <ToolLogoPlaceholder id={item.id} className={layout.placeholderClassName} />

                <div className="flex w-full flex-col items-start pt-[13px]">
                  <h3 className="w-full max-w-[222.75px] font-display text-[20px] font-bold leading-[28px] text-ink">
                    {item.name}
                  </h3>
                </div>

                <div className="flex w-full flex-col items-start pb-[0.75px]">
                  <p className="w-full max-w-[222.75px] font-body text-[14px] font-semibold leading-[23px] text-muted">
                    {`→ ${item.detail}`}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}