import React, { FC } from 'react';
import { Container } from '../Container';

type Props = {
  works: {
    id: string;
    title: string;
    date: string;
    image: string;
    pdf?: string;
  }[];
};
export const WorkList: FC<Props> = ({ works }) => {
  return (
    <Container>
      <div className='grid gap-10 md:grid-cols-2 lg:gap-10'></div>
      <div className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3'></div>
      {works.map(
        (
          work: {
            id: string;
            title: string;
            date: string;
            image: string;
            pdf?: string;
          },
          index: number
        ) => (
          <></>
        )
      )}
    </Container>
  );
};
