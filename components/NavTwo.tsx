import { BsGrid, BsList } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";

const CATEGORIES = ["All", "Furniture", "Bags", "Decoration"];

interface NavTwoProps {
	selectedCategory?: string;
	onCategoryChange?: (category: string) => void;
	viewMode?: "grid" | "list";
	onViewModeChange?: (mode: "grid" | "list") => void;
}

const NavTwo: React.FC<NavTwoProps> = ({
	selectedCategory = "All",
	onCategoryChange,
	viewMode = "grid",
	onViewModeChange,
}) => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center py-6">
			<div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center">
				{CATEGORIES.map((category) => (
					<button
						key={category}
						onClick={() => onCategoryChange?.(category)}
						className={`hover:text-red-500 cursor-pointer mr-2 transition-colors ${
							selectedCategory === category
								? "text-red-500 font-semibold"
								: "text-gray-500"
						}`}
						aria-label={`Filter by ${category}`}
						aria-pressed={selectedCategory === category}
					>
						{category}
					</button>
				))}
			</div>

			<div className="flex items-center gap-8 mt-4 md:mt-0">
				<button
					className="inline-flex items-center gap-2 font-bold"
					aria-label="Show filters"
				>
					<span className="text-gray-900 font-normal">Filters</span>
					<span className="text-xl text-gray-800">
						<IoMdAdd aria-hidden="true" />
					</span>
				</button>
				<div className="flex items-center gap-2 text-xl text-gray-700">
					<button
						onClick={() => onViewModeChange?.("grid")}
						aria-label="Grid view"
						aria-pressed={viewMode === "grid"}
						className={`hover:text-red-500 transition-colors ${
							viewMode === "grid" ? "text-red-500" : ""
						}`}
					>
						<BsGrid aria-hidden="true" />
					</button>
					<button
						onClick={() => onViewModeChange?.("list")}
						aria-label="List view"
						aria-pressed={viewMode === "list"}
						className={`hover:text-red-500 transition-colors ${
							viewMode === "list" ? "text-red-500" : ""
						}`}
					>
						<BsList className="text-2xl" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default NavTwo;
