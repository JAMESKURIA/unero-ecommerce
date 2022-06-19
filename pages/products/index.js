import { BreadCrumbs, LoadingBanner, NavTwo, ProductList } from "components";
import { data } from "data";
import React from "react";

const Products = ({ products }) => {
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
  return {
    props: {
      products: data,
    },
  };
};

export default Products;
