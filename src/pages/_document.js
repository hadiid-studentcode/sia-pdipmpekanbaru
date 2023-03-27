import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="pdipm.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <body>
        <Main />
        <NextScript />

        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
