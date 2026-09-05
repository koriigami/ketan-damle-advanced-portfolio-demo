/**
 * Real projects ported from koriigami.com (foliowebsite_v2/src/data/projects.ts
 * and per-project route pages). Extended into chapter+blocks shape used by the
 * advanced demo's CaseStudy page.
 *
 * Chapters can carry any of: body[], quote, images[], blocks[]
 * Block types: compare | personas | empathy | journey | ia | flow
 *              | heuristics | wireframes | usability | images | videos | stats
 */

export const projects = [
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'qwark',
    title: 'Qwark',
    tagline: 'Building a 0-to-1 fintech from a 4-person team.',
    description:
      'Founding designer for a bootstrapped wealth-management platform. Led user research, design systems, developer handoff, brand identity, and product strategy.',
    tag: 'Product Design · 0-to-1',
    industry: 'Fintech · Wealth Management',
    year: '2023 → Present',
    role: 'Founding Designer & Product Lead',
    duration: 'Oct 2023 → Present',
    team: '4 people — Designer/PM (me), Frontend Dev, Full-Stack Dev, CEO',
    stack: ['Figma', 'Figma Variables + Tokens', 'Material Design 3', 'React', 'Amplitude'],
    accent: 'oklch(0.62 0.19 265)',
    cover: '/projects/qwark/cover.png',
    live: 'https://github.com/koriigami/variable-mode-injector',
    metrics: [
      { label: 'User Interviews', value: '50+', hint: 'validating product direction' },
      { label: 'Survey Responses', value: '800+', hint: 'quantitative research' },
      { label: 'User Testing Sessions', value: '22', hint: 'before public launch' },
      { label: 'Design Tokens Shipped', value: '40+', hint: 'across a custom Figma → code system' },
    ],
    chapters: [
      {
        id: 'context',
        eyebrow: '01 · Context',
        title: 'Professional advice starts at ₹50 lakh. Everyone else is on their own.',
        body: [
          "In India, portfolio managers and wealth advisors only work with clients who maintain at least ₹50 lakh. Everyone else — including well-paid professionals in Tier 1 and Tier 2 cities — is left figuring it out alone. Most end up copying someone's portfolio from Twitter or Reddit with no sense of when to rebalance, when to exit, or how any of it connects to what they actually want the money for.",
          'Qwark is a subscription-based fintech platform that provides goal-based financial planning for this underserved segment. Instead of managing abstract portfolios, users create "journeys" tied to real goals: a house, a wedding, their kid\'s education. The subscription model replaces the traditional AUM percentage, making proper advisory accessible without a ₹50 lakh gate.',
        ],
      },
      {
        id: 'role',
        eyebrow: '02 · My role',
        title: 'The only designer on a four-person team.',
        body: [
          'I was the only designer on a 4-person team, which meant I did everything from user research and branding to writing PRDs and negotiating vendor pricing for KYC and Account Aggregator integrations.',
          'I ran 50+ user interviews, designed every screen in the app, built a design system on top of Material Design 3, open-sourced a Figma plugin for developer handoff, and tested the product with 22 real users before launch.',
        ],
      },
      {
        id: 'flow',
        eyebrow: '03 · System-wide user flow',
        title: 'One diagram that let the whole team read the product.',
        body: [
          "I mapped every user flow as a multi-lane diagram connecting user actions to frontend screens, backend states, API calls, and analytics events. On a 4-person team, everyone needed to see how their piece connected to the user's experience.",
          'The dev could trace which API fires when, the CEO could follow the business logic, and I could spot where we needed tracking.',
        ],
        blocks: [
          {
            type: 'images',
            items: [
              { src: '/projects/qwark/user-flow.png', caption: 'End-to-end multi-lane user flow — user action ↔ screen ↔ backend state ↔ API ↔ analytics event' },
              { src: '/projects/qwark/user-flow-legend.png', caption: 'Legend for the user-flow lanes' },
            ],
          },
        ],
      },
      {
        id: 'onboarding',
        eyebrow: '04 · Onboarding',
        title: 'From "who are you?" to a live portfolio in under three minutes.',
        body: [
          'KYC in India is a landmine — the traditional flow can take days. We combined PAN-based KYC with the Account Aggregator framework, so users could link a bank and start planning in the same session they opened the app.',
        ],
        blocks: [
          {
            type: 'images',
            items: [
              { src: '/projects/qwark/screens/0_Welcome-Screen.png', caption: 'Welcome — one card, one action' },
              { src: '/projects/qwark/screens/1_Enter-PAN.png', caption: 'PAN entry kicks off KYC' },
              { src: '/projects/qwark/screens/2_Select-Banks.png', caption: 'Bank selection · Account Aggregator' },
              { src: '/projects/qwark/screens/4_Consent-Flow.png', caption: 'Consent drawer over discovery' },
            ],
          },
        ],
      },
      {
        id: 'journeys',
        eyebrow: '05 · Goal journeys',
        title: 'Portfolios wrapped around the goal, not the ticker.',
        body: [
          'Every screen we drew re-asked the same question: what is this money for? Instead of surfacing raw allocations, we let users create "journeys" — a house, a wedding, a kid\'s education — and pinned the portfolio to that outcome.',
          'The Target Calculator quietly does the math a person would otherwise avoid. The Journey Overview replaces a spreadsheet.',
        ],
        blocks: [
          {
            type: 'images',
            items: [
              { src: '/projects/qwark/screens/Calculate-Target-Amount.png', caption: 'Target calculation for a goal' },
              { src: '/projects/qwark/screens/Journeys.png', caption: 'Journey overview — all active goals in one view' },
              { src: '/projects/qwark/screens/New Dashboard.png', caption: 'Portfolio dashboard' },
              { src: '/projects/qwark/screens/Cashflow.png', caption: 'Cashflow tracking' },
            ],
          },
        ],
      },
      {
        id: 'system',
        eyebrow: '06 · Design system',
        title: 'Right-sized Material Design 3.',
        body: [
          "I took what worked from Material Design 3 and built custom solutions where it added more complexity than we needed. Colour, type, motion, and elevation live as Figma Variables and translate 1:1 to CSS custom properties.",
          'The Variable Mode Injector — the open-source Figma plugin I wrote — plugs the last-mile gap in that translation.',
        ],
      },
      {
        id: 'reflections',
        eyebrow: '07 · Reflections',
        title: 'What Qwark taught me.',
        body: [
          "Design for trust in fintech. People are cautious with new financial products, especially when real money is on the line. Every design decision had to earn credibility through clear language, transparent processes, and honest complexity.",
          'Build tools when the pain is real. The Variable Mode Injector plugin started as frustration with an actual workflow problem. Building for real pain, not hypothetical use cases, makes better tools.',
          'Doing PM work made me a better designer. Negotiating with vendors, reading API docs, and writing PRDs taught me to think past the screen. Understanding business and technical constraints changed how I approach design problems.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'pcos-femcare',
    title: 'PCOSync',
    tagline: 'Breaking the silence around PCOS.',
    description:
      'A UX research case study exploring how to help women with PCOS connect with fellow patients and empathetic gynecologists to reduce isolation and improve mental-health outcomes.',
    tag: 'UX Research Case Study',
    industry: 'Healthcare · Women\'s Health',
    year: '2022',
    role: 'UX Designer & Researcher',
    duration: '5 weeks · Solo (course project)',
    team: 'Solo project',
    stack: ['Figma', 'Miro', 'OptimalSort', 'Google Forms'],
    accent: 'oklch(0.72 0.14 355)',
    cover: '/projects/pcos/cover-bento.png',
    metrics: [
      { label: 'Women affected', value: '1 in 8', hint: 'globally' },
      { label: 'Undiagnosed', value: '70%', hint: "don't know they have it" },
      { label: 'Depression risk', value: '2–3×', hint: 'vs. women without PCOS' },
      { label: 'Interviews conducted', value: '13', hint: 'across 4 stakeholder groups' },
    ],
    chapters: [
      {
        id: 'why',
        eyebrow: '01 · Why this project',
        title: 'When my sister was diagnosed, I thought her story was an exception.',
        quote: {
          text: "When my sister was diagnosed with PCOS, I saw firsthand the daily health challenges and the silent mental-health toll it took. At the time, I thought her story was an exception.",
          who: 'Personal note',
        },
        body: [
          "It wasn't until I started talking to people that my perspective shattered. One by one — my cousins, my close friends, and other women in my life revealed that they too had been diagnosed. They were all fighting the same battles, but completely in private. I had no idea.",
          "I realised the core of the problem wasn't just medical — it was the profound isolation that came from a condition no one was talking about. This project is my attempt to break that silence.",
        ],
      },
      {
        id: 'research',
        eyebrow: '02 · Listening to real stories',
        title: '13 interviews across four stakeholder groups.',
        body: [
          'I conducted qualitative research with 13 participants across 4 stakeholder groups to understand the full ecosystem of PCOS care — young patients newly diagnosed, women managing PCOS long-term, mothers of diagnosed daughters, and practising gynecologists.',
        ],
        blocks: [
          {
            type: 'images',
            items: [
              { src: '/projects/pcos/qualitative-research.png', caption: 'Interview scripts, one per stakeholder group' },
            ],
          },
        ],
      },
      {
        id: 'insights',
        eyebrow: '03 · What I found',
        title: 'The physical symptoms were never the whole problem.',
        body: [
          "Every interview surfaced something the medical literature had understated: PCOS is a mental-health condition dressed as an endocrine one. Below are the six patterns that appeared across almost every conversation.",
        ],
        blocks: [
          {
            type: 'insightGrid',
            items: [
              { title: 'Mental health is overlooked', text: "Almost all interviewees experienced anxiety, depression, low self-esteem. Parents and even some doctors weren't aware of this connection." },
              { title: '"What" without "how"', text: "Gynecologists recommend a healthy diet and exercise, but don't explain how to actually implement these changes in daily life." },
              { title: 'Doctor-shopping', text: "Most women switched gynecologists at least twice, often starting with family friends who weren't the right fit." },
              { title: 'Body-shaming is rampant', text: "The majority reported body-shaming from family or friends, significantly impacting mental health." },
              { title: 'Low awareness at diagnosis', text: "Most adolescents didn't know what PCOS was — despite its prevalence." },
              { title: 'PCOS is a vicious cycle', text: 'Obesity causes PCOS; PCOS induces obesity. Stress triggers recurrence. Lifestyle change is the only breakthrough point.' },
            ],
          },
        ],
      },
      {
        id: 'personas',
        eyebrow: '04 · Personas',
        title: 'Four stakeholders, four different jobs to be done.',
        body: [
          'Every persona is composited from the interviews. Same condition, four completely different jobs to be done.',
        ],
        blocks: [
          {
            type: 'personas',
            items: [
              {
                id: 1,
                name: 'Juilee Patil',
                age: 17,
                role: 'Student',
                location: 'Pune',
                photo: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=400&q=80',
                quote: 'There were times when I felt constantly anxious and depressed but could not tell anyone.',
                goals: [
                  'Understand what PCOS actually is and does',
                  'Not be embarrassed by weight and skin changes',
                  'Talk to someone her age who also has it',
                ],
                frustrations: [
                  "Doctors giving her a list of things she doesn't know how to do",
                  'Feeling completely alone with a common condition',
                ],
                techLevel: 78,
              },
              {
                id: 2,
                name: 'Tanvi Desai',
                age: 23,
                role: 'Senior Analyst',
                location: 'Mumbai',
                photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
                quote: 'My gynac gave me very basic information and told me to google about PCOS on my own.',
                goals: [
                  "Keep her PCOS regulated with lifestyle",
                  'Find a doctor who explains, not lectures',
                  'Compare notes with other managed patients',
                ],
                frustrations: [
                  'Copy-paste advice from generic apps',
                  'No trustworthy way to spot a doctor she can talk to',
                ],
                techLevel: 90,
              },
              {
                id: 3,
                name: 'Renuka Joshi',
                age: 44,
                role: 'Career counsellor & parent',
                location: 'Nagpur',
                photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
                quote: "I know what PCOS is — I don't know what my daughter needs from me.",
                goals: [
                  "Support her daughter without hovering",
                  "Understand the mental-health side she can't see",
                ],
                frustrations: [
                  "No parent-facing content anywhere",
                  'Feeling shut out of a condition she wants to help with',
                ],
                techLevel: 60,
              },
              {
                id: 4,
                name: 'Dr. Mangala Joshi',
                age: 52,
                role: 'Consultant gynecologist',
                location: 'Pune',
                photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
                quote: 'I can tell them what to change. I can\'t make them believe it will work.',
                goals: [
                  'Reverse early-stage PCOS through lifestyle where possible',
                  'Reach patients between appointments',
                ],
                frustrations: [
                  'Low patient compliance with lifestyle advice',
                  'No shared vocabulary between her and her patients',
                ],
                techLevel: 55,
              },
            ],
          },
          {
            type: 'empathy',
            subject: 'First-diagnosis patient',
            data: {
              says: [
                'I googled it, and it made everything worse.',
                'Nobody I know has this.',
              ],
              thinks: [
                'Is this my fault?',
                "Am I supposed to figure the diet out on my own?",
              ],
              does: [
                'Reads WebMD at 1 a.m.',
                "Doesn't tell her mother for weeks",
              ],
              feels: [
                'Ashamed of a body change she didn\'t cause',
                'Isolated in a room where 1 in 8 also has it',
              ],
            },
          },
        ],
      },
      {
        id: 'ia',
        eyebrow: '05 · Information architecture',
        title: 'Card-sorted with 8 participants, then drawn.',
        body: [
          'I used open- and closed-card-sorting with 8 participants to validate how users mentally grouped features like Community, Consultations, and Profile. The site map came out of that, not the other way around.',
        ],
        blocks: [
          {
            type: 'ia',
            root: {
              label: 'PCOSync',
              children: [
                { label: 'Home', children: [{ label: 'Today' }, { label: 'Symptoms' }] },
                { label: 'Self Care', children: [{ label: 'Diet' }, { label: 'Movement' }] },
                { label: 'Community', children: [{ label: 'Groups' }, { label: 'Ask' }] },
                { label: 'Consultations', children: [{ label: 'Doctors' }, { label: 'Book' }] },
                { label: 'Profile' },
              ],
            },
          },
          {
            type: 'images',
            items: [
              { src: '/projects/pcos/card-sorting.png', caption: 'Open + closed card-sort with 8 participants' },
              { src: '/projects/pcos/information-architecture.png', caption: 'Detailed information architecture across 5 top-level sections' },
            ],
          },
        ],
      },
      {
        id: 'competitive',
        eyebrow: '06 · Competitive analysis',
        title: 'Five apps, one honest gap.',
        body: [
          "I audited 5 competitors — 2 PCOS-specific (MyAva, Simone), 3 women's-health-adjacent (Uvi Health, Flo, Practo) — across first-impressions, features, accessibility, navigation, and brand identity. Every one of them was missing the same thing: emotional support and community.",
        ],
        blocks: [
          {
            type: 'images',
            items: [
              { src: '/projects/pcos/competitor-analysis.png', caption: 'Comparative UX audit — 5 competitors, 5 axes' },
            ],
          },
        ],
      },
      {
        id: 'reflection',
        eyebrow: '07 · Reflection',
        title: 'What five weeks with real patients taught me.',
        body: [
          "The most valuable insights came from listening, not assuming. Every interview challenged my preconceptions about what women with PCOS actually need — it wasn't better tracking features, it was connection and understanding.",
          'Designing for sensitive topics requires care with language and visuals. Body positivity, avoiding triggering imagery, and creating safe spaces for vulnerable conversations became central to every design decision.',
          "Starting with my sister's story wasn't a narrative device — it was the foundation of genuine empathy. Personal connection to the problem space made me a more thoughtful researcher.",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'arya-chanakya-ux-audit',
    title: 'Arya Chanakya — Fintech UX Audit',
    tagline: 'An app frozen in 2014, thawed by 3 months of research.',
    description:
      "A freelance UX engagement for an 18-year-old mutual-fund distributor in Nagpur. Primary user research + a comprehensive heuristic evaluation of an app that hadn't been updated since 2014.",
    tag: 'UX Audit · Heuristic Evaluation',
    industry: 'Fintech · Mutual Funds',
    year: '2022',
    role: 'UX Consultant · Kagadmodyaa Studio',
    duration: '3 months',
    team: 'Solo, freelance',
    stack: ['Google Forms', 'Zoom + Otter', 'Miro', 'Figma', "Nielsen's 10"],
    accent: 'oklch(0.65 0.16 260)',
    cover: '/projects/arya-chanakya-ux-audit/cover.png',
    metrics: [
      { label: 'Survey responses', value: '56', hint: 'quantitative baseline' },
      { label: 'User interviews', value: '9', hint: 'in-depth qualitative sessions' },
      { label: 'Heuristic violations', value: '40+', hint: 'across 4 task flows' },
      { label: 'Critical issues', value: '23', hint: 'severity 4 — must fix before release' },
    ],
    chapters: [
      {
        id: 'client',
        eyebrow: '01 · The client',
        title: 'Solid firm. Strong client relationships. The app told a different story.',
        body: [
          'Arya Chanakya Investment Services is an AMFI-registered mutual-fund distributor in Nagpur, in business for 18 years, with 5,000+ clients and over ₹200 Cr in assets under management.',
          "The name comes from Chanakya — the ancient Indian economist and advisor to Emperor Chandragupta Maurya. Mutual funds make up 83% of their revenue; equity broking, insurance, and fixed deposits cover the rest. The business was healthy. The product was not.",
        ],
      },
      {
        id: 'problem',
        eyebrow: '02 · The problem',
        title: 'Built to reduce staff calls. Ended up causing them.',
        body: [
          "The app hadn't been updated in nearly a decade. Several users told me they were embarrassed to open it in front of anyone. 35% only checked it once a month — a quick balance glance, nothing more. 25% had never used it.",
          "It was built to reduce dependency on staff. What it did was create it. Most users found it easier to pick up the phone than figure out the app.",
        ],
      },
      {
        id: 'my-role',
        eyebrow: '03 · My role',
        title: 'Research and audit. No implementation.',
        body: [
          '56 surveys and 9 interviews turned into a research report, plus a full heuristic evaluation: 40+ violations documented, each rated 0–4 for severity, with annotated screenshots for every finding.',
          'Keeping research and audit separate from build meant the client could act on the findings whenever they were ready — not tied to any particular dev team or budget window.',
        ],
      },
      {
        id: 'quant',
        eyebrow: '04 · Quantitative research',
        title: '56 voices, one broken experience.',
        body: [
          "A structured survey showed which parts of the app were losing users — and confirmed how many had quietly stopped trying. The biggest confusion clusters landed on features that were also the most business-critical: the SIP Performance Report and the personal dashboard.",
        ],
        blocks: [
          {
            type: 'usability',
            participants: 56,
            items: [
              { task: 'SIP Performance Report', success: 61, time: 'n/a', severity: 3, note: '39% found it confusing — the most business-critical screen in the app' },
              { task: 'Dashboard / My Holdings', success: 69, time: 'n/a', severity: 2, note: "31% couldn't find their own portfolio data without help" },
              { task: 'Fund Picks', success: 72, time: 'n/a', severity: 2, note: "28% confused by the default 'Equity: Large Cap' with no personalisation" },
              { task: 'Login / Sign Up', success: 78, time: 'n/a', severity: 2, note: '22% confused; new users cannot register — staff onboards manually' },
              { task: 'Purchasing mutual funds', success: 78, time: 'n/a', severity: 2, note: '22% confused by the split browse pages' },
            ],
          },
        ],
      },
      {
        id: 'qual',
        eyebrow: '05 · Qualitative research',
        title: 'Nine conversations, ten patterns.',
        body: [
          'Nine interviews, spread across age groups and comfort levels with tech. Time-poor professionals, financially cautious investors, and retired users who rarely opened the app. Ten patterns showed up in almost every session.',
        ],
        blocks: [
          {
            type: 'insightGrid',
            items: [
              { title: 'Trust is high, but the app erodes it', text: 'Every interviewee trusts the firm. None trust the app. Several said they were embarrassed to show it to family.' },
              { title: 'Individual investment data is buried', text: "The data is there — but no one could find their personal investment performance without calling the office first." },
              { title: 'Financial jargon is a wall', text: "Scheme fact-sheets and technical terms appear with no context. Most users couldn't make sense of them and didn't bother trying." },
              { title: 'Navigation is a maze', text: "Most users didn't know the app had other pages. Nothing in the UI suggests there's more to explore." },
              { title: 'Visually outdated', text: "'Boring and uninteresting.' Several brought up Groww on their own and said they'd rather not open the AC app in public." },
              { title: 'Transaction history is invisible', text: "There's a transaction history in the app. None of the nine people I spoke with had ever found it." },
              { title: 'No cross-platform portfolio view', text: 'Groww shows you everything across every broker. Arya Chanakya only shows what you hold with them.' },
              { title: 'Security signals are missing', text: 'Every interviewee expected a visible trust signal on an app handling their savings. The app has none.' },
              { title: '24/7 access gap', text: "The only way to check your portfolio was to call the office during working hours." },
              { title: 'The app requires human support to use', text: 'Most users called the team for things they should have been able to do themselves. The app had turned into a reason to call, not a reason not to.' },
            ],
          },
        ],
      },
      {
        id: 'heuristics',
        eyebrow: '06 · Heuristic evaluation',
        title: "Nielsen's 10, applied end to end.",
        body: [
          "The main deliverable. The existing app evaluated against Nielsen's 10 usability heuristics, covering the task flow a real user would attempt: Login → Homepage → Top SIP Schemes / Top Schemes → Performance Report.",
          '23 critical (severity 4), 9 major (severity 3), 8+ minor (severity ≤2). The score below is my judged compliance out of 5 for each heuristic across the audited surfaces.',
        ],
        blocks: [
          {
            type: 'heuristics',
            items: [
              { n: 1, name: 'Visibility of system status', score: 2, verdict: 'Performance Report has no scroll indicator; users lose position in a very long page' },
              { n: 2, name: 'Match to the real world', score: 1, verdict: 'Risk analysis is completely absent from a mutual-fund app — sev 4' },
              { n: 3, name: 'User control & freedom', score: 2, verdict: 'Performance Calculator shows preset data only — users cannot input their own values' },
              { n: 4, name: 'Consistency & standards', score: 2, verdict: 'Password unmasked by default; browse pages use inconsistent alignment and margins' },
              { n: 5, name: 'Error prevention', score: 1, verdict: '"Remember me" unchecked → pressing Back silently logs the user out — sev 5' },
              { n: 6, name: 'Recognition over recall', score: 2, verdict: 'Homepage has no clear starting point or visible flow — users land and freeze' },
              { n: 7, name: 'Flexibility & efficiency', score: 1, verdict: 'No self-registration, no search, 45-option category dropdown with no sort/filter — 12 violations here alone' },
              { n: 8, name: 'Aesthetic & minimalist', score: 2, verdict: "Charts look childish; data density too high; navigation icons stretched" },
              { n: 9, name: 'Recognise, diagnose, recover', score: 2, verdict: '"Invalid credentials" — no signal whether username or password was wrong' },
              { n: 10, name: 'Help & documentation', score: 1, verdict: 'No onboarding; no guide for a first-time investor; XIRR, NAV, exit-load appear undefined' },
            ],
          },
          {
            type: 'flow',
            nodes: [
              { type: 'start', label: 'Sign Up / Login' },
              { type: 'step', label: 'Homepage' },
              { type: 'decision', label: 'Top SIP or Top Schemes?', note: '2 branches merge back' },
              { type: 'step', label: 'Browse category' },
              { type: 'end', label: 'SIP Performance Report' },
            ],
          },
        ],
      },
      {
        id: 'reflection',
        eyebrow: '07 · What I took away',
        title: 'Designing for people who are not you.',
        body: [
          "Working with people in their 40s and 50s in Nagpur, some barely using smartphones, made it obvious how many design assumptions do not apply. Trust signals, plain language, showing less at once — these matter more than any feature Groww has.",
          'Scoping this as research and audit, not build, was deliberate. The client got something they could act on immediately, regardless of when they chose to move on implementation. The findings would not go stale waiting for budget or a dev team.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'microanimations',
    title: 'Micro-Interactions',
    tagline: '11 experiments in UI animation.',
    description:
      'A collection of prototypes, learnings, and workarounds using Figma Variables and After Effects. Published on Medium and Dribbble.',
    tag: 'Interaction Design',
    industry: 'Craft · UI motion',
    year: '2023–24',
    role: 'Interaction Designer',
    duration: 'Ongoing collection',
    team: 'Solo',
    stack: ['Figma', 'Figma Variables', 'After Effects'],
    accent: 'oklch(0.72 0.18 100)',
    cover: '/projects/microanimations/cover.png',
    live: 'https://medium.com/@koriigami/my-microinteraction-series-11-experiments-in-ui-animation-59127500efcd',
    metrics: [
      { label: 'Experiments shipped', value: '11' },
      { label: 'Tools explored', value: '2' },
      { label: 'Published on', value: 'Medium · Dribbble' },
    ],
    chapters: [
      {
        id: 'why',
        eyebrow: '01 · Why',
        title: 'The gap between an animation you see and one you can rebuild.',
        body: [
          "Most of the UI motion I love online comes with no build notes. This series was a self-imposed exercise: pick a common interaction, prototype it end-to-end in Figma (or After Effects when Figma couldn't), and document the workaround.",
          '11 experiments, each posted with the working file and a short write-up.',
        ],
      },
      {
        id: 'reel',
        eyebrow: '02 · The reel',
        title: 'Eleven prototypes.',
        blocks: [
          {
            type: 'videos',
            items: [
              { src: '/projects/microanimations/video/1-Progress-Bar.mp4', label: '01 · Progress bar' },
              { src: '/projects/microanimations/video/2-Arrow-Click.mp4', label: '02 · Arrow click' },
              { src: '/projects/microanimations/video/3-Upload-Progress-Button.mp4', label: '03 · Upload progress button' },
              { src: '/projects/microanimations/video/4-FAB-Inspired-Share-Button.mp4', label: '04 · FAB-inspired share' },
              { src: '/projects/microanimations/video/5-Animated-Search-Bar.mp4', label: '05 · Animated search bar' },
              { src: '/projects/microanimations/video/6-Liquid-Loader.mp4', label: '06 · Liquid loader' },
              { src: '/projects/microanimations/video/7-Volume-Control-with-Figma-Variables.mp4', label: '07 · Volume control · Figma Variables' },
              { src: '/projects/microanimations/video/8-DropDot-Loader.mp4', label: '08 · DropDot loader' },
              { src: '/projects/microanimations/video/9-Toggle-Switch-Iterations.mp4', label: '09 · Toggle switch iterations' },
              { src: '/projects/microanimations/video/10-Checkmark-Toggle.mp4', label: '10 · Checkmark toggle' },
              { src: '/projects/microanimations/video/11-On-Off-Toggle-with-Text.mp4', label: '11 · On/off toggle with text' },
            ],
          },
        ],
      },
      {
        id: 'what',
        eyebrow: '03 · What I actually learned',
        title: 'Figma Variables are almost a state machine.',
        body: [
          'The volume-control and toggle experiments were the ones that changed how I use Figma day-to-day. Variables gave me enough state to prototype interactions I used to reach for Framer or code for.',
          'Where Figma stops, After Effects picks up. The DropDot loader and the liquid loader are both after-effects renders — cheaper to iterate there than in code.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'toshalife-booking-platform',
    title: 'Toshalife',
    tagline: 'A therapy-booking platform designed and shipped end-to-end.',
    description:
      'Full-stack appointment-booking platform for mental-health professionals with calendar sync and payments. Live client work.',
    tag: 'Product Design + Development',
    industry: 'Healthcare · Mental Health',
    year: '2024',
    role: 'Product Designer & Full-Stack Developer',
    duration: '4 months',
    team: 'Client: Dr. Swapna Vithalkar, PhD',
    stack: ['Next.js', 'Firebase', 'Stripe', 'Zoho Bookings'],
    accent: 'oklch(0.70 0.16 155)',
    cover: '/projects/microanimations/cover.png',
    live: 'https://toshalife.com',
    metrics: [
      { label: 'Bookings processed', value: '100+', hint: 'live post-launch' },
      { label: 'Stack shipped', value: '4', hint: 'Next.js · Firebase · Stripe · Zoho' },
      { label: 'Timeline', value: '4 months', hint: 'design → deployed' },
    ],
    chapters: [
      {
        id: 'context',
        eyebrow: '01 · Context',
        title: 'A mental-health professional needed a booking flow, not another form on a website.',
        body: [
          'Dr. Swapna Vithalkar was running appointments through a mix of WhatsApp and email, losing 2–3 slots a week to double-bookings and dropped threads. The ask was practical: something clients could open on a phone, book a session, and pay in one flow.',
          'I owned both design and development. Next.js on the front, Firebase for state and auth, Stripe for payments, Zoho Bookings pushing to the therapist\'s existing calendar.',
        ],
      },
      {
        id: 'live',
        eyebrow: '02 · Live',
        title: 'toshalife.com — 100+ bookings and running.',
        body: [
          'The site has been live for over a year. Booking-to-completion is the metric that mattered: clients now finish a booking in the same session they open the link.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'mental-health-young-professionals',
    title: 'Unburden — Mental Health for Young Professionals',
    tagline: 'A PM case study for a non-clinical mental-wellness MVP.',
    description:
      'Market analysis, user research, and feature prioritisation for a digital mental-wellness platform helping young professionals recognise, regulate, and reflect.',
    tag: 'Product Management Case Study',
    industry: 'Mental Health · Mobile',
    year: '2023',
    role: 'Product Designer & UX Researcher',
    duration: '4 months',
    team: 'Solo',
    stack: ['Figma', 'Notion', 'Miro'],
    accent: 'oklch(0.66 0.16 305)',
    cover: '/projects/nl_mentalhealth_unburden/cover.png',
    status: 'coming-soon',
    metrics: [
      { label: 'Designed for', value: '1M+', hint: 'young professionals in India' },
      { label: 'Approach', value: 'Non-clinical', hint: 'recognise → regulate → reflect' },
      { label: 'Full case study', value: 'Soon', hint: 'mockups next release' },
    ],
    chapters: [
      {
        id: 'setup',
        eyebrow: '01 · Setup',
        title: "Young professionals don't call it a mental-health problem until it's one.",
        body: [
          "Unburden is a non-clinical digital mental-wellness platform designed to help young professionals in high-stress environments recognise, regulate, and reflect on their state before it escalates.",
          'This project is the PM half of the work: market analysis, user research, and feature prioritisation for the MVP. Full case study with mockups lands next release.',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'kad3dstudio',
    title: 'kad3dstudio.com',
    tagline: 'Replaced mood boards and wireframes with live code.',
    description:
      'A vibe-coded landing page for a 3D-printing studio. Five themes, five structural variations, one client vote that took 12 minutes. Site shipped the same week.',
    tag: 'Web Design · Freelance',
    industry: 'Landing Page · Manufacturing',
    year: '2026',
    role: 'Freelance Designer & Developer',
    duration: '1 session',
    team: 'Client: kad3dstudio, Gurgaon',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'Neubrutalism'],
    accent: 'oklch(0.72 0.19 60)',
    cover: '/projects/kad3dstudio/cover.png',
    live: 'https://kad3dstudio.com',
    metrics: [
      { label: 'Design decision', value: '12 min', hint: 'vs. 3-week traditional process' },
      { label: 'Variants shown', value: '5', hint: 'themes + structural variations' },
      { label: 'Shipped in', value: '1 week', hint: 'from first call to live' },
    ],
    chapters: [
      {
        id: 'setup',
        eyebrow: '01 · Setup',
        title: 'A 3D-printing studio that needed to look like the future they make.',
        body: [
          "A 3D-printing studio needed a landing page that communicated premium manufacturing capability and drove inquiries — without weeks of mood-board back-and-forth.",
          "I skipped the mood board. Built five actual variants live, put them side-by-side on a shared call, and let the client vote. 12 minutes later we had a direction. Site shipped the same week.",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'b2b-saas-design-system',
    title: 'B2B SaaS Design System',
    tagline: 'A component library for enterprise product surfaces.',
    description:
      'A comprehensive design system for enterprise SaaS products. Detailed case study in progress.',
    tag: 'Design System',
    industry: 'B2B SaaS',
    year: '2023',
    role: 'Design Systems Designer',
    duration: '5 months',
    team: 'Full case study coming later',
    stack: ['Figma', 'Tokens Studio', 'Storybook'],
    accent: 'oklch(0.66 0.14 220)',
    cover: '/projects/qwark/cover.png',
    status: 'coming-soon',
    metrics: [
      { label: 'Status', value: 'Case study soon', hint: 'writing it up' },
    ],
    chapters: [
      {
        id: 'note',
        eyebrow: '01 · Note',
        title: 'Full write-up coming.',
        body: [
          'This one is a longer story that deserves its own space. A B2B design system I led at an enterprise SaaS company — token architecture, component contracts, Figma ↔ code loop, adoption plays. Landing here shortly.',
        ],
      },
    ],
  },
]

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug)
