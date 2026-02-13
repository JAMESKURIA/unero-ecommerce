import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { ProductCard } from ".";
import { Product } from "../types";

const STARS = [1, 2, 3, 4, 5];

interface ProductListProps {
	products: Product[];
	viewMode?: "grid" | "list";
}

const ProductList: React.FC<ProductListProps> = ({
	products,
	viewMode = "grid",
}) => {
	if (viewMode === "list") {
		return (
			<div className="container mt-4 mx-auto">
				<div className="flex flex-col gap-6">
					{products?.map((product) => (
						<ProductListItem
							key={product.id.toString()}
							product={product}
						/>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="container mt-4 mx-auto">
			<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products?.map((product) => (
					<ProductCard
						key={product.id.toString()}
						product={product}
					/>
				))}
			</div>
		</div>
	);
};

interface ProductListItemProps {
	product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
	const [liked, setLiked] = React.useState(false);

	const handleLike = (id: number) => {
		console.log("Liked product id: ", id);
		setLiked((prev) => !prev);
	};

	const handleAddtoBag = (id: number) => {
		alert(`Added item ${id} to cart`);
	};

	return (
		<div className="flex flex-col md:flex-row gap-6 p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
			{/* Product Image */}
			<Link href={`/products/${product.id}`}>
				<div className="relative bg-gray-100 p-6 flex items-center justify-center hover:cursor-pointer md:w-64 md:h-64 flex-shrink-0">
					<Image
						src={`/${product.images[0]}`}
						height={180}
						width={180}
						alt={product.name}
						className="hover:scale-105 transition duration-300"
					/>
					{product.sale && (
						<div className="absolute top-4 right-4 bg-orange-600 rounded">
							<h3 className="px-3 py-1 text-white font-bold capitalize text-sm">
								sale
							</h3>
						</div>
					)}
				</div>
			</Link>

			{/* Product Details */}
			<div className="flex-1 flex flex-col justify-between">
				<div>
					<Link href={`/products/${product.id}`}>
						<h3 className="text-xl font-medium hover:text-red-500 cursor-pointer transition-colors mb-2">
							{product.name}
						</h3>
					</Link>

					{/* Stars */}
					{product.stars > 0 && (
						<div className="flex gap-1 text-gray-400 text-sm mb-3">
							{STARS.map((star) => (
								<AiFillStar
									key={star.toString()}
									className={`${product.stars >= star && "text-yellow-400"}`}
								/>
							))}
						</div>
					)}

					{/* Price */}
					<div className="text-lg text-gray-700 space-x-2 mb-4">
						<span
							className={`${product.discount > 0 && "text-red-600"} font-semibold`}
						>
							${product.price}
						</span>
						{product.discount > 0 && (
							<span className="line-through text-gray-500">
								${product.price + product.discount}
							</span>
						)}
					</div>

					{/* Stock Status */}
					<div className="mb-4">
						{product.inStock > 0 ? (
							<span className="text-green-600 text-sm">
								In Stock ({product.inStock} available)
							</span>
						) : (
							<span className="text-red-600 text-sm">
								Out of Stock
							</span>
						)}
					</div>
				</div>

				{/* Actions */}
				<div className="flex items-center gap-4">
					<button
						onClick={() => handleAddtoBag(product.id)}
						className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
						aria-label="Add to cart"
					>
						Add to Cart
					</button>
					<button
						className="text-2xl cursor-pointer hover:text-red-500 transition-colors"
						onClick={() => handleLike(product.id)}
						aria-label={
							liked ? "Remove from wishlist" : "Add to wishlist"
						}
					>
						{!liked ? (
							<AiOutlineHeart aria-hidden="true" />
						) : (
							<AiFillHeart
								className="text-red-500"
								aria-hidden="true"
							/>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
