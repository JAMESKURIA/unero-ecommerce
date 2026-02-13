import { BreadCrumbs } from "components";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Collection {
	id: number;
	name: string;
	description: string;
	image: string;
	category: string;
	itemCount: number;
}

const collections: Collection[] = [
	{
		id: 1,
		name: "Furniture Collection",
		description: "Elegant and modern furniture pieces for your home",
		image: "/chair2.png",
		category: "Furniture",
		itemCount: 1,
	},
	{
		id: 2,
		name: "Bags & Accessories",
		description: "Stylish bags and accessories for every occasion",
		image: "/handbag.png",
		category: "Bags",
		itemCount: 2,
	},
	{
		id: 3,
		name: "Decoration & More",
		description: "Beautiful decorative items to enhance your space",
		image: "/glasses.png",
		category: "Decoration",
		itemCount: 4,
	},
];

const Collections: NextPage = () => {
	return (
		<div className="px-6 md:px-12 lg:px-20">
			<BreadCrumbs title="Our Collections" />

			{/* Hero Section */}
			<div className="text-center py-12">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
					Explore Our Collections
				</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Discover curated collections of premium products, carefully
					selected to bring style and functionality to your life.
				</p>
			</div>

			{/* Collections Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
				{collections.map((collection) => (
					<Link
						key={collection.id}
						href={`/products?category=${collection.category}`}
					>
						<div className="group cursor-pointer">
							{/* Image Container */}
							<div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 h-80 flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
								<Image
									src={collection.image}
									width={300}
									height={300}
									alt={collection.name}
									className="group-hover:scale-110 transition-transform duration-500"
								/>
								{/* Overlay */}
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
							</div>

							{/* Collection Info */}
							<div className="text-center">
								<h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-red-500 transition-colors">
									{collection.name}
								</h3>
								<p className="text-gray-600 mb-3">
									{collection.description}
								</p>
								<div className="flex items-center justify-center gap-2 text-sm text-gray-500">
									<span>{collection.itemCount} items</span>
									<span>•</span>
									<span className="group-hover:text-red-500 transition-colors font-medium">
										Shop Now →
									</span>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Featured Section */}
			<div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Can&apos;t Find What You&apos;re Looking For?
					</h2>
					<p className="text-gray-600 mb-6">
						Browse our complete product catalog to discover all
						available items across all collections.
					</p>
					<Link href="/products">
						<button className="px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
							View All Products
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Collections;
