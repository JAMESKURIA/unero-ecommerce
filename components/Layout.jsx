import Head from "next/head";
import React from "react";
import { Footer, Nav } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Unero Ecommerce</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href={`https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&display=swap`}
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <main className="max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
