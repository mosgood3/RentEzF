export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">
          Tools That Save Time & Money
        </h2>
        <div className="grid grid-cols-1 rounded-lg sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Financial Tracking */}
          <div className="max-w-md mx-auto  border-2 border-neutral-400 transition p-6 bg-neutral-100 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-slate-800">
              Financial Tracking
            </h2>
            <p className="mt-1 text-sm pb-4 border-b border-slate-400 text-slate-700">
              Track rent payments, expenses, and generate detailed financial
              reports.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="py-2 text-slate-600 font-medium text-xs">
                      Date
                    </th>
                    <th className="py-2 text-slate-600 font-medium text-xs">
                      Transaction
                    </th>
                    <th className="py-2 text-slate-600 font-medium text-xs text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-300">
                    <td className="py-2 text-slate-500 text-xs font-light">
                      01/01/2025
                    </td>
                    <td className="py-2 text-slate-500 text-xs font-light">
                      Rent Payment
                    </td>
                    <td className="py-2 text-right text-green-600 text-xs font-light">
                      +$1,200.00
                    </td>
                  </tr>
                  <tr className="border-t border-slate-300">
                    <td className="py-2 text-slate-500 text-xs font-light">
                      01/15/2024
                    </td>
                    <td className="py-2 text-slate-500 text-xs font-light">
                      Repair Expense
                    </td>
                    <td className="py-2 text-right text-red-600 text-xs font-light">
                      -$150.00
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            <div className="mt-7">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Automatic Payments */}
          <div className="max-w-md mx-auto  border-2 border-neutral-400 transition p-6 bg-neutral-100 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-slate-800">
              Automatic Payments
            </h2>
            <p className="mt-1 text-sm pb-4 border-b border-slate-400 text-slate-700">
              Collect payments with ACH, assuring on time payments.
            </p>
            <div
              className="mt-4 overflow-x-auto h-28"
              style={{
                backgroundImage: "url('/ach.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* AI Powered Docs */}
          <div className="max-w-md mx-auto  border-2 border-neutral-400 transition p-6 bg-neutral-100 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-slate-800">
              AI Powered Docs
            </h2>
            <p className="mt-1 text-sm pb-4 border-b border-slate-400 text-slate-700">
              Generate leasing agreements through integrated AI models.
            </p>
            <div
              className="mt-4 overflow-x-auto h-28"
              style={{
                backgroundImage: "url('/leasing.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Maintenance Request */}
          <div className="max-w-md mx-auto  border-2 border-neutral-400 transition p-6 bg-neutral-100 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-slate-800">
              Maintenance Request
            </h2>
            <p className="mt-1 text-sm pb-4 border-b border-slate-400 text-slate-700">
              Submit and track maintenance issues with ease.
            </p>
            <div
              className="mt-4 overflow-x-auto h-28"
              style={{
                backgroundImage: "url('/maint.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Team Access & Roles */}
          <div className="max-w-md mx-auto  border-2 border-neutral-400 transition p-6 bg-neutral-100 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-slate-800">
              Team Access & Roles
            </h2>
            <p className="mt-1 text-sm pb-4 border-b border-slate-400 text-slate-700">
              Create employee accounts with customizable permissions.
            </p>
            <div
              className="mt-4 overflow-x-auto h-28"
              style={{
                backgroundImage: "url('/team.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Unlimited Properties */}
          <div className="max-w-md mx-auto  border-2 border-neutral-400 transition p-6 bg-neutral-100 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-slate-800">
              Unlimited Properties
            </h2>
            <p className="mt-1 text-sm pb-4 border-b border-slate-400 text-slate-700">
              Manage one unit or one hundred with ease on a single dashboard.
            </p>
            <div
              className="mt-4 overflow-x-auto h-28"
              style={{
                backgroundImage: "url('/unlimited.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
