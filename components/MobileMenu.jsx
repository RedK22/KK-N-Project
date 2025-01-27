"use client";
import React, {useState} from "react";
import {MenuIcon, X} from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("clicked.");
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        {isOpen ? <X color="white" className="z-50" /> : <MenuIcon />}
      </button>
      {isOpen ? (
        <div className="absolute top-0 right-0 bg-green-500 text-white">
          <ul>
            <li className="flex flex-col gap-8">
              <Link className="" onClick={toggleMenu} href="/about">
                About
              </Link>
              <Link className="" onClick={toggleMenu} href="/services">
                Services
              </Link>
              <Link className="" onClick={toggleMenu} href="/testimonials">
                Testimonials
              </Link>
              <Link className="" onClick={toggleMenu} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileMenu;
