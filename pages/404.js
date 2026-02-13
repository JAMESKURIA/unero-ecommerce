import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Custom404 = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
			<div className="max-w-2xl mx-auto text-center">
				{/* 404 Number */}
				<h1 className="text-9xl md:text-[200px] font-bold text-gray-200 select-none">
					404
				</h1>

				{/* Message */}
				<div className="-mt-16 md:-mt-24">
					<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
						Page Not Found
					</h2>
					<p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
						The page you&apos;re looking for doesn&apos;t exist or
						has been moved.
					</p>

					{/* Actions */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link href="/">
							<button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
								<HiArrowNarrowLeft />
								<span>Back to Home</span>
							</button>
						</Link>

						<Link href="/products">
							<button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
								Browse Products
							</button>
						</Link>
					</div>
				</div>

				{/* Decorative Element */}
				<div className="mt-16 text-gray-400">
					<p className="text-sm">
						Lost? Try searching for what you need or explore our
						collections.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Custom404;
