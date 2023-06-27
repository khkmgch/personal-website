import { getAllWorkPathArr, getWork } from '@/libs/works';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import React, { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { WorkMeta } from '@/types/WorkMeta.type';
import { Layout } from '@/components/Layout';
import { Label } from '@/components/ui/Label';
import { Container } from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { PdfViewer } from '@/components/PdfViewer';

export const getStaticPaths: GetStaticPaths<
  Params
> = async () => {
  const paths: {
    params: {
      slug: string[];
    };
  }[] = getAllWorkPathArr();
  // console.log('paths, ', paths);

  return {
    paths,
    fallback: false,
  };
};

type Props = {
  work:
    | (WorkMeta & {
        contentHTML: string;
      })
    | null;
};

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export const getStaticProps: GetStaticProps<
  Props,
  Params
> = async ({ params }) => {
  console.log('params: ', params);
  let work:
    | (WorkMeta & {
        contentHTML: string;
      })
    | null = null;
  if (params !== undefined) {
    work = await getWork(params.slug);
  }
  return {
    props: {
      work,
    },
  };
};

type PageProps = InferGetStaticPropsType<
  typeof getStaticProps
>;
const Work: FC<PageProps> = ({ work }) => {
  console.log('work: ', work);
  if (!work) return <>404 not found</>;
  return (
    <Layout>
      <Container>
        <div className='mx-auto max-w-screen-md'>
          <div className='flex justify-center'>
            <Label category={work.category} />
          </div>

          <h1 className='text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug'>
            {work.title}
          </h1>
        </div>
      </Container>

      {work.thumbnail && !work.pdf && (
        <div className='relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg'>
          <Image
            className='object-cover'
            src={work.thumbnail}
            alt='Thumbnail'
            fill={true}
            priority={true}
            sizes='100vw'
          />
        </div>
      )}

      <Container>
        <article className='mx-auto max-w-screen-md '>
          {work.pdf && (
            <div className='flex justify-center'>
              <PdfViewer />
            </div>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: work.contentHTML,
            }}
            className='prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600 prose-a:no-underline'
          />
          <div className='my-7 flex justify-center'>
            <Link
              href='/'
              className='bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 '
            >
              ← Go back to all works
            </Link>
          </div>
        </article>
      </Container>
    </Layout>
  );
};
export default Work;
