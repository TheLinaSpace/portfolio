export interface Illustration {
  slug: string;
  title: string;
  description: string;
  defaultImage?: string;
  hoverImage?: string;
}

export const illustrations: Illustration[] = [
  {
    slug: 'kishki',
    title: 'Kishki',
    description: 'An illustrated children\'s book about a magical never-ending scarf.',
    defaultImage: '/kishki default.png',
    hoverImage: '/kishki hover.png',
  },
  {
    slug: 'abo-sharshoob',
    title: 'Abo Sharshoob',
    description: 'A comic series following the daily struggles of an immigrant cockroach in Berlin.',
    defaultImage: '/roachy default.png',
    hoverImage: '/roachy hover.png',
  },
  {
    slug: 'em-kees',
    title: 'Em Kees',
    description: 'Concept art for a Lebanese folkloric character and her haunted Beiruti house.',
  },
  {
    slug: 'leila',
    title: 'Leila',
    description: 'A watercolour retelling of Red Riding Hood with a twist.',
    defaultImage: '/leila default.png',
    hoverImage: '/leila hover.png',
  },
  {
    slug: 'bambi',
    title: 'Bambi',
    description: 'A knitted cat that comes alive and befriends a little girl named Rim.',
  },
];
