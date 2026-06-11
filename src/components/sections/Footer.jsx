import { useEffect, useRef, useState } from 'react';
import { Reveal } from '../ui/Reveal';

function FooterLinkColumn({ title, items, widthClassName, onDocumentOpen }) {

  return (
    <div className={['flex flex-col items-start gap-[24px]', widthClassName].join(' ')}>
      <p className="font-body text-[12px] font-bold uppercase leading-[16px] tracking-[1.2px] text-[#F8FAFC]">{title}</p>
      <ul className="flex w-full flex-col items-start gap-[16px]">
        {items.map((item) => (
          <li key={item.label} className="w-full">
            {'documentId' in item ? (
              <button
                type="button"
                className="border-0 bg-transparent p-0 text-left font-body text-[14px] font-normal leading-[20px] text-[#94A3B8] transition-colors duration-150 hover:text-[#CBD5E1] focus-visible:rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                onClick={(event) => onDocumentOpen(item.documentId, event.currentTarget)}
              >
                {item.label}
              </button>
            ) : 'href' in item ? (
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

function LegalDialog({ documentContent, onClose, triggerRef }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!documentContent || !dialog) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;

      if (dialog.open) {
        dialog.close();
      }
    };
  }, [documentContent]);

  if (!documentContent) {
    return null;
  }

  const titleId = `legal-dialog-title-${documentContent.title.toLowerCase().replaceAll(' ', '-')}`;

  function handleClose() {
    onClose();
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="legal-dialog"
      onClick={handleBackdropClick}
      onClose={handleClose}
    >
      <div className="flex max-h-[inherit] flex-col overflow-hidden rounded-[16px] bg-paper text-ink">
        <div className="flex items-start justify-between gap-[24px] border-b border-border/30 px-[22px] py-[20px] sm:px-[28px]">
          <div className="min-w-0">
            {documentContent.status ? (
              <p className="font-display text-[11px] font-bold uppercase leading-[16px] tracking-[1.6px] text-brandText">
                {documentContent.status}
              </p>
            ) : null}
            <h2
              id={titleId}
              className={[
                'font-display text-[24px] font-extrabold leading-[30px] text-ink sm:text-[28px] sm:leading-[34px]',
                documentContent.status ? 'mt-[4px]' : '',
              ].join(' ')}
            >
              {documentContent.title}
            </h2>
            <p className="mt-[4px] font-body text-[13px] font-medium leading-[19px] text-muted">
              Effective date: {documentContent.effectiveDate}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label={`Close ${documentContent.title}`}
            className="inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] border border-border/40 bg-surface text-[24px] leading-none text-ink transition-colors hover:border-brand/50 hover:text-brandText focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            onClick={() => dialogRef.current?.close()}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="overflow-y-auto px-[22px] py-[22px] sm:px-[28px] sm:py-[26px]">
          {documentContent.introduction ? (
            <p className="font-body text-[14px] font-medium leading-[22px] text-muted">
              {documentContent.introduction}
            </p>
          ) : null}

          <div className={['flex flex-col gap-[24px]', documentContent.introduction ? 'mt-[24px]' : ''].join(' ')}>
            {documentContent.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-[10px]">
                <h3 className="font-display text-[17px] font-bold leading-[23px] text-ink">
                  {section.heading}
                </h3>

                {section.lead ? (
                  <p className="font-body text-[14px] font-normal leading-[22px] text-muted">
                    {section.lead}
                  </p>
                ) : null}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="font-body text-[14px] font-normal leading-[22px] text-muted">
                    {paragraph}
                  </p>
                ))}

                {section.bullets ? (
                  <ul className="flex list-disc flex-col gap-[7px] pl-[20px]">
                    {section.bullets.map((item) => (
                      <li key={item} className="pl-[3px] font-body text-[14px] font-normal leading-[22px] text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.closing ? (
                  <p className="font-body text-[14px] font-normal leading-[22px] text-muted">
                    {section.closing}
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function Footer({ footer }) {
  const [activeDocumentId, setActiveDocumentId] = useState(null);
  const triggerRef = useRef(null);
  const activeDocument = activeDocumentId ? footer.legalDocuments?.[activeDocumentId] : null;

  function handleDocumentOpen(documentId, trigger) {
    triggerRef.current = trigger;
    setActiveDocumentId(documentId);
  }

  return (
    <>
      <footer className="bg-[#0F172A] px-[20px] py-[48px] sm:px-[32px] sm:py-[64px] lg:py-[72px]">
        <div className="mx-auto w-full max-w-[1184px]">
          <Reveal className="flex w-full flex-col items-start gap-[40px] lg:flex-row lg:items-start lg:justify-start lg:gap-[96px] xl:gap-[128px]">
            <div className="flex w-full max-w-[296px] flex-col items-start gap-[14px]">
              <a href="#home" className="font-body text-[24px] font-black leading-[32px] text-[#F8FAFC]">
                {footer.brand}
              </a>

              <div className="flex w-full max-w-[292px] flex-col gap-[8px]">
                <p className="font-body text-[15px] font-bold leading-[23px] text-[#F8FAFC]">{footer.tagline}</p>
                <p className="font-body text-[14px] font-medium leading-[23px] text-[#CBD5E1]">{footer.services}</p>
                <p className="font-body text-[14px] font-medium leading-[23px] text-[#CBD5E1]">{footer.support}</p>
              </div>
            </div>

            <div className="flex w-full max-w-[620px] flex-col items-start gap-[28px] sm:flex-row sm:items-start sm:justify-start sm:gap-[40px] lg:gap-[56px]">
              <FooterLinkColumn title="Content" items={footer.contentLinks} widthClassName="w-full max-w-[156px]" />
              <FooterLinkColumn
                title="Legal"
                items={footer.legalLinks}
                widthClassName="w-full max-w-[128px]"
                onDocumentOpen={handleDocumentOpen}
              />

              <div className="flex w-full max-w-[220px] flex-col items-start gap-[20px]">
                <p className="font-body text-[12px] font-bold uppercase leading-[16px] tracking-[1.2px] text-[#F8FAFC]">
                  Contact
                </p>

                <ul className="flex w-full flex-col items-start gap-[12px]">
                  {footer.contact.map((item) => (
                    <li key={item.label} className="w-full break-words font-body text-[14px] leading-[21px]">
                      {item.kind === 'whatsapp' ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Chat with WeRun Ops on WhatsApp at ${item.value}`}
                          className="inline-flex min-h-[40px] max-w-full items-center gap-[9px] rounded-[8px] border border-brand/35 bg-brand/10 px-[12px] py-[8px] font-body text-[14px] font-bold leading-[20px] text-[#F8FAFC] transition-colors duration-150 hover:border-brand/70 hover:bg-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0 text-brand" fill="none">
                            <path d="M20 11.6a7.8 7.8 0 0 1-11.55 6.83L4 20l1.5-4.34A7.8 7.8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.05 8.2c.2-.45.42-.46.72-.47h.25c.16 0 .34.06.44.3l.68 1.64c.08.2.04.37-.08.54l-.5.62c-.13.15-.1.3-.02.44.35.64.82 1.19 1.4 1.65.6.47 1.1.7 1.7.94.16.06.3.03.4-.1l.72-.87c.16-.2.34-.17.52-.1l1.53.72c.2.1.33.15.38.25.05.1.05.6-.14 1.16-.2.55-1.14 1.06-1.6 1.13-.42.06-.95.1-1.54-.08-.36-.1-.82-.25-1.4-.5a9.8 9.8 0 0 1-3.8-3.36c-.28-.4-.76-1.07-.76-2.04 0-.98.5-1.46.68-1.67l.48-.2Z" fill="currentColor" />
                          </svg>
                          <span>{item.value}</span>
                        </a>
                      ) : item.kind === 'email' ? (
                        <a
                          href={item.href}
                          aria-label={`Email WeRun Ops at ${item.value}`}
                          className="inline-flex min-h-[40px] max-w-full items-center gap-[9px] rounded-[8px] border border-brand/35 bg-brand/10 px-[12px] py-[8px] font-body text-[13px] font-bold leading-[20px] text-[#F8FAFC] transition-colors duration-150 hover:border-brand/70 hover:bg-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0 text-brand" fill="none">
                            <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                            <path d="m5 7 7 5.4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{item.value}</span>
                        </a>
                      ) : 'href' in item ? (
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

      <LegalDialog
        documentContent={activeDocument}
        onClose={() => setActiveDocumentId(null)}
        triggerRef={triggerRef}
      />
    </>
  );
}
