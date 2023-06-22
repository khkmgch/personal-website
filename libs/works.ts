import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const getWorks: (dir: string) => {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  category: "app" | "architecture" | ''
  pdf?: string;
}[] = (dir: string) => {
  const fileNames: string[] = fs.readdirSync(dir);

  const all = fileNames.map((fileName: string) => {
    const id: string = fileName.replace(/\.md$/, '');

    const filePath: string = path.join(dir, fileName);
    const fileContents: string = fs.readFileSync(
      filePath,
      'utf-8'
    );

    const matterRes: matter.GrayMatterFile<string> =
      matter(fileContents);

    const res: {
      id: string;
      title: string;
      date: string;
      thumbnail: string;
      category: "app" | "architecture" | ''
      pdf?: string;
    } = {
      id,
      title: hasTitle(matterRes)
        ? matterRes.data.title
        : '',
      date: hasDate(matterRes) ? matterRes.data.date : '',
      thumbnail: hasThumbnail(matterRes)
        ? matterRes.data.thumbnail
        : '',
      category: hasCategory(matterRes)
        ? matterRes.data.category
        : '',
    };
    if (hasPdf(matterRes)) {
      res.pdf = matterRes.data.pdf;
    }
    return res;
  });
  return all;
};
const hasData: (
  matterRes: matter.GrayMatterFile<string>
) => boolean = (matterRes: matter.GrayMatterFile<string>) =>
  'data' in matterRes;

const hasTitle: (
  matterRes: matter.GrayMatterFile<string>
) => boolean = (matterRes: matter.GrayMatterFile<string>) =>
  hasData(matterRes) &&
  'title' in matterRes.data &&
  typeof matterRes.data.title === 'string';

const hasDate: (
  matterRes: matter.GrayMatterFile<string>
) => boolean = (matterRes: matter.GrayMatterFile<string>) =>
  hasData(matterRes) &&
  'date' in matterRes.data &&
  typeof matterRes.data.date === 'string';

const hasThumbnail: (
  matterRes: matter.GrayMatterFile<string>
) => boolean = (matterRes: matter.GrayMatterFile<string>) =>
  hasData(matterRes) &&
  'thumbnail' in matterRes.data &&
  typeof matterRes.data.thumbnail === 'string';
const hasCategory: (
  matterRes: matter.GrayMatterFile<string>
) => boolean = (matterRes: matter.GrayMatterFile<string>) =>
  hasData(matterRes) &&
  'category' in matterRes.data &&
  typeof matterRes.data.category === 'string';

const hasPdf: (
  matterRes: matter.GrayMatterFile<string>
) => boolean = (matterRes: matter.GrayMatterFile<string>) =>
  hasData(matterRes) &&
  'pdf' in matterRes.data &&
  typeof matterRes.data.pdf === 'string';

const dir: (category: 'app' | 'architecture') => string = (
  category: string
) => path.join(process.cwd(), `data/works/${category}`);

export const getAllWorks: () => {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  category: "app" | "architecture" | '';
  pdf?: string;
}[] = () => {
  return [
    ...getWorks(dir('app')),
    ...getWorks(dir('architecture')),
  ];
};
