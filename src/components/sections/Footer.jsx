import { Reveal } from '../ui/Reveal';

function getLegalLink(link) {
  if (!('href' in link)) {
    return link;
  }

  if (link.label === 'Privacy') {
    return { ...link, href: '/privacy' };
  }

  if (link.label === 'Terms') {
    return { ...link, href: '/terms' };
  }

  if (link.label === 'Policy') {
    return { ...link, href: '/policy' };
  }

  return link;
}

function FooterLinkColumn({ title, items, widthClassName }) {
  const resolvedItems = title === 'Legal' ? items.map(getLegalLink) : items;

  return (
    <div className={['flex flex-col items-start gap-[24px]', widthClassName].join(' ')}>
      <p className="font-body text-[12px] font-bold uppercase leading-[16px] tracking-[1.2px] text-[#F8FAFC]">{title}</p>
      <ul className="flex w-full flex-col items-start gap-[16px]">
        {resolvedItems.map((item) => (
          <li key={item.label} className="w-full">
            {'href' in item ? (
              <a href={item.href} className="font-body text-[14px] font-normal leading-[20px] text-[#94A3B8]">
                {item.label}
              </a>
            ) : (
              <span className="font-body text-[14px] font-normal leading-[20px] text-[#94A3B8]">{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ footer }) {
  return (
    <footer className="bg-[#0F172A] px-[32px] py-[64px] lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1184px]">
        <Reveal className="flex w-full flex-col items-start gap-[40px] lg:flex-row lg:items-start lg:justify-start lg:gap-[96px] xl:gap-[128px]">
          <div className="flex w-full max-w-[296px] flex-col items-start gap-[14px]">
            <a href="#home" className="font-body text-[24px] font-black leading-[32px] text-[#F8FAFC]">
              WeRunOps.
            </a>

            <p className="w-full max-w-[292px] font-body text-[14px] font-medium leading-[23px] text-[#CBD5E1]">
              {footer.blurb}
            </p>
          </div>

          <div className="flex w-full max-w-[620px] flex-col items-start gap-[28px] sm:flex-row sm:items-start sm:justify-start sm:gap-[40px] lg:gap-[56px]">
            <FooterLinkColumn title="Content" items={footer.contentLinks} widthClassName="w-full max-w-[156px]" />
            <FooterLinkColumn title="Legal" items={footer.legalLinks} widthClassName="w-full max-w-[44.22px]" />

            <div className="flex w-full max-w-[220px] flex-col items-start gap-[20px]">
              <p className="font-body text-[12px] font-bold uppercase leading-[16px] tracking-[1.2px] text-[#F8FAFC]">
                Contact
              </p>

              <ul className="flex w-full flex-col items-start gap-[12px]">
                {footer.contact.map((item) => (
                  <li key={item.label} className="w-full break-words font-body text-[14px] leading-[21px]">
                    {'href' in item ? (
                      <a href={item.href} className="font-normal text-[#94A3B8] transition-colors duration-150 hover:text-[#CBD5E1]">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-normal text-[#94A3B8]">
                        {item.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
