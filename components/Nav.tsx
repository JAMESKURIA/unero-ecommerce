import { ActiveLink } from "components";

const Nav: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row gap-6  lg:gap-10 text-gray-700">
			<ActiveLink href={"/"}>Home</ActiveLink>
			<ActiveLink href="/products">Shop</ActiveLink>
			<ActiveLink href={"/wishlist"}>Wishlist</ActiveLink>
			<ActiveLink href="/collections">Collections</ActiveLink>
			<ActiveLink href={"/news"}>News</ActiveLink>
			<ActiveLink href={"/contacts"}>Contact Us</ActiveLink>
		</div>
	);
};

export default Nav;
