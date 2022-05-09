import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

import Image from "next/image";
import ProductCard, { STARS } from "../../components/ProductCard";

import { server } from "../../config";

const Product = ({ product }) => {
  const [colorIndex, setColorIndex] = React.useState(0);
  const [liked, setLiked] = React.useState(false);

  // handle add to wishlist
  const handleLike = (id) => {
    console.log("Liked product id: ", id);
    setLiked((prev) => !prev);
  };

  // Add to Cart
  const handleAddtoBag = (id) => {
    // Add to bag logic here
  };

  return (
    <>
      <div className="py-8">
        <h3 className="text-gray-600 mb-12">
          <span className="text-gray-900 font-semibold">Home</span> /{" "}
          <span className="text-gray-900 font-semibold">Decorations</span> /{" "}
          <span> DG Wood Sunglasses</span>
        </h3>

        <div className="grid grid-cols-2">
          {/* left - Image */}
          <div className="flex items-center justify-center">
            <Image
              src={`/${product.images[colorIndex]}`}
              alt={product.name}
              height={250}
              width={250}
            />
          </div>

          {/* right - details */}
          <div className="flex flex-col ">
            {/* brand */}
            <h3 className="font-bold uppercase text-blue-500 text-sm mb-2">
              {" "}
              DG
            </h3>

            <h3>DG Wood Sunglasses</h3>
            {/* Stars */}
            {product.stars > 0 && (
              <div className="inline-flex space-x-4 items-center mt-1">
                <div className="flex gap-1 text-gray-400 text-sm">
                  {STARS.map((star) => (
                    <AiFillStar
                      key={star.toString()}
                      className={`${
                        product.stars >= star && " text-yellow-400"
                      }`}
                    />
                  ))}
                </div>
                <h4 className="text-gray-500 text-xs font-medium">
                  3 Customer reviews
                </h4>
              </div>
            )}

            {/* Price */}
            <h4 className="text-xl text-gray-600 my-4">$ {product.price}</h4>

            {/* Available */}
            <h4 className="font-semibold text-sm my-2">
              Available:{" "}
              <span className="text-green-500 font-medium">in Stock</span>
            </h4>

            {/* short descritption */}
            <p className="text-gray-600 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              debitis adipisci ducimus dolor dolorum inventore ex natus pariatur
              assumenda commodi
            </p>

            {/* colors */}
            {product.colors.length > 0 && (
              <div className="flex space-x-4 items-center mb-3">
                <h3 className="capitalize font-semibold text-gray-800 ">
                  Select color
                </h3>
                {product.colors.map((color, idx) => (
                  <div
                    key={color}
                    className="border-2 w-fit p-1 rounded-full cursor-pointer"
                    style={{
                      borderColor: idx == colorIndex ? color : "transparent",
                    }}
                    onClick={() => setColorIndex(idx)}
                  >
                    <span
                      style={{ backgroundColor: color }}
                      className={`block ${
                        idx === colorIndex ? "h-2 w-2 " : "h-3 w-3"
                      } rounded-full `}
                    ></span>
                  </div>
                ))}
              </div>
            )}

            {/* Sizes */}
            <div className="flex space-x-4 items-center mb-2 text-sm">
              <span className="cursor-pointer p-1 px-3 uppercase flex items-center justify-center  rounded-full bg-white border border-2 border-gray-700 text-gray-900 font-bold ">
                s
              </span>
              <span className="cursor-pointer uppercase flex items-center justify-center  rounded-full text-gray-700">
                m
              </span>
              <span className="cursor-pointer uppercase flex items-center justify-center  rounded-full text-gray-700">
                l
              </span>
              <span className="cursor-pointer uppercase flex items-center justify-center  rounded-full text-gray-700">
                xl
              </span>
              <span className="cursor-pointer uppercase flex items-center justify-center  rounded-full text-gray-700">
                xxl
              </span>
            </div>

            {/* clear btn */}
            <button className="w-full text-center uderline text-sm text-red-500 font-semibold ml-20">
              Clear
            </button>

            {/* buttons */}
            <div className="flex gap-2 h-10 my-4">
              <button className="px-4 inline-flex  items-center border border-2 border-gray-700">
                <FiMinus />
                <input type="number" className="outline-none border-none" />
                <FiPlus />
              </button>
              <button
                onClick={() => handleAddtoBag(product.id)}
                className="inline-flex justify-center items-center border border-2 border-gray-700 text-white bg-gray-800 px-10"
              >
                Add to cart
              </button>
            </div>

            {/* Share & wishlist */}
            <div className="flex items-center justify-between my-4">
              <button
                className="text-xl  cursor-pointer flex gap-2"
                onClick={() => handleLike(product.id)}
                title="Add to Wishlist"
              >
                {!liked ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart className="text-red-500" />
                )}
                <span className="font-semibold text-sm ">Add to wishlist</span>
              </button>

              {/* social */}
              <div className="flex space-x-3  text-gray-400">
                <AiFillInstagram className="cursor-pointer hover:text-gray-700" />
                <FaFacebookF className="cursor-pointer hover:text-gray-700" />
                <AiOutlineTwitter className="cursor-pointer hover:text-gray-700" />
                <AiFillYoutube className="cursor-pointer hover:text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div>
        {/* nav */}
        <div className="py-8 flex items-center justify-center space-x-8 text-gray-700">
          <h3 className="text-gray-900 font-semibold">Description</h3>
          <h3>Size Guides</h3>
          <h3>Shipping</h3>
          <h3>Reviews (3)</h3>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          {/* Detail */}
          <div>
            <h3 className="text-xl font-medium text-gray-900">Detail</h3>
            <p className="text-gray-700 w-9/12 leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              illum nulla doloremque, illo quia placeat voluptatem ab magni
              doloribus atque tempore in et labore, accusamus nisi deleniti qui.
              Cum, consequuntur.
            </p>
          </div>

          {/* features */}
          <div>
            <h3 className="text-xl font-medium text-gray-900">Features</h3>
            <ul>
              <li className="text-gray-700 list-disc ml-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </li>
              <li className="text-gray-700 list-disc ml-5">
                Modi enim atetur adipisicing elit
              </li>
              <li className="text-gray-700 list-disc ml-5">
                Sapiente optio, harum exercitationem ab sint asperiores
              </li>
              <li className="text-gray-700 list-disc ml-5">
                Deserunt molestias voluptatem quasi provident omnit
              </li>
              <li className="text-gray-700 list-disc ml-5">
                Praesentium harum sequi quod alias
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="w-full my-10 border-t border-b border-gray-300 inline-flex items-center justify-center py-4 text-sm space-x-8">
          <h3 className="text-gray-700">
            <span className="font-semibold text-gray-900">SKU: </span>2579-MK96
          </h3>
          <h3 className="text-gray-700">
            <span className="font-semibold text-gray-900">Category: </span>
            Decoration
          </h3>
          <h3 className="text-gray-700">
            <span className="font-semibold text-gray-900">Tags: </span>Glass,
            Eye, Eyewear
          </h3>
        </div>
      </div>

      {/* Related products */}
      <div></div>
    </>
  );
};

export default Product;

// export const getServerSideProps = async (ctx) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// GET STATIC PROPS
export const getStaticProps = async (ctx) => {
  const res = await fetch(`${server}/api/products/${ctx.params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

// GET STATIC PATHS
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  const ids = products.map((product) => product.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
