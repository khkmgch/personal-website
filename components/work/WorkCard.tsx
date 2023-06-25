import { PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Label } from '../ui/Label';
import { WorkMeta } from '@/types/WorkMeta.type';

type Props = {
  work: WorkMeta;
  aspect: 'video' | 'square';
};
export const WorkCard: FC<Props> = ({ work, aspect }) => {
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
            href={`/work/${work.slug.join('/')}`}
          >
            {work.thumbnail !== '' ? (
              <Image
                className='object-cover transition-all'
                src={work.thumbnail}
                alt='Thumbnail'
                fill={true}
                priority={true}
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            ) : (
              <span className='absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200'>
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>
        <div>
          <div>
            <Label category={work.category} />
            <h2 className='mt-2 text-lg font-semibold leading-snug tracking-tight dark:text-white'>
              <Link href={`/works/${work.category}`}>
                <span
                  className='bg-gradient-to-r from-red-200 to-red-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900'
                >
                  {work.title}
                </span>
              </Link>
            </h2>
            <div className='mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400'>
              <span className='truncate text-sm'>
                {work.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
