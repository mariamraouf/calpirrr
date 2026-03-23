"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, CheckCircle2, 
  Globe, MessageSquare, BarChart3,
  Cpu, Sparkles, BrainCircuit
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ROICalculator from '@/components/home/ROICalculator';
import CaseStudies from '@/components/home/CaseStudies';
import HowItWorks from '@/components/home/HowItWorks';

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
      
      {/* Hero Section */}
      <section className="hero-gradient pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#f9731608] rounded-full blur-3xl -mr-32" />
        <div className="container-custom relative z-10">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div {...reveal}>
              <div className="inline-flex items-center gap-2 bg-[#f9731615] text-[#f97316] px-4 py-2 rounded-full text-sm font-bold mb-8 border border-[#f9731622]">
                <Sparkles size={16} />
                <span>AI-Powered Business Infrastructure</span>
              </div>
              <h1 className="text-5xl md:text-[6rem] leading-[1] mb-8 font-[900] tracking-tight text-[#1a1a1a]">
                Scale Your Business <br /> <span className="text-[#f97316]">With AI Agents.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#555] mb-12 leading-relaxed max-w-[800px] mx-auto">
                We build high-conversion websites, integrated CRMs, and autonomous AI agents that handle your sales and support 24/7. All in just 7 days.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-lg py-5">
                  Launch My Business <ArrowRight size={22} />
                </a>
                <a href="/services" className="btn-secondary w-full sm:w-auto text-lg py-5">
                  Explore Capabilities
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-24 px-6 bg-[#fffcf9]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Autonomous Sales", 
                icon: <BrainCircuit className="text-[#f97316]" />, 
                desc: "AI agents that qualify leads, answer complex product questions, and book meetings directly on your calendar."
              },
              { 
                title: "Neural Support", 
                icon: <Cpu className="text-[#f97316]" />, 
                desc: "24/7 customer support that learns from your documentation and resolves 80% of tickets without human intervention."
              },
              { 
                title: "Workflow Logic", 
                icon: <Zap className="text-[#f97316]" />, 
                desc: "End-to-end automation that syncs your website, CRM, and marketing tools into a single intelligent engine."
              }
            ].map((f, i) => (
              <motion.div key={i} {...reveal} className="ai-glow bg-white p-10 rounded-[24px] border border-[#e5e7eb] hover:border-[#f9731633] transition-all">
                <div className="w-14 h-14 bg-[#f9731610] rounded-[14px] flex items-center justify-center mb-6">
                  {React.cloneElement(f.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-[#666] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      
      <CaseStudies />

      <ROICalculator />

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container-custom">
          <div className="brand-gradient rounded-[40px] p-12 md:p-24 text-white text-center shadow-2xl shadow-[#f9731644] relative overflow-hidden">
            <div className="absolute inset-0 neural-pattern opacity-10" />
            <motion.div {...reveal} className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Ready to Automate <br /> Your Growth?</h2>
              <p className="text-xl mb-12 opacity-90 max-w-[700px] mx-auto font-medium">
                Join the founders who are scaling 10x faster with AI-integrated infrastructure. Book your technical strategy session today.
              </p>
              <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-white text-[#f97316] px-16 py-8 rounded-[16px] text-2xl font-black hover:bg-[#fff7ed] transition-all inline-block shadow-2xl">
                Execute Strategy
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