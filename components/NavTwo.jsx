import React from "react";
import { IoMdAdd } from "react-icons/io";
import { BsGrid, BsList } from "react-icons/bs";

const NavTwo = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="inline-flex space-x-8">
        <h3 className="hover:text-red-500 cursor-pointer text-red-500 font-semibold mr-2 ">
          All
        </h3>
        <h3 className="hover:text-red-500 cursor-pointer text-gray-500 mr-2">
          Furnitures
        </h3>
        <h3 className="hover:text-red-500 cursor-pointer text-gray-500 mr-2">
          Bags
        </h3>
        <h3 className="hover:text-red-500 cursor-pointer text-gray-500 mr-2">
          Shoes
        </h3>
        <h3 className="hover:text-red-500 cursor-pointer text-gray-500 mr-2">
          Decoration
        </h3>
      </div>

      <div className="flex items-center gap-8">
        <button className="inline-flex items-center gap-2 font-bold">
          <span className="text-gray-900 font-normal">Filters</span>
          <span className="text-xl text-gray-800">
            <IoMdAdd />
          </span>
        </button>
        <div className="flex items-center gap-2 text-xl text-gray-700">
          <BsGrid />
          <BsList className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
