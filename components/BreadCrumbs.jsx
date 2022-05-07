import React from "react";

const BreadCrumbs = () => {
  return (
    <div className=" h-48  flex flex-col items-center justify-center">
      <h3 className="mb-4 font-normal text-3xl text-gray-900 ">Shop Page</h3>
      <div className="flex gap-2">
        <h4 className=" text-gray-800">Home</h4>

        <h4 className="text-gray-500">
          <span> / </span>Shop
        </h4>
      </div>
    </div>
  );
};

export default BreadCrumbs;
