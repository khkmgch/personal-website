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
import dynamic from 'next/dynamic';
import { IconBrandGithub } from '@tabler/icons-react';

const PdfViewer = dynamic(
  () =>
    import('../../components/PdfViewer').then(
      (mod) => mod.PdfViewer
    ),
  { ssr: false }
);

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
  // console.log('params: ', params);
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
  // console.log('work: ', work);
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

          {work.subtitle && (
            <h2 className='text-brand-primary mb-3 mt-2 text-center text-sm font-medium tracking-tight dark:text-white lg:text-lg lg:leading-snug'>
              {work.subtitle}
            </h2>
          )}
        </div>
      </Container>

      {!work.pdf && work.demo ? (
        <div className='relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg'>
          <Image
            className='object-contain'
            src={`/demos/${work.demo}`}
            alt='Thumbnail'
            fill={true}
            priority={true}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPMrQcAAV8A7ouLPuwAAAAASUVORK5CYII='
            sizes='100vw'
          />
        </div>
      ) : !work.pdf && work.thumbnail ? (
        <div className='relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg'>
          <Image
            className='object-cover'
            src={`/images/${work.thumbnail}`}
            alt='Thumbnail'
            fill={true}
            priority={true}
            sizes='100vw'
          />
        </div>
      ) : (
        <></>
      )}

      <Container>
        <article className='mx-auto max-w-screen-md '>
          {work.pdf && (
            <div className='flex justify-center'>
              <PdfViewer pdf={work.pdf} />
            </div>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: work.contentHTML,
            }}
            className='prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600 prose-a:no-underline'
          />

          {work.github && (
            <div className='flex items-center justify-center'>
              <a
                href={work.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button
                  type='button'
                  className='flex items-center justify-center rounded-md bg-gray-700 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black '
                >
                  <IconBrandGithub className='h-8 w-8' />
                  <p>README</p>
                </button>
              </a>
            </div>
          )}

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
