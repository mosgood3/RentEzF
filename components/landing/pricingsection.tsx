"use client";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Manage up to 5 Tenants",
        "Automated Rent Collection",
        "Advanced Payment Tracking",
      ],
      link: "/signup",
    },
    {
      name: "Pro",
      price: "$4.99/mo",
      features: [
        "Manage up to 10 Tenants",
        "Automated Rent Collection",
        "AI Powered Leasing Docs",
      ],
      link: "/signup",
    },
    {
      name: "Elite",
      price: "$19.99/mo",
      features: [
        "Manage unlimited properties",
        "Priority Support",
        "Advanced Reporting",
      ],
      link: "/signup",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-cover py-20 overflow-hidden"
      style={{ backgroundImage: "url('/Hometwo.png')" }}
    >
      {/* Background overlay for improved contrast */}
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-slate-800 mb-12">
          Plans for Landlords of Any Size
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-slate-200 p-8 rounded-lg bg-blue-100 transition-all transform hover:scale-105 hover:shadow-2xl hover:border-blue-600 hover:border-2"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-extrabold text-blue-600 mb-6">
                {plan.price}
              </p>
              <ul className="text-slate-700 space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.link}
                className="block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
