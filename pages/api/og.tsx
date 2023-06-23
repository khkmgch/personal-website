import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const url: string | undefined = process.env.NEXT_PUBLIC_URL;

const image: Promise<ArrayBuffer> = fetch(
  new URL(`${url}/images/curio-nest.png`, import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler() {
  const imageData = (await image) as any as string;
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img width='1200' height='630' src={imageData} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
