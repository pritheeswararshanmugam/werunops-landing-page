import { useEffect, useState } from 'react';
import { Reveal } from '../ui/Reveal';

const NETLIFY_FORM_NAME = 'contact';
const DATE_TIME_PICKER_KEYS = new Set(['Enter', ' ', 'ArrowDown']);

function encodeFormBody(formData) {
  return new URLSearchParams(Array.from(formData.entries())).toString();
}

function tryShowDateTimePicker(input) {
  if (input.type !== 'datetime-local' || typeof input.showPicker !== 'function') {
    return;
  }

  try {
    input.showPicker();
  } catch {
    // Browsers can reject repeated picker calls while it is already open.
  }
}

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
  const [submitState, setSubmitState] = useState('idle');
  const [timezone, setTimezone] = useState('');
  const messages = finalCta.messages ?? {};
  const helperLines = finalCta.helperLines ?? [];
  const auditChecklist = finalCta.auditChecklist ?? [];

  useEffect(() => {
    if (typeof Intl === 'undefined') {
      return;
    }

    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (detectedTimezone) {
      setTimezone(detectedTimezone);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('form-name', NETLIFY_FORM_NAME);
    formData.set('timezone', timezone);

    setSubmitState('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormBody(formData),
      });

      if (!response.ok) {
        throw new Error('Netlify form submission failed');
      }

      form.reset();
      setSubmitState('success');
    } catch (error) {
      setSubmitState('error');
    }
  }

  function handleDateTimeInputClick(event) {
    tryShowDateTimePicker(event.currentTarget);
  }

  function handleDateTimeInputKeyDown(event) {
    if (!DATE_TIME_PICKER_KEYS.has(event.key)) {
      return;
    }

    event.preventDefault();
    tryShowDateTimePicker(event.currentTarget);
  }

  return (
    <section id="contact" className="surface-texture border-t border-border/20 bg-surface px-[20px] py-[80px] sm:px-[24px] md:px-[32px] lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center">
        <div className="panel-shell panel-shell--prominent grid w-full max-w-[1216px] overflow-hidden lg:min-h-[500px] lg:grid-cols-2">
          <Reveal className="bg-ink px-[24px] py-[36px] text-paper sm:px-[32px] sm:py-[44px] lg:px-[64px] lg:pb-[96px] lg:pt-[64px]">
            <div className="mx-auto flex w-full max-w-[448px] flex-col gap-[16px] lg:mx-0 lg:gap-[18px]">
              <p className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[2.4px] text-brand">
                {finalCta.eyebrow}
              </p>
              <h2 className="max-w-[448px] font-display text-[40px] font-extrabold leading-[40px] tracking-[-1px] text-paper lg:min-h-[120px] lg:text-display-hero">
                {finalCta.title}
              </h2>
              <p className="max-w-[448px] text-[18px] leading-[28px] text-faded">{finalCta.description}</p>
              <div className="flex items-start gap-[12px] sm:items-center">
                <ReassuranceIcon />
                <span className="text-[14px] font-medium leading-[20px] text-paper lg:max-w-[240px]">{finalCta.reassurance}</span>
              </div>

              {auditChecklist.length ? (
                <div className="mt-[8px] flex w-full flex-col gap-[12px] border-t border-paper/10 pt-[18px]">
                  <h3 className="font-display text-[14px] font-bold uppercase leading-[18px] tracking-[1.4px] text-brand">
                    {finalCta.auditChecklistTitle}
                  </h3>

                  <div className="flex w-full flex-col gap-[10px]">
                    {auditChecklist.map((item) => (
                      <div key={item} className="flex w-full items-start gap-[12px] rounded-[12px] border border-paper/10 bg-paper/[0.03] px-[14px] py-[12px]">
                        <span className="mt-[1px] flex h-[22px] w-[22px] flex-none items-center justify-center rounded-[8px] border border-brand/25 bg-brand/10 text-brand" aria-hidden="true">
                          <svg viewBox="0 0 20 20" className="h-[11px] w-[11px]" fill="none">
                            <path d="M4.8 10.4 8.15 13.75 15.25 6.65" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <p className="font-body text-[14px] font-semibold leading-[20px] text-paper">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="bg-paper px-[24px] py-[36px] sm:px-[32px] sm:py-[44px] lg:px-[64px] lg:pb-[64px] lg:pt-[64px]">
            <form
              name={NETLIFY_FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mx-auto flex w-full max-w-[448px] flex-col gap-[16px] lg:mx-0 lg:gap-[18px]"
            >
              <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
              <input type="hidden" name="timezone" value={timezone} />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              {finalCta.form.fields.map((field) => (
                <label key={field.name} className="flex w-full flex-col gap-[4px]">
                  <span className="font-display text-[12px] font-bold uppercase leading-[16px] tracking-[1.2px] text-ink">{field.label}</span>
                  {field.hint ? (
                    <span className="font-body text-[12px] font-medium leading-[18px] text-muted">{field.hint}</span>
                  ) : null}
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    required={field.required ?? true}
                    onClick={field.type === 'datetime-local' ? handleDateTimeInputClick : undefined}
                    onKeyDown={field.type === 'datetime-local' ? handleDateTimeInputKeyDown : undefined}
                    className={[
                      'form-input',
                      field.type === 'datetime-local' ? 'form-input--datetime' : '',
                    ].join(' ')}
                  />
                </label>
              ))}

              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="btn-primary w-full"
              >
                {submitState === 'submitting' ? (messages.submitting ?? 'Submitting...') : finalCta.form.buttonLabel}
              </button>

              <div aria-live="polite" className="min-h-[24px]">
                {submitState === 'success' ? (
                  <p className="font-body text-[14px] font-semibold leading-[20px] text-[#0F766E]">
                    {messages.success ?? 'Thanks. Your request has been sent and we will be in touch shortly.'}
                  </p>
                ) : null}

                {submitState === 'error' ? (
                  <p className="font-body text-[14px] font-semibold leading-[20px] text-brand">
                    {messages.error ?? 'Submission failed. Please try again or email ops@werunops.au.'}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-[8px] border-t-[1px] border-border pt-[12px]">
                {helperLines.map((line) => (
                  <div key={line} className="flex items-start gap-[10px]">
                    <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-[999px] bg-brand" />
                    <p className="font-body text-[13px] font-medium leading-[19px] text-muted sm:text-[14px] sm:leading-[20px]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
