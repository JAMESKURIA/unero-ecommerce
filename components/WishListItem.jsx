import Image from "next/image";

import { IoMdAdd } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";

const WishListItem = ({ product }) => {
  return (
    <div className=" grid grid-cols-5 items-center justify-items-center text-gray-700 text-lg py-4 my-4 border-b border-b-gray-100">
      <div className="flex gap-4 col-span-2 w-full  items-center ">
        <span className="text-xl flex-none  h-10 w-10 flex items-center justify-center text-gray-500 hover:text-red-500 cursor-pointer ">
          <IoCloseOutline />
        </span>

        <div className="h-32 w-32 flex items-center justify-center bg-gray-200 mr-4">
          <Image
            src={`/${product.images[0]}`}
            height={100}
            width={100}
            alt={product.name}
          />
        </div>
        <h3 className="hover:text-gray-900 hover:underline cursor-pointer">
          {product.name}
        </h3>
      </div>

      <h3>
        $ <span>{product.price}</span>
      </h3>

      <h4
        className={`${
          product.inStock > 0 ? "text-green-500 " : "text-red-500"
        }  font-semibold`}
      >
        {product.inStock > 0 ? "In Stock" : "Out of Stock"}
      </h4>
      <button
        disabled={product.inStock === 0}
        className={`${
          product.inStock > 0
            ? "border border-gray-200 text-gray-900 hover:bg-gray-200"
            : "border border-gray-200 cursor-not-allowed "
        }  flex items-center gap-2 p-2 `}
      >
        {product.inStock > 0 ? <IoMdAdd /> : <MdBlock />}

        <span>Add to Cart</span>
      </button>
    </div>
  );
};

// bg-gray-100 text-black px-3  hover:bg-black hover:text-white

export default WishListItem;
