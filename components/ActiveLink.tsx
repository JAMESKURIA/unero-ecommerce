import { useRouter } from "next/router";
import React from "react";

interface ActiveLinkProps {
	children: React.ReactNode;
	href: string;
}

export default function ActiveLink({ children, href }: ActiveLinkProps) {
	const router = useRouter();
	const active = router.pathname === href;

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const routeAs = href?.includes("/products")
			? href.replace("/products", "/shop")
			: href;

		router.push(href ? href : "/", routeAs);
	};

	return (
		<a
			href={href ? href : "/"}
			onClick={handleClick}
			className={`cursor-pointer hover:text-gray-900 hover:font-bold ${
				active && "text-gray-900 font-bold"
			} `}
		>
			{children}
		</a>
	);
}
