import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { WorkGuard } from './guards/work-guard';
import { WorkMeta } from '@/types/WorkMeta.type';
import { WorkCategory } from '@/types/WorkCategory.type';

const getWorkMetaArr: (
  category: WorkCategory
) => WorkMeta[] = (category: string) => {
  const dir: string = path.join(
    process.cwd(),
    `data/works/${category}`
  );
  const fileNames: string[] = fs.readdirSync(dir);

  const all: WorkMeta[] = fileNames.map(
    (fileName: string) => {
      const slug: string[] = [
        `${category}`,
        `${fileName.replace(/\.md$/, '')}`,
      ];

      const filePath: string = path.join(dir, fileName);
      const fileContent: string = fs.readFileSync(
        filePath,
        'utf-8'
      );

      const matterRes: matter.GrayMatterFile<string> =
        matter(fileContent);

      const res: WorkMeta = {
        slug,
        title: WorkGuard.hasTitle(matterRes)
          ? matterRes.data.title
          : '',
        date: WorkGuard.hasDate(matterRes)
          ? matterRes.data.date
          : '',
        thumbnail: WorkGuard.hasThumbnail(matterRes)
          ? matterRes.data.thumbnail
          : '',
        category: WorkGuard.hasCategory(matterRes)
          ? matterRes.data.category
          : '',
      };
      if (WorkGuard.hasPdf(matterRes)) {
        res.pdf = matterRes.data.pdf;
      }
      if (WorkGuard.hasSubtitle(matterRes)) {
        res.subtitle = matterRes.data.subtitle;
      }
      if (WorkGuard.hasDemo(matterRes)) {
        res.demo = matterRes.data.demo;
      }
      if (WorkGuard.hasGithub(matterRes)) {
        res.github = matterRes.data.github;
      }
      return res;
    }
  );
  return all.sort(
    (a: WorkMeta, b: WorkMeta) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
};

const getWorkPathArr: (category: string) => {
  params: {
    slug: string[];
  };
}[] = (category: string) => {
  const dir: string = path.join(
    process.cwd(),
    `data/works/${category}`
  );
  const fileNames: string[] = fs.readdirSync(dir);

  return fileNames.map((fileName: string) => {
    return {
      params: {
        slug: [
          `${category}`,
          `${fileName.replace(/\.md$/, '')}`,
        ],
      },
    };
  });
};

export const getWork: (slug: string[]) => Promise<
  WorkMeta & {
    contentHTML: string;
  }
> = async (slug: string[]) => {
  const dir: string = path.join(
    process.cwd(),
    `data/works`
  );
  const filePath: string = path.join(
    dir,
    `${slug.join('/')}.md`
  );
  const fileContent: string = fs.readFileSync(
    filePath,
    'utf-8'
  );

  const matterRes: matter.GrayMatterFile<string> =
    matter(fileContent);

  const content = await remark()
    .use(html)
    .process(matterRes.content);

  const contentHTML: string = content.toString();

  const res: WorkMeta & { contentHTML: string } = {
    slug,
    title: WorkGuard.hasTitle(matterRes)
      ? matterRes.data.title
      : '',
    date: WorkGuard.hasDate(matterRes)
      ? matterRes.data.date
      : '',
    thumbnail: WorkGuard.hasThumbnail(matterRes)
      ? matterRes.data.thumbnail
      : '',
    category: WorkGuard.hasCategory(matterRes)
      ? matterRes.data.category
      : '',
    contentHTML,
  };
  if (WorkGuard.hasPdf(matterRes)) {
    res.pdf = matterRes.data.pdf;
  }
  if (WorkGuard.hasSubtitle(matterRes)) {
    res.subtitle = matterRes.data.subtitle;
  }
  if (WorkGuard.hasDemo(matterRes)) {
    res.demo = matterRes.data.demo;
  }
  if (WorkGuard.hasGithub(matterRes)) {
    res.github = matterRes.data.github;
  }
  return res;
};

export const getAllWorkMetaArr: () => WorkMeta[] = () => {
  const categories: WorkCategory[] = [
    'app',
    'architecture',
  ];
  const res: WorkMeta[] = [];
  categories.forEach((category: WorkCategory) =>
    res.push(...getWorkMetaArr(category))
  );
  return res;
};

export const getAllWorkPathArr: () => {
  params: {
    slug: string[];
  };
}[] = () => {
  const categories: WorkCategory[] = [
    'app',
    'architecture',
  ];
  const res: Array<{
    params: {
      slug: string[];
    };
  }> = [];
  categories.forEach((category: WorkCategory) =>
    res.push(...getWorkPathArr(category))
  );
  return res;
};
