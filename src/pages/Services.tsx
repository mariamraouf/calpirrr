"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Globe, Database, 
  Bot, Workflow 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Services = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  const serviceDetails = [
    {
      id: "01",
      title: "High-Conversion Web Architecture",
      icon: <Globe className="text-[#2563eb]" size={40} />,
      desc: "We don't build 'sites'. We build high-performance digital storefronts engineered for speed and conversion. Every line of code is optimized for SEO and user retention.",
      features: ["Custom React & Next.js Development", "Edge-Network Content Delivery", "Technical SEO Optimization", "CRO Design"]
    },
    {
      id: "02",
      title: "Integrated CRM & Sales Systems",
      icon: <Database className="text-[#2563eb]" size={40} />,
      desc: "Your website should be your best salesperson. We integrate your site directly with industry-leading CRMs to ensure every lead is captured and tracked automatically.",
      features: ["CRM Setup & Configuration", "Automated Lead Scoring", "Sales Pipeline Visualization", "Real-time Data Sync"]
    },
    {
      id: "03",
      title: "Autonomous AI Agents",
      icon: <Bot className="text-[#2563eb]" size={40} />,
      desc: "Deploy 24/7 intelligent agents that handle customer support, qualify leads, and book meetings. Our AI agents learn your business and interact in natural language.",
      features: ["Custom LLM Training", "Multi-channel Support", "Automated Scheduling", "Instant Qualification"]
    },
    {
      id: "04",
      title: "End-to-End Workflow Automation",
      icon: <Workflow className="text-[#2563eb]" size={40} />,
      desc: "Eliminate manual busywork. We map your business processes and automate the repetitive tasks, saving your team 20+ hours every single week.",
      features: ["Email & SMS Sequences", "Invoice Automation", "Internal Task Routing", "Cross-Platform Integrations"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6">
        <div className="container-custom">
          <motion.div {...reveal} className="max-w-[800px]">
            <span className="text-[#2563eb] font-bold uppercase tracking-widest text-sm mb-4 block">The Capabilities</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#0f172a]">Our <span className="text-[#2563eb]">Services.</span></h1>
            <p className="text-xl text-[#475569] leading-relaxed">
              We provide the technical foundation for modern businesses. From initial architecture to autonomous operations, we build the systems that drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="space-y-32">
            {serviceDetails.map((service, index) => (
              <motion.div 
                key={service.id}
                {...reveal}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div>
                  <div className="text-[#2563eb] font-bold mb-6">[{service.id}] // MODULE_SPEC</div>
                  <div className="mb-8">{service.icon}</div>
                  <h2 className="text-4xl font-bold mb-8 text-[#0f172a]">{service.title}</h2>
                  <p className="text-[#475569] text-lg leading-relaxed mb-10">{service.desc}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4 text-[#475569] font-medium">
                        <CheckCircle2 size={20} className="text-[#2563eb]" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video bg-[#f8f9fa] rounded-[24px] border border-[#e2e8f0] flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb05] to-transparent" />
                  <div className="text-[#2563eb20] font-mono text-xs p-12 whitespace-pre">
                    {`// INITIALIZING_${service.title.toUpperCase().replace(/ /g, '_')}\n// STATUS: OPTIMIZED\n// READY_FOR_DEPLOYMENT`}
                  </div>
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

export default Services;