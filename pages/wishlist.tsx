import { BreadCrumbs, WishListItem } from "components";
import { data } from "data";
import type { NextPage } from "next";

const Wishlist: NextPage = () => {
	return (
		<div className="px-6 md:px-12 lg:px-20">
			<BreadCrumbs title="My Wishlist" />

			<div className="hidden md:grid mt-10 grid-cols-5  place-items-center text-gray-700 text-lg py-4 border-b border-gray-100 my-4">
				<h3 className="col-span-2">Product Name</h3>
				<h3>Unit Price</h3>
				<h3 className="justify-self-center">Stock Status</h3>
			</div>

			<div className="mb-40 ">
				{data.map(
					(product, idx) =>
						idx < 4 && (
							<WishListItem
								key={product.id.toString()}
								product={product}
							/>
						),
				)}
			</div>
		</div>
	);
};

export default Wishlist;
