

import React from "react";
import {
  LineChart,
  Wallet,
  Banknote,
  ShieldCheck,
  PieChart,
  TrendingUp,
  FileCheck,
} from "lucide-react";
import Link from "next/link";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

export const metadata = {
  title: "Mutual Fund Services",
  description:
    "Invest smarter with tailored mutual fund solutions from Invest Right. Expert guidance for SIPs, tax-saving, goal-based planning, and portfolio growth.",
};

const MutualFundsPage = () => {
  return (
    <div className="">
      <InnerBanner pageName="Mutual Fund Services" />
      <div className="bg-white">
        <section className="container mx-auto main_section ">
      
      <div className="text-base leading-relaxed space-y-4 mb-10">
        <p>
          Mutual funds are one of the most efficient ways to build long-term wealth through
          diversification and professional fund management. Whether you're investing for retirement,
          children's education, or tax savings, a well-crafted mutual fund strategy can help you
          reach your financial goals.
        </p>
        <p>
          At <strong>Invest Right</strong>, we help individuals and families design personalized
          mutual fund portfolios aligned with their risk appetite, time horizon, and life
          aspirations.
        </p>
      </div>

      {/* Why Choose Our Mutual Fund Advisory? */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">
          Why Choose Our Mutual Fund Advisory?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <PieChart className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Goal-Based Investment Plans",
              desc: "We structure portfolios based on your personal goals – retirement, education, or wealth creation.",
            },
            {
              icon: <LineChart className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Performance Tracking",
              desc: "Get periodic reports, insights, and portfolio rebalancing for better returns.",
            },
            {
              icon: <Banknote className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "SIP & Lumpsum Planning",
              desc: "Start small or invest big – we help you choose the right method and timing.",
            },
            {
              icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Risk Profiling",
              desc: "We assess your risk tolerance to recommend the best mutual fund categories.",
            },
            {
              icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Tax-Saving Funds (ELSS)",
              desc: "Invest in equity-linked saving schemes (ELSS) to save up to ₹1.5L under 80C.",
            },
            {
              icon: <TrendingUp className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Direct & Regular Plans",
              desc: "Choose between direct or regular mutual funds based on your preference and advisory needs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gradient-to-r from-[var(--rv-secondary)] to-[var(--rv-bg-primary)] text-[var(--rv-white)] p-4 rounded-md shadow-sm"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Mutual Fund Solutions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Our Mutual Fund Solutions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Equity Mutual Funds",
              desc: "Invest in high-growth companies with long-term return potential.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Debt Mutual Funds",
              desc: "Stable income generation through bonds and fixed-income instruments.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Hybrid Funds",
              desc: "Balance risk and reward with a mix of equity and debt.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Tax-Saving ELSS Funds",
              desc: "Get tax benefits under 80C while building wealth over time.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Thematic & Sector Funds",
              desc: "Target specific sectors or trends like tech, pharma, or ESG.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Child & Retirement Plans",
              desc: "Dedicated mutual funds for securing your children’s future and post-retirement life.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gradient-to-r from-[var(--rv-secondary)] to-[var(--rv-bg-primary)] text-[var(--rv-white)] p-4 rounded-md shadow-sm"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        {/* Types of Mutual Funds */}
        <h2 className="text-4xl text-[var(--rv-primary)] text-center font-bold mb-4">
          <span className="text-[var(--rv-secondary)]">Top Performing </span>{" "}
          Funds
        </h2>

        <TopTaxSavingFunds  />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r text-white from-[var(--rv-primary)] to-[var(--rv-secondary)] p-6 rounded-lg shadow-md mt-10">
        <p className="mb-4">
          Start your journey to smart investing with <strong>Invest Right</strong>. Whether you're a
          first-time investor or looking to optimize your portfolio, we’ve got you covered.
        </p>
        <Link href="/contact-us" className="btn-primary">
          Talk to a Mutual Fund Expert
        </Link>
      </div>
    </section>
      </div>
    </div>
  );
};

export default MutualFundsPage;
