export interface Project {
  slug: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
  year: string;
  links?: { label: string; href: string }[];
  defaultImage?: string;
  hoverImage?: string;
}

export const projects: Project[] = [
  {
    slug: 'alblatta',
    title: "Al'Blatta",
    description: "A south lebanese community where food, culture, and heritage is shared.",
    body: '',
    tags: [],
    year: '2025',
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
  },
  {
    slug: 'construct',
    title: 'Construct',
    description: 'Construction management application.',
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
