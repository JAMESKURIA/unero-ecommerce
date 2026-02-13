import { ProductList } from "components";
import { data } from "data";
import Image from "next/image";
import {
	AiFillInstagram,
	AiFillYoutube,
	AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const SingleNews = () => {
	return (
		<div className="px-6 md:px-12 lg:px-20">
			<div className="h-64 flex flex-col items-center justify-center gap-4">
				<h1 className="text-3xl font-semibold text-gray-900">
					Simple is Effective
				</h1>
				<h2 className="text-gray-500 text-lg">
					<span>Logancee</span> | <span>December 29th, 2016</span> |{" "}
					<span>Art</span>
				</h2>
			</div>

			{/* Image */}
			<div>
				<Image
					alt="news blog image"
					height={920}
					width={1920}
					src={"/news3.jpg"}
					objectFit="cover"
					objectPosition="center"
				/>
			</div>

			<div className="w-5/6 mx-auto py-20 flex flex-col gap-10 ">
				<h3 className="font-semibold text-2xl text-gray-800 leading-9">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quidem, maiores! Consectetur quos totam ea unde
					necessitatibus ullam beatae ipsa voluptatibus ad. Minus
					ipsam dolore placeat voluptate necessitatibus vitae suscipit
					mollitia!
				</h3>

				<p className="text-lg text-gray-700 leading-9">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Dignissimos iusto quas hic eaque eius nemo asperiores quis
					similique iure qui. Mollitia, deleniti. Accusantium quidem
					et vitae officia itaque ea impedit odit esse quod
					consectetur, rerum nobis minus voluptatum voluptatibus
					inventore dolorem nostrum provident. Magnam odio laboriosam
					reiciendis ad praesentium numquam eos eligendi maiores quam
					veritatis obcaecati rem, cumque placeat quos sit laudantium,
					nesciunt vitae amet quas. Magnam obcaecati officia nulla,
					ducimus distinctio, quaerat aliquid numquam fugiat eligendi
					sunt beatae quasi voluptatum nihil repellendus ipsa pariatur
					cum, soluta magni eveniet accusamus eum! Tempora omnis
					maiores magnam et, fugit cumque praesentium deserunt dicta
					quaerat ad a expedita perspiciatis animi accusamus alias
					distinctio eos illo iste ducimus ipsam debitis iusto in vel
					eaque.
				</p>
				<p className="text-lg text-gray-700 leading-9">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Sunt nam eveniet ab nobis laudantium, rerum optio ipsa,
					aliquid qui autem sit repellat, cumque error minus facilis
					deserunt doloremque unde accusantium.
				</p>
			</div>

			{/* Recommended items */}
			<div className="flex flex-col gap-3 w-5/6 mx-auto">
				<h3 className=" text-2xl text-gray-900 leading-9">
					Recommended items
				</h3>
				<p className="text-lg text-gray-700 leading-9">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Sunt nam eveniet ab nobis laudantium, rerum optio ipsa,
					aliquid qui autem sit repellat, cumque error minus facilis
					deserunt doloremque unde accusantium.
				</p>
			</div>

			{/* Products */}
			<div className="py-10">
				<ProductList products={data} />
			</div>

			<div className="flex flex-col items-center justify-center gap-3  py-14">
				<h3 className=" text-gray-600 text-lg">
					<span className="text-gray-900">Tags: </span>
					<span className="hover:text-red-500 cursor-pointer">
						Art,{" "}
					</span>
					<span className="hover:text-red-500 cursor-pointer">
						Product,{" "}
					</span>
					<span className="hover:text-red-500 cursor-pointer">
						Minimal,{" "}
					</span>
					<span className="hover:text-red-500 cursor-pointer">
						Furniture
					</span>
				</h3>
				<div className="flex items-center gap-2">
					<span className="text-gray-900 text-lg ">Share: </span>
					{/* social */}
					<div className="flex space-x-3  text-gray-400">
						<AiFillInstagram className="cursor-pointer hover:text-gray-700" />
						<FaFacebookF className="cursor-pointer hover:text-gray-700" />
						<AiOutlineTwitter className="cursor-pointer hover:text-gray-700" />
						<AiFillYoutube className="cursor-pointer hover:text-gray-700" />
					</div>
				</div>
			</div>

			{/* Controls - Next && Prev */}
			<div className="flex justify-between py-10 mb-20">
				<div className="space-y-3 hover:bg-gray-100 p-2 px-4 border cursor-pointer border-gray-300">
					<button className="flex items-center gap-2 text-xl font-semibold">
						<HiArrowNarrowLeft />
						<span>Older</span>
					</button>
					<h3 className="text-lg ">
						Minimalist Style in Furniture Design Industry
					</h3>
				</div>
				<div className="text-gray-500  cursor-not-allowed space-y-3 hover:bg-gray-100 p-2 px-4 border border-gray-300">
					<button className="flex items-center gap-2 text-xl">
						<span className="font-semibold">Newer</span>
						<HiArrowNarrowRight />
					</button>
					<h3 className="text-lg">
						Minimalist Style in Furniture Design Industry
					</h3>
				</div>
			</div>
		</div>
	);
};

export default SingleNews;
