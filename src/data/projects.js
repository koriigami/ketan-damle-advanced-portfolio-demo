/**
 * Deep case studies. Each project has multiple "chapters" that render as sticky
 * sections on the case-study page.
 */
export const projects = [
  {
    slug: 'lumina',
    title: 'Lumina',
    tagline: 'A calmer path to daily practice.',
    description:
      'Redesigning a meditation app so first-time users make it to session two — and stay.',
    tag: 'UX Case Study',
    industry: 'Wellness · iOS + Android',
    year: '2025',
    role: 'Lead UX Designer',
    duration: '12 weeks · Q2 2025',
    team: 'Solo lead, 1 PM, 2 engineers, 1 mindfulness teacher',
    stack: ['Figma', 'Rive', 'Notion', 'Dovetail', 'Amplitude'],
    accent: 'oklch(0.72 0.14 195)',
    cover:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=80',
    metrics: [
      { label: 'Session-2 return rate', value: '+62%', hint: '32% → 52% over 6 weeks' },
      { label: 'Onboarding drop-off', value: '−41%', hint: '68% → 40% D0 abandon' },
      { label: 'App Store rating', value: '4.8 ★', hint: 'up from 4.1' },
      { label: 'D30 retention', value: '2.3×', hint: 'weighted cohort lift' },
    ],
    chapters: [
      {
        id: 'context',
        eyebrow: '01 · Context',
        title: 'A quiet product with a loud onboarding.',
        body: [
          'Lumina had eight beautiful screens of onboarding before you could take a single breath. Users were being taxonomised — practice level, sleep goals, stress score — before the app had earned the right to ask.',
          'The team was hitting a wall: paid installs were growing, but 68% of new users never opened the app a second time. The room agreed the problem was retention. Nobody agreed why.',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80',
            caption: 'Before — the old 8-screen intake, tested against a 60s "first breath" alt',
          },
        ],
      },
      {
        id: 'research',
        eyebrow: '02 · Research',
        title: 'Fourteen diaries, one pattern.',
        body: [
          'We ran a two-week diary study with 14 users across three experience levels. Twice a day for the first 72 hours after install, they voice-noted us with a single sentence: what did the app feel like, right now.',
          'The pattern was clear by day three. Anyone who did an actual meditation on day zero — even 60 seconds — came back. Anyone who spent day zero answering questions did not.',
        ],
        quote: {
          text: '"I opened it, it asked me my goals, and I closed it. I don\'t know my goals yet. I wanted to meditate."',
          who: 'Mira, 34, marketing manager · Day 0 diary entry',
        },
        images: [
          {
            src: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=80',
            caption: 'Journey-map friction points, red = drop-off',
          },
        ],
      },
      {
        id: 'wireframes',
        eyebrow: '03 · Wireframes',
        title: 'Design the moment before the tap.',
        body: [
          'We drew 40 variations of the first-run screen and threw 34 of them out. What survived: one card, one button. Personalisation deferred until session three.',
          'The wireframes intentionally look boring. The bar we set was "would a non-designer trust this at 6am on a Tuesday?"',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
            caption: 'Round 4 · low-fi first-run flow, 6 screens shown',
          },
          {
            src: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1600&q=80',
            caption: 'Paper prototypes A/B/C, tested with 8 users',
          },
        ],
      },
      {
        id: 'ship',
        eyebrow: '04 · What shipped',
        title: 'A one-tap first breath.',
        body: [
          'The new first-run: your name, a 60-second guided session, and one gentle nudge to come back tomorrow. Everything else — reminders, teacher choice, goal-setting — moved to session three.',
          'The teacher we hired for the audio recorded 12 versions of the same script. We shipped the sixth. The one that sounded most like a friend on a phone call, not an app.',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&w=1600&q=80',
            caption: 'Session UI, ship candidate #4',
          },
        ],
      },
      {
        id: 'learn',
        eyebrow: '05 · Learnings',
        title: 'What I\'d do differently.',
        body: [
          'Ship the smallest first-run you can defend. Every "just one more question" cost us users we already paid to acquire.',
          'Voice-note diaries beat surveys, 10× over. People will not type "the app felt patronising", but they will absolutely say it aloud.',
          'Retention is a design problem before it is a growth problem. Marketing can bring the user; only the product can keep them.',
        ],
      },
    ],
  },
  {
    slug: 'nova-ui',
    title: 'Nova UI',
    tagline: 'One system, seven products.',
    description:
      'A design system built for a 40-person product org to ship consistent UI at 3× the pace.',
    tag: 'Design System',
    industry: 'B2B SaaS',
    year: '2024',
    role: 'Design Systems Lead',
    duration: '9 months',
    team: '3 designers, 2 engineers, 1 writer',
    stack: ['Figma', 'Tokens Studio', 'Storybook', 'React + CSS vars', 'Chromatic'],
    accent: 'oklch(0.7 0.16 300)',
    cover:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=80',
    metrics: [
      { label: 'Design-to-ship time', value: '3×', hint: 'measured over 12 features' },
      { label: 'Components adopted', value: '146', hint: 'shipped in v1' },
      { label: 'Design-debt tickets', value: '−78%', hint: 'quarter over quarter' },
      { label: 'Teams using v1', value: '7 / 7', hint: 'full org adoption' },
    ],
    chapters: [
      {
        id: 'audit',
        eyebrow: '01 · The audit',
        title: 'We found 47 buttons.',
        body: [
          'Seven product teams, seven ways of doing everything. The audit — 3 weeks, 1,400 UI instances — surfaced 47 distinct buttons, 22 modal patterns, and 11 different toggle switches.',
          'The teams weren\'t sloppy. They were surviving. Every "just for now" component eventually became a permanent-for-nobody component.',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=1600&q=80',
            caption: 'Component audit board — one wall, three weeks',
          },
        ],
      },
      {
        id: 'tokens',
        eyebrow: '02 · Tokens',
        title: 'A token architecture, not a component library.',
        body: [
          'We started with primitives, not components. Colour, type, space, motion, elevation — every design decision expressed as a token. Components would come from tokens, not the other way around.',
          'The token layer let one theme swap change the entire product surface. Dark mode was not a project. It was a Wednesday.',
        ],
        quote: {
          text: '"For the first time I could ship a feature in a day and know it would look right in every corner of the app."',
          who: 'Priya, senior engineer · retro after v1 launch',
        },
      },
      {
        id: 'components',
        eyebrow: '03 · Components',
        title: 'Contracts, not templates.',
        body: [
          'Every component ships with a written contract: what it does, what it does not, and the failure modes we accept. Writing them down forced us to have arguments early instead of in code review.',
          'Figma and code were built in lockstep — a component was not "done" until both sides passed the same story matrix in Chromatic.',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=1600&q=80',
            caption: 'Button matrix — 4 sizes × 6 intents × 3 states',
          },
          {
            src: 'https://images.unsplash.com/photo-1611175694989-4870fafa4494?auto=format&fit=crop&w=1600&q=80',
            caption: 'Storybook, Chromatic diffs pinned per PR',
          },
        ],
      },
      {
        id: 'adoption',
        eyebrow: '04 · Adoption',
        title: 'Make the right thing the easy thing.',
        body: [
          'A design system that\'s slower than copy-paste always loses. We optimised for time-to-first-successful-use: docs on the same URL as the Figma preview, one-line install, migration codemods.',
          'Adoption hit 100% of teams by month six — not because of a mandate, but because it was faster.',
        ],
      },
      {
        id: 'learn',
        eyebrow: '05 · Learnings',
        title: 'What survives the roadmap.',
        body: [
          'Write the contract, then draw the component. Behaviour ambiguity is 90% of the bugs.',
          'A design system is a product with a roadmap, not a Figma file. Treat it like one, or it will rot in six months.',
          'Ship v0 loud, v1 quiet. Adoption comes from momentum you help teams see.',
        ],
      },
    ],
  },
  {
    slug: 'kaya',
    title: 'Kaya',
    tagline: 'Personal finance that feels personal.',
    description:
      'A mobile-first banking experience for freelancers who never fit inside a spreadsheet.',
    tag: 'Product Design',
    industry: 'Fintech · mobile',
    year: '2024',
    role: 'Product Designer',
    duration: '6 months',
    team: 'Squad of 6 · design, PM, 3 eng, 1 data',
    stack: ['Figma', 'ProtoPie', 'Amplitude', 'React Native', 'PostHog'],
    accent: 'oklch(0.72 0.17 45)',
    cover:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=80',
    metrics: [
      { label: 'Weekly active users', value: '+124%', hint: '3-month post-launch' },
      { label: 'Feature discovery', value: '+87%', hint: 'unique features used per user' },
      { label: 'Support tickets', value: '−34%', hint: 'per-user contact rate' },
      { label: 'NPS shift', value: '+41 pts', hint: 'from 12 to 53' },
    ],
    chapters: [
      {
        id: 'who',
        eyebrow: '01 · Who we\'re designing for',
        title: 'The spreadsheet-and-a-prayer freelancer.',
        body: [
          'We interviewed 22 freelancers across six countries. What they had in common was not their job — it was their finance stack: a business bank, a personal bank, an app for expenses, and a spreadsheet holding it all together.',
          'None of the banking apps assumed variable income. All of them assumed a fixed salary date and a stable base. That mismatch was the entire problem.',
        ],
        quote: {
          text: '"My income lands whenever a client feels like it. My rent doesn\'t care. That gap is my whole life."',
          who: 'Sam, freelance illustrator · Lisbon',
        },
      },
      {
        id: 'insight',
        eyebrow: '02 · The insight',
        title: 'Treat variable income as the default.',
        body: [
          'The reframe unlocked everything: instead of showing this month\'s balance, show the next 30 days as a story with a beginning, middle, and end. What will land. What must go out. What\'s left to breathe.',
          'We prototyped four income-smoothing models with real transaction data from beta users. The winner wasn\'t the most powerful — it was the one people could explain to a friend.',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1600&q=80',
            caption: 'Income-smoothing models tested against 3 months of real data',
          },
        ],
      },
      {
        id: 'home',
        eyebrow: '03 · The home screen',
        title: 'One card that tells the truth.',
        body: [
          'The home became a single card: today, this week, next 30 days. No graphs. Words and one line. We ran 5 rounds of usability testing before we let ourselves add anything else to the screen.',
          'The card writes itself sentences ("You\'re on track through the 24th, one client behind") using the same rule engine that powers alerts. One brain, two surfaces.',
        ],
        images: [
          {
            src: 'https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?auto=format&fit=crop&w=1600&q=80',
            caption: 'Home card — final ship, 3 states across the month',
          },
          {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
            caption: 'Rule engine → sentence generator, tested with 60+ real users',
          },
        ],
      },
      {
        id: 'ship',
        eyebrow: '04 · Weekly ship',
        title: 'Twelve weeks, twelve builds.',
        body: [
          'Closed beta of 200 users, weekly ship, weekly interview. No monthly release cycles, no dark launches, no "come back in a quarter". Users saw their feedback live within days.',
          'That cadence taught us more than a year of pre-launch research would have. Watching a real person react to your last edit is the fastest teacher I know.',
        ],
      },
      {
        id: 'learn',
        eyebrow: '05 · Learnings',
        title: 'For the next fintech I touch.',
        body: [
          'Default assumptions are the whole product. Change what you consider "normal" and you change every screen downstream.',
          'A rule engine that generates natural-language sentences is a superpower. Consistency across surfaces basically comes free.',
          'Ship to a real cohort every week. Beta feedback stops being a document and starts being a habit.',
        ],
      },
    ],
  },
]

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug)
