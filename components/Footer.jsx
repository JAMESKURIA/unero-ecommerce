import { HiArrowNarrowRight } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto  text-gray-700 text-sm">
        <div className="flex justify-between align-center">
          <Link href="/">
            <h1 className="cursor-pointer uppercase font-bold text-xl text-gray-900">
              Unero
            </h1>
          </Link>

          <div className="flex items-center space-x-4">
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
          <div className="flex space-x-3 text-xl text-gray-400">
            <AiFillInstagram className="cursor-pointer hover:text-gray-700" />
            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
            <AiOutlineTwitter className="cursor-pointer hover:text-gray-700" />
            <AiFillYoutube className="cursor-pointer hover:text-gray-700" />
          </div>
        </div>

        {/* br */}
        <div className="my-8 bg-gray-200 h-1" style={{ height: "2px" }} />

        <div className="flex justify-between items-center">
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