import React from "react";
import {
  HeartPulse,
  FileCheck,
  UserCheck2,
  LifeBuoy,
  ShieldCheck,
  Hospital,
} from "lucide-react";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

export const metadata = {
  title: "Life & Health Insurance Advisory",
  description:
    "Secure your family's future with SunGlobeLink’s expert advisory in Term Plans, Mediclaim, and critical illness cover. Personalized coverage for your peace of mind.",
};

const LifeHealthInsurancePage = () => {
  return (
    <div>
        <InnerBanner pageName="Life & Health Insurance Advisory" />
      <div className="bg-white">
        <section className="max-w-screen-xl mx-auto main_section ">
      {/* Heading */}
      

      {/* Introduction */}
      <div className="text-base leading-relaxed space-y-4 mb-10">
        <p>
          Life and health insurance are essential pillars of financial stability. They offer peace of mind by protecting your loved ones and securing access to quality healthcare in times of need.
        </p>
        <p>
          At <strong>SunGlobeLink</strong>, we guide you in choosing policies that suit your age, lifestyle, health history, and family structure. Whether it’s a term plan for income replacement or mediclaim to cover medical expenses — we ensure you’re always one step ahead.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Why Choose Our Life & Health Advisory?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <HeartPulse className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Health Risk Evaluation",
              desc: "We analyze your family’s health history and suggest the right coverage levels.",
            },
            {
              icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Personalized Term Plans",
              desc: "Protect your family’s income with cost-effective term insurance.",
            },
            {
              icon: <Hospital className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Mediclaim & Cashless Cover",
              desc: "Get access to India’s best hospitals without paying upfront.",
            },
            {
              icon: <UserCheck2 className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Critical Illness Coverage",
              desc: "Stay protected from high costs of cancer, cardiac issues, and more.",
            },
            {
              icon: <LifeBuoy className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Hospitalization Cover",
              desc: "Comprehensive policies for pre/post hospitalization, surgeries, and emergencies.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Tax Benefits (80C/80D)",
              desc: "Save taxes while protecting your family’s health and future.",
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
      <div className="bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] text-white p-6 rounded-lg shadow-md mt-10">
        <p className="mb-4">
          It’s time to protect what truly matters. Talk to our experts at <strong>SunGlobeLink</strong> for guidance on life & health insurance plans that keep your loved ones safe and financially sound.
        </p>
        <Link href="/contact-us" className="btn-primary">
          Speak with an Insurance Advisor
        </Link>
      </div>
    </section>
      </div>
    </div>
  );
};

export default LifeHealthInsurancePage;
