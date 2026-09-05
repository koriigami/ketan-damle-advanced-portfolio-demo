/**
 * Ported from koriigami.com (foliowebsite_v2/src/data/site-config.ts).
 * Real bio, links, and about-page content.
 */

export const siteConfig = {
  name: 'Ketan Damle',
  role: 'Product Designer + UX Strategist',
  tagline: 'Design partner who ships 0-to-1 products',
  description:
    'Design portfolio of Ketan Damle — a product designer specialising in 0-to-1 products, design systems, and fintech experiences. From user research to shipped products.',
  url: 'https://koriigami.com',

  bio: "I'm Ketan, a product designer from Nagpur. I create high quality and impactful digital experiences. In my free time, I'm addicted to vibebuilding products with Claude Code in my terminal.",

  extendedBio:
    "I've validated product direction through 50+ user interviews, built scalable design systems, and launched 0-to-1 products. I'm comfortable with code, which lets me prototype fast and ship things myself.",

  currently: 'Open to product design roles and freelance projects',
  availability:
    'Available for full-time roles, freelance projects, and design partnerships',

  location: 'Nagpur, India',
  timezone: 'IST (UTC+5:30)',
}

export const socialLinks = {
  email: 'koriigami@gmail.com',
  dribbble: 'https://dribbble.com/koriigami',
  medium: 'https://medium.com/@koriigami',
  figma: 'https://www.figma.com/@Kagadmodyaa',
  instagram: 'https://www.instagram.com/kagadmodyaaa/',
  github: 'https://github.com/koriigami',
  twitter: 'https://twitter.com/koriigami',
  linkedin: 'https://www.linkedin.com/in/ketan-damle',
}

export const originStory = [
  {
    id: 'early-years',
    era: '2005–2020',
    title: 'Paper, Lego, and thermodynamics',
    paragraph:
      "I grew up building Lego and folding paper. Animal origami first, then tessellations, then kinetic structures. I knew I didn't want to study medical, so I followed the herd and got into IIT Kharagpur for mechanical engineering. But even there, I spent more time on tessellations than thermodynamics, which should have been a sign.",
    images: [
      { src: '/personal/story/childhood-1.jpg', caption: 'My first tessellation experiments' },
      { src: '/personal/story/childhood-2.jpg', caption: 'Origami Mitra workshop, Pune' },
      { src: '/personal/story/college-2.jpg', caption: 'Tessellations > thermodynamics' },
    ],
  },
  {
    id: 'pivot',
    era: '2020–2024',
    title: 'From industrial design to product design',
    paragraph:
      'Did a design internship at IIT Guwahati after third year, and I thought that was it. Got my M.Des in Industrial Design, but kept drifting toward understanding users rather than building industrial products. Physical products ship once. Digital ones you can keep making better. So I switched to product design. Then last year I stumbled into coding. Google AI Studio had just come out, and my mom tracks her stock portfolio in Excel with manual entries after market close. So I built her a tool. Auth, Groww API, Gemini for insights. In college I\'d loudly declared "I\'m a mechanical engineer, I don\'t need to learn coding." Look at me now.',
    images: [
      { src: '/personal/story/transition-1.jpg', caption: 'IIT Guwahati design internship' },
      { src: '/personal/story/transition-3.jpg', caption: 'M.Des in Industrial Design' },
      { src: '/personal/story/coding-1.jpg', caption: "Mom's stock portfolio tool" },
    ],
  },
  {
    id: 'present',
    era: '2024–Present',
    title: 'A designer who codes',
    paragraph:
      "That project broke something open. I've since shipped freelance products from research to deployed code, with Claude as my copilot for the messy parts. I'm a designer who codes, or a coder who designs, depending on who's asking. I still fold paper when I need to think.",
    images: [
      { src: '/personal/story/present-1.jpg', caption: 'Where it all comes together' },
      { src: '/personal/story/present-2.jpg', caption: 'From research to deployed code' },
      { src: '/personal/story/present-3.jpg', caption: 'Still folding paper when I need to think' },
    ],
  },
]

export const services = [
  {
    title: 'Product Design',
    services: ['User Research', 'UX Strategy', 'Wireframing', 'UI Design', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Brand & Identity',
    services: ['Logo Design', 'Visual Identity', 'Brand Guidelines'],
  },
  {
    title: 'Development',
    services: ['React / Next.js', 'Framer Sites', 'Developer Handoffs', 'Frontend Prototypes'],
  },
  {
    title: 'Strategy',
    services: ['Product Roadmaps', 'User Interviews', 'Competitive Analysis', 'PRDs & Specs'],
  },
]

export const lookingFor = {
  headline: "What I'm looking for",
  description:
    "I like messy early-stage problems where nobody's figured out the process yet. Fintech, healthcare, B2B SaaS. The kind of work where good design actually changes outcomes.",
  opportunities: [
    '0-to-1 product design roles',
    'Founding designer positions',
    'Design + strategy consulting',
  ],
}

export const personalInterests = {
  sectionTitle: 'Beyond the pixels',
  sectionDescription:
    'Paper folding, new cities, anime rabbit holes, and the occasional long bike ride.',
  images: [
    { src: '/personal/interests/origami-1.jpg', category: 'Origami' },
    { src: '/personal/interests/travel-1.jpg', category: 'Travel' },
    { src: '/personal/interests/origami-2.jpg', category: 'Origami' },
    { src: '/personal/interests/cycling-1.jpg', category: 'Cycling' },
    { src: '/personal/interests/origami-3.jpg', category: 'Origami' },
  ],
}
