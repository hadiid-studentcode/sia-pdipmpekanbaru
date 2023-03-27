import "../../public/assets/bootstrap/css/bootstrap.min.css";
import Layoutku from "../components/Layout";
import Head from "next/head";


export default function App({ Component, pageProps }) {

 
 
  return (
    <Layoutku> 
      <Head>
         <link rel="icon" href="pdipm.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layoutku>
  );
}
