import { ProductCard } from ".";

const ProductList = ({ products }) => {
  return (
    <div className="container mt-4 mx-auto ">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
