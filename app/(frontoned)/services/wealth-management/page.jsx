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
  title: "Wealth Management Services",
  description:
    "Preserve and grow your wealth with SunGlobeLink’s comprehensive wealth management services. Our experts help you balance growth, risk, and legacy planning.",
};

const WealthManagementPage = () => {
  return (
    <div>
      <InnerBanner pageName="Wealth Management Services" />
      <div className="bg-white">
        <section className="max-w-screen-xl mx-auto main_section">
          {/* Introduction */}
          <div className="text-base leading-relaxed space-y-4 mb-10">
            <p>
              Wealth management is more than just investments — it’s a strategic approach to
              preserving, growing, and transferring your wealth in alignment with your life goals.
            </p>
            <p>
              At <strong>SunGlobeLink</strong>, we offer personalized wealth management solutions
              that combine financial planning, investment advisory, tax efficiency, and estate
              strategies to help you secure your financial future.
            </p>
          </div>

          {/* Why Choose Our Wealth Management Services */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">
              Why Choose Our Wealth Management Services?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <UserCheck2 className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Tailored Strategies",
                  desc: "Every wealth plan is designed around your personal vision and priorities.",
                },
                {
                  icon: <BarChart3 className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Holistic Portfolio Management",
                  desc: "We manage investments, risk, and liquidity as one cohesive strategy.",
                },
                {
                  icon: <Landmark className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Estate & Legacy Planning",
                  desc: "Preserve wealth for future generations with effective succession plans.",
                },
                {
                  icon: <Handshake className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Trusted Partnerships",
                  desc: "Long-term client relationships built on integrity and transparency.",
                },
                {
                  icon: <Banknote className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Tax-Efficient Growth",
                  desc: "Maximize after-tax returns with smart investment structures.",
                },
                {
                  icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Comprehensive Risk Management",
                  desc: "Safeguard wealth through diversification and asset protection.",
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

          {/* Our Wealth Management Solutions */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">
              Our Wealth Management Solutions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Investment Portfolio Design",
                  desc: "Create diversified portfolios for steady and sustainable growth.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Retirement Planning",
                  desc: "Ensure long-term financial independence with well-structured plans.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Philanthropic Advisory",
                  desc: "Integrate charitable giving into your wealth strategy.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Estate Structuring",
                  desc: "Plan asset transfers to minimize taxes and ensure smooth succession.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Global Asset Management",
                  desc: "Manage investments across multiple geographies and asset classes.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Ongoing Performance Review",
                  desc: "Regularly monitor and rebalance to keep strategies on track.",
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
              Let <strong>SunGlobeLink</strong> help you preserve and grow your wealth with
              strategies designed for lasting impact.
            </p>
            <Link href="/contact-us" className="btn-primary">
              Secure Your Financial Future
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WealthManagementPage;
