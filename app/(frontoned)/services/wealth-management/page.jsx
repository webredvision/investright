import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Wealth Management",
  description:
    "Maximize and protect your wealth with Invest Right comprehensive wealth management strategies and personalized advisory services.",
};

export default function WealthManagementPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-[url('/images/wealth-management-banner.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            Wealth Management
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Build, Grow & Preserve Your Wealth
        </h2>
        <p className="mb-6 text-lg">
          At Invest Right, we offer holistic wealth management services designed to help you grow your assets while safeguarding your financial future. Whether you're an individual, family, or business owner, our personalized strategies ensure long-term financial well-being.
        </p>
        <p className="text-lg">
          From investment planning to estate management, our approach integrates every facet of your financial life with a focus on transparency, discipline, and value creation.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">
            Why Choose Invest Right   for Wealth Management?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="list-disc pl-5 space-y-4 text-lg">
                <li>Tailored financial strategies aligned with your life goals</li>
                <li>Multi-asset portfolio management for optimal returns</li>
                <li>Tax-efficient wealth structuring and planning</li>
                <li>Legacy and estate planning for generational wealth</li>
                <li>Risk management and insurance advisory</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/wealth-strategy.jpg"
                alt="Wealth Strategy"
                width={600}
                height={400}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">
          Key Services We Offer
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded shadow-sm">
            <h4 className="font-bold text-lg mb-2">Comprehensive Financial Planning</h4>
            <p>
              We analyze all aspects of your finances to create an integrated, personalized roadmap.
            </p>
          </div>
          <div className="p-6 border rounded shadow-sm">
            <h4 className="font-bold text-lg mb-2">Investment Management</h4>
            <p>
              Diversified portfolio management using a disciplined, research-driven approach.
            </p>
          </div>
          <div className="p-6 border rounded shadow-sm">
            <h4 className="font-bold text-lg mb-2">Succession & Estate Planning</h4>
            <p>
              Secure your legacy with structured solutions for wealth transition and preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#004D4D] py-12 text-white text-center px-4">
        <h3 className="text-2xl font-semibold mb-4">Ready to Manage Your Wealth Wisely?</h3>
        <p className="mb-6 text-lg">
          Let our experienced advisors help you turn your wealth into lasting prosperity.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#004D4D] font-semibold py-3 px-6 rounded shadow hover:bg-gray-200 transition"
        >
          Book a Consultation
        </Link>
      </section>
    </div>
  );
}
