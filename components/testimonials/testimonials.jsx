'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';



export default function Testimonials({testimonials}) {
  function createMarkup(item) {
    return { __html: item };
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClient = testimonials[activeIndex];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -100px 0px' });

  const getVisibleClients = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (activeIndex + 1) % testimonials.length;
    return [testimonials[prevIndex], activeClient, testimonials[nextIndex]];
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#D0F0FC] main_section"
    >
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center ">
          {/* Heading Animation */}
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl font-bold mb-6 text-center "
          >
            Our <span className="text-[var(--rv-primary)]">Testimonials</span>
          </motion.h2>

          <div className="flex gap-6 w-full justify-center min-h-[270px] lg:max-w-6xl mx-auto relative">
            {/* Active Testimonial Animation */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex-1 flex flex-col justify-between bg-[var(--rv-white)] rounded-md p-6 space-y-4 shadow-md border border-[#d4d4d42e]"
            >
              <div
                      dangerouslySetInnerHTML={createMarkup(activeClient?.content)}
                      className="text-lg "
                    />
            
              <div className="flex items-end gap-4 pt-4">
                <img
                  src={activeClient.image.url}
                  alt="Client"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-[var(--rv-secondary)] font-bold">{activeClient.author}</div>
                  <div className="">{activeClient.designation}</div>
                </div>
              </div>
            </motion.div>

            {/* Thumbnails + Buttons Animation */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="hidden lg:w-1/3 lg:flex gap-4 relative h-72"
            >
              <div className="flex flex-col gap-4 w-full">
                {getVisibleClients().map((client, idx) => {
                  const isActive = client.author === activeClient.author;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 border border-[#d4d4d42e] ${
                        isActive ? ' bg-[var(--rv-primary)] text-black' : 'bg-white'
                      }`}
                      onClick={() =>
                        setActiveIndex(testimonials.findIndex((t) => t.author === client.author))
                      }
                    >
                      <img
                        src={client.image.url}
                        alt="Client"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-bold">{client.author}</div>
                        <div className="text-sm">{client.designation}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Nav Buttons */}
              <div className="absolute -right-12 top-1/3 flex-col gap-4 hidden md:flex">
                <button
                  onClick={prevSlide}
                  className="bg-[var(--rv-secondary)] p-2 rounded shadow hover:bg-cyan-600 border border-[#d4d4d42e]"
                >
                  <ChevronUp className="text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-[var(--rv-secondary)] p-2 rounded shadow hover:bg-cyan-600 border border-[#d4d4d42e]"
                >
                  <ChevronDown className="text-white" />
                </button>
              </div>
            </motion.div>

            {/* Mobile Nav */}
            <div className="absolute right-0 bottom-[0px] lg:hidden flex gap-2">
              <button
                onClick={prevSlide}
                className="bg-[#0C2442] p-2 rounded shadow hover:bg-cyan-600 border border-[#d4d4d42e] rotate-90"
              >
                <ChevronDown className="text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#0C2442] p-2 rounded shadow hover:bg-cyan-600 border border-[#d4d4d42e] rotate-90"
              >
                <ChevronUp className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
