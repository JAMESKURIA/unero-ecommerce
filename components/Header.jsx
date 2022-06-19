import { Nav } from "components";
import Link from "next/link";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FiSearch, FiSettings, FiShoppingBag } from "react-icons/fi";

const Icons = () => {
  return (
    <div className="inline-flex space-x-6 text-2xl text-gray-700">
      <FiSearch />
      <BsPerson />

      <Link href={"/cart"}>
        <div className="relative ">
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
  );
};

const Header = () => {
  return (
    <div className="w-full pt-8 ">
      <div className="flex py-8 pb-6  px-6 xl:px-0 justify-between max-w-7xl mx-auto">
        <Link href="/">
          <a className="cursor-pointer uppercase font-bold text-2xl">Unero</a>
        </Link>
        <div className="hidden md:block">
          <Nav />
        </div>

        <div className="hidden sm:block">
          <Icons />
        </div>

        <CgMenuRight
          size={35}
          className="text-gray-700 font-extralight block  md:hidden"
        />
      </div>
      <div className={`block px-6 pb-8 shadow shadow-gray-100 md:hidden`}>
        <Nav />
        <div className="flex justify-center pt-6 sm:hidden">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Header;
