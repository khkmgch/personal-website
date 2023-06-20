import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { NextSeo } from 'next-seo';

type Props = {
  children: ReactNode;
};
export const Layout: FC<Props> = ({ children }) => {
  const title: string = "koh-secret-hideaway";
  const description: string =
    "This is Koh's personal website";
  const site_url: string | undefined =
    process.env.NEXT_PUBLIC_URL;
  const twitter_name: string | undefined =
    process.env.NEXT_PUBLIC_TWITTER_NAME;
  return (
    <>
      <Head>{title}</Head>
      <NextSeo
        title={title}
        description={description}
        canonical={site_url}
        openGraph={{
          url: site_url,
          title: title,
          description: description,
          images: [
            {
              url: `${site_url}/vercel.svg`,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
          siteName: title,
        }}
        twitter={{
          handle: twitter_name,
          site: twitter_name,
          cardType: 'summary_large_image',
        }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
