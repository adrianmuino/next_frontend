import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function SampleStaticURL() {
    return(
        <Layout>
            <Head>
                <title>Sample Static URL Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
  }