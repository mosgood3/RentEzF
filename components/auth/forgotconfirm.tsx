import { RiHomeSmile2Fill } from "react-icons/ri";

export default function ForgotConfirm() {
  return (
    <section
      className="bg-cover w-full min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/home.png')" }}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-10 flex flex-col items-center">
        {/* Icon and title side-by-side */}
        <div className="flex items-center mb-4">
          <RiHomeSmile2Fill className="text-6xl text-blue-600 mr-3" />
          <h1 className="text-4xl font-semibold text-slate-800">
            Verify Your Email
          </h1>
        </div>
        {/* Message centered below */}
        <p className="text-slate-600 text-center">
          We've sent a reset link to your email address. Please follow this link to reset your password.
        </p>
      </div>
    </section>
  );
}
