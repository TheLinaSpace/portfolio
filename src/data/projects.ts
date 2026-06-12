export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  body: string;
  tags: string[];
  year: string;
  category?: 'products' | 'ux';
  links?: { label: string; href: string }[];
  defaultImage?: string;
  hoverImage?: string;
  // Project-header fields (Juan-Mora-style layout)
  challenge?: string;
  services?: string[];
  role?: string;
  impact?: string;
  headerImage?: string;
  headerImages?: string[];
  headerVideo?: string;
  liveLink?: string;
  liveLinkLabel?: string;
  disclaimer?: string;
}

export const projects: Project[] = [
  {
    slug: 'pbr',
    title: 'PBR.studio',
    subtitle: 'AI Texture Generation',
    description: 'A web tool for generating PBR textures from a photo or prompt.',
    body: '',
    tags: [],
    year: '2026',
    category: 'products',
    challenge: 'Generate production-ready PBR textures from a single photo or prompt, without the manual baking workflow.',
    services: ['Brand Identity', 'Product Design', 'Web Development'],
    role: 'Founder Designer',
    impact: 'Cuts texture authoring from hours of manual baking down to seconds of prompting.',
    headerImages: [
      '/PBR Homepage.png',
      '/1@4x.png',
      '/2@4x.png',
      '/3@4x.png',
    ],
    liveLink: 'https://beta.pbr.studio/',
    liveLinkLabel: 'Open App',
  },
  {
    slug: 'bambi',
    title: 'Bambi',
    subtitle: 'AI Language Support',
    description: 'An AI language support mobile application',
    body: '',
    tags: [],
    year: '2026',
    category: 'products',
    defaultImage: '/Bambi N Default.PNG',
    hoverImage: '/Bambi N Hover.PNG',
    challenge: 'Active language learners struggle to keep track of vocabulary picked up day-to-day, and existing language apps neglect the memorisation and revision side of learning.',
    services: ['Product Design', 'User Research', 'Prototyping'],
    role: 'Founder (Design and Development)',
    impact: 'Brings interactive vocabulary retention and dialect-accurate AI to languages mainstream apps overlook.',
    headerImage: '/Bambi mobile.png',
    liveLink: 'https://bambi-production.up.railway.app/',
    liveLinkLabel: 'Open App',
  },
  {
    slug: 'alblatta',
    title: "Al'Blatta",
    subtitle: 'Community Platform',
    description: 'A south lebanese community where food, culture, and heritage is shared.',
    body: '',
    tags: [],
    year: '2026',
    category: 'products',
    defaultImage: '/alblatta default.png',
    hoverImage: '/alblatta hover.png',
    challenge: 'South Lebanese cuisine has no dedicated archive. Its dishes are misattributed to broader Lebanese food, and the recipes passed down through generations risk being lost, undocumented, and uncredited.',
    services: ['Brand Identity', 'Product Design', 'Content Strategy'],
    role: 'Founder (Design and Development)',
    impact: 'A living archive of South Lebanese Cuisine, provided by the mid-aged lebanese women from the south.',
    headerImage: '/Screenshot 2026-06-12 at 09.29.31.png',
    liveLink: 'https://www.alblatta.com',
    liveLinkLabel: 'Visit site',
  },
  {
    slug: 'career-track',
    title: 'Career Track',
    subtitle: 'Skill & Growth Tracking',
    description: 'Enabling managers and employees to track skill development and career advancement pathways.',
    body: '',
    tags: ['Design Strategy', 'User Research', 'User Interface', 'User Testing', 'Prototyping'],
    year: '2024 - Current',
    disclaimer: "Real product modified for confidentiality using Figma's design system.",
    category: 'ux',
    challenge: 'Employees lacked clarity on the skills required for advancement, while managers had no unified place to track skill progression and guide career development.',
    services: ['Design Strategy', 'User Research', 'UI Design', 'User Testing', 'Prototyping'],
    role: 'Lead Product Designer',
    impact: 'Provided Managers and employees a shared platform to track the skill growth across different orgs of the company.',
    headerVideo: '/career-track/Dashb.mp4',
    liveLink: 'https://linacharara.com/dashboard',
    liveLinkLabel: 'View prototype',
  },
  {
    slug: 'construct',
    title: 'Construct',
    subtitle: 'Construction Management Application',
    description: 'Construction management application.',
    category: 'ux',
    body: `This is a longer write-up about the project. What was the problem? How did you approach it? What did you learn?

You can describe the architecture, interesting technical decisions, and any challenges you faced along the way.`,
    tags: ['TypeScript', 'React', 'Node.js'],
    year: '2023 - 2025',
    defaultImage: '/Construct default.PNG',
    hoverImage: '/Construct Hover.PNG',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Live', href: 'https://example.com' },
    ],
    challenge: 'Procurement, design, construction, quality, and contractor teams all tracked work across chats, emails, and spreadsheets with no central system, and no shared visibility between the company and its contractors.',
    services: ['Product Design', 'UI Engineering', 'Design Systems'],
    role: 'Product Designer ( Lead product design end-to-end)',
    impact: 'Replaced ad-hoc whiteboards with a single source of truth for active construction sites.',
    headerImage: '/Construct/document page -cropped.png',
    disclaimer: "Real product modified for confidentiality using Figma's design system.",
    liveLink: '/construct-prototype',
    liveLinkLabel: 'View Prototype',
  },
  {
    slug: 'unesco',
    title: 'UNESCO',
    subtitle: 'Cultural Heritage Initiative',
    description: 'A digital experience supporting UNESCO heritage preservation.',
    body: '',
    tags: [],
    year: '2022',
    category: 'ux',
    challenge: 'Make UNESCO heritage stories accessible to a broader audience without flattening the cultural nuance.',
    services: ['Design Strategy', 'User Research', 'Interaction Design'],
    role: 'Lead the research and redesign of the world heritage list page on the UNESCO WHC website.',
    impact: 'Opened a new path for visitors to engage with cultural heritage online.',
    headerImage: '/Unesco .png',
  },
];
