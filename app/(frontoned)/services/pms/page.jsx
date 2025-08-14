import React from "react";
import {
  BriefcaseBusiness,
  LineChart,
  ShieldCheck,
  Wallet,
  TrendingUp,
  UserCheck,
  Layers,
} from "lucide-react";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

export const metadata = {
  title: "Portfolio Management Services (PMS)",
  description:
    "Explore premium Portfolio Management Services from Invest Right. Personalized wealth strategies, expert advisory, and active portfolio monitoring for long-term growth.",
};

const PMSPage = () => {
  return (
    <div >
      <InnerBanner pageName="Portfolio Management Services (PMS)" />
      <div className="bg-white">
        <section className="max-w-screen-xl mx-auto main_section">
     

      {/* Introduction */}
      <div className="text-base leading-relaxed space-y-4 mb-10">
        <p>
          Portfolio Management Services (PMS) offer personalized and professionally managed investment
          solutions designed for individuals with a higher investable surplus. Unlike mutual funds,
          PMS provides a curated portfolio with direct ownership of stocks and securities.
        </p>
        <p>
          At <strong>Invest Right</strong>, we craft strategies to align with your financial goals,
          risk appetite, and return expectations, ensuring complete transparency and flexibility.
        </p>
      </div>

      {/* Why Choose Our PMS? */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">
          Why Choose Our PMS Advisory?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <BriefcaseBusiness className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Customized Portfolios",
              desc: "Tailor-made strategies to match your financial goals and risk profile.",
            },
            {
              icon: <LineChart className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Active Portfolio Monitoring",
              desc: "Continuous tracking and rebalancing by our expert fund managers.",
            },
            {
              icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Risk Mitigation",
              desc: "Advanced risk management techniques to protect capital and enhance returns.",
            },
            {
              icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Transparency & Reporting",
              desc: "Detailed performance reports and complete visibility into your holdings.",
            },
            {
              icon: <TrendingUp className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Expert-Driven Decisions",
              desc: "Experienced professionals analyze markets and invest based on research insights.",
            },
            {
              icon: <UserCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Dedicated Relationship Manager",
              desc: "One-on-one consultation to keep your portfolio aligned with your objectives.",
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
      <div className="bg-gradient-to-r text-white from-[var(--rv-primary)] to-[var(--rv-secondary)] p-6 rounded-lg shadow-md mt-10">
        <p className="mb-4">
          Ready to elevate your investments? <strong>Invest Right</strong> offers exclusive PMS solutions
          tailored for serious wealth builders. Talk to our experts today.
        </p>
        <Link href="/contact-us" className="btn-primary">
          Talk to a PMS Advisor
        </Link>
      </div>
    </section>
      </div>
    </div>
  );
};

export default PMSPage;
