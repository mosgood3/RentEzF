
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { resetPassword } from "@/actions/resetpass";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Validate: at least 8 chars, uppercase, number, special char
  const validatePassword = (pw: string) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(pw);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Both password fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password does not meet the required complexity."
      );
      return;
    }

    try {
      const formData = new FormData();
      formData.set("password", password);
      formData.set("confirmPassword", confirmPassword);
      await resetPassword(formData);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to update password.");
    }
  }

  return (
    <section className="bg-[url('/home.png')] bg-cover w-full min-h-screen flex items-center justify-center">
      <div className="rounded-2xl w-full max-w-md bg-white py-8 px-10 shadow-lg">
        <h2 className="text-center text-4xl text-slate-800 font-semibold mb-4">
          Update Password
        </h2>

        <div className="mb-4 text-center text-sm text-red-600 min-h-[24px]">
          {error && <span>{error}</span>}
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* New Password */}
          <div className="relative mb-6">
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-2 top-3 text-blue-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash className="text-xl cursor-pointer" /> : <FaEye className="cursor-pointer text-xl" />}
            </button>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
              className="peer block w-full py-2.5 px-0 text-xs text-slate-800 bg-transparent border-0 border-b-2 border-slate-600 focus:outline-none focus:ring-0 focus:border-blue-600"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-xs text-slate-600 transition-all transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              New Password
            </label>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-6">
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-2 top-3 text-blue-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash className="cursor-pointer text-xl" /> : <FaEye className="cursor-pointer text-xl" />}
            </button>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
              className="peer block w-full py-2.5 px-0 text-xs text-slate-800 bg-transparent border-0 border-b-2 border-slate-600 focus:outline-none focus:ring-0 focus:border-blue-600"
              placeholder=" "
            />
            <label
              htmlFor="confirmPassword"
              className="absolute text-xs text-slate-600 transition-all transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Confirm Password
            </label>
          </div>

          <p className="text-gray-500 mt-4 text-xs text-center">
            Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.
          </p>

          <button
            type="submit"
            className="w-full text-xl cursor-pointer font-semibold mt-6 rounded-lg bg-blue-600 text-white hover:bg-blue-900 py-2 transition duration-300"
          >
            Update Password
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link
            href="/login"
            className="text-sm text-blue-600 hover:underline hover:text-blue-800"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </section>
  );
  }
