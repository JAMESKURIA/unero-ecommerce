import ProductCard from "components/ProductCard";
import { data } from "data";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick";

const Home: NextPage = () => {
	// REact slick settings
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<div className="h-auto py-10 md:h-96 bg-gray-100 flex flex-col md:flex-row items-center justify-around px-6 md:px-0">
				<div className="flex flex-col gap-8 ">
					<h2 className="text-3xl ">
						Simple Wood Chair{" "}
						<span className="block">Collection</span>
					</h2>

					<button className="flex border border-gray-300 w-fit items-center gap-2 p-2 px-4 hover:bg-gray-200 text-red-500  text-sm font-semibold  md:text-xl">
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
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Optio architecto, facere placeat ex iusto quas
						suscipit. Eaque suscipit assumenda.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-16 mx-6 md:mx-0">
					{/* 1 */}
					<div className="md:col-span-2 relative w-full bg-gray-100 h-80 p-3 flex items-center justify-center">
						<Image
							alt="Men's Jackets Collection"
							width={250}
							height={250}
							src={"/man3.png"}
						/>
						<div className="absolute top-4 left-4 space-y-3">
							<h3 className="capitalize text-xl font-semibold text-gray-800">
								Men&#39;s Jackets Collection
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
							alt="Leather Sneakers"
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

					<div className="md:col-span-2 relative w-full bg-gray-100  h-80 p-3 flex items-end justify-center">
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
			<div className="flex flex-col mb-20  mx-auto">
				<h2 className="text-center text-3xl py-4 mb-10 font-medium text-gray-900">
					Related products
				</h2>
				<Slider {...settings}>
					{data.map((prod) => (
						<div key={prod.id}>
							<ProductCard product={prod} />
						</div>
					))}
				</Slider>

				<Link href={"/products"}>
					<a className="text-center underline mt-16 cursor-pointer hover:text-red-500 text-gray-700">
						Browse all Products
					</a>
				</Link>
			</div>

			{/* Featured Sale Banner */}
			<div className=" md:h-96 h-auto py-10 bg-gray-100 mb-20 flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-0">
				<div>
					<div className="space-y-3">
						<h3 className="uppercase text-xl md:text-4xl">Mens</h3>
						<h3 className="uppercase text-5xl md:text-6xl font-semibold">
							Ethic WEar
						</h3>
						<h4 className="text-xl md:text-2xl">
							Upto{" "}
							<span className="text-orange-500 font-bold">
								45%
							</span>{" "}
							off
						</h4>
					</div>
					<button className="mt-8  flex border border-gray-300 w-fit items-center gap-2 p-2 px-4 hover:bg-gray-200 text-red-500 font-semibold text-sm md:text-xl">
						<span>Shop Now</span>
						<HiArrowNarrowRight />
					</button>
				</div>
				<Image
					alt="Men Official Shirts"
					width={320}
					height={320}
					src={"/man.png"}
				/>
			</div>

			{/* From Our Blog */}
			<div className="mb-28">
				<h2 className="text-center text-3xl py-4 mb-10 font-medium text-gray-900">
					From Our Blog
				</h2>

				<div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
					{[1, 2, 3].map((d) => (
						<div
							key={d}
							className="p-6 border border-gray-200 flex flex-col gap-4 hover:bg-gray-100 hover:scale-105 transform duration-200 ease-in-out select-none group"
						>
							<h4 className="text-gray-500 ">Dec 15th, 2018</h4>
							<h3 className="text-lg text-gray-900 font-semibold">
								Clean & Simple With Mimimalistic Workspace
							</h3>
							<p className="text-gray-500">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Consequuntur, cumque?
							</p>

							<button className="w-fit p-2 px-3 text-red-500 font-semibold group-hover:bg-gray-200 transform duration-200 ease-in-out  cursor-pointer">
								Read More
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
