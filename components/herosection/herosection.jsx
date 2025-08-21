// components/GetStartedBanner.tsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection({ sitedata }) {
  return (
    <section className="relative top-0 w-full h-[800px] bg-[url('/hero-section.webp')] bg-cover  text-[var(--rv-white)] ">

      <div className="container mx-auto px-2 md:px-0 pt-42 md:pt-42 space-y-6">
        <motion.h1 className="text-4xl md:text-[60px] font-bold text-[var(--rv-gredient)]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Invest in <br /> Professionally <br /> Managed Funds
        </motion.h1>
        <motion.p className="text-[var(--rv-white)] max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {sitedata?.description}
        </motion.p>
        {/* New Buttons */}
        <Link href="/contact-us">
          <motion.button
            className="btn-primary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get Strated
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
