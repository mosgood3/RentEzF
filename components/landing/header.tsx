"use client";
import { useState } from "react";
import Link from "next/link";
import { RiHomeSmile2Fill, RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <RiHomeSmile2Fill className="text-4xl text-white" />
          <span className="ml-2 text-white font-semibold text-3xl">RentEz</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <a
                href="#features"
                className="text-white duration-300 hover:underline hover:text-slate-800"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-white duration-300 hover:underline hover:text-slate-800"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white duration-300 hover:underline hover:text-slate-800"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white duration-300 hover:underline hover:text-slate-800"
              >
                About
              </a>
            </li>
            <li className="flex space-x-4">
              <Link href="/login">
                <button className="cursor-pointer text-white hover:underline hover:text-slate-800 border-blue-600 py-2 px-4 rounded-full transition duration-300">
                  Log In
                </button>
              </Link>
              <Link href="/signup">
                <button className="cursor-pointer text-slate-800 bg-white border-blue-600 py-2 px-4 rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
                  Create Account
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <RiCloseLine className="text-4xl" />
            ) : (
              <RiMenu3Line className="text-4xl" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col items-center space-y-8 py-6">
            <li>
              <a
                href="#features"
                className="text-slate-800 underline text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-slate-800 hover:underline text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li>
              <Link
                href="/login"
                className="text-slate-800 hover:underline text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="text-slate-800 hover:underline text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
