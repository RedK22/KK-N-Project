import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 text-lg">
      <div>
        <Link href={"/"} className="font-semibold text-3xl">
          <span className="text-green-600">K</span>K
        </Link>
      </div>
      <ul className="hidden md:block">
        <li className="flex gap-8">
          <Link
            className="text-gray-500 hover:text-black transition-colors relative group"
            href="/about"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            className="text-gray-500 hover:text-black transition-colors relative group"
            href="/services"
          >
            Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            className="text-gray-500 hover:text-black transition-colors relative group"
            href="/testimonials"
          >
            Testimonials
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            className="text-gray-500 hover:text-black transition-colors relative group"
            href="/contact"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-center md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Nav;
