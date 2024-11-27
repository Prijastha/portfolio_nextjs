"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { HiSun, HiMoon } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="dark:text-white w-full px-4 sm:px-8 py-4 sm:py-8 font-medium">
      <div className="container mx-auto flex items-center justify-between lg:justify-center">
        {/* Mobile toggle button (sm/md screens only) */}
        <div className="lg:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <FaMinus className="text-2xl" />
            ) : (
              <FaPlus className="text-2xl" />
            )}
          </button>
        </div>

        {/* Centered navbar for lg screens */}
        <nav className="hidden lg:flex items-center text-xl gap-10">
          <Link
            href="/"
            className="text-gray-500 font-thin uppercase tracking-[5px] hover:text-orange-800"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-500 font-thin uppercase tracking-[5px] hover:text-orange-800"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-gray-500 font-thin uppercase tracking-[5px] hover:text-orange-800"
          >
            Project
          </Link>
          <Link
            href="#contact"
            className="text-gray-500 font-thin uppercase tracking-[5px] hover:text-orange-800"
          >
            Contact
          </Link>
          {/* Theme Toggle Button after Contact */}
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="text-2xl p-2 rounded-full"
          >
            {resolvedTheme === "dark" ? (
              <HiSun className="text-gray-500 dark:text-gray-300 hover:text-white text-3xl" />
            ) : (
              <HiMoon className="text-black-700 dark:text-gray-300 hover:text-black-700 text-3xl" />
            )}
          </button>
        </nav>

        {/* Theme toggle button (sm/md screens only) */}
        <div className="lg:hidden">
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="text-2xl p-2 rounded-full"
          >
            {resolvedTheme === "dark" ? (
              <HiSun className="text-gray-500 dark:text-gray-300 hover:text-white text-3xl" />
            ) : (
              <HiMoon className="text-black-700 dark:text-gray-300 hover:text-black-700 text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden px-8 py-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="block text-gray-500 font-thin uppercase tracking-[5px] hover:text-orange-800"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-gray-500 font-thin uppercase tracking-[5px] hover:text-orange-800"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block text-gray-500 font-thin uppercase tracking-[5px] hover:text-orange-800"
              onClick={() => setIsOpen(false)}
            >
              Project
            </Link>
            <Link
              href="#contact"
              className="block text-gray-500 font-thin uppercase tracking-[5px] hover:text-orange-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
