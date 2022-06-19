import Link from "next/link";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const Footer = () => {
  return (
    <div className=" bg-gray-100 py-14 md:py-20 mt-auto">
      <div className="max-w-7xl mx-auto  text-gray-700 text-sm px-6 xl:px-0">
        <div className="grid gird-cols-1 md:grid-cols-3 items-center align-center  place-items-center md:place-items-start gap-10">
          <Link href="/">
            <h1 className="cursor-pointer uppercase font-bold text-xl text-gray-900">
              Unero
            </h1>
          </Link>

          <div className="flex items-center space-x-4 ">
            <h3 className=" font-semibold text-gray-900 text-sm">Newsletter</h3>

            {/* Newsletter */}
            <button className="flex items-center space-x-2 border-b-2 border-gray-200 bg-gray-100 px-2">
              <input
                type="email"
                className="bg-gray-100 outline-none "
                placeholder="E-mail Address"
                name=""
                id=""
              />
              <HiArrowNarrowRight />
            </button>
          </div>

          {/* social */}
          <div className="flex space-x-3 text-xl text-gray-400  md:justify-self-end">
            <AiFillInstagram className="cursor-pointer hover:text-gray-700" />
            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
            <AiOutlineTwitter className="cursor-pointer hover:text-gray-700" />
            <AiFillYoutube className="cursor-pointer hover:text-gray-700" />
          </div>
        </div>

        {/* br */}
        <div className="my-8 border border-gray-200 " />

        <div className="flex justify-center md:justify-between items-center flex-wrap gap-6 ">
          <h3>
            &copy; 2022{" "}
            <span className="font-bold text-black">&nbsp; Unero &nbsp;</span>{" "}
            All rights reserved
          </h3>

          <div className="flex gap-4">
            <h3 className="cursor-pointer hover:text-gray-900 hover:font-semibold">
              Policy
            </h3>
            <h3 className="cursor-pointer hover:text-gray-900 hover:font-semibold">
              Terms & Conditions{" "}
            </h3>
            <h3 className="cursor-pointer hover:text-gray-900 hover:font-semibold">
              Affiliate
            </h3>
            <h3 className="cursor-pointer hover:text-gray-900 hover:font-semibold">
              Help
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
