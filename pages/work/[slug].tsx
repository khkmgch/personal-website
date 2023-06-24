import { getAllWorkPathArr, getWork } from '@/libs/works';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import React, { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';

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

type Props = {};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<
  Props,
  Params
> = async ({ params }) => {
  const work = await getWork(params!.slug);
  return {
    props: {},
  };
};

type PageProps = InferGetStaticPropsType<
  typeof getStaticProps
>;
export const Work: FC<PageProps> = () => {
  return <div>Work</div>;
};
