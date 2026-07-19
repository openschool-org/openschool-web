import React from 'react';
import Head from '@docusaurus/Head';

const SITE_URL = 'https://openschool.lk';

type Props = {
  path: string;
};

export default function SeoHead({path}: Props): React.ReactElement {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  return (
    <Head>
      <link rel="canonical" href={url} />
    </Head>
  );
}
