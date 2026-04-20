import { Reveal } from '../ui/Reveal';

function ReassuranceIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-[20px] w-[20px] shrink-0 text-brand" fill="none">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" opacity="0.28" />
      <path d="M10 5.75V10L13 11.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 3.5a6.5 6.5 0 1 1-4.596 1.904" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FinalCtaSection({ finalCta }) {
  return (
    <section id="contact" className="desktop-snap-section surface-texture bg-surface px-[32px] py-[128px]">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center">
        <div className="grid w-full max-w-[1216px] overflow-hidden rounded-[16px] bg-paper shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] lg:min-h-[534px] lg:grid-cols-[608px_608px]">
          <Reveal className="bg-ink px-[24px] py-[48px] text-paper sm:px-[40px] sm:py-[64px] lg:px-[80px] lg:pb-[194px] lg:pt-[80px]">
            <div className="flex w-full max-w-[448px] flex-col gap-[24px]">
              <h2 className="max-w-[448px] font-display text-[40px] font-extrabold leading-[40px] tracking-[-1px] text-paper lg:min-h-[144px] lg:text-display-hero">
                {finalCta.title}
              </h2>
              <p className="max-w-[448px] pb-[16px] text-[18px] leading-[28px] text-faded">{finalCta.description}</p>
              <div className="flex items-center gap-[16px]">
                <ReassuranceIcon />
                <span className="text-[14px] font-medium leading-[20px] text-paper lg:max-w-[215.08px]">{finalCta.reassurance}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="bg-paper px-[24px] py-[48px] sm:px-[40px] sm:py-[64px] lg:px-[80px] lg:pb-[96px] lg:pt-[80px]">
            <form
              name={finalCta.form.name}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/#contact"
              className="flex w-full max-w-[448px] flex-col gap-[24px]"
            >
              <input type="hidden" name="form-name" value={finalCta.form.name} />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              {finalCta.form.fields.map((field) => (
                <label key={field.name} className="flex w-full flex-col gap-[8px]">
                  <span className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[1.2px] text-ink">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    required
                    className="h-[49px] w-full border-0 border-b-[2px] border-border bg-panel px-0 py-[14px] text-[16px] leading-[19px] text-ink outline-none placeholder:text-subtle focus:border-brand focus-visible:outline-none"
                  />
                </label>
              ))}

              <button
                type="submit"
                className="inline-flex h-[64px] w-full items-center justify-center rounded-[4px] bg-brand px-0 py-[20px] font-display text-[16px] font-black uppercase leading-[24px] tracking-[3.2px] text-paper shadow-[0px_20px_25px_-5px_rgba(249,115,22,0.2),0px_8px_10px_-6px_rgba(249,115,22,0.2)]"
              >
                {finalCta.form.buttonLabel}
              </button>

              <div className="flex flex-col gap-[8px] border-t-[1px] border-border pt-[16px]">
                <p className="font-body text-[14px] font-medium leading-[20px] text-muted">
                  Zero obligation. 100% confidential review of your estimating, scheduling, and backend workflows for Australian construction and roofing teams.
                </p>
                <p className="font-body text-[14px] font-medium leading-[20px] text-muted">
                  If there is a fit, you will get a practical next-step breakdown before any engagement is discussed.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
