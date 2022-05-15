import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import { data } from "../data";

export default function Home() {
  // REact slick settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="h-96 bg-gray-100 flex  items-center justify-around">
        <div className="flex flex-col gap-8 ">
          <h2 className="text-3xl">
            Simple Wood Chair <span className="block">Collection</span>
          </h2>

          <button className="flex border border-gray-300 w-fit items-center gap-2 p-2 px-4 hover:bg-gray-200 text-red-500 font-semibold text-xl">
            <span>Shop Now</span>
            <HiArrowNarrowRight />
          </button>
        </div>
        <Image
          alt="featured product"
          height={320}
          width={320}
          src={"/chair1.png"}
        />
      </div>

      {/* Featured Collections */}
      <div className="my-20 ">
        <div className="flex flex-col items-center gap-3 leading-8">
          <h3 className="text-center font-medium text-3xl text-gray-900">
            Featured Collections
          </h3>
          <p className="text-center w-3/5 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            architecto, facere placeat ex iusto quas suscipit. Eaque suscipit
            assumenda.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 my-16">
          {/* 1 */}
          <div className="col-span-2 relative w-full bg-gray-100 h-80 p-3 flex items-center justify-center">
            <Image
              alt="Short T-shirts"
              width={250}
              height={250}
              src={"/shirt.png"}
            />
            <div className="absolute top-4 left-4 space-y-3">
              <h3 className="capitalize text-xl font-semibold text-gray-800">
                Short T-shirts
              </h3>
              <button className="border border-gray-200 w-fit p-1 px-2 text-gray-500 hover:text-red-500 hover:bg-gray-300 text-lg font-medium">
                Shop Now
              </button>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative w-full bg-gray-100  h-80 p-3 flex items-end justify-center">
            <Image
              alt="Basic Backpacks"
              width={200}
              height={200}
              src={"/bag2.png"}
            />
            <div className="absolute top-4 left-4 space-y-3 ">
              <h3 className="text-xl font-semibold text-gray-800">
                Basic Backpacks
              </h3>
              <button className="border border-gray-200 w-fit p-1 px-2 text-gray-500 hover:text-red-500 hover:bg-gray-300 text-lg font-medium">
                Shop Now
              </button>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative w-full bg-gray-100  h-80 p-3 flex items-end justify-center">
            <Image
              alt="Basic Backpacks"
              width={200}
              height={200}
              src={"/shoes.png"}
            />
            <div className="absolute top-4 left-4 space-y-3 ">
              <h3 className="text-xl font-semibold text-gray-800">
                Leather Sneakers
              </h3>
              <button className="border border-gray-200 w-fit p-1 px-2 text-gray-500 hover:text-red-500 hover:bg-gray-300 text-lg font-medium">
                Shop Now
              </button>
            </div>
          </div>

          {/* 4 */}

          <div className="col-span-2 relative w-full bg-gray-100  h-80 p-3 flex items-end justify-center">
            <Image
              alt="Family dining Table"
              width={340}
              height={300}
              src={"/dining.png"}
            />
            <div className="absolute top-4 left-4 space-y-3 ">
              <h3 className="capitalize text-xl font-semibold text-gray-800">
                Family dining Table
              </h3>
              <button className="border border-gray-200 w-fit p-1 px-2 text-gray-500 hover:text-red-500 hover:bg-gray-300 text-lg font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="flex flex-col mb-20 ">
        <h2 className="text-center text-3xl py-4 mb-10 font-medium text-gray-900">
          Related products
        </h2>
        <Slider {...settings}>
          {data.map((prod) => (
            <div key={prod}>
              <ProductCard product={prod} />
            </div>
          ))}
        </Slider>

        <Link href={"/shop"}>
          <a className="text-center underline mt-16 cursor-pointer hover:text-red-500 text-gray-700">
            Browse all Products
          </a>
        </Link>
      </div>

      {/* Featured Sale Banner */}
      <div className="h-96 bg-gray-100 mb-20 flex justify-around items-center">
        <div>
          <div className="space-y-3">
            <h3 className="uppercase text-4xl">Womens</h3>
            <h3 className="uppercase text-6xl font-semibold">Ethic WEar</h3>
            <h4 className="text-2xl">
              Upto <span className="text-orange-500 font-bold">45%</span> off
            </h4>
          </div>
          <button className="mt-8  flex border border-gray-300 w-fit items-center gap-2 p-2 px-4 hover:bg-gray-200 text-red-500 font-semibold text-xl">
            <span>Shop Now</span>
            <HiArrowNarrowRight />
          </button>
        </div>
        <Image
          alt="Short T-shirts"
          width={300}
          height={250}
          src={"/shirt.png"}
        />
      </div>

      {/* From Our Blog */}
      <div className="mb-28">
        <h2 className="text-center text-3xl py-4 mb-10 font-medium text-gray-900">
          From Our Blog
        </h2>

        <div className="grid grid-cols-3 gap-6 ">
          {/* <div className="p-6 border border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg text-gray-900 font-semibold">
              Clean & Simple With Mimimalistic Workspace
            </h3>
            <h4 className="text-gray-500 ">Dec 15th, 2018</h4>
            <Image
              alt="news image "
              height={200}
              width={200}
              src={"/news3.jpg"}
            />
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, cumque?
            </p>

            <button className="w-fit p-2 px-3 text-red-500 font-semibold hover:bg-gray-100 cursor-pointer">
              Continue
            </button>
          </div>
          <div className="p-6 border border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg text-gray-900 font-semibold">
              Clean & Simple With Mimimalistic Workspace
            </h3>
            <h4 className="text-gray-500 ">Dec 15th, 2018</h4>
            <Image
              alt="news image "
              height={200}
              width={200}
              src={"/news4.jpg"}
            />
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, cumque?
            </p>

            <button className="w-fit p-2 px-3 text-red-500 font-semibold hover:bg-gray-100 cursor-pointer">
              Continue
            </button>
          </div>
          <div className="p-6 border border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg text-gray-900 font-semibold">
              Clean & Simple With Mimimalistic Workspace
            </h3>
            <h4 className="text-gray-500 ">Dec 15th, 2018</h4>
            <Image
              alt="news image "
              height={200}
              width={200}
              src={"/news5.jpg"}
            />
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, cumque?
            </p>

            <button className="w-fit p-2 px-3 text-red-500 font-semibold hover:bg-gray-100 cursor-pointer">
              Continue
            </button>
          </div> */}
          <div className="p-6 border border-gray-200 flex flex-col gap-4">
            <h4 className="text-gray-500 ">Dec 15th, 2018</h4>
            <h3 className="text-lg text-gray-900 font-semibold">
              Clean & Simple With Mimimalistic Workspace
            </h3>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, cumque?
            </p>

            <button className="w-fit p-2 px-3 text-red-500 font-semibold hover:bg-gray-100 cursor-pointer">
              Continue
            </button>
          </div>
          <div className="p-6 border border-gray-200 flex flex-col gap-4">
            <h4 className="text-gray-500 ">Dec 15th, 2018</h4>
            <h3 className="text-lg text-gray-900 font-semibold">
              Clean & Simple With Mimimalistic Workspace
            </h3>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, cumque?
            </p>

            <button className="w-fit p-2 px-3 text-red-500 font-semibold hover:bg-gray-100 cursor-pointer">
              Continue
            </button>
          </div>
          <div className="p-6 border border-gray-200 flex flex-col gap-4">
            <h4 className="text-gray-500 ">Dec 15th, 2018</h4>
            <h3 className="text-lg text-gray-900 font-semibold">
              Clean & Simple With Mimimalistic Workspace
            </h3>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, cumque?
            </p>

            <button className="w-fit p-2 px-3 text-red-500 font-semibold hover:bg-gray-100 cursor-pointer">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
