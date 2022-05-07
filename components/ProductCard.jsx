import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

const STARS = [1, 2, 3, 4, 5];

const ProductCard = ({ product }) => {
  return (
    <div className="flex-1 md:max-w-xs flex flex-col">
      {/* Product Image */}
      <div className="relative bg-gray-100 p-6 flex items-center justify-center">
        <Image
          src={`/${product.images[0]}`}
          height={180}
          width={180}
          alt="new product"
        />

        <div className=" flex text-xl text-gray-700 bg-white py-2 px-4  gap-4 absolute bottom-0 right-0">
          <IoMdAdd className="text-2xl cursor-pointer hover:text-red-500" />
          <FiShoppingBag className="hover:text-red-500 cursor-pointer" />
        </div>

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
                  className="border-2 w-fit p-1 rounded-full"
                  style={{ borderColor: idx == 0 ? color : "transparent" }}
                >
                  <span
                    style={{ backgroundColor: color }}
                    className={`block ${
                      idx === 0 ? "h-2 w-2 " : "h-3 w-3"
                    } rounded-full `}
                  ></span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Like */}
        <div className="text-lg  cursor-pointer">
          <AiOutlineHeart onClick={() => console.log("Click")} />
          {/* <AiFillHeart className="text-red-500" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
