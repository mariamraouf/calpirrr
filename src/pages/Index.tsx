"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Globe, BarChart3, Zap, Shield, Users, Clock, Play
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ROICalculator from '@/components/home/ROICalculator';
import { Button } from '@/components/ui/button';

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] grain-overlay">
      <Navbar />
      
      {/* Hero: High-End Editorial */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div {...fadeInUp}>
                <SectionLabel className="bg-[#064e3b]/5 text-[#064e3b] border-[#064e3b]/10">
                  The Architect of Scale
                </SectionLabel>
                <h1 className="text-[3.5rem] md:text-[6.5rem] font-bold leading-[0.9] tracking-tighter mb-8 text-[#064e3b] text-balance">
                  Infrastructure <br /> for the <span className="italic font-serif text-[#064e3b]/40">Ambitious.</span>
                </h1>
                <p className="text-xl md:text-2xl text-black/60 max-w-[550px] mb-12 leading-relaxed font-medium">
                  We don't just build websites. We deploy the entire operational engine your business needs to dominate its market.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button asChild className="bg-[#064e3b] hover:bg-[#053f30] text-white px-12 h-20 rounded-full font-bold text-xl shadow-2xl shadow-[#064e3b]/20 transition-all hover:scale-105">
                    <a href="#contact">Start Your Build</a>
                  </Button>
                  <button className="flex items-center gap-4 group">
                    <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#064e3b] group-hover:text-white transition-all">
                      <Play size={20} fill="currentColor" />
                    </div>
                    <span className="font-bold text-lg">Watch the Process</span>
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Modern Architecture" 
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                {/* Floating Stats Card */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl max-w-[240px]"
                >
                  <div className="text-4xl font-bold text-[#064e3b] mb-2">7 Days</div>
                  <p className="text-sm font-bold text-black/40 uppercase tracking-widest">Average Launch Time</p>
                </motion.div>
              </motion.div>
              
              {/* Background Decorative Shape */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#064e3b]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services: Visual Grid */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#064e3b] mb-8">The Full Stack.</h2>
            <p className="text-xl text-black/50 max-w-[600px] mx-auto">
              We replace your fragmented agency relationships with a single, high-performance operational partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Digital Architecture",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                desc: "High-conversion platforms built on modern stacks. No templates, no bloat, just performance.",
                tags: ["Custom Dev", "SEO", "UX Design"]
              },
              {
                title: "Sales Infrastructure",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
                desc: "Automated pipelines that qualify leads and book meetings while you sleep.",
                tags: ["CRM Setup", "Lead Scoring", "Automation"]
              }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[3rem] bg-[#f4f7f5]"
              >
                <div className="h-[400px] overflow-hidden">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-12">
                  <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                  <p className="text-lg text-black/50 mb-8 leading-relaxed">{s.desc}</p>
                  <div className="flex gap-3">
                    {s.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest border border-black/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy: Immersive Parallax-style */}
      <section className="relative py-48 px-6 bg-[#064e3b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Office Background"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-[800px]">
            <motion.div {...fadeInUp}>
              <SectionLabel variant="dark">Our Philosophy</SectionLabel>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]">
                We build for <br /> <span className="text-white/30 italic font-serif">Humans</span>, not <br /> just data.
              </h2>
              <p className="text-2xl text-white/70 mb-16 leading-relaxed">
                In an era of automated noise, we focus on high-touch systems that create genuine connection and lasting value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="text-4xl font-bold">1,000+</div>
                  <p className="text-white/50 font-bold uppercase tracking-widest text-sm">Founders Empowered</p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold">40%</div>
                  <p className="text-white/50 font-bold uppercase tracking-widest text-sm">Average Revenue Increase</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator: Integrated */}
      <motion.div {...fadeInUp}>
        <ROICalculator />
      </motion.div>

      {/* Testimonials: Clean & Bold */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <SectionLabel>Success</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#064e3b]">What they say.</h2>
            </div>
            <div className="lg:col-span-8 space-y-24">
              {[
                {
                  quote: "Calpir didn't just give us a website; they gave us a sales engine. Our conversion rate doubled in the first month.",
                  author: "Alex Rivera",
                  role: "Founder, Nexus"
                },
                {
                  quote: "The automation setup saves my team 30 hours a week. It's the best investment we've made this year.",
                  author: "Sarah Chen",
                  role: "CEO, Bloom"
                }
              ].map((t, i) => (
                <motion.div key={i} {...fadeInUp} className="border-b border-black/5 pb-16 last:border-0">
                  <p className="text-3xl md:text-5xl font-medium mb-12 leading-tight text-black/80">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#064e3b]/10" />
                    <div>
                      <div className="font-bold text-xl">{t.author}</div>
                      <div className="text-black/40 uppercase text-xs tracking-widest font-bold mt-1">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: Immersive */}
      <section id="contact" className="py-48 px-6 bg-[#f4f7f5] text-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-6xl md:text-[9rem] font-bold tracking-tighter text-[#064e3b] mb-12 leading-none">
              Ready to <br /> <span className="italic font-serif text-[#064e3b]/20">Scale?</span>
            </h2>
            <p className="text-2xl text-black/50 mb-16 max-w-[600px] mx-auto">
              Stop fighting your systems and start growing your business. Book a free 30-minute strategy session.
            </p>
            <Button asChild className="bg-[#064e3b] hover:bg-[#053f30] text-white px-16 h-24 rounded-full font-bold text-2xl shadow-2xl shadow-[#064e3b]/20 transition-all hover:scale-105">
              <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer">Book Your Call</a>
            </Button>
          </motion.div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-[#064e3b] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#064e3b] rounded-full" />
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;