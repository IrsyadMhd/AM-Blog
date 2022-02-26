import Head from 'next/head';

import { Layout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>AkhiMedia-Blog</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
