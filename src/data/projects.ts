export interface Project {
  slug: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
  year: string;
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: 'career-track',
    title: 'Career Track',
    description: 'Enabling managers and employees to track skill development and career advancement pathways.',
    body: '',
    tags: ['Design Strategy', 'User Research', 'User Interface', 'User Testing', 'Prototyping'],
    year: '2024',
  },
  {
    slug: 'project-one',
    title: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    body: `This is a longer write-up about the project. What was the problem? How did you approach it? What did you learn?

You can describe the architecture, interesting technical decisions, and any challenges you faced along the way.`,
    tags: ['TypeScript', 'React', 'Node.js'],
    year: '2025',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Live', href: 'https://example.com' },
    ],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'A short description of what this project does and the problem it solves.',
    body: `This is a longer write-up about the project. What was the problem? How did you approach it? What did you learn?

You can describe the architecture, interesting technical decisions, and any challenges you faced along the way.`,
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    year: '2024',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
    ],
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description: 'A short description of what this project does and the problem it solves.',
    body: `This is a longer write-up about the project. What was the problem? How did you approach it? What did you learn?

You can describe the architecture, interesting technical decisions, and any challenges you faced along the way.`,
    tags: ['Astro', 'Tailwind'],
    year: '2024',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Live', href: 'https://example.com' },
    ],
  },
];
