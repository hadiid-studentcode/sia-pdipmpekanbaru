import "../../public/assets/bootstrap/css/bootstrap.min.css";
import Layout from "../components/layout";
import Script from "next/script";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  const { title } = pageProps;

  return (
    <Layout>
      <Head>
        <title>{title} | SIA PD IPM Pekanbaru</title>
        <link rel="icon" href="pdipm.png" />

      
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </Layout>
  );
}
