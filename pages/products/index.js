import { BreadCrumbs, LoadingBanner, NavTwo, ProductList } from "components";
import { data } from "data";
import { useState } from "react";

const Products = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [viewMode, setViewMode] = useState("grid");

	// Filter products based on selected category
	const filteredProducts =
		selectedCategory === "All"
			? data
			: data.filter((product) => product.category === selectedCategory);

	return (
		<div className="px-6 md:px-12 lg:px-20">
			<BreadCrumbs title="Shop Page" />
			<NavTwo
				selectedCategory={selectedCategory}
				onCategoryChange={setSelectedCategory}
				viewMode={viewMode}
				onViewModeChange={setViewMode}
			/>
			<ProductList products={filteredProducts} viewMode={viewMode} />
			<LoadingBanner />
		</div>
	);
};

export const getStaticProps = async () => {
	return {
		props: {},
	};
};

export default Products;
