/**
 * Deep case studies. Each chapter renders a body of paragraphs, an optional
 * pull-quote, images, and any number of typed UX "blocks":
 *   compare | persona | empathy | journey | ia | flow | heuristics
 *   wireframes | usability | images | quote
 */

// ─── Persona photo helper (unsplash portraits) ────────────────────────────────
const p = (id, w = 400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
// wireframe / sketch swatches
const sw = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const projects = [
  // ───────────────────────────────────────────────────────────
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
      },
      {
        id: 'research',
        eyebrow: '02 · Research',
        title: 'Fourteen diaries, three archetypes.',
        body: [
          'We ran a two-week diary study with 14 users across three experience levels. Twice a day for the first 72 hours after install, they voice-noted us with a single sentence: what did the app feel like, right now.',
          'The pattern was clear by day three. Anyone who did an actual meditation on day zero — even 60 seconds — came back. Anyone who spent day zero answering questions did not.',
        ],
        blocks: [
          {
            type: 'personas',
            items: [
              {
                id: 1,
                name: 'Mira',
                age: 34,
                role: 'Marketing manager',
                location: 'Mumbai',
                photo: p('photo-1544005313-94ddf0286df2'),
                quote: "I opened it, it asked me my goals, and I closed it. I don't know my goals yet — I wanted to meditate.",
                goals: [
                  'Ten quiet minutes before her first meeting',
                  'Fall asleep without doomscrolling',
                ],
                frustrations: [
                  'Being asked to commit before she has tried anything',
                  'App streaks that guilt-trip her when she misses a day',
                ],
                techLevel: 72,
              },
              {
                id: 2,
                name: 'Rahul',
                age: 41,
                role: 'Product manager & long-time practitioner',
                location: 'Bengaluru',
                photo: p('photo-1633332755192-727a05c4013d'),
                quote: 'I already have a teacher. I want a tool, not a coach.',
                goals: [
                  'A no-frills timer with intervals',
                  'Session history that syncs with Apple Health',
                ],
                frustrations: [
                  'Being handled like a beginner every launch',
                  'Content he cannot skip or fast-forward',
                ],
                techLevel: 92,
              },
              {
                id: 3,
                name: 'Aisha',
                age: 22,
                role: 'Design student',
                location: 'Ahmedabad',
                photo: p('photo-1573496359142-b8d87734a5a2'),
                quote: 'I have never meditated. I do not know what any of these words mean.',
                goals: [
                  'Try five minutes without being embarrassed',
                  'Understand what a "body scan" actually is',
                ],
                frustrations: [
                  'Jargon presented as if she already knows it',
                  'Free trials that ask for a card upfront',
                ],
                techLevel: 60,
              },
            ],
          },
          {
            type: 'empathy',
            subject: 'First-time user, day 0',
            data: {
              says: [
                'I want to breathe, not fill a form.',
                'Just show me what the app does.',
              ],
              thinks: [
                'Am I doing this right?',
                'Everyone else in this category asks fewer questions.',
              ],
              does: [
                'Skips past onboarding when the option appears',
                'Closes the app after the third question',
              ],
              feels: [
                'Slightly patronised',
                'Impatient — the mood that brought them here is thinning',
              ],
            },
          },
        ],
      },
      {
        id: 'journey',
        eyebrow: '03 · Journey',
        title: 'The first 72 hours, mapped.',
        body: [
          'We drew the current-state journey against the diary data. The emotional arc was doing most of the storytelling — a slow drift from "curious" to "resentful" between the first tap and the fifth question.',
          'Every intervention point below is a place we later made a design decision.',
        ],
        blocks: [
          {
            type: 'journey',
            stages: [
              { stage: 'Install', action: 'Downloads app', thought: 'This might help', emotion: 1 },
              { stage: 'Onboarding', action: 'Enters name & goals', thought: 'Fine, but a lot', emotion: 0 },
              { stage: 'Persona quiz', action: 'Rates stress, sleep, level', thought: 'Why does this need answers?', emotion: -1 },
              { stage: 'Paywall glimpse', action: 'Sees "start free trial"', thought: 'I haven\'t tried anything yet', emotion: -2 },
              { stage: 'Home', action: 'Lands on library', thought: '80 things — pick one, quickly', emotion: -1 },
              { stage: 'First session', action: 'Plays 5-min breath', thought: 'Oh — this is nice', emotion: 1 },
              { stage: 'D1 nudge', action: 'Push at 8am', thought: 'Maybe again tomorrow', emotion: 1 },
            ],
          },
        ],
      },
      {
        id: 'wireframes',
        eyebrow: '04 · Wireframes',
        title: 'Design the moment before the tap.',
        body: [
          'We drew 40 variations of the first-run screen and threw 34 out. What survived: one card, one button. Personalisation deferred until session three.',
          'The wireframes intentionally look boring. The bar we set was "would a non-designer trust this at 6am on a Tuesday?"',
        ],
        blocks: [
          {
            type: 'wireframes',
            columns: 3,
            items: [
              { src: sw('photo-1517842645767-c639042777db'), label: 'Round 1 — full intake', note: 'What we shipped originally' },
              { src: sw('photo-1454165804606-c3d57bc86b40'), label: 'Round 3 — split intake', note: 'Ask after first success' },
              { src: sw('photo-1499750310107-5fef28a66643'), label: 'Round 5 — one-tap', note: 'Ships to beta' },
            ],
          },
        ],
      },
      {
        id: 'ship',
        eyebrow: '05 · What shipped',
        title: 'Before / after.',
        body: [
          'The new first-run: your name, a 60-second guided session, and one gentle nudge to come back tomorrow. Everything else — reminders, teacher choice, goal-setting — moved to session three.',
          'Drag the slider below to compare the two flows at the same moment: the second screen after tap-to-open.',
        ],
        blocks: [
          {
            type: 'compare',
            a: sw('photo-1517842645767-c639042777db', 1400),
            b: sw('photo-1470116945706-e6bf5d5a53ca', 1400),
            aLabel: 'Before',
            bLabel: 'After',
            caption: 'Second screen after tap-to-open · left = original intake, right = one-tap "first breath"',
          },
        ],
      },
      {
        id: 'usability',
        eyebrow: '06 · Usability round',
        title: 'What eight users showed us.',
        body: [
          'Moderated, remote, eight participants. Four tasks. What we cared about was less "did they finish?" and more "what did they say aloud while trying?" Times and successes below; the severity column is my read after coding the transcripts.',
        ],
        blocks: [
          {
            type: 'usability',
            participants: 8,
            items: [
              { task: 'Start your first meditation from a cold open', success: 100, time: '11s', severity: 0, note: 'One-tap path — no failures' },
              { task: 'Change the teacher voice mid-session', success: 62, time: '42s', severity: 2, note: 'Settings icon read as "close"; needs an in-session control' },
              { task: 'Find last week\'s history', success: 75, time: '38s', severity: 1, note: 'Two users expected a calendar; we showed a list' },
              { task: 'Set a daily reminder for 8:45am', success: 88, time: '29s', severity: 1, note: 'Time-picker interaction confused one participant on iOS 17' },
            ],
          },
        ],
      },
      {
        id: 'learn',
        eyebrow: '07 · Learnings',
        title: "What I'd do differently.",
        body: [
          'Ship the smallest first-run you can defend. Every "just one more question" cost us users we already paid to acquire.',
          'Voice-note diaries beat surveys, 10× over. People will not type "the app felt patronising", but they will absolutely say it aloud.',
          'Retention is a design problem before it is a growth problem. Marketing can bring the user; only the product can keep them.',
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
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
        eyebrow: '01 · Audit',
        title: 'We found 47 buttons.',
        body: [
          'Seven product teams, seven ways of doing everything. The audit — 3 weeks, 1,400 UI instances — surfaced 47 distinct buttons, 22 modal patterns, and 11 different toggle switches.',
          'The teams weren\'t sloppy. They were surviving. Every "just for now" component eventually became a permanent-for-nobody component.',
        ],
      },
      {
        id: 'ia',
        eyebrow: '02 · Information architecture',
        title: 'A taxonomy the whole org agreed to.',
        body: [
          'Before shipping any components we mapped the system\'s IA — how a designer or engineer would find the thing they needed. We used the same top-level nouns as the product surfaces, so no one had to translate.',
        ],
        blocks: [
          {
            type: 'ia',
            root: {
              label: 'Nova UI',
              children: [
                {
                  label: 'Foundations',
                  children: [
                    { label: 'Colour' },
                    { label: 'Type' },
                    { label: 'Space' },
                    { label: 'Motion' },
                  ],
                },
                {
                  label: 'Primitives',
                  children: [
                    { label: 'Button' },
                    { label: 'Input' },
                    { label: 'Popover' },
                  ],
                },
                {
                  label: 'Patterns',
                  children: [
                    { label: 'Empty state' },
                    { label: 'Data table' },
                    { label: 'Wizard' },
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        id: 'components',
        eyebrow: '03 · Components',
        title: 'Explorations before contracts.',
        body: [
          'Every component ships with a written contract: what it does, what it does not, and the failure modes we accept. Writing them down forced us to have arguments early instead of in code review.',
          'Below: three UI explorations for the button matrix before we picked a direction. Sketchbook screenshots, not final art.',
        ],
        blocks: [
          {
            type: 'wireframes',
            columns: 3,
            items: [
              { src: sw('photo-1611175694989-4870fafa4494'), label: 'Exploration A', note: 'Sharp corners, single radius' },
              { src: sw('photo-1613909207039-6b173b755cc1'), label: 'Exploration B', note: 'Nested radius, softer feel' },
              { src: sw('photo-1618788372246-79faff0c3742'), label: 'Exploration C · shipped', note: 'Radius as a token, per surface' },
            ],
          },
        ],
      },
      {
        id: 'heuristics',
        eyebrow: '04 · Heuristics eval',
        title: 'The v0 self-review before we asked others.',
        body: [
          'Before opening v0 for feedback across the org, we scored ourselves against Nielsen\'s 10. Anything below 4 got a follow-up ticket before the launch note went out.',
        ],
        blocks: [
          {
            type: 'heuristics',
            items: [
              { n: 1, name: 'Visibility of system status', score: 4, verdict: 'Toast + skeleton coverage; loading contracts documented' },
              { n: 2, name: 'Match between system and real world', score: 5, verdict: 'Component names align with product-team language' },
              { n: 3, name: 'User control & freedom', score: 4, verdict: 'Undo everywhere except destructive irreversibles' },
              { n: 4, name: 'Consistency & standards', score: 5, verdict: 'Tokens enforce it; Chromatic catches drift' },
              { n: 5, name: 'Error prevention', score: 3, verdict: 'Form errors OK, but destructive flows need confirmations' },
              { n: 6, name: 'Recognition over recall', score: 4, verdict: 'Iconography paired with labels everywhere' },
              { n: 7, name: 'Flexibility & efficiency', score: 3, verdict: 'Keyboard shortcuts missing in the wizard' },
              { n: 8, name: 'Aesthetic & minimalist design', score: 5, verdict: 'Signature restraint; scale of decisions surfaced only in Pro' },
              { n: 9, name: 'Help users recognise & recover errors', score: 4, verdict: 'Error copy contract in the design system doc' },
              { n: 10, name: 'Help & documentation', score: 4, verdict: 'Docs live at the same URL as the Figma preview' },
            ],
          },
        ],
      },
      {
        id: 'adoption',
        eyebrow: '05 · Adoption',
        title: 'Make the right thing the easy thing.',
        body: [
          'A design system that\'s slower than copy-paste always loses. We optimised for time-to-first-successful-use: docs on the same URL as the Figma preview, one-line install, migration codemods.',
          'Adoption hit 100% of teams by month six — not because of a mandate, but because it was faster.',
        ],
        quote: {
          text: '"For the first time I could ship a feature in a day and know it would look right in every corner of the app."',
          who: 'Priya, senior engineer · retro after v1 launch',
        },
      },
      {
        id: 'learn',
        eyebrow: '06 · Learnings',
        title: 'What survives the roadmap.',
        body: [
          'Write the contract, then draw the component. Behaviour ambiguity is 90% of the bugs.',
          'A design system is a product with a roadmap, not a Figma file. Treat it like one, or it will rot in six months.',
          'Ship v0 loud, v1 quiet. Adoption comes from momentum you help teams see.',
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────
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
        id: 'flow',
        eyebrow: '02 · User flow',
        title: 'The "next 30 days" flow.',
        body: [
          'The core reframe was rendered as a flow before it was rendered as a screen. Below: what happens the first time a user opens Kaya after their bank connects.',
        ],
        blocks: [
          {
            type: 'flow',
            nodes: [
              { type: 'start', label: 'Bank connected' },
              { type: 'step', label: 'Import 90 days', note: 'PSD2 sync' },
              { type: 'step', label: 'Detect income pattern' },
              { type: 'decision', label: 'Variable income?', note: 'Yes for 84% of users' },
              { type: 'step', label: 'Draft "next 30 days" plan' },
              { type: 'step', label: 'Explain in one card' },
              { type: 'end', label: 'Home ready' },
            ],
          },
        ],
      },
      {
        id: 'journey',
        eyebrow: '03 · Journey',
        title: 'A month, felt.',
        body: [
          'Journey-mapping was less about steps and more about the emotional arc of a variable-income month. Rent week is a canyon; the follow-up invoice is a summit. The product had to breathe with that.',
        ],
        blocks: [
          {
            type: 'journey',
            stages: [
              { stage: 'Week 1', action: 'Two invoices land', thought: 'On track', emotion: 2 },
              { stage: 'Week 2', action: 'Rent + subscriptions', thought: 'Fine, thin', emotion: 0 },
              { stage: 'Week 3', action: 'Client delays', thought: 'Uh-oh', emotion: -2 },
              { stage: 'Week 4', action: 'Delayed invoice lands', thought: 'Made it', emotion: 1 },
              { stage: 'Reset', action: 'New month projection', thought: 'Where am I actually?', emotion: 0 },
            ],
          },
        ],
      },
      {
        id: 'home',
        eyebrow: '04 · The home screen',
        title: 'One card that tells the truth.',
        body: [
          'The home became a single card: today, this week, next 30 days. No graphs. Words and one line. Below, drag the slider to compare our mid-fi wireframe with the shipped high-fidelity screen — same anatomy, different visual weight.',
        ],
        blocks: [
          {
            type: 'compare',
            a: sw('photo-1517842645767-c639042777db', 1400),
            b: sw('photo-1616514197671-15d99ce7a6f8', 1400),
            aLabel: 'Wireframe',
            bLabel: 'Hi-fi',
            caption: 'Home card · wireframe (left) vs. shipped hi-fi (right)',
          },
        ],
      },
      {
        id: 'ship',
        eyebrow: '05 · Weekly ship',
        title: 'Twelve weeks, twelve builds.',
        body: [
          'Closed beta of 200 users, weekly ship, weekly interview. No monthly release cycles, no dark launches, no "come back in a quarter". Users saw their feedback live within days.',
          'That cadence taught us more than a year of pre-launch research would have. Watching a real person react to your last edit is the fastest teacher I know.',
        ],
      },
      {
        id: 'learn',
        eyebrow: '06 · Learnings',
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
