import { getAllWorkPathArr, getWork } from '@/libs/works';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import React, { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { WorkMeta } from '@/types/WorkMeta.type';

export const getStaticPaths: GetStaticPaths<
  Params
> = async () => {
  const paths: {
    params: {
      slug: string;
    };
  }[] = getAllWorkPathArr();

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
  slug: string;
}

export const getStaticProps: GetStaticProps<
  Props,
  Params
> = async ({ params }) => {
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
const Work: FC<PageProps> = () => {
  return <div>Work</div>;
};
export default Work;
