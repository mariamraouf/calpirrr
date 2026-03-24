"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  const cases = [
    {
      id: "01",
      client: "NovaBright",
      industry: "E-commerce",
      title: "Scaling to $50k MRR in 90 Days",
      results: [
        { label: "Growth", value: "450%", icon: <TrendingUp size={20} /> },
        { label: "Saved", value: "25h/wk", icon: <Clock size={20} /> }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      client: "UrbanStack",
      industry: "SaaS",
      title: "60% Support Cost Reduction",
      results: [
        { label: "Deflection", value: "78%", icon: <TrendingUp size={20} /> },
        { label: "Response", value: "< 5s", icon: <Clock size={20} /> }
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Proof of Concept</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">
              Case <br /> <span className="text-[#064e3b]">Studies.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-32">
            {cases.map((c, i) => (
              <motion.div key={c.id} {...reveal} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mono text-[#064e3b] text-xs font-bold mb-6 tracking-widest">
                    [{c.id}] // {c.industry}
                  </div>
                  <h2 className="text-4xl md:text-6xl mb-8">{c.title}</h2>
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    {c.results.map((res, idx) => (
                      <div key={idx} className="border border-white/10 p-6 bg-white/5">
                        <div className="text-3xl font-black text-[#064e3b] mb-1">{res.value}</div>
                        <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">{res.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="border-white/10 rounded-none px-8 py-6 font-black uppercase tracking-tighter hover:bg-white hover:text-black">
                    View Full Report <ArrowRight className="ml-2" />
                  </Button>
                </div>
                <div className={`aspect-video bg-white/5 border border-white/10 overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <img src={c.image} alt={c.client} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudies;