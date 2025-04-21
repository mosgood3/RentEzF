"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { login } from "@/actions/login";

type LoginResult = {
  success: boolean;
  error?: string;
};

export default function Login() {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    const validateEmail = (email: string): boolean =>
      /^\S+@\S+\.\S+$/.test(email);

    if (!email || !password) {
      setErrorMsg("Email and Password are required.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    const result: LoginResult = await login(formData);

    if (!result.success) {
      setErrorMsg(result.error || "An unexpected error occurred.");
      console.error("Login error:", result.error);
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <section className="bg-[url('/home.png')] bg-cover w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col mt-2 rounded-2xl md:flex-row items-center shadow-lg">
        <div className="rounded-2xl w-full max-w-md h-full bg-white py-8 px-10">
          <h2 className="text-center px-10 text-4xl text-slate-800 font-semibold mb-4">
            Welcome Back
          </h2>

          <div className="mb-4 p-2 text-center text-sm text-red-600 rounded-md min-h-[24px]">
            {errorMsg}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-8">
              <MdEmail className="absolute right-2 top-4 text-slate-800" />
              <input
                type="text"
                id="email"
                name="email"
                className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-0 border-b-2 border-slate-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-xs text-slate-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Your Email
              </label>
            </div>

            <div className="relative mb-6">
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-3 text-blue-600 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEyeSlash className="cursor-pointer text-xl" />
                ) : (
                  <FaEye className="cursor-pointer text-xl" />
                )}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="block w-full py-2.5 px-0 text-xs text-slate-800 bg-transparent border-0 border-b-2 border-slate-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-xs text-slate-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Your Password
              </label>
            </div>

            <div className="flex justify-between mt-4 items-center">
              <div className="flex gap-2 items-center">
                <input
                  className="text-slate-800"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="text-slate-800 text-sm" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
              <span className="m-4">
                <Link
                  href="/login/forgot-password"
                  className="text-blue-600 hover:underline hover:text-blue-800 duration-500 text-sm"
                >
                  Forgot Password?
                </Link>
              </span>
            </div>

            <button
              className="w-full cursor-pointer text-xl font-semibold mt-4 rounded-lg bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
              type="submit"
            >
              Login
            </button>

            <div>
              <div className="flex items-center my-4">
                <hr className="flex-grow border-slate-300" />
                <span className="px-2 text-slate-500 text-xs">
                  or login with
                </span>
                <hr className="flex-grow border-slate-300" />
              </div>

              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center text-white bg-slate-800 rounded-lg py-2 text-sm font-semibold hover:bg-blue-800 duration-500 hover:text-white"
              >
                <FcGoogle className="mr-2 text-xl" />
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
