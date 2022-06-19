import { ActiveLink } from "components";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6  lg:gap-10 text-gray-700">
      <ActiveLink href={"/"}>
        <a>Home</a>
      </ActiveLink>
      <ActiveLink href="/products">
        <a>Shop</a>
      </ActiveLink>
      <ActiveLink href={"/wishlist"}>
        <a>Wishlist</a>
      </ActiveLink>
      <ActiveLink>Collections</ActiveLink>
      <ActiveLink href={"/news"}>
        <a>News</a>
      </ActiveLink>
      <ActiveLink href={"/contacts"}>
        <a>Contact Us</a>
      </ActiveLink>
    </div>
  );
};

export default Nav;
