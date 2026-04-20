import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Header({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClassName =
    'font-display text-[16px] font-[700] leading-[24px] tracking-[-0.4px] text-ink';

  return (
    <header className="sticky top-0 z-40 bg-page/90 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="mx-auto box-border flex h-[72px] w-full max-w-[1280px] items-center justify-between px-[32px] lg:grid lg:grid-cols-[104.98px_minmax(0,1fr)] lg:gap-[120px]">
        <a
          href="#home"
          className="w-[104.98px] font-body text-[20px] font-[900] leading-[28px] tracking-[-1px] text-ink"
        >
          WeRunOps.
        </a>

        <nav className="hidden h-[24px] items-center justify-end gap-[32px] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClassName}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border-[1px] border-border/20 text-ink lg:hidden"
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
            className="overflow-hidden border-t-[1px] border-border/20 bg-page lg:hidden"
          >
            <div className="mx-auto box-border flex w-full max-w-[1280px] flex-col gap-[16px] px-[32px] py-[20px]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={navLinkClassName}
                  onClick={() => setIsOpen(false)}
                >
                {item.label}
              </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
