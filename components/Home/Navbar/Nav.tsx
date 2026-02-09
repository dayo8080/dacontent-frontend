"use client";
import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { NAVLINKS } from "@/constant/constant";
import { link } from "fs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      if (window.scrollY < 90) setNavbg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${navBg ? "dark:bg-amber-900 bg-blue-950 shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full`}
    >
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
          {/* Theme toggler*/}
          <ThemeToggler />
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
