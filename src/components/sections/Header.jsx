import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { landingContent } from '../../data/landingContent';

function scrollToTarget(hash) {
  if (typeof window === 'undefined' || !hash?.startsWith('#')) {
    return;
  }

  const target = document.querySelector(hash);

  if (!target) {
    return;
  }

  const header = document.querySelector('[data-site-header="true"]');
  const headerHeight = header ? header.getBoundingClientRect().height : 72;
  const cssOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--anchor-offset').trim(), 10);
  const offset = Number.isNaN(cssOffset) ? headerHeight : cssOffset;
  window.history.replaceState(null, '', hash);

  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

export function Header({ navItems, cta, brand = landingContent.footer.brand }) {
  const [isOpen, setIsOpen] = useState(false);
  const resolvedCta = cta ?? landingContent.hero.primaryCta;
  const navLinkClassName =
    'font-display text-[16px] font-[700] leading-[24px] tracking-[-0.4px] text-ink';
  const ctaClassName =
    'btn-primary btn-primary--sm !px-[16px] !text-[11px] !leading-[15px] !tracking-[0.08em]';

  useEffect(() => {
    document.body.classList.toggle('mobile-navigation-open', isOpen);

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('mobile-navigation-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function handleNavClick(event, href, closeMenu = false) {
    if (!href?.startsWith('#')) {
      if (closeMenu) {
        setIsOpen(false);
      }

      return;
    }

    event.preventDefault();

    if (closeMenu) {
      setIsOpen(false);
    }

    window.setTimeout(() => {
      scrollToTarget(href);
    }, closeMenu ? 280 : 0);
  }

  return (
    <header data-site-header="true" className="sticky top-0 z-50 border-b border-[rgb(var(--color-border)/0.22)] bg-[rgb(var(--color-paper)/0.84)] shadow-[0px_12px_32px_-24px_rgba(9,20,38,0.4)] backdrop-blur-md">
      <div className="mx-auto box-border flex h-[64px] w-full max-w-[1280px] items-center justify-between px-[16px] sm:px-[24px] md:px-[32px] lg:h-[72px] xl:grid xl:grid-cols-[105px_minmax(0,1fr)_270px] xl:gap-[24px]">
        <a
          href="#home"
          className="w-[116px] whitespace-nowrap font-body text-[20px] font-[900] leading-[28px] tracking-[-1px] text-ink lg:w-[104.98px]"
          onClick={(event) => handleNavClick(event, '#home')}
          aria-label={brand === 'WeRunOps.' ? 'WeRun Ops.' : brand}
        >
          <span aria-hidden="true">
            <span className="text-ink">WeRun </span>
            <span className="text-brand">Ops</span>
            <span className="text-ink">.</span>
          </span>
        </a>

        <nav className="hidden h-[24px] items-center justify-center gap-[24px] xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={navLinkClassName}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex xl:items-center xl:justify-end">
          <a
            href={resolvedCta.href}
            className={[ctaClassName, 'w-[270px] max-w-full self-center whitespace-normal text-center'].join(' ')}
            onClick={(event) => handleNavClick(event, resolvedCta.href)}
          >
            {resolvedCta.label}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border-[1px] border-border/20 text-ink xl:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="relative h-[16px] w-[20px]">
            <span
              className={[
                'absolute left-0 top-0 h-[2px] w-full rounded-[999px] bg-current transition-transform duration-200',
                isOpen ? 'translate-y-[7px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-[7px] h-[2px] w-full rounded-[999px] bg-current transition-opacity duration-200',
                isOpen ? 'opacity-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-[14px] h-[2px] w-full rounded-[999px] bg-current transition-transform duration-200',
                isOpen ? '-translate-y-[7px] -rotate-45' : '',
              ].join(' ')}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden border-t-[1px] border-[rgb(var(--color-border)/0.18)] bg-[rgb(var(--color-paper)/0.92)] backdrop-blur-md xl:hidden"
          >
            <div className="mx-auto box-border flex w-full max-w-[1280px] flex-col gap-[14px] px-[16px] py-[18px] sm:px-[24px] md:px-[32px] lg:gap-[16px] lg:py-[20px]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={navLinkClassName}
                  onClick={(event) => handleNavClick(event, item.href, true)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href={resolvedCta.href}
                className={[ctaClassName, 'mt-[4px] w-full'].join(' ')}
                onClick={(event) => handleNavClick(event, resolvedCta.href, true)}
              >
                {resolvedCta.label}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
