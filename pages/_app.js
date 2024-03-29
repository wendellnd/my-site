import '../css/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>WendellND</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
