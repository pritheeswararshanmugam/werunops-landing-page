export function SectionHeading({ eyebrow, title, description, dark = false, align = 'left', className = '' }) {
  const isCentered = align === 'center';
  const wrapperClassName = dark
    ? 'flex w-full max-w-[448px] flex-col items-start gap-[18px] md:gap-[20px] text-left'
    : isCentered
      ? 'flex w-full max-w-[1216px] flex-col items-center gap-[18px] md:gap-[20px] text-center'
      : 'flex w-full max-w-[560px] flex-col items-start gap-[18px] md:gap-[20px] text-left';

  const titleClassName = dark
    ? 'w-full max-w-[448px] font-display text-[48px] font-extrabold leading-[48px] tracking-[-1.2px] text-paper'
    : isCentered
      ? 'w-full max-w-[640px] font-display text-[36px] font-extrabold leading-[40px] tracking-[-0.9px] text-ink'
      : 'w-full max-w-[560px] font-display text-[36px] font-extrabold leading-[40px] tracking-[-0.9px] text-ink';

  const descriptionClassName = dark
    ? 'w-full max-w-[448px] font-body text-[18px] font-normal leading-[28px] text-faded'
    : isCentered
      ? 'w-full max-w-[560px] font-body text-[18px] font-normal leading-[28px] text-muted'
      : 'w-full max-w-[560px] font-body text-[18px] font-normal leading-[28px] text-muted';

  return (
    <div
      className={[
        wrapperClassName,
        isCentered ? 'mx-auto' : '',
        className,
      ].join(' ')}
    >
      {eyebrow ? (
        <span className="font-body text-[12px] font-bold uppercase leading-[16px] tracking-[0.2em] text-brandText">
          {eyebrow}
        </span>
      ) : null}

      <h2 className={titleClassName}>{title}</h2>

      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}
