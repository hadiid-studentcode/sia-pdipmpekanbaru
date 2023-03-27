import "../../public/assets/bootstrap/css/bootstrap.min.css";
import Layoutku from "../components/Layout";


export default function App({ Component, pageProps }) {

 
 
  return (
    <Layoutku> 
      <Component {...pageProps} />
    </Layoutku>
  );
}
