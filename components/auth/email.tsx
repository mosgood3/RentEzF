"use client";

import { useState } from "react";
import Link from "next/link";
import { signUp } from "@/actions/auth";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Email() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) =>
    /^\S+@\S+\.\S+$/.test(email);

  const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname")?.toString().trim();
    const email = formData.get("username")?.toString().trim();
    const password = formData.get("password")?.toString() ?? "";

    if (!fullname || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must include uppercase, number, and special character.");
      return;
    }

    const result = await signUp(formData);

    if (!result.success) {
      setError(result.accountExists
        ? "An account with this email already exists."
        : result.error || "An unexpected error occurred.");
    } else {
      window.location.href = "/signup/confirmation";
    }
  };

  return (
    <section className="bg-[url('/home.png')] bg-cover w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col mt-2 rounded-2xl md:flex-row items-center shadow-lg">
        <div className="rounded-2xl w-full max-w-md h-full bg-white py-8 px-10">
        <h2 className="text-center text-4xl text-slate-800 font-semibold mb-4">

            Create Account
          </h2>

          <div className="mb-4 p-2 text-sm text-center text-red-700 min-h-[24px]">
            {error && (
              <>
                {error}
                {error.includes("already exists") && (
                  <span className="block mt-1">
                    <Link href="/login" className="underline font-bold">
                      Log in here
                    </Link>.
                  </span>
                )}
              </>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="relative mb-8">
              <FaUser className="absolute right-2 top-4 text-slate-800" />
              <input
                type="text"
                id="fullname"
                name="fullname"
                maxLength={50}
                autoComplete="name"
                required
                className="peer block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-0 border-b-2 border-slate-600 focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder=" "
              />
              <label
                htmlFor="fullname"
                className="absolute text-xs text-slate-600 transition-all transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8 peer-focus:text-blue-600"
              >
                Name (Personal or Business)
              </label>
            </div>

            {/* Email */}
            <div className="relative mb-8">
              <MdEmail className="absolute right-2 top-4 text-slate-800" />
              <input
                type="email"
                id="username"
                name="username"
                autoComplete="username"
                required
                className="peer block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-0 border-b-2 border-slate-600 focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder=" "
              />
              <label
                htmlFor="username"
                className="absolute text-xs text-slate-600 transition-all transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8 peer-focus:text-blue-600"
              >
                Email
              </label>
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute cursor-pointer right-2 top-3 text-blue-600 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="new-password"
                required
                className="peer block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-0 border-b-2 border-slate-600 focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-xs text-slate-600 transition-all transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8 peer-focus:text-blue-600"
              >
                Password
              </label>
              <p className="text-gray-500 mt-6 text-xs text-center">
                Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.
              </p>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer text-xl font-semibold mt-4 rounded-lg bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
