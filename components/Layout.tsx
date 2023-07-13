import React, { FC, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { inter } from '@/fonts';
import { SeoHead } from './SeoHead';

type Props = {
  children: ReactNode;
};
export const Layout: FC<Props> = ({
  children,
}) => {
  const title: string = 'Koh - Portfolio';
  const description: string =
    "個人で作成した作品(Webアプリ、建築デザイン)やブログ記事を公開しています。";
  const site_url: string | undefined =
    process.env.NEXT_PUBLIC_URL;
  const twitter_user: string | undefined =
    process.env.NEXT_PUBLIC_TWITTER_USER;
  return (
    <>
      <SeoHead
        title={title}
        description={description}
        url={site_url}
        twitter_user={twitter_user}
      />
      <Navbar />
      <main className={`${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};
