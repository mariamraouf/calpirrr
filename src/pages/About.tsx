"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';

const About = () => {
  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <SectionLabel>The Architecture</SectionLabel>
          <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16">
            Built by <br /> <span className="text-[#064e3b]">Founders</span> <br /> for Scale.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <p className="text-2xl mono text-white/60 leading-relaxed">
                We've been in the trenches. We know that starting a business isn't about "ideas"—it's about the systems that support them.
              </p>
              <p className="text-lg mono text-white/40 leading-relaxed">
                Most founders burn months trying to stitch together separate tools. We fix that by deploying a single, integrated operational engine in days.
              </p>
            </div>
            <div className="border border-white/10 p-12 bg-white/5">
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
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;