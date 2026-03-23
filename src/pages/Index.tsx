"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Activity, Layers, Code2, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ROICalculator from '@/components/home/ROICalculator';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-black bg-grid relative">
      <div className="scanline" />
      <Navbar />
      
      {/* Hero: Technical Blueprint */}
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div {...reveal}>
                <div className="mono text-[#064e3b] mb-6 font-bold tracking-[0.4em] text-sm">
                  [ SYSTEM_STATUS: OPERATIONAL ]
                </div>
                <h1 className="text-6xl md:text-[9rem] leading-[0.85] mb-12">
                  We Build <br /> <span className="text-[#064e3b]">Engines</span> <br /> Not Just Sites.
                </h1>
                <p className="text-xl md:text-2xl text-white/40 max-w-[600px] mb-12 mono leading-relaxed">
                  High-performance business infrastructure for founders who demand precision. We deploy the full stack: Architecture, Automation, and Scale.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="#contact" className="btn-pro">
                    Deploy Now <ArrowRight size={18} />
                  </a>
                  <div className="flex items-center gap-4 px-8 border border-white/10 mono text-xs font-bold tracking-widest uppercase">
                    <Activity size={16} className="text-[#064e3b]" /> 1,000+ Builds Completed
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="border border-white/10 p-8 bg-white/5 backdrop-blur-sm relative overflow-hidden">
                <div className="mono text-[0.6rem] text-white/20 mb-8">
                  // ARCHITECTURE_PREVIEW.LOG <br />
                  {'>'} Initializing core modules... <br />
                  {'>'} Optimizing sales pipeline... <br />
                  {'>'} Deploying AI agents... <br />
                  {'>'} Status: 100% Efficient
                </div>
                <div className="aspect-square bg-black border border-white/10 flex items-center justify-center relative">
                  <Cpu size={120} className="text-[#064e3b] opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services: The Modules */}
      <section id="services" className="section-padding border-b border-white/10">
        <div className="container-custom">
          <SectionLabel>Core Modules</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { title: "Digital Architecture", icon: <Layers />, desc: "Custom-built platforms designed for extreme performance and conversion." },
              { title: "Sales Automation", icon: <Zap />, desc: "Automated pipelines that handle lead qualification and booking 24/7." },
              { title: "AI Integration", icon: <Terminal />, desc: "Intelligent agents deployed directly into your operational workflow." },
              { title: "Data Infrastructure", icon: <Activity />, desc: "Real-time analytics engines that track every KPI that matters." },
              { title: "Brand Engineering", icon: <Code2 />, desc: "Technical brand positioning that establishes market authority." },
              { title: "Scale Operations", icon: <Cpu />, desc: "The back-office systems required to manage rapid growth." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                {...reveal}
                className="bg-black p-12 hover:bg-[#064e3b]/5 transition-all group"
              >
                <div className="text-[#064e3b] mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl mb-4">{s.title}</h3>
                <p className="text-white/40 mono text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI: The Logic */}
      <ROICalculator />

      {/* CTA: The Final Command */}
      <section id="contact" className="section-padding bg-[#064e3b] text-white">
        <div className="container-custom text-center">
          <motion.div {...reveal}>
            <h2 className="text-6xl md:text-[10rem] mb-12 leading-none">Ready to <br /> Initialize?</h2>
            <p className="mono text-xl mb-16 opacity-80 max-w-[600px] mx-auto">
              Stop managing tools. Start managing growth. Book your 30-minute technical strategy session.
            </p>
            <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-16 py-8 text-2xl font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-all inline-block">
              Execute Strategy
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;