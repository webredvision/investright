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
  title: "Financial Management Services",
  description:
    "Optimize your finances with SunGlobeLink’s financial management services. From budgeting to investment strategies, we help you take control of your money and build lasting wealth.",
};

const FinancialManagementPage = () => {
  return (
    <div>
      <InnerBanner pageName="Financial Management Services" />
      <div className="bg-white">
        <section className="max-w-screen-xl mx-auto main_section">
          {/* Introduction */}
          <div className="text-base leading-relaxed space-y-4 mb-10">
            <p>
              Effective financial management is the foundation of long-term wealth and stability.
              It involves balancing income, expenses, savings, and investments to achieve your
              personal and professional goals.
            </p>
            <p>
              At <strong>SunGlobeLink</strong>, we provide strategic financial management solutions
              tailored to your unique needs, helping you make informed decisions and maximize the
              value of your resources.
            </p>
          </div>

          {/* Why Choose Our Financial Management Services */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">
              Why Choose Our Financial Management Services?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <UserCheck2 className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Personalized Strategies",
                  desc: "Customized financial plans that align with your lifestyle and objectives.",
                },
                {
                  icon: <BarChart3 className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Data-Driven Decisions",
                  desc: "In-depth analysis to guide smart, evidence-based financial choices.",
                },
                {
                  icon: <Landmark className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Retirement & Long-Term Planning",
                  desc: "Build a secure future with sustainable, well-structured plans.",
                },
                {
                  icon: <Handshake className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Client-Centric Approach",
                  desc: "Your goals and priorities drive every decision we help you make.",
                },
                {
                  icon: <Banknote className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Asset Protection",
                  desc: "Safeguard your wealth through smart allocation and risk control.",
                },
                {
                  icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Comprehensive Oversight",
                  desc: "We manage the full picture of your finances for optimal results.",
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

          {/* Our Financial Management Services */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">
              Our Financial Management Solutions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Budget Planning",
                  desc: "Design spending plans that ensure stability and savings growth.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Cash Flow Optimization",
                  desc: "Maintain a healthy cash position to meet short-term and long-term needs.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Debt Management",
                  desc: "Reduce liabilities strategically to free up resources for growth.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Tax Planning",
                  desc: "Maximize post-tax returns through efficient structuring.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Investment Guidance",
                  desc: "Allocate capital effectively across asset classes for optimal returns.",
                },
                {
                  icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                  title: "Performance Monitoring",
                  desc: "Track and adjust strategies to stay aligned with changing conditions.",
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
              Gain full control over your finances with <strong>SunGlobeLink</strong>’s expert
              financial management services.
            </p>
            <Link href="/contact-us" className="btn-primary">
              Start Managing Your Wealth Today
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FinancialManagementPage;
