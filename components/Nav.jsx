import React from "react";
import { FiSearch, FiShoppingBag, FiSettings } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex py-8 justify-between">
      <Link href="/">
        <h1 className="cursor-pointer uppercase font-bold text-xl">Unero</h1>
      </Link>
      <div className="hidden md:inline-flex space-x-6 text-gray-700">
        <Link href="/">
          <h3 className="cursor-pointer">Home</h3>
        </Link>
        <Link href="/shop">
          <h3 className="cursor-pointer text-gray-900 font-bold">Shop</h3>
        </Link>
        <h3 className="cursor-pointer">Pages</h3>
        <h3 className="cursor-pointer">Collections</h3>
        <h3 className="cursor-pointer">News</h3>
        <h3 className="cursor-pointer">Elements</h3>
      </div>

      <div className="inline-flex space-x-6 text-xl text-gray-700">
        <FiSearch />
        <BsPerson />
        <div className="relative">
          <FiShoppingBag />
          <span className="cursor-pointer absolute -bottom-1 -right-2 text-white text-sm font-normal rounded-full  bg-red-500 flex items-center justify-center h-5 w-5 ">
            3
          </span>
        </div>
        <FiSettings />
      </div>
    </div>
  );
};

export default Nav;
