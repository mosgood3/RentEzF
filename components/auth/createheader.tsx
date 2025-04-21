"use client";
import Link from "next/link";
import { RiHomeSmile2Fill } from "react-icons/ri";

export default function CreateHeader() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <RiHomeSmile2Fill className="text-4xl text-white" />
          <span className="ml-2 text-white font-semibold text-3xl">RentEz</span>
        </Link>
        <Link href="/login">
          <p className="cursor-pointer text-white text-sm">
            Already a Member?{" "}
            <span className="underline text-white">Sign in</span>
          </p>
        </Link>
      </div>
    </header>
  );
}
