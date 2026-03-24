"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Megaphone, Settings, Bot, Zap, Brain, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';

const Index = () => {
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
            <SectionLabel>System Initialized</SectionLabel>
            <h1 className="text-6xl md:text-[9rem] leading-[0.8] mb-16 font-black uppercase tracking-tighter">
              Build. <br /> <span className="text-[#064e3b]">Automate.</span> <br /> Scale.
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
              <p className="text-2xl md:text-3xl mono text-white/60 leading-tight max-w-[700px]">
                We deploy complete business infrastructure in days. Website, CRM, and AI agents integrated into a single operational engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#064e3b] hover:bg-[#053e2f] text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter">
                  <Link to="/contact">Start Build</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/10 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-black">
                  <Link to="/assessment">Audit System</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-b border-white/10 bg-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Deployments", val: "1K+" },
              { label: "Avg. Speed", val: "7 Days" },
              { label: "Efficiency", val: "+40%" },
              { label: "Uptime", val: "99.9%" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-5xl font-black text-[#064e3b] mb-2">{s.val}</div>
                <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <SectionLabel>The Architecture</SectionLabel>
              <h2 className="text-5xl md:text-7xl mb-8">Unified <br /> Operations.</h2>
              <p className="text-lg mono text-white/40 leading-relaxed mb-12">
                Stop juggling disconnected tools. We build a closed-loop system where every component talks to the next. Your website feeds your CRM, which triggers your AI agents.
              </p>
              <ul className="space-y-6">
                {['Zero Data Gaps', 'Autonomous Lead Flow', 'Real-time Analytics'].map((item) => (
                  <li key={item} className="flex items-center gap-4 mono text-sm uppercase tracking-widest">
                    <CheckCircle2 size={18} className="text-[#064e3b]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#064e3b]/10 blur-[120px] rounded-full" />
              <ConnectedEcosystem className="relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#064e3b]">
        <div className="container-custom text-center">
          <h2 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">Ready to <br /> Upgrade?</h2>
          <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all">
            <Link to="/contact">Book Technical Audit</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;