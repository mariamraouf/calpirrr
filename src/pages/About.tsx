"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6">
        <div className="container-custom">
          <motion.div {...reveal}>
            <span className="text-[#2563eb] font-bold uppercase tracking-widest text-sm mb-4 block">The Mission</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-12 text-[#0f172a]">Built by <span className="text-[#2563eb]">Founders</span> for Scale.</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-8">
                <p className="text-2xl text-[#475569] leading-relaxed">
                  We've been in the trenches. We know that starting a business isn't about "ideas"—it's about the systems that support them.
                </p>
                <p className="text-lg text-[#64748b] leading-relaxed">
                  Most founders burn months trying to stitch together separate tools. We fix that by deploying a single, integrated operational engine in days.
                </p>
              </div>
              <div className="bg-[#f8f9fa] p-12 rounded-[24px] border border-[#e2e8f0]">
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <div className="text-5xl font-bold text-[#2563eb] mb-2">1K+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#888]">Builds Deployed</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-[#2563eb] mb-2">7D</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#888]">Fastest Launch</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-[#2563eb] mb-2">24/7</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#888]">AI Uptime</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-[#2563eb] mb-2">40%</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#888]">Avg. Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Speed as a Feature", icon: <Zap />, desc: "In business, speed is the ultimate competitive advantage. We build fast so you can launch fast." },
              { title: "Technical Excellence", icon: <Target />, desc: "We don't cut corners. Every system we build is engineered for long-term stability." },
              { title: "Founder-First", icon: <Users />, desc: "We build what we would want as founders: clear pricing, fast delivery, and zero fluff." },
              { title: "Security by Design", icon: <Shield />, desc: "Your data is your most valuable asset. We protect it with enterprise-grade protocols." }
            ].map((v, i) => (
              <motion.div key={i} {...reveal} className="space-y-6">
                <div className="w-12 h-12 bg-[#2563eb10] text-[#2563eb] rounded-full flex items-center justify-center">
                  {React.cloneElement(v.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">{v.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{v.desc}</p>
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