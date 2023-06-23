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
  const title: string = 'Koh - Secret Hideaway';
  const description: string =
    "This is Koh's personal website";
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
