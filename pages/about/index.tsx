import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <Layout>
      <Container>
        <h1 className='text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug'>
          About
        </h1>
        <div className='text-center'>
          <p className='text-lg'>
            Koh の秘密基地へようこそ。
          </p>
        </div>

        <div className='mb-16 mt-6 flex flex-row justify-center md:mb-32 md:mt-16'>
          <div className='relative aspect-square rounded-md basis-1/4 '>
            <Link href={`https://github.com/khkmgch`}>
              <Image
                src={'/images/cat_paw.png'}
                alt={'Koh' || ' '}
                fill
                sizes='(max-width: 320px) 100vw, 320px'
                className='object-contain'
              />
            </Link>
          </div>
        </div>

        {/* <div className='mb-16 mt-6 grid grid-cols-1 gap-5 md:mb-32 md:mt-16 md:gap-16'>
          {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
          <div className='relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16'>
            <Link href={`https://github.com/khkmgch`}>
              <Image
                src={'/images/cat_paw.png'}
                alt={'Koh' || ' '}
                fill
                sizes='(max-width: 320px) 100vw, 320px'
                className='object-cover'
              />
            </Link>
          </div>
        </div> */}

        <div className='prose mx-auto mt-14 text-center dark:prose-invert'>
          <p>
            個人で作成した作品(Webアプリ、建築デザイン)やブログ記事を公開しています。
          </p>
          <p>
            もし見ていただけましたら、ぜひ感想をお待ちしております。
          </p>
          <p>
            <Link href='/contact'>Contact</Link>
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default About;
