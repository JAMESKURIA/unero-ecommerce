import React from "react";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className=" flex items-center justify-around text-gray-600 py-6">
      <div className=" flex items-center gap-6">
        <div className=" bg-gray-100 p-6">
          <Image
            src={"/bag2.png"}
            height={60}
            width={60}
            alt="Military BackPack"
          />
        </div>

        <div>
          <h3 className="text-gray-900 ">Military backpack</h3>
          <h4 className="text-gray-600 text-sm">
            &gt; &nbsp;
            <span className="text-gray-700  font-semibold">Color &nbsp;</span>
            Amber
          </h4>
        </div>
      </div>

      <h3>
        $ <span>205.00</span>
      </h3>

      <div>
        <input
          className="border border-gray-200 p-2"
          type="number"
          name=""
          id=""
          defaultValue={1}
        />
      </div>

      <div className="flex justify-between items-center gap-6">
        <h3>
          $ <span>205.00</span>
        </h3>
        <span className="text-lg hover:text-red-500 cursor-pointer">
          &times;
        </span>
      </div>
    </div>
  );
};

export default CartItem;
