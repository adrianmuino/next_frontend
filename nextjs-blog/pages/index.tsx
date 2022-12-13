import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../utils/posts';
import { GetStaticProps } from 'next';

export default function Home({ allPostsData }: {
  allPostsData: {
    id: string,
    date: string,
    title: string
  }
}) {
  return (
    <Layout home={true} >
      <Head>
        <title>{siteTitle}</title>
        <meta name="robots" content="all" />
        {/* <meta name="robots" content="noindex,nofollow" /> */}
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link
          rel="canonical"
          href="https://mysampledomain.com/sample/endpoint"
          key="canonical"
        />
        <meta
          name="description"
          content="Sample blog website built with Next.js by Adrian Muino."
          key="desc"
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Software Engineer at Kaseya]</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {Array.isArray(allPostsData) && allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} passHref>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getSortedPostsData();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      allPostsData,
    },
  };
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }



// import useSWR from 'swr';
// function sampleFetch() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }