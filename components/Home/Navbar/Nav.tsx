import Logo from "@/components/Helper/Logo";
import { NAVLINKS } from "@/constant/constant";
import { link } from "fs";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-100 fixed w-full bg-black">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Logo />
        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAVLINKS.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-white hover:text-yellow-200 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center text-sm">
              Create Account
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
