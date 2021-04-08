import Head from "next/head";

import "../styles/globals.css";
import MainLayout from "../components/layout/main-layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Primary Meta Tags --> */}
        <title>ISHRAI</title>
        <meta name="title" content="ISHRAI" />
        <meta
          name="description"
          content="ISHRAI is non-governmental non-profit based organisation which aims to create a society void of discrimination of all persons."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ishraing.org/" />
        <meta property="og:title" content="ISHRAI" />
        <meta
          property="og:description"
          content="A non-governmental non-profit based organisation which aims to create a society void of discrimination of all persons."
        />
        <meta property="og:image" content="https://ishraing.org/logo/ishrai-white.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ishraing.org/" />
        <meta property="twitter:title" content="ISHRAI" />
        <meta
          property="twitter:description"
          content="A non-governmental non-profit based organisation which aims to create a society void of discrimination of all persons."
        />
        <meta property="twitter:image" content="https://ishraing.org/logo/ishrai-white.jpg"></meta>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
