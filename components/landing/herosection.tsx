import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/Home.png')" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="lg:text-6xl text-4xl font-semibold text-white mb-4">
              Simplify Your Renting Needs
            </h1>
            <p className="text-gray-300 mb-6">
              RentEz helps property managers and landlords streamline
              operations, track tenants, manage finances, and maintain
              properties effortlessly.
            </p>
            <div className="flex space-x-4">
              <a
                href="/signup"
                className="px-6 py-3 bg-white text-slate-800 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Get Started for Free →
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
            <Image
              src="/add.png"
              alt="Additional Illustration"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
