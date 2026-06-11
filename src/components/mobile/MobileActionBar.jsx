import { useEffect, useState } from 'react';

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
      <path d="M20 11.6a7.8 7.8 0 0 1-11.55 6.83L4 20l1.5-4.34A7.8 7.8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.05 8.2c.2-.45.42-.46.72-.47h.25c.16 0 .34.06.44.3l.68 1.64c.08.2.04.37-.08.54l-.5.62c-.13.15-.1.3-.02.44.35.64.82 1.19 1.4 1.65.6.47 1.1.7 1.7.94.16.06.3.03.4-.1l.72-.87c.16-.2.34-.17.52-.1l1.53.72c.2.1.33.15.38.25.05.1.05.6-.14 1.16-.2.55-1.14 1.06-1.6 1.13-.42.06-.95.1-1.54-.08-.36-.1-.82-.25-1.4-.5a9.8 9.8 0 0 1-3.8-3.36c-.28-.4-.76-1.07-.76-2.04 0-.98.5-1.46.68-1.67l.48-.2Z" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 9.5h16M8 13h3M8 16h5" />
    </svg>
  );
}

export function MobileActionBar({ primaryCta, whatsapp }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId;

    function updateVisibility() {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        const contact = document.querySelector('#contact');
        const footer = document.querySelector('footer');
        const activeElement = document.activeElement;
        const isEditing = activeElement?.matches('input, textarea, select');
        const contactRect = contact?.getBoundingClientRect();
        const footerRect = footer?.getBoundingClientRect();
        const isNearContact = contactRect && contactRect.top < window.innerHeight * 0.88 && contactRect.bottom > 0;
        const isNearFooter = footerRect && footerRect.top < window.innerHeight && footerRect.bottom > 0;
        const hasOverlay = document.body.classList.contains('mobile-navigation-open') || Boolean(document.querySelector('dialog[open]'));

        setIsVisible(
          isMobile
          && window.scrollY > 320
          && !isNearContact
          && !isNearFooter
          && !isEditing
          && !hasOverlay,
        );
      });
    }

    const observer = new MutationObserver(updateVisibility);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class', 'open'],
      subtree: true,
    });

    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    document.addEventListener('focusin', updateVisibility);
    document.addEventListener('focusout', updateVisibility);
    updateVisibility();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
      document.removeEventListener('focusin', updateVisibility);
      document.removeEventListener('focusout', updateVisibility);
    };
  }, []);

  if (!whatsapp) {
    return null;
  }

  return (
    <div
      data-mobile-action-bar="true"
      aria-hidden={!isVisible}
      className={[
        'fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 px-[12px] pb-[calc(10px+env(safe-area-inset-bottom))] pt-[10px] shadow-[0_-12px_32px_-20px_rgba(9,20,38,0.55)] backdrop-blur-md transition duration-200 md:hidden',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0',
      ].join(' ')}
    >
      <div className="mx-auto grid w-full max-w-[480px] grid-cols-2 gap-[10px]">
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noreferrer"
          tabIndex={isVisible ? 0 : -1}
          className="inline-flex min-h-[48px] items-center justify-center gap-[8px] rounded-[6px] border border-ink/15 bg-paper px-[12px] font-body text-[13px] font-black uppercase tracking-[0.08em] text-ink"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          href={primaryCta.href}
          tabIndex={isVisible ? 0 : -1}
          className="inline-flex min-h-[48px] items-center justify-center gap-[8px] rounded-[6px] bg-brand px-[12px] font-body text-[13px] font-black uppercase tracking-[0.08em] text-paper shadow-orange"
        >
          <CalendarIcon />
          Book a Call
        </a>
      </div>
    </div>
  );
}
