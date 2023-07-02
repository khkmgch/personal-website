export type WorkMeta = {
  slug: string[];
  title: string;
  subtitle?: string;
  date: string;
  thumbnail: string;
  category: 'app' | 'architecture' | '';
  pdf?: string;
};
