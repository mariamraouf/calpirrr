"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, CheckCircle2, Rocket, 
  MousePointer2, MessageSquare, BarChart3,
  Globe, Shield, Clock
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ROICalculator from '@/components/home/ROICalculator';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6">
        <div className="container-custom">
          <div className="max-w-[900px] mx-auto text-center">
            <motion.div {...reveal}>
              <span className="inline-block bg-[#2563eb15] text-[#2563eb] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                The 7-Day Business Launch
              </span>
              <h1 className="text-5xl md:text-[5.5rem] leading-[1.1] mb-8 font-[800] tracking-tight text-[#0f172a]">
                Your Entire Business <br /> <span className="text-[#2563eb]">Stack in 7 Days.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#475569] mb-12 leading-relaxed max-w-[750px] mx-auto">
                We build your high-conversion website, CRM, AI agents, and automation workflows into a single, high-performance engine.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                  Launch My Business <ArrowRight size={20} />
                </a>
                <a href="/services" className="btn-secondary w-full sm:w-auto">
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-[#f8f9fa]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Full-Stack Engine</h2>
            <p className="text-lg text-[#475569] max-w-[600px] mx-auto">Everything you need to operate and scale your business, built and integrated by experts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Web Architecture", icon: <Globe className="text-[#2563eb]" />, desc: "High-performance storefronts engineered for speed and conversion." },
              { title: "Sales Systems", icon: <BarChart3 className="text-[#2563eb]" />, desc: "Integrated CRM pipelines that capture and score every single lead." },
              { title: "AI Agents", icon: <MessageSquare className="text-[#2563eb]" />, desc: "24/7 autonomous agents that handle support and book meetings." },
              { title: "Automation", icon: <Zap className="text-[#2563eb]" />, desc: "End-to-end workflows that eliminate 20+ hours of manual work." }
            ].map((s, i) => (
              <motion.div key={i} {...reveal} className="bg-white p-10 rounded-[20px] shadow-sm border border-[#e2e8f0] hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-[#2563eb10] rounded-[12px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-[#475569] leading-relaxed text-[0.95rem]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator />

      <section id="contact" className="py-24 px-6">
        <div className="container-custom">
          <div className="brand-gradient rounded-[30px] p-12 md:p-24 text-white text-center shadow-2xl shadow-[#2563eb33]">
            <motion.div {...reveal}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to Scale Your <br /> Business with AI?</h2>
              <p className="text-xl mb-12 opacity-90 max-w-[600px] mx-auto">
                Stop managing tools. Start managing growth. Book your 30-minute technical strategy session today.
              </p>
              <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-white text-[#2563eb] px-12 py-6 rounded-[12px] text-xl font-bold hover:bg-[#f8f9fa] transition-all inline-block shadow-xl">
                Book Free Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;