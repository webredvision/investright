import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Financial Management Services",
  description: "Manage your finances effectively with expert strategies and personalized guidance.",
};

export default function FinancialManagementPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full bg-black/60">
        <Image
          src="/images/services/financial-management.jpg"
          alt="Financial Management"
          fill
          className="object-cover -z-10 opacity-60"
        />
        <div className="h-full w-full flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Financial Management
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl px-4 md:px-6 mx-auto py-12 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Empowering Your Financial Decisions
        </h2>
        <p className="text-gray-600 text-lg">
          Our Financial Management services are designed to help you take control of your finances, make informed decisions, and build a strong financial future. Whether you're an individual or a business, we offer tailored strategies to manage income, expenses, investments, and risk efficiently.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl px-4 md:px-6 mx-auto space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Why Choose Our Financial Management Services?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Comprehensive financial planning and budgeting assistance</li>
            <li>Investment tracking and portfolio performance reviews</li>
            <li>Debt reduction strategies and credit score improvement</li>
            <li>Tax optimization and compliance support</li>
            <li>Business cash flow and working capital management</li>
          </ul>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 max-w-6xl px-4 md:px-6 mx-auto space-y-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Financial Management Services Include:</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Budget Planning & Expense Management",
            "Income & Cash Flow Analysis",
            "Goal-Based Financial Roadmaps",
            "Debt Management & Loan Structuring",
            "Investment Allocation Monitoring",
            "Business Finance & Tax Planning",
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{item}</h4>
              <p className="text-gray-600 text-sm">
                {`We provide expert guidance on ${item.toLowerCase()}.`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#004D4D] text-white py-16 px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Managing Your Finances Smartly Today</h3>
        <p className="mb-6 text-white/90 max-w-xl mx-auto">
          Reach out to our experienced advisors and take the first step toward a financially secure future.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#004D4D] font-semibold py-3 px-6 rounded hover:bg-gray-200 transition"
        >
          Talk to an Expert
        </Link>
      </section>
    </main>
  );
}
