import React from "react";
import {
  UserCheck2,
  BarChart3,
  Landmark,
  Handshake,
  Banknote,
  ShieldCheck,
  FileCheck,
  Target,
} from "lucide-react";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

export const metadata = {
  title: "Financial Advisor Services",
  description:
    "Get expert financial advice tailored to your goals. SunGlobeLink’s financial advisors help you plan, invest, and grow your wealth with confidence.",
};

const FinancialAdvisorPage = () => {
  return (
    <div>
        <InnerBanner pageName="Financial Advisor Services" />
      <div className="bg-white">
<section className="max-w-screen-xl mx-auto main_section ">
      {/* Heading */}
     
      {/* Introduction */}
      <div className="text-base leading-relaxed space-y-4 mb-10">
        <p>
          Making informed financial decisions requires expert insight. From budgeting and investments to retirement and wealth transfer, a skilled financial advisor can bring clarity to your financial goals.
        </p>
        <p>
          At <strong>SunGlobeLink</strong>, our certified financial advisors work closely with you to create comprehensive, realistic plans aligned with your aspirations and current financial landscape.
        </p>
      </div>

      {/* Why Choose Our Advisors */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Why Work with Our Financial Advisors?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <UserCheck2 className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Goal-Based Financial Planning",
              desc: "Tailored strategies to help you achieve short- and long-term objectives.",
            },
            {
              icon: <BarChart3 className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Investment Portfolio Review",
              desc: "We analyze and optimize your investments for performance and risk.",
            },
            {
              icon: <Landmark className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Retirement Planning",
              desc: "Plan a worry-free retirement with reliable income strategies.",
            },
            {
              icon: <Handshake className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Ethical & Transparent Advice",
              desc: "Your best interest always comes first in every recommendation we make.",
            },
            {
              icon: <Banknote className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Wealth Preservation",
              desc: "Protect your assets and legacy with smart estate and tax planning.",
            },
            {
              icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Risk Management",
              desc: "Mitigate financial risk through appropriate insurance and asset allocation.",
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

      {/* Our Financial Planning Services */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Our Financial Planning Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Budgeting & Cash Flow Management",
              desc: "Plan your monthly spending and savings for a balanced financial life.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Tax-Efficient Strategies",
              desc: "Legally minimize your tax burden while maximizing savings.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Education Planning",
              desc: "Prepare for your child’s future with long-term education funding plans.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Debt Management",
              desc: "Strategic advice to pay down debt faster and save on interest.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Wealth Building & Investment Guidance",
              desc: "Grow your net worth through diversified investment planning.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Life Goal Mapping",
              desc: "Align your money with your dreams — from home buying to global travel.",
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

      {/* CTA */}
      <div className="bg-gradient-to-r from-[var(--rv-primary)] text-white to-[var(--rv-secondary)] p-6 rounded-lg shadow-md mt-10">
        <p className="mb-4">
          Make smarter financial decisions with confidence. <strong>SunGlobeLink</strong> is your trusted partner in navigating life’s financial milestones.
        </p>
        <Link href="/contact-us" className="btn-primary">
          Connect with a Financial Advisor
        </Link>
      </div>
    </section>
      </div>
    </div>
  );
};

export default FinancialAdvisorPage;