import { BiMessageRounded } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BreadCrumbs, NewsCard } from "../../components";

const News = () => {
	const NEWS = [1, 2, 3, 4, 5];
	return (
		<div className="px-6 md:px-12 lg:px-20">
			<BreadCrumbs title="Latest News" />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				<main className="md:col-span-2 mb-20">
					<div className="py-10 font-medium flex flex-wrap space-x-6 text-lg text-gray-500 gap-y-2">
						<h3 className="text-red-500 cursor-pointer hover:text-red-500 ">
							All
						</h3>
						<h3 className="cursor-pointer hover:text-red-500">
							Inspiration
						</h3>
						<h3 className="cursor-pointer hover:text-red-500">
							Design
						</h3>
						<h3 className="cursor-pointer hover:text-red-500">
							Fashion
						</h3>
						<h3 className="cursor-pointer hover:text-red-500">
							Art
						</h3>
					</div>

					{/* News Cards */}
					{NEWS.map((n, i) => (
						<NewsCard
							news={n}
							key={i.toString()}
							last={i + 1 === NEWS.length}
						/>
					))}
				</main>

				{/* Asid3e */}
				<aside className="mb-20 sticky top-0">
					<button className="border border-gray-300 rounded flex items-center my-6 overflow-hidden focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500 transition-all">
						<input
							type="text"
							placeholder="Search"
							className="pl-3 py-2 outline-none flex-1"
						/>
						<span className="text-xl p-2 py-3 text-gray-400 font-semibold hover:text-gray-600 transition-colors">
							<FiSearch />
						</span>
					</button>

					{/* Recent Posts */}
					<div className="py-4">
						<h3 className="text-xl font-semibold text-gray-800">
							Recent posts
						</h3>
						<div className="leading-8 pt-3 text-gray-500">
							<h2 className="hover:text-red-500 cursor-pointer">
								Decoration the House with Scandinavan Style
							</h2>
							<h2 className="hover:text-red-500 cursor-pointer">
								Minimalist Style in Furniture Design Industry
							</h2>
							<h2 className="hover:text-red-500 cursor-pointer">
								Simple is Effective
							</h2>
							<h2 className="hover:text-red-500 cursor-pointer">
								Objects to Decorate For Your House
							</h2>
						</div>
					</div>

					{/* Recent Comments */}
					<div className="mt-4 py-4">
						<h3 className="text-xl font-semibold text-gray-800">
							Recent comments
						</h3>
						<div className="leading-8 pt-3">
							<h2 className="font-semibold  text-gray-500  ">
								<span className="inline-block transform translate-y-1">
									<BiMessageRounded />
								</span>
								&nbsp;
								<span className="text-gray-700 cursor-pointer hover:underline">
									Ricardo Elle
								</span>
								&nbsp;on&nbsp;
								<span className="text-gray-700 cursor-pointer hover:underline">
									Decoration the House with Scandinavan Style
								</span>
							</h2>
							<h2 className="font-semibold   text-gray-500  ">
								<span className="inline-block  transform translate-y-1">
									<BiMessageRounded />
								</span>
								&nbsp;
								<span className="text-gray-700 cursor-pointer hover:underline">
									Adam Rita
								</span>
								&nbsp;on&nbsp;
								<span className="text-gray-700 cursor-pointer hover:underline">
									Simple is Effective
								</span>
							</h2>
							<h2 className="font-semibold flex  text-gray-500  ">
								<span className="inline-block  transform translate-y-1">
									<BiMessageRounded />
								</span>
								&nbsp;
								<span className="text-gray-700 cursor-pointer hover:underline">
									Adam Rita
								</span>
								&nbsp;on&nbsp;
								<span className="text-gray-700 cursor-pointer hover:underline">
									Simple is Effective
								</span>
							</h2>
						</div>
					</div>

					{/* Categories */}
					<div className="mt-4 py-4">
						<h3 className="text-xl font-semibold text-gray-800 ">
							Categories
						</h3>
						<div className="leading-8 pt-3">
							<h3 className="text-gray-500 hover:text-red-500 cursor-pointer hover:font-semibold">
								All
							</h3>
							<h3 className="text-gray-500 hover:text-red-500 cursor-pointer hover:font-semibold">
								Inspiration
							</h3>
							<h3 className="text-gray-500 hover:text-red-500 cursor-pointer hover:font-semibold">
								Design
							</h3>
							<h3 className="text-gray-500 hover:text-red-500 cursor-pointer hover:font-semibold">
								Fashion
							</h3>
							<h3 className="text-gray-500 hover:text-red-500 cursor-pointer hover:font-semibold">
								Art
							</h3>
						</div>
					</div>

					{/* Archives */}
					<div className="mt-4 py-4">
						<h3 className="text-xl font-semibold text-gray-800 ">
							Archives
						</h3>
						<div className="leading-8 pt-3">
							<h3 className="text-gray-500 hover:text-red-500 cursor-pointer hover:font-semibold">
								April 2018
							</h3>
							<h3 className="text-gray-500 hover:text-red-500 cursor-pointer hover:font-semibold">
								March 2018
							</h3>
							<h3 className="text-gray-500 hover:text-red-500 cursor-pointer hover:font-semibold">
								November 2015
							</h3>
						</div>
					</div>

					{/* Popular tags */}
					<div className="mt-4 py-4">
						<h3 className="text-xl font-semibold text-gray-800 ">
							Popular Tags
						</h3>
						<div className="pt-3">
							<span className="hover:text-red-500 cursor-pointer font-semibold text-gray-500">
								Envato,{" "}
							</span>
							<span className="hover:text-red-500 cursor-pointer font-semibold text-gray-500">
								Wordpress,{" "}
							</span>
							<span className="hover:text-red-500 cursor-pointer font-semibold text-gray-500">
								Responsive,{" "}
							</span>
							<span className="hover:text-red-500 cursor-pointer font-semibold text-gray-500">
								Woo Commerce,{" "}
							</span>
							<span className="hover:text-red-500 cursor-pointer font-semibold text-gray-500">
								Tailwind css{" "}
							</span>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default News;
