/* eslint-disable react/prop-types */
import {
  DocumentOutline,
} from 'candi-ui';
import Head from 'next/head';
import { PageViewer } from 'utils/andesit';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Home({ page }) {
  if (!page) {
    return <div>404 Not Found</div>;
  }
  return (
    <DocumentOutline>
      <Head>
        <title>{page.meta.title}</title>
        <meta name="description" content={page.meta.description} />
      </Head>
      <PageViewer page={page} />
    </DocumentOutline>
  );
}

export async function getServerSideProps() {
  const page = await fetcher(`${process.env.BASE_URL}/api/pages/home`);
  return { props: { page } };
}
