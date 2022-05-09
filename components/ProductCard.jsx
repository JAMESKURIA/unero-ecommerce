import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";

export const STARS = [1, 2, 3, 4, 5];

const ProductCard = ({ product }) => {
  const [liked, setLiked] = React.useState(false);
  const [showBag, setShowBag] = React.useState(false);
  const [colorIndex, setColorIndex] = React.useState(0);

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
    <div
      className="flex-1 md:max-w-xs flex flex-col"
      onMouseEnter={() => setShowBag((prev) => true)}
      onMouseLeave={() => setShowBag((prev) => false)}
    >
      {/* Product Image */}
      <div className="relative bg-gray-100 p-6 flex items-center justify-center">
        <Link href={`/products/${product.id}`}>
          <Image
            src={`/${product.images[colorIndex]}`}
            height={180}
            width={180}
            alt="new product"
          />
        </Link>

        {/* Bag / Add to cart */}
        {showBag && (
          <div className="flex text-xl text-gray-700 bg-white py-2 px-4  gap-4 absolute bottom-0 right-0">
            <IoMdAdd className="text-2xl cursor-pointer hover:text-red-500" />
            <FiShoppingBag
              className="hover:text-red-500 cursor-pointer"
              onClick={handleAddtoBag(product.id)}
            />
          </div>
        )}

        {product.sale && (
          <div className="absolute top-4 right-4 bg-orange-600 rounded">
            <h3 className="px-3 py-1 text-white font-bold capitalize text-sm">
              sale
            </h3>
          </div>
        )}
      </div>
      {/* Prouduct Description */}
      <div className="flex justify-between items-start p-4">
        <div className="flex flex-col gap-1 ">
          {/* Name */}
          <h3 className="font-normal ">{product.name}</h3>

          {/* Stars */}
          {product.stars > 0 && (
            <div className="flex gap-1 text-gray-400 text-sm">
              {STARS.map((star) => (
                <AiFillStar
                  key={star.toString()}
                  className={`${product.stars >= star && " text-yellow-400"}`}
                />
              ))}
            </div>
          )}

          {/* Price */}
          <h3 className="text-gray-700 space-x-2">
            <span className={`${product.discount > 0 && "text-red-600"}`}>
              ${product.price}
            </span>
            {product.discount > 0 && (
              <span className="line-through">
                ${product.price + product.discount}
              </span>
            )}
          </h3>

          {/* colors */}
          {product.colors.length > 0 && (
            <div className="flex space-x-2 items-center">
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
        </div>

        {/* Like button / Heart :) */}
        <button
          className="text-xl  cursor-pointer"
          onClick={() => handleLike(product.id)}
          title="Add to Wishlist"
        >
          {!liked ? (
            <AiOutlineHeart />
          ) : (
            <AiFillHeart className="text-red-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
