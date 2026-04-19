export const landingContent = {
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Value', href: '#problem' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: "It's not a time issue.",
    titleLeadLines: ['You handle the', 'job.'],
    titleAccentLines: ['We handle', 'everything', 'else.'],
    description:
      'From enquiry to payment, we run your entire back office. Built for Australian trades who are done with admin chaos.',
    primaryCta: { label: 'Get My Ops Audit', href: '#contact' },
    secondaryCta: { label: 'See How It Works', href: '#how-it-works' },
    supportNote: 'Trades, quoting, scheduling, invoicing, follow-up, payment.',
  },
  problem: {
    title: 'Your business isn’t slow. Your operations are.',
    cards: [
      { icon: 'quotes', title: 'Quotes sent late', detail: 'jobs lost' },
      { icon: 'jobs', title: 'Jobs unorganised', detail: 'time wasted' },
      { icon: 'invoices', title: 'Invoices delayed', detail: 'cash stuck' },
      { icon: 'followups', title: 'Follow-ups missed', detail: 'money gone' },
    ],
    kicker: 'It’s not a work problem. It’s a system problem.',
  },
  flow: {
    title: 'Every job follows a system — not guesswork',
    description:
      'Most businesses lose money between these steps. We make sure nothing gets missed, delayed, or forgotten.',
    steps: ['Enquiry', 'Quotation', 'Onboarding', 'Scheduling', 'Invoicing', 'Follow-ups', 'Payment'],
    footer: 'No gaps. No confusion. Just a clean path from lead to cash.',
  },
  solution: {
    title: 'We run your back office end-to-end',
    description:
      'Need structure, follow-up, invoicing, and admin support without a full-time hire.',
    bullets: [
      'Quotes prepared and sent on time',
      'Jobs scheduled and coordinated',
      'Invoices issued fast',
      'Payment follow-up handled',
      'Reporting and compliance kept tidy',
    ],
    callout: 'You stay on the tools. We make sure the business runs properly.',
  },
  results: {
    title: 'What changes when your ops are fixed',
    cards: [
      { stat: '40+ hours saved', detail: '-> No more late nights doing admin' },
      { stat: '0 missed invoices', detail: '-> Cash flow becomes predictable' },
      { stat: '100% visibility', detail: '-> You always know what’s happening' },
      { stat: 'Faster job turnaround', detail: '-> More jobs completed, more revenue' },
    ],
  },
  howItWorks: {
    title: 'Simple. Structured. Done for you.',
    steps: [
      {
        number: '01',
        title: 'Setup',
        body: 'We build your quoting, scheduling, and invoicing structure.',
      },
      {
        number: '02',
        title: 'Audit',
        body: 'We identify where your current system is breaking.',
      },
      {
        number: '03',
        title: 'Optimise',
        body: 'We improve efficiency and remove bottlenecks.',
      },
      {
        number: '04',
        title: 'Run',
        body: 'Our team manages your daily operations.',
      },
    ],
    note: 'You don’t manage the system. We do.',
  },
  control: {
    title: 'Full control without doing the work',
    features: ['Admin support processes', 'Visual trackers', 'Reports and payments', 'Optional performance reviews'],
    callout: 'You’re not losing control. You’re finally getting it.',
    stat: {
      value: '98%',
      label: 'task accuracy',
      detail: 'Across quoting, invoicing, and payment workflows.',
    },
  },
  pricing: {
    title: 'From quote to payment — fully managed',
    description: 'On-the-tools help means less admin for you and more capacity to grow.',
    tiers: [
      {
        name: 'Tier 1 — Basic Control',
        subtitle: 'Get your financials structured',
        price: '$800',
        cadence: '/month',
        features: ['Invoice generation and send-outs', 'Payment reminder flow', 'Weekly admin visibility', 'Basic reporting'],
        callout: 'Best entry point',
        buttonLabel: 'Select Tier',
      },
      {
        name: 'Tier 2 — Operations Support',
        subtitle: 'Structured job flow across your business',
        price: '$1,200',
        cadence: '/month',
        features: [
          'Quote-to-invoice workflow support',
          'Job scheduling coordination',
          'Follow-up and reminder flow',
          'Payment tracking dashboard',
          'Priority issue triage',
        ],
        callout: 'Everything in Tier 1',
        buttonLabel: 'Select Tier',
      },
      {
        name: 'Tier 3 — Full Operational Control',
        subtitle: 'We run your entire backend system',
        price: '$1,600',
        cadence: '/month',
        features: [
          'Full admin coordination across jobs',
          'Invoice and cash collection ownership',
          'Weekly ops dashboard and reviews',
          'Client follow-up system',
          'Everything in Tier 2',
        ],
        callout: 'Most effective for admin-heavy businesses',
        buttonLabel: 'Get Full Control',
        featured: true,
        badge: 'Most Popular',
      },
    ],
    footnote: 'Most effective structure for teams juggling admin load, missed follow-up, or inconsistent handovers.',
  },
  objection: {
    title: '“Do I actually need this?”',
    body:
      'If you’re doing admin at night, missing invoices, or unsure where your money is going — you don’t need more effort. You need a system.',
  },
  trust: {
    title: 'Built for Australian Trades',
    items: [
      {
        title: 'Australian-based support',
        description: 'Clear communication, practical handovers, and local context for trade businesses.',
      },
      {
        title: 'Secure systems and safe process',
        description: 'Structured workflows, reliable follow-up, and documented job movement.',
      },
      {
        title: 'Consistent performance',
        description: 'The same repeatable system every job, every invoice, every follow-up.',
      },
    ],
  },
  finalCta: {
    title: 'Stop running your business the hard way',
    description: 'We’ll show you exactly what’s broken — and fix it.',
    reassurance: 'Takes 15 minutes. No obligation.',
    form: {
      name: 'ops-audit',
      buttonLabel: 'Book Free Ops Audit',
      fields: [
        { label: 'Full Name', name: 'full-name', type: 'text', placeholder: 'John Doe', autoComplete: 'name' },
        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@example.com', autoComplete: 'email' },
        { label: 'Business Name', name: 'business-name', type: 'text', placeholder: 'Doe Electrical', autoComplete: 'organization' },
      ],
    },
  },
  footer: {
    blurb: 'WeRunOps gives Australian trade businesses a cleaner operating system from enquiry to payment.',
    contentLinks: [
      { label: 'Home', href: '#home' },
      { label: 'Value', href: '#problem' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Results', href: '#results' },
    ],
    legalLinks: [
      { label: 'Privacy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
      { label: 'Policy', href: '#contact' },
    ],
    contact: [
      { label: 'Call', value: '1300 WERUNOPS' },
      { label: 'Email', value: 'ops@werunops.au' },
      { label: 'Support', value: 'Australia-wide trade operations support' },
    ],
  },
};
