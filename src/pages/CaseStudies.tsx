"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      industry: "E-commerce Startup",
      title: "Scaling to $50k MRR in 90 Days",
      challenge: "Sarah had a product idea and a Shopify store she'd been tinkering with for 3 months. Disconnected tools, no CRM, losing leads, manually answering DMs at all hours.",
      built: [
        "Custom e-commerce website with conversion-optimized product pages",
        "GoHighLevel CRM with automated lead nurture sequences",
        "AI chatbot handling product questions and order tracking",
        "Automated email flows (welcome, abandoned cart, post-purchase)",
        "Social media content calendar with 30 days of content",
        "Analytics dashboard tracking revenue, traffic, and conversion"
      ],
      timeline: "10 days (Growth package)",
      results: [
        { label: "Growth", value: "450%", icon: <TrendingUp size={20} /> },
        { label: "Saved", value: "15h/wk", icon: <Clock size={20} /> }
      ],
      quote: "What would have taken us 3 months of vendor management happened in a week and a half.",
      author: "Sarah K., Founder",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      client: "UrbanStack",
      industry: "B2B SaaS",
      title: "60% Support Cost Reduction",
      challenge: "Marcus had a working product but terrible sales infrastructure. Leads came in through 4 different channels, nothing was tracked, and his 3-person team was spending more time on admin than selling.",
      built: [
        "Professional 8-page marketing website with demo booking",
        "HubSpot CRM with multi-stage sales pipeline",
        "AI lead qualification agent (asks company size, budget, timeline)",
        "Automated drip campaigns for cold, warm, and hot leads",
        "Internal knowledge base AI for the team",
        "Operations SOPs and project management system",
        "Full analytics: pipeline velocity, lead source tracking"
      ],
      timeline: "21 days (Ultimate package)",
      results: [
        { label: "Deflection", value: "75%", icon: <TrendingUp size={20} /> },
        { label: "Response", value: "< 30s", icon: <Clock size={20} /> }
      ],
      quote: "The AI chatbot they set up handles 75% of our customer inquiries now. Our support costs dropped by half.",
      author: "Marcus T., CEO",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      client: "GreenLoop",
      industry: "Sustainable Services",
      title: "Automated Sales Pipeline",
      challenge: "Lena and her co-founder had a sustainable cleaning service taking off locally but zero digital infrastructure. Bookings by phone, invoices by hand, no online presence.",
      built: [
        "Booking-optimized website with online scheduling",
        "CRM with automated booking confirmations and reminders",
        "AI chatbot for quote requests and FAQ",
        "Automated invoicing and payment reminders",
        "Google Business Profile optimization",
        "Local SEO setup",
        "Social media content (15 posts/month)",
        "Simple HR onboarding system for new cleaners"
      ],
      timeline: "12 days (Growth package + add-ons)",
      results: [
        { label: "Bookings", value: "+300%", icon: <TrendingUp size={20} /> },
        { label: "Saved", value: "20h/wk", icon: <Clock size={20} /> }
      ],
      quote: "We went from idea to taking our first paying customers in under two weeks. The automation setup alone saves us 20+ hours a week.",
      author: "Lena M., Co-founder",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Proof of Concept</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">
              Case <br /> <span className="text-[#064e3b]">Studies.</span>
            </h1>
            <p className="text-2xl mono text-white/40 max-w-[800px]">Real results from real businesses. See how we've helped founders launch faster, automate smarter, and grow without burning out.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-48">
            {cases.map((c, i) => (
              <motion.div key={c.id} {...reveal} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mono text-[#064e3b] text-xs font-bold mb-6 tracking-widest">
                    [{c.id}] // {c.industry}
                  </div>
                  <h2 className="text-4xl md:text-6xl mb-8">{c.title}</h2>
                  
                  <div className="space-y-12 mb-12">
                    <div>
                      <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-4">Challenge</div>
                      <p className="text-white/60 mono text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    
                    <div>
                      <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-4">What We Built</div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {c.built.map((item) => (
                          <li key={item} className="flex items-center gap-3 mono text-[0.6rem] uppercase tracking-widest text-white/40">
                            <CheckCircle2 size={14} className="text-[#064e3b]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      {c.results.map((res, idx) => (
                        <div key={idx} className="border border-white/10 p-8 bg-white/5">
                          <div className="text-4xl font-black text-[#064e3b] mb-1">{res.value}</div>
                          <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-l-4 border-[#064e3b] pl-8 py-4 bg-white/5">
                      <p className="text-xl mono italic mb-4">"{c.quote}"</p>
                      <div className="font-black uppercase text-sm">{c.author}</div>
                    </div>
                  </div>
                </div>
                
                <div className={`aspect-video bg-white/5 border border-white/10 overflow-hidden relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <img src={c.image} alt={c.client} className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-1">Client</div>
                    <div className="text-2xl font-black uppercase">{c.client}</div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-[#064e3b] mt-2">Timeline: {c.timeline}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#064e3b] text-white text-center">
        <div className="container-custom">
          <h2 className="text-5xl md:text-8xl mb-12 font-black uppercase tracking-tighter">Ready for Your Own <br /> Success Story?</h2>
          <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudies;