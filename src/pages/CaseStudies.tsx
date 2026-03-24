"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, TrendingUp, Clock, Zap } from 'lucide-react';
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
      title: "Scaling from $0 to $50k MRR in 90 Days",
      challenge: "NovaBright had a great product but no digital infrastructure. They were managing orders via Instagram DMs and spreadsheets.",
      solution: "We deployed a high-conversion Shopify store, integrated a custom CRM for customer retention, and automated their fulfillment notifications.",
      results: [
        { label: "Revenue Growth", value: "450%", icon: <TrendingUp size={20} /> },
        { label: "Manual Work Saved", value: "25h/wk", icon: <Clock size={20} /> },
        { label: "Conversion Rate", value: "4.2%", icon: <Zap size={20} /> }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      client: "UrbanStack",
      industry: "SaaS",
      title: "Reducing Support Costs by 60% with AI Agents",
      challenge: "UrbanStack was overwhelmed with basic support tickets, leading to 24-hour response times and high churn.",
      solution: "We built and trained a custom AI support agent on their entire documentation and integrated it with their Slack and Intercom.",
      results: [
        { label: "Support Deflection", value: "78%", icon: <TrendingUp size={20} /> },
        { label: "Response Time", value: "< 5s", icon: <Clock size={20} /> },
        { label: "Churn Reduction", value: "15%", icon: <Zap size={20} /> }
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      client: "GreenLoop",
      industry: "Professional Services",
      title: "Automating the Entire Sales Pipeline",
      challenge: "GreenLoop's sales team was spending 70% of their time on data entry and manual follow-ups instead of closing deals.",
      solution: "We implemented an end-to-end automated pipeline: from LinkedIn lead capture to automated booking and contract generation.",
      results: [
        { label: "Lead Volume", value: "+120%", icon: <TrendingUp size={20} /> },
        { label: "Sales Cycle", value: "-40%", icon: <Clock size={20} /> },
        { label: "ROI", value: "12x", icon: <Zap size={20} /> }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-24 px-6">
        <div className="container-custom">
          <motion.div {...reveal} className="max-w-[800px]">
            <SectionLabel>Success Stories</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#1a1a2e] leading-tight">
              Real Results for <br /> <span className="purple-gradient-text">Real Founders.</span>
            </h1>
            <p className="text-xl text-[#555] leading-relaxed">
              We don't just build systems; we drive business outcomes. Explore how we've helped startups and established businesses scale through technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="space-y-32">
            {cases.map((c, index) => (
              <motion.div 
                key={c.id}
                {...reveal}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm">[{c.id}] // {c.industry}</span>
                    <div className="h-px flex-grow bg-gray-100" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">{c.title}</h2>
                  <div className="space-y-4">
                    <p className="text-[#555] leading-relaxed"><strong className="text-[#1a1a2e]">The Challenge:</strong> {c.challenge}</p>
                    <p className="text-[#555] leading-relaxed"><strong className="text-[#1a1a2e]">The Solution:</strong> {c.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {c.results.map((res, i) => (
                      <div key={i} className="bg-[#f8f9fa] p-4 rounded-xl border border-gray-100">
                        <div className="text-[#6c5ce7] mb-2">{res.icon}</div>
                        <div className="text-xl font-black text-[#1a1a2e]">{res.value}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="border-[#e8e8e8] text-[#1a1a2e] px-8 py-6 rounded-[10px] font-bold group">
                    View Full Case Study <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                  </Button>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#6c5ce70a] rounded-[32px] -z-10 transition-transform group-hover:scale-105" />
                  <div className="aspect-[4/3] rounded-[24px] overflow-hidden border border-gray-100 shadow-2xl">
                    <img src={c.image} alt={c.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Client</div>
                    <div className="text-xl font-black text-[#1a1a2e]">{c.client}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="bg-[#0a0a2e] rounded-[32px] p-12 md:p-24 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6c5ce710] rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to be our next <br /> success story?</h2>
              <p className="text-xl mb-12 opacity-80 max-w-[700px] mx-auto">
                Let's build the systems that will take your business to the next level.
              </p>
              <Button asChild className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white px-12 py-8 rounded-[10px] text-xl font-bold btn-hover shadow-2xl shadow-[#6c5ce733]">
                <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer">Book Your Free Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudies;