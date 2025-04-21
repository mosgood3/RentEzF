// app/(auth)/login/forgot-password/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { forgotPassword } from "@/actions/forgotpass"; // make sure this matches your file system

export default function ForgotPasswordPage() {
  const [error, setError] = useState<string>("");

  // simple email regex
  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    // grab the form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get("username")?.toString().trim() || "";

    // client‑side validations
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // call your server action
    try {
      await forgotPassword(formData);
      // if the action redirects, Next.js will handle it
    } catch (err: any) {
      // in case your action throws or you want to catch other errors
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-[url('/home.png')] bg-cover w-full min-h-screen flex items-center justify-center">
      <div className="rounded-2xl w-full max-w-md bg-white py-8 px-10">
        <h2 className="text-center text-4xl text-slate-800 font-semibold mb-2">
          Forgot Password
        </h2>
        <p className="text-sm mb-4 text-center text-slate-500">
          Please enter the email address associated with your RentEz account. We
          will send you a reset link.
        </p>

        <div className="mb-4 min-h-[24px] text-center text-sm text-red-600">
          {error}
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="relative mb-6">
            <MdEmail className="absolute right-2 top-4 text-slate-800" />
            <input
              type="email"
              id="username"
              name="username"
              autoComplete="username"
              placeholder=" "
              className="peer block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-0 border-b-2 border-slate-600 focus:outline-none focus:ring-0 focus:border-blue-600"
            />
            <label
              htmlFor="username"
              className="absolute top-3 left-0 text-xs text-slate-600 transition-all transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Your Email
            </label>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer text-xl font-semibold rounded-lg bg-blue-600 text-white py-2 hover:bg-blue-900 transition duration-300"
          >
            Request Reset
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
