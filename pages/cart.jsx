import { BreadCrumbs, CartItem } from "components";
import Link from "next/link";
import { BiArrowBack, BiRefresh, BiX } from "react-icons/bi";

const Cart = () => {
  return (
    <div>
      <BreadCrumbs title="Shopping Cart" />

      {/* Table - Cart items */}
      <div className="py-6 mt-8">
        <h3 className="text-xl mb-8 text-gray-900">Your cart items</h3>

        <div className="flex items-center justify-around text-gray-600 bg-gray-100 py-6 my-6">
          <h3>Product Name</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>

        {[1, 2, 3].map((p) => (
          <CartItem key={p.toString()} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between my-8 mb-20 pl-4">
        <Link href={"/shop"}>
          <button className="flex items-center gap-2 p-2 bg-black text-white px-3  hover:bg-gray-100 hover:text-black">
            <BiArrowBack />
            <span>Back to Shop</span>
          </button>
        </Link>

        <div className="flex gap-8 ">
          <button className="border border-gray-100 flex items-center gap-2 p-2 bg-none text-gray-900 px-3  hover:bg-gray-200">
            <BiRefresh />
            <span>Update</span>
          </button>
          <button className="border border-gray-100 flex items-center gap-2 p-2 bg-none text-gray-900 px-3 hover:text-white hover:bg-red-400">
            <BiX />
            <span>Clear All</span>
          </button>
        </div>
      </div>

      {/* Proceed to Checkout */}

      <div className="grid grid-cols-3 gap-8  p-10 mb-10">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Calculate shipping
          </h3>
          <select className="p-2 border border-gray-100 outline-none bg-white">
            <option value="Nairobi" selected>
              Nairobi
            </option>
            <option value="Kiambu">Kiambu</option>
            <option value="Limuru">Limuru</option>
            <option value="Thika">Thika</option>
          </select>
          <input
            type="text"
            className="border border-gray-100 p-2 outline-none"
            placeholder="Postcode / Zip"
          />
          <button className="border w-fit border-gray-100 flex items-center gap-2 p-2 bg-none text-gray-900 px-3  hover:bg-gray-200">
            <BiRefresh />
            <span>Update Total</span>
          </button>
        </div>

        {/* Coupon */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Coupon Discount
          </h3>
          <h4>Enter your coupon code if you have one</h4>
          <input
            type="text"
            className="border border-gray-100 p-2 outline-none"
            placeholder="Coupon Code"
          />
          <button className="w-fit border border-gray-100 flex items-center gap-2 p-2 bg-none text-gray-900 px-3  hover:bg-gray-200">
            <span>Apply Coupon</span>
          </button>
        </div>

        {/* Total */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 bg-gray-100 px-6 py-10 ">
            <div className="flex justify-between font-semibold">
              <h3>subtotal</h3>
              <h3>
                $ <span>270.00</span>
              </h3>
            </div>

            <div className="flex flex-col gap-2 py-4 border-t-2 border-b border-gray-300">
              <h3 className="font-semibold ">Shipping</h3>
              <div className="flex justify-between items-center">
                <button className="flex items-center gap-2">
                  <input type="radio" name="" id="" />
                  <span>Standard</span>
                </button>
                <h3>
                  $ <span>10.00</span>
                </h3>
              </div>

              <div className="flex justify-between">
                <button className="flex items-center gap-2">
                  <input type="radio" name="" id="" />
                  <span>Express</span>
                </button>
                <h3>
                  $ <span>19.00</span>
                </h3>
              </div>
            </div>

            <div className="flex justify-between text-lg font-semibold text-black">
              <h3>Total</h3>
              <h3>
                $ <span>280.00</span>
              </h3>
            </div>
          </div>

          <button className="flex items-center justify-center p-3 bg-black text-white px-3 hover:text-black hover:bg-gray-100">
            <span>Proceed to Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
