import React from "react";
import { BreadCrumbs, LoadingBanner, NavTwo, ProductList } from "../components";
import { server } from "../config";

const Shop = ({ products }) => {
  return (
    <div>
      <BreadCrumbs title="Shop Page" />
      <NavTwo />
      <ProductList products={products} />
      <LoadingBanner />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  return {
    props: { products },
  };
};


export default Shop;
