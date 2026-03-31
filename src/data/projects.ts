export interface Project {
  slug: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
  year: string;
  category?: 'products' | 'ux';
  links?: { label: string; href: string }[];
  defaultImage?: string;
  hoverImage?: string;
}

export const projects: Project[] = [
  {
    slug: 'bambi',
    title: 'Bambi',
    description: 'An AI language support mobile application',
    body: '',
    tags: [],
    year: '2025',
    category: 'products',
    defaultImage: '/Bambi N Default.PNG',
    hoverImage: '/Bambi N Hover.PNG',
  },
  {
    slug: 'alblatta',
    title: "Al'Blatta",
    description: "A south lebanese community where food, culture, and heritage is shared.",
    body: '',
    tags: [],
    year: '2025',
    category: 'products',
    defaultImage: '/alblatta default.png',
    hoverImage: '/alblatta hover.png',
  },
  {
    slug: 'career-track',
    title: 'Career Track',
    description: 'Enabling managers and employees to track skill development and career advancement pathways.',
    body: '',
    tags: ['Design Strategy', 'User Research', 'User Interface', 'User Testing', 'Prototyping'],
    year: '2024',
    category: 'ux',
  },
  {
    slug: 'construct',
    title: 'Construct',
    description: 'Construction management application.',
    category: 'ux',
    body: `This is a longer write-up about the project. What was the problem? How did you approach it? What did you learn?

You can describe the architecture, interesting technical decisions, and any challenges you faced along the way.`,
    tags: ['TypeScript', 'React', 'Node.js'],
    year: '2025',
    defaultImage: '/Construct default.PNG',
    hoverImage: '/Construct Hover.PNG',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Live', href: 'https://example.com' },
    ],
  },
];
