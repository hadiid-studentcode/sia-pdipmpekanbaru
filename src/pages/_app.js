import "../../public/assets/bootstrap/css/bootstrap.min.css";
// import "../../public/assets/bootstrap/js/bootstrap.min.js";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {

  const {title} = pageProps;

 
 
  return (
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  );
}
