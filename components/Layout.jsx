import React from "react";
import { Footer, Nav } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Nav />

        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
