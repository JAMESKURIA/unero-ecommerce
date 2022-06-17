import Link from "next/link";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { FiSearch, FiSettings, FiShoppingBag } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="w-full pt-8 ">
      <div className="flex py-8 pb-6 justify-between max-w-7xl mx-auto">
        <Link href="/">
          <a className="cursor-pointer uppercase font-bold text-2xl">Unero</a>
        </Link>
        <div className="hidden md:inline-flex space-x-10 text-gray-700">
          <Link href="/">
            <a className="cursor-pointer hover:text-gray-900 hover:font-bold">
              Home
            </a>
          </Link>
          <Link href="/shop">
            <a className="cursor-pointer hover:text-gray-900 hover:font-bold">
              Shop
            </a>
          </Link>
          <Link href={"/wishlist"}>
            <a className="cursor-pointer hover:text-gray-900 hover:font-bold">
              Wishlist
            </a>
          </Link>
          <h3 className="cursor-pointer hover:text-gray-900 hover:font-bold">
            Collections
          </h3>
          <Link href={"/news"}>
            <a className="cursor-pointer hover:text-gray-900 hover:font-bold">
              News
            </a>
          </Link>
          <Link href={"/contacts"}>
            <a className="cursor-pointe hover:text-gray-900 hover:font-bold">
              Contact Us
            </a>
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
