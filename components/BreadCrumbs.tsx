import Link from "next/link";
import { useRouter } from "next/router";

interface BreadCrumbsProps {
	title: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ title }) => {
	const router = useRouter();
	const { pathname } = router;
	const path = pathname.split("/");
	// console.log(path);

	return (
		<div className=" h-48  flex flex-col items-center justify-center">
			<h3 className="mb-4 font-normal text-3xl text-gray-900 ">
				{title}
			</h3>
			<div className="flex gap-2">
				<Link href={"/"}>
					<h4 className=" text-gray-800 cursor-pointer">Home</h4>
				</Link>

				<h4 className="text-gray-500 capitalize">
					{path.map(
						(p, i) =>
							i !== 0 && <span key={i.toString()}> / {p} </span>,
					)}
				</h4>
			</div>
		</div>
	);
};

export default BreadCrumbs;
