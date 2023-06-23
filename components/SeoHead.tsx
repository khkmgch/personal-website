import Head from 'next/head';
import React, { FC } from 'react';

{
  /* <NextSeo
        title={title}
        description={description}
        canonical={site_url}
        openGraph={{
          url: site_url,
          title: title,
          description: description,
          images: [
            {
              url: `${site_url}/images/curio-nest.png`,
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
      /> */
}
type Props = {
  title: string;
  description: string;
  url: string | undefined;
  twitter_user: string | undefined;
};
export const SeoHead: FC<Props> = ({
  title,
  description,
  url,
  twitter_user,
}) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1'
      />
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* twitter */}
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <meta name='twitter:site' content={twitter_user} />
      <meta name='twitter:creator' content={twitter_user} />

      {/* openGraph */}
      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content={description}
      />
      <meta property='og:url' content={url} />
      <meta
        property='og:image'
        content={`${url}/profile-shelf.png`}
      />
      <meta property='og:image:alt' content={title} />
      <meta property='og:image:width' content='800' />
      <meta property='og:image:height' content='600' />
      <meta property='og:site_name' content={title} />
      <meta property="og:type" content="website or article" />
      <meta property="og:locale" content="ja_JP" />

      <link rel='canonical' href={url} />
    </Head>
  );
};
