import Link from "next/link";
import {
	AiFillInstagram,
	AiFillYoutube,
	AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const Footer = () => {
	return (
		<div className=" bg-gray-100 py-14 md:py-20 mt-auto">
			<div className="max-w-7xl mx-auto  text-gray-700 text-sm px-6 xl:px-0">
				<div className="grid grid-cols-1 md:grid-cols-3 items-center align-center  place-items-center md:place-items-start gap-10">
					<Link href="/">
						<h1 className="cursor-pointer uppercase font-bold text-xl text-gray-900">
							Unero
						</h1>
					</Link>

					<div className="flex items-center space-x-4 ">
						<h3 className=" font-semibold text-gray-900 text-sm">
							Newsletter
						</h3>

						{/* Newsletter */}
						<div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500 transition-all">
							<input
								type="email"
								className="bg-gray-100 outline-none px-3 py-2 flex-1"
								placeholder="E-mail Address"
								aria-label="Email address for newsletter"
							/>
							<button
								className="px-3 py-2 hover:text-gray-900 transition-colors"
								aria-label="Subscribe to newsletter"
							>
								<HiArrowNarrowRight aria-hidden="true" />
							</button>
						</div>
					</div>

					{/* social */}
					<div className="flex space-x-3 text-xl text-gray-400  md:justify-self-end">
						<a
							href="#"
							aria-label="Follow us on Instagram"
							className="cursor-pointer hover:text-gray-700 transition-colors"
						>
							<AiFillInstagram aria-hidden="true" />
						</a>
						<a
							href="#"
							aria-label="Follow us on Facebook"
							className="cursor-pointer hover:text-gray-700 transition-colors"
						>
							<FaFacebookF aria-hidden="true" />
						</a>
						<a
							href="#"
							aria-label="Follow us on Twitter"
							className="cursor-pointer hover:text-gray-700 transition-colors"
						>
							<AiOutlineTwitter aria-hidden="true" />
						</a>
						<a
							href="#"
							aria-label="Follow us on YouTube"
							className="cursor-pointer hover:text-gray-700 transition-colors"
						>
							<AiFillYoutube aria-hidden="true" />
						</a>
					</div>
				</div>

				{/* br */}
				<div className="my-8 border border-gray-200 " />

				<div className="flex justify-center md:justify-between items-center flex-wrap gap-6 ">
					<h3>
						&copy; 2022{" "}
						<span className="font-bold text-black">
							&nbsp; Unero &nbsp;
						</span>{" "}
						All rights reserved
					</h3>

					<div className="flex gap-4">
						<h3 className="cursor-pointer hover:text-gray-900 hover:font-semibold">
							Policy
						</h3>
						<h3 className="cursor-pointer hover:text-gray-900 hover:font-semibold">
							Terms & Conditions{" "}
						</h3>
						<h3 className="cursor-pointer hover:text-gray-900 hover:font-semibold">
							Affiliate
						</h3>
						<h3 className="cursor-pointer hover:text-gray-900 hover:font-semibold">
							Help
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
