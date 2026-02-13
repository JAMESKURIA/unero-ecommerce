import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsCardProps {
	news: number | string;
	last?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, last }) => {
	console.log(news);
	return (
		<div
			className={`w-11/12 flex flex-col gap-2 mb-14 pb-14 ${
				!last && "border-b border-b-gray-100"
			}`}
		>
			<h2 className="text-2xl text-gray-900 font-semibold">
				Decoration The House With Scadinavan Style
			</h2>
			<h3 className="text-gray-500 text-lg">
				<span>January 24th, 2017</span>&nbsp;/&nbsp;<span>Admin</span>
				&nbsp;/&nbsp;
				<span>Inspiration</span>
			</h3>

			<Image
				alt="news image"
				width={1920}
				height={1080}
				src={"/news4.jpg"}
			/>

			<p className="text-gray-500 ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
				animi quaerat earum magnam doloremque. Alias quaerat placeat
				saepe totam ad possimus...
				<Link href={`/news/${news}`}>
					<span className="hover:border-b border-b-red-300 hover:text-red-500 text-gray-700 cursor-pointer py-1 ml-2">
						Read more
					</span>
				</Link>
			</p>
		</div>
	);
};

export default NewsCard;
