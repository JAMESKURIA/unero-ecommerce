import React from "react";
import { FiSearch, FiShoppingBag, FiSettings } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full pt-8">
      <div className="flex py-8 pb-6 justify-between max-w-7xl mx-auto">
        <Link href="/">
          <a className="cursor-pointer uppercase font-bold text-2xl">Unero</a>
        </Link>
        <div className="hidden md:inline-flex space-x-10 text-gray-700">
          <Link href="/">
            <h3 className="cursor-pointer">Home</h3>
          </Link>
          <Link href="/shop">
            <h3 className="cursor-pointer text-gray-900 font-bold">Shop</h3>
          </Link>
          <Link href={"/wishlist"}>
            <h3 className="cursor-pointer">Wishlist</h3>
          </Link>
          <h3 className="cursor-pointer">Collections</h3>
          <Link href={"/news"}>
            <h3 className="cursor-pointer">News</h3>
          </Link>
          <Link href={"/contacts"}>
            <h3 className="cursor-pointer">Contact Us</h3>
          </Link>
        </div>

        <div className="inline-flex space-x-6 text-2xl text-gray-700">
          <FiSearch />
          <BsPerson />
          <Link href={"/cart"}>
            <div className="relative">
              <span className="cursor-pointer">
                <FiShoppingBag />
              </span>
              <span className="cursor-pointer absolute -bottom-1 -right-2 text-white text-sm font-normal rounded-full  bg-red-500 flex items-center justify-center h-5 w-5 ">
                3
              </span>
            </div>
          </Link>
          <FiSettings />
        </div>
      </div>
    </div>
  );
};

export default Nav;
