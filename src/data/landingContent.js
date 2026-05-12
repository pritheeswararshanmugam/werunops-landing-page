const PRIMARY_CTA_LABEL = 'Book Your Ops Audit';

export const landingContent = {
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Where It Breaks', href: '#problem' },
    { label: 'What We Handle', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ],
  hero: {
    eyebrow: 'Back-office support for trade businesses',
    titleLeadLines: ['You run', 'the jobs.'],
    titleAccentLines: ['We run', 'the back office', 'behind them.'],
    description:
      'A back-office support team for electricians, plumbers, carpenters, and roofing businesses that need the office side moving cleanly from quote to schedule to cash collected.',
    primaryCta: { label: PRIMARY_CTA_LABEL, href: '#contact' },
    secondaryCta: { label: 'See How It Works', href: '#how-it-works' },
    badge: 'Done-for-you daily admin execution',
    supportNote: 'Quotes, scheduling, invoicing, collections',
  },
  problem: {
    title: 'The work is getting done. The admin is where it slows down.',
    cards: [
      { icon: 'quotes', title: 'Quotes go out late', detail: 'margin gets squeezed' },
      { icon: 'jobs', title: 'Booked jobs miss details', detail: 'handover gets messy' },
      { icon: 'invoices', title: 'Invoices sit too long', detail: 'cash waits longer' },
      { icon: 'followups', title: 'Overdue follow-up lands on you', detail: 'admin spills after hours' },
    ],
    kicker: 'The owner should not be the backup admin team.',
  },
  flow: {
    title: 'Every job needs a clear path from enquiry to payment.',
    description:
      'If one step stalls, the next one usually slips with it. The handover matters at every stage.',
    steps: ['Enquiry', 'Quote Sent', 'Job Booked', 'Scheduling', 'Invoicing', 'Follow-ups', 'Payment'],
    footer: 'A cleaner handover from enquiry to payment.',
  },
  solution: {
    title: 'We handle the daily admin work that keeps jobs moving',
    description:
      'This is hands-on admin support inside the systems you already use. We keep quotes, diary coordination, invoicing, reminders, and collections moving without changing how your business runs.',
    bullets: [
      'Prepare and send quotes',
      'Coordinate diary changes and job handover',
      'Raise and issue invoices',
      'Handle collections follow-up and overdue reminders',
      'Keep the next office action moving each day',
    ],
    callout: 'You keep the decisions. We keep the admin work moving.',
  },
  results: {
    title: 'What usually changes when the admin is properly covered',
    cards: [
      { stat: 'Less quote delay', detail: 'Quotes tend to move out sooner.' },
      { stat: 'Cleaner handover', detail: 'Booked jobs carry clearer details into the schedule.' },
      { stat: 'Faster invoicing', detail: 'Invoices are less likely to sit after the work is done.' },
      { stat: 'Less owner catch-up', detail: 'Less time spent chasing what should already be moving.' },
    ],
  },
  howItWorks: {
    title: 'A straightforward handover into daily support.',
    steps: [
      {
        number: '01',
        title: 'Audit',
        body: 'We review quotes, booked jobs, invoicing, payment follow-up, and overdue pressure points.',
      },
      {
        number: '02',
        title: 'Confirm Ownership',
        body: 'We agree who approves, who sends, who follows up, and what needs weekly review.',
      },
      {
        number: '03',
        title: 'Tighten Handover',
        body: 'We close the gaps between office work, site updates, and the next admin step.',
      },
      {
        number: '04',
        title: 'Run the Work',
        body: 'Our team handles the daily admin execution and keeps the work moving.',
      },
    ],
    note: 'You keep oversight. We handle the daily admin work.',
  },
  control: {
    title: 'You keep control. You just stop carrying every admin task yourself.',
    features: ['Quotes waiting to go out', 'Booked jobs and next actions', 'Invoices sent and overdue', 'Weekly review and follow-up'],
    callout: 'You still make the calls. We handle the daily admin execution.',
    stat: {
      value: 'Clear view',
      label: 'quotes, jobs, invoices, overdue',
      detail: 'See what needs action without carrying every admin task yourself.',
    },
  },
  pricing: {
    title: 'Support levels based on how much admin coverage you need',
    description: 'Same service model across every tier: a team taking ownership of the work that keeps money and jobs moving.',
    sectionCtaLabel: PRIMARY_CTA_LABEL,
    tiers: [
      {
        name: 'Cash Flow Cover',
        subtitle: 'Invoice send-outs, payment follow-up, and weekly review',
        price: '$800',
        cadence: '/month',
        features: ['Invoices raised and sent', 'Payment follow-up handled', 'Overdue reminders tracked', 'Weekly admin review'],
        callout: 'Best for owners who mainly need invoicing covered',
      },
      {
        name: 'Job Flow Cover',
        subtitle: 'Quotes, bookings, invoicing, and follow-up handled',
        price: '$1,200',
        cadence: '/month',
        features: [
          'Quote support',
          'Job bookings and schedule coordination',
          'Invoices raised and sent',
          'Payment follow-up tracked',
          'Weekly workload review',
        ],
        callout: 'Best for growing teams with admin spillover',
      },
      {
        name: 'Full Back-Office Cover',
        subtitle: 'Daily support across quotes, jobs, invoices, and overdue follow-up',
        price: '$1,600',
        cadence: '/month',
        features: [
          'Daily quote support',
          'Bookings, schedule updates, and handover',
          'Invoices, payment follow-up, and overdue reminders',
          'Weekly review and priority tracking',
          'Everything in Job Flow Cover',
        ],
        callout: 'Most complete day-to-day coverage',
        featured: true,
        badge: 'Most Popular',
      },
    ],
    trustSignals: ['Clear task ownership', 'Careful handover', 'Weekly review across every tier'],
    footnote: '',
  },
  objection: {
    title: 'If admin keeps landing back on you, the business needs coverage.',
    body:
      'Most owners do not avoid admin support because they want to do everything themselves. They avoid it because the handover feels risky — missed details, unclear responsibility, client confusion, or sensitive business information being handled the wrong way.',
    supportTitle: 'WHAT USUALLY HOLDS OWNERS BACK',
    supportPoints: [
      'You do not want to lose control of the details.',
      'You do not want quotes, invoices, or follow-ups missed.',
      'You do not want to explain the same task twice.',
      'You do not want clients confused about who is handling what.',
      'You do not want sensitive business information treated casually.',
    ],
  },
  trust: {
    title: 'Clear ownership. Careful handover. Professional handling.',
    items: [
      {
        title: 'Clear ownership and handover',
        description: 'Quotes, scheduled work, billing, and overdue accounts each have a named next step.',
      },
      {
        title: 'Confidential handling',
        description: 'Business and client information is handled carefully, with access limited to the task at hand.',
      },
      {
        title: 'Weekly review cadence',
        description: 'The admin cadence is reviewed weekly inside your current setup, usually Xero and Excel, with Tradify optional if you want it.',
      },
    ],
  },
  finalCta: {
    title: 'Book your 15-minute Ops Audit.',
    description: 'A short working session to understand where admin is slowing the business down, what is being missed, and whether your current quote-to-invoice flow needs clearer support.',
    reassurance: '15 minutes. No obligation. Practical next steps only.',
    auditChecklistTitle: 'YOU WILL WALK AWAY WITH:',
    auditChecklist: [
      'A quick view of where admin is getting stuck.',
      'Clear quote, scope, or margin risks to check first.',
      'A simple follow-up rhythm for open quotes and overdue items.',
      'The main gap between booked work, invoicing, and payment.',
      'A practical next step you can act on immediately.',
    ],
    form: {
      name: 'ops-audit',
      buttonLabel: 'Book Your Ops Audit',
      fields: [
        { label: 'Full Name', name: 'full-name', type: 'text', placeholder: 'John Doe', autoComplete: 'name' },
        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@example.com', autoComplete: 'email' },
        { label: 'Business Name', name: 'business-name', type: 'text', placeholder: 'Doe Electrical', autoComplete: 'organization' },
        { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '04xx xxx xxx', autoComplete: 'tel', required: true },
        {
          label: 'Preferred Call Time',
          name: 'preferred_call_time',
          type: 'datetime-local',
          autoComplete: 'off',
          required: true,
          hint: 'We’ll call around this time in your local time zone.',
        },
      ],
    },
    messages: {
      submitting: 'Submitting...',
      success: 'Thanks. Your request has been sent and we will be in touch shortly.',
      error: 'Submission failed. Please try again or email ops@werunops.au.',
    },
    helperLines: [
      'We use this short session to understand where admin is slowing down, what is being missed, and what to check first.',
      'If there is a fit, you will leave with a practical next step before any engagement is discussed.',
    ],
  },
  footer: {
    blurb: 'WeRunOps is a back-office team for trade businesses, covering quotes, schedule coordination, billing, reminders, and collections so owners can stay focused on the work that brings revenue in.',
    contentLinks: [
      { label: 'Home', href: '#home' },
      { label: 'Where It Breaks', href: '#problem' },
      { label: 'What We Handle', href: '#solution' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
    ],
    legalLinks: [
      { label: 'Privacy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
      { label: 'Policy', href: '#contact' },
    ],
    contact: [
      { label: 'Address', value: 'Sydney, NSW' },
      { label: 'Email', value: 'admin@werunops.com.au', href: 'mailto:admin@werunops.com.au' },
    ],
  },
};
