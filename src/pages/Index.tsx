"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Globe, BarChart3, Megaphone, 
  Settings, Bot, Zap, Brain, Star, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Index = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  } as const;

  const services = [
    { title: "Website & Branding", icon: <Globe />, color: "bg-purple-50 text-purple-600", href: "/services/website-development", desc: "Custom, conversion-optimized websites and professional branding." },
    { title: "CRM & Sales Systems", icon: <BarChart3 />, color: "bg-blue-50 text-blue-600", href: "/services/crm-sales", desc: "Battle-tested CRM implementation and sales automation." },
    { title: "Marketing & Social", icon: <Megaphone />, color: "bg-amber-50 text-amber-600", href: "/services/marketing-branding", desc: "Build your digital presence with SEO, social media, and email." },
    { title: "Operations & HR", icon: <Settings />, color: "bg-emerald-50 text-emerald-600", href: "/services/operations-hr", desc: "Streamline your operations with integrated tools and SOPs." },
    { title: "AI Agent Development", icon: <Bot />, color: "bg-violet-50 text-violet-600", href: "/services/ai-agents", desc: "Custom AI agents that handle support and qualify leads 24/7." },
    { title: "Workflow Automation", icon: <Zap />, color: "bg-cyan-50 text-cyan-600", href: "/services/ai-automation", desc: "Eliminate manual work with intelligent automations." },
    { title: "AI Strategy Consulting", icon: <Brain />, color: "bg-pink-50 text-pink-600", href: "/services/ai-consulting", desc: "Audit your operations and build a roadmap for AI ROI." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-24 px-6 text-center">
        <div className="container-custom">
          <motion.div {...reveal}>
            <span className="inline-block bg-[#6c5ce71a] text-[#6c5ce7] px-4 py-1.5 rounded-full text-sm font-bold mb-8">
              Now with AI Automation & Agent Setup
            </span>
            <h1 className="text-5xl md:text-[5.5rem] leading-[1.1] mb-8 font-[800] tracking-tight text-[#1a1a2e]">
              All-in-One Business Launch, <br /> <span className="purple-gradient-text">Done Right</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#555] mb-12 leading-relaxed max-w-[850px] mx-auto">
              We deploy your entire business infrastructure — website, CRM, operations, branding, marketing, and AI automations — all integrated and working together. Live in 7-28 days, not 3-6 months.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white px-10 py-7 rounded-[12px] font-bold text-lg shadow-xl shadow-[#6c5ce733]">
                <Link to="/#contact">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#e2e8f0] text-[#1a1a2e] px-10 py-7 rounded-[12px] font-bold text-lg hover:bg-[#f8f9fa]">
                <Link to="/assessment">Take the Free Assessment</Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[#888] font-bold text-sm uppercase tracking-widest">
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#6c5ce7]" /> 1,000+ Projects Launched</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#6c5ce7]" /> 7 Days Fastest Setup</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#6c5ce7]" /> 40-60% Cost Savings</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4 block">Who We Help</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">Built for Founders at Every Stage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Pre-Launch Founders", desc: "You have the idea but haven't launched yet. You need the full stack set up correctly from day one.", package: "Starter" },
              { title: "Early-Stage Startups", desc: "You're up and running but your systems are a mess. You need everything connected and automated.", package: "Growth" },
              { title: "Businesses Ready for AI", desc: "Your business works, but you know AI could make it work 10x better. You want AI agents handling support.", package: "Ultimate" }
            ].map((card, i) => (
              <motion.div key={i} {...reveal} className="bg-white p-10 rounded-[20px] border border-gray-100 hover-lift">
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-[#555] leading-relaxed mb-8">{card.desc}</p>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Best Package</span>
                  <span className="text-[#6c5ce7] font-bold">{card.package}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 bg-[#f8f9fa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4 block">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">Everything Your Business Needs</h2>
            <p className="text-lg text-[#555] max-w-[600px] mx-auto">Complete business launch packages or specific individual services tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link key={i} to={s.href} className="bg-white p-8 rounded-[20px] border border-gray-100 hover-lift group">
                <div className={cn("w-12 h-12 rounded-[12px] flex items-center justify-center mb-6 transition-transform group-hover:scale-110", s.color)}>
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed mb-6">{s.desc}</p>
                <div className="text-[#6c5ce7] text-sm font-bold flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4 block">Why Calpir</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">Stop Juggling 6 Different Vendors</h2>
          </div>
          <div className="bg-white rounded-[30px] border border-gray-100 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-[#f8f9fa] p-8 border-b border-gray-100 font-bold text-sm uppercase tracking-widest text-gray-400">
              <div>What You Need</div>
              <div>DIY Approach</div>
              <div className="text-[#6c5ce7]">With Calpir</div>
            </div>
            {[
              { need: "Website & Branding", diy: "Freelance designer ($2-5K) + builder", calpir: "✓ Included" },
              { need: "CRM & Sales", diy: "HubSpot/GHL ($97-297/mo) + setup", calpir: "✓ Included & configured" },
              { need: "Marketing & SEO", diy: "Agency retainer ($2-5K/mo)", calpir: "✓ Included" },
              { need: "AI Agents", diy: "AI platforms + dev time", calpir: "✓ Built & deployed" },
              { need: "Timeline", diy: "3-6 months", calpir: "7-28 days" },
              { need: "Total Year 1 Cost", diy: "$15,000-30,000+", calpir: "Starting at $1,499" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-8 border-b border-gray-50 last:border-0 items-center">
                <div className="font-bold text-[#1a1a2e]">{row.need}</div>
                <div className="text-[#888] text-sm">{row.diy}</div>
                <div className="font-bold text-[#6c5ce7]">{row.calpir}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-400 text-sm font-medium">All systems integrated out of the box. No vendor management, no compatibility headaches.</p>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4 block">Packages</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">Choose Your Launch Package</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$1,499", launch: "7 days", desc: "Website, CRM, accounting, HR basics, branding kit" },
              { name: "Growth", price: "$3,499", launch: "14 days", desc: "Everything in Starter + project management, automation, SOPs", featured: true },
              { name: "Ultimate", price: "$6,999", launch: "28 days", desc: "Everything in Growth + 10-page site, payroll, full AI agent setup" }
            ].map((p, i) => (
              <div key={i} className={cn("bg-white p-10 rounded-[24px] border border-gray-100 hover-lift relative", p.featured && "border-[#6c5ce7] shadow-2xl shadow-[#6c5ce715]")}>
                {p.featured && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6c5ce7] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</span>}
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="text-4xl font-black text-[#1a1a2e] mb-4">{p.price}</div>
                <div className="text-[#6c5ce7] font-bold text-sm uppercase tracking-widest mb-6">Launch in {p.launch}</div>
                <p className="text-[#555] text-sm leading-relaxed mb-8">{p.desc}</p>
                <Button asChild variant="outline" className="w-full border-[#e2e8f0] text-[#6c5ce7] font-bold hover:bg-[#6c5ce7] hover:text-white">
                  <Link to="/packages">View Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">From Idea to Launch in 4 Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Free Consultation", desc: "30-minute call. We listen, understand your goals, and map out exactly what you need." },
              { step: "02", title: "Strategy & Blueprint", desc: "1-hour deep dive. We build a custom implementation plan with clear deliverables." },
              { step: "03", title: "Build & Integrate", desc: "Our team builds your website, configures CRM, sets up automations, and deploys AI agents." },
              { step: "04", title: "Launch & Optimize", desc: "Go live. We provide full training, documentation, and post-launch support." }
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-[#6c5ce70a] absolute -top-8 -left-4 select-none">{s.step}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{s.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4 block">Results</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e]">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah K.", role: "Founder, NovaBright", text: "Calpir had our entire business infrastructure live in 10 days. What would have taken us 3 months happened in a week and a half." },
              { name: "Marcus T.", role: "CEO, UrbanStack", text: "The AI chatbot they set up handles 75% of our customer inquiries now. Our support costs dropped by half and response time went from hours to seconds." },
              { name: "Lena M.", role: "Co-founder, GreenLoop", text: "We went from idea to taking our first paying customers in under two weeks. The automation setup alone saves us 20+ hours a week." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[24px] border border-gray-100 shadow-sm">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-[#1a1a2e] font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#6c5ce71a] rounded-full flex items-center justify-center text-[#6c5ce7] font-bold">{t.name[0]}</div>
                  <div>
                    <div className="font-bold text-[#1a1a2e]">{t.name}</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="bg-[#0a0a2e] rounded-[40px] p-12 md:p-24 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6c5ce710] rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Not Sure What You Need?</h2>
              <p className="text-xl mb-12 opacity-80 max-w-[700px] mx-auto">
                Take our free 2-minute assessment. Find out what stage your business is at, what's costing you the most, and exactly what systems would accelerate your growth.
              </p>
              <Button asChild className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white px-12 py-8 rounded-[16px] text-xl font-bold shadow-2xl shadow-[#6c5ce733]">
                <Link to="/assessment">Take the Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="container-custom">
          <div className="brand-gradient rounded-[40px] p-12 md:p-24 text-white text-center shadow-2xl shadow-[#6c5ce744]">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Ready to Launch Smarter?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-[600px] mx-auto font-medium">
              Book a free 30-minute consultation. We'll map out exactly what your business needs and how to get there fastest.
            </p>
            <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer" className="bg-white text-[#6c5ce7] px-16 py-8 rounded-[16px] text-2xl font-black hover:bg-[#f8f9fa] transition-all inline-block shadow-2xl">
              Book Your Free Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;