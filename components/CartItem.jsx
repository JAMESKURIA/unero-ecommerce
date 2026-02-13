import Image from "next/image";
import { useState } from "react";

const CartItem = () => {
	const [quantity, setQuantity] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [pendingQuantity, setPendingQuantity] = useState(null);

	const handleQuantityChange = (e) => {
		const value = parseInt(e.target.value);

		if (isNaN(value) || value < 0) {
			return; // Don't allow invalid values
		}

		if (value === 0) {
			// Show confirmation modal
			setPendingQuantity(value);
			setShowModal(true);
		} else {
			setQuantity(value);
		}
	};

	const handleConfirmRemove = () => {
		// Here you would actually remove the item from cart
		console.log("Item removed from cart");
		setShowModal(false);
		// For now, just reset to 1
		setQuantity(1);
	};

	const handleCancelRemove = () => {
		setShowModal(false);
		setPendingQuantity(null);
	};

	return (
		<>
			<div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-600 py-6 border-b border-gray-100 md:border-none gap-4">
				<div className=" flex items-center gap-6">
					<div className=" bg-gray-100 p-6">
						<Image
							src={"/bag2.png"}
							height={60}
							width={60}
							alt="Military BackPack"
						/>
					</div>

					<div>
						<h3 className="text-gray-900 ">Military backpack</h3>
						<h4 className="text-gray-600 text-sm">
							&gt; &nbsp;
							<span className="text-gray-700  font-semibold">
								Color &nbsp;
							</span>
							Amber
						</h4>
					</div>
				</div>

				<div className="flex justify-between w-full md:w-auto">
					<span className="md:hidden">Price:</span>
					<h3>
						$ <span>205.00</span>
					</h3>
				</div>

				<div className="flex justify-between w-full md:w-auto items-center">
					<span className="md:hidden">Quantity:</span>
					<input
						className="border border-gray-300 rounded px-3 py-1.5 w-16 text-center focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
						type="number"
						// min="1"
						value={quantity}
						onChange={handleQuantityChange}
					/>
				</div>

				<div className="flex justify-between w-full md:w-auto items-center gap-6">
					<span className="md:hidden">Total:</span>
					<h3>
						$ <span>{(205 * quantity).toFixed(2)}</span>
					</h3>
					<span
						className="text-lg hover:text-red-500 cursor-pointer"
						onClick={() => setShowModal(true)}
					>
						&times;
					</span>
				</div>
			</div>

			{/* Confirmation Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
					<div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
						<h3 className="text-lg font-semibold text-gray-900 mb-3">
							Remove Item?
						</h3>
						<p className="text-gray-600 mb-6">
							Are you sure you want to remove this item from your
							cart?
						</p>
						<div className="flex gap-3 justify-end">
							<button
								onClick={handleCancelRemove}
								className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-gray-700 transition-colors"
							>
								Cancel
							</button>
							<button
								onClick={handleConfirmRemove}
								className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
							>
								Remove
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CartItem;
