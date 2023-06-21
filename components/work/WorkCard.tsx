import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  work: {
    id: string;
    title: string;
    date: string;
    image: string;
    pdf?: string;
  };
  aspect: 'video' | 'square';
};
export const WorkCard: FC<Props> = ({ work, aspect }) => {
  const url: string | undefined =
    process.env.NEXT_PUBLIC_URL;
  return (
    <>
      <div className='group cursor-pointer'>
        <div className='overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800'>
          <Link
            className={`relative block ${
              aspect === 'video'
                ? 'aspect-video'
                : aspect === 'square'
                ? 'aspect-square'
                : ''
            }`}
            href={`/work/${work.id}`}
          >
            <Image
              className='object-cover transition-all'
              src={`${url}${work.image}`}
              alt='Thumbnail'
              fill={true}
              priority={true}
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </Link>
        </div>
      </div>
    </>
  );
};
