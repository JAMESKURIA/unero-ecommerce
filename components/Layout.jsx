import { Footer, Nav } from "components";
import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Unero Ecommerce</title>
      </Head>
      <Nav />
      <main className="max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
