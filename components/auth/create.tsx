import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { RiHomeSmile2Fill } from "react-icons/ri";

export default function Create() {
  return (
    <section
      className="bg-cover w-full min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/home.png')" }}
    >
      <div className="rounded-2xl w-full max-w-md h-full bg-white py-6">
        {/* Account Creation Form */}
        <div className="rounded-2xl w-full max-w-md h-full bg-white py-6 px-10">
          <h2 className="text-center text-4xl text-slate-800 font-semibold mb-2">
            Choose Provider
          </h2>
          <p className="text-sm mb-8 text-slate-500">
            Start spending more time livng and less time managing tenants.{" "}
          </p>
          <div className="flex flex-col items-center w-full">
          <Link
              href="/signup/email"
              className="w-full flex cursor-pointer bg-slate-800 mt-2 duration-500 items-center justify-center border-2 text-white  rounded-lg py-2 text-sm font-semibold hover:text-white hover:bg-blue-600"
            >
              <RiHomeSmile2Fill className="mr-2 text-gray-slate-800 text-2xl" />
              Sign Up with Email
            </Link>
            <button
              type="button"
              className="w-full  flex cursor-pointer mt-2 bg-slate-800 duration-500 items-center justify-center border-2 text-white  rounded-lg py-2 text-sm font-semibold hover:text-white hover:bg-blue-600"
            >
              <FcGoogle className="mr-2 text-2xl" />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
