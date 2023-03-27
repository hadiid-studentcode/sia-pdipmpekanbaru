import Navbarku from "./Navbar";
import Footerku from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbarku />
      <main>{children}</main>
      <Footerku />
    </>
  );
}
