import React, { FC } from 'react';
import { Container } from '../Container';
import { WorkCard } from './WorkCard';
import { WorkMeta } from '@/types/WorkMeta.type';

type Props = {
  works: WorkMeta[];
};
export const WorkList: FC<Props> = ({ works }) => {
  return (
    <Container>
      <div className='grid gap-10 md:grid-cols-2 lg:gap-10'>
        {works
          .slice(0, 2)
          .map((work: WorkMeta, index: number) => (
            <WorkCard
              key={index}
              work={work}
              aspect='video'
            ></WorkCard>
          ))}
      </div>
      <div className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3'>
        {works
          .slice(2)
          .map((work: WorkMeta, index: number) => (
            <WorkCard
              key={index}
              work={work}
              aspect='square'
            ></WorkCard>
          ))}
      </div>
    </Container>
  );
};
