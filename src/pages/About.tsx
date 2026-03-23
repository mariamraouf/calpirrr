"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Target, Users, Shield, Zap } from 'lucide-react';

const About = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>The Mission</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">
              Built by <br /> <span className="text-[#064e3b]">Founders</span> <br /> for Scale.
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <p className="text-2xl mono text-white/60 leading-relaxed">
                  We've been in the trenches. We know that starting a business isn't about "ideas"—it's about the systems that support them.
                </p>
                <p className="text-lg mono text-white/40 leading-relaxed">
                  Most founders burn months trying to stitch together separate tools. We fix that by deploying a single, integrated operational engine in days. Our goal is to eliminate the technical friction that stops great companies from growing.
                </p>
              </div>
              <div className="border border-white/10 p-12 bg-white/5 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <div className="text-5xl font-black text-[#064e3b] mb-2">1K+</div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Builds Deployed</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-[#064e3b] mb-2">7D</div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Fastest Launch</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-[#064e3b] mb-2">24/7</div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">AI Uptime</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-[#064e3b] mb-2">40%</div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Avg. Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <SectionLabel>Our Core Principles</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Speed as a Feature", icon: <Zap />, desc: "In business, speed is the ultimate competitive advantage. We build fast so you can launch fast." },
              { title: "Technical Excellence", icon: <Target />, desc: "We don't cut corners. Every system we build is engineered for long-term stability and scale." },
              { title: "Founder-First", icon: <Users />, desc: "We build what we would want as founders: clear pricing, fast delivery, and zero fluff." },
              { title: "Security by Design", icon: <Shield />, desc: "Your data is your most valuable asset. We protect it with enterprise-grade security protocols." }
            ].map((v, i) => (
              <motion.div key={i} {...reveal} className="space-y-6">
                <div className="text-[#064e3b]">{React.cloneElement(v.icon as React.ReactElement<any>, { size: 32 })}</div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">{v.title}</h3>
                <p className="text-white/40 mono text-sm leading-relaxed">{v.desc}</p>
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

export default About;