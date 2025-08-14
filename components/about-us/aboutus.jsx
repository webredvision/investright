"use client"
import styles from "./AboutSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";


export default function AboutUsSection({ aboutUs, sitedata }) {
  return (
    <section className={`${styles.aboutUs} bg-white main_section1 `}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Image Section */}
          <div className={styles.aboutUsImages}>
            <div
              className={styles.aboutImg2}
              data-aos="fade-left"
              data-aos-anchor-placement="bottom"
            >
              <figure className={styles.imageAnime}>
                <Image
                  src="/images/home/about2.jpg"
                  alt="About Image 2"
                  width={800}
                  height={400}
                  layout="responsive" 
                />
              </figure>
            </div>
            {/* <div className={styles.contactCircle}>
              <Image
                src="/images/home/contact-us-img.svg"
                alt="Contact Us"
                width={100}
                height={100}
              />
            </div> */}
          </div>

          {/* Right Content Section */}
          <div className={styles.aboutContentBody}>
            <div className="section-title">
              <motion.h2
                            className="text-3xl md:text-4xl font-bold"
                            initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-[var(--rv-primary)]">About</span>  Us
                          </motion.h2>
              
                          {/* Paragraph */}
                          <motion.p
                            className="text-gray-700  mt-4  text-justify"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                             Invest Right is a professionally managed financial services firm with 15+ years of experience, serving 1,000+ families across India. Associated with Chartered Accountants and highly qualified professionals, we specialize in mutual fund investments, insurance planning, tax-saving strategies, and comprehensive financial planning tailored to your life goals.
        <br />
        Invest Right is a leading financial advisory firm offering end-to-end investment, insurance, and tax planning solutions. With a legacy of 15+ years and the trust of over 1,000 families, we bring a client-focused, transparent, and strategic approach to wealth creation.
                          </motion.p>
 <motion.ul
    className="text-gray-700 list-none pl-2 space-y-1"
    initial={{ y: -10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.6 }}
    viewport={{ once: true }}
  >
    <li>🔹 Associated with Chartered Accountants and highly qualified finance professionals</li>
    <li>🔹 Deep expertise in personal finance, taxation, and long-term wealth planning</li>
    <li>🔹 Serving clients both online and offline, PAN India</li>
  </motion.ul>

                         
            </div>

            {/* Goal & Contact */}
            <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2 mt-8">
              <div data-aos="fade-up" data-aos-anchor-placement="bottom">
                <div
                  className="about-goal-box wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-box">
                    <Image
                      src="/images/home/icon-financial-strategies.svg"
                      alt="Financial Strategies Icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  
                  <div className="about-goal-box-content">
                    <h3 className="text-[var(--rv-primary)]">
                      Personalized Planning
                    </h3>
                    {/* <p className="text-[var(--rv-primary)]">
                      Expert-driven strategies tailored to your financial goals.
                    </p> */}
                  </div>
                </div>

                <div
                  className="about-contact-box wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon-box">
                    <Image
                      src="/images/home/icon-phone-white.svg"
                      alt="Phone Icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="about-contact-content">
                    <p>
                      <a href={`tel:${sitedata?.mobile}`}>{sitedata?.mobile}</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Optional: Add more cards or founder details here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
