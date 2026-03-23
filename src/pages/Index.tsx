"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, BarChart3, Megaphone, Settings, TrendingUp, Briefcase, 
  Bot, Zap, Brain, Phone, FileText, Hammer, Rocket, Check, ArrowRight, Sparkles, Star
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ROICalculator from '@/components/home/ROICalculator';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Section 1: Hero */}
      <section className="hero-gradient pt-40 pb-24 px-6 text-center">
        <div className="container-custom">
          <SectionLabel>Now with AI Automation & Agent Setup</SectionLabel>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[800] leading-[1.15] max-w-[800px] mx-auto mb-6">
            Launch Your Business with <span className="text-gradient">AI-Powered</span> Systems
          </h1>
          <p className="text-lg md:text-[1.25rem] text-[#555] max-w-[600px] mx-auto mb-10 leading-relaxed">
            Everything you need to start and scale — website, CRM, operations, marketing, and now AI automations and intelligent agents — all set up and integrated in days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button asChild className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white px-10 py-7 rounded-[10px] font-semibold text-lg shadow-lg shadow-[#6c5ce74d] transition-transform hover:-translate-y-1">
              <a href="#contact">Book Free Consultation</a>
            </Button>
            <Button asChild variant="outline" className="bg-white text-[#1a1a2e] border-2 border-[#e8e8e8] hover:border-[#6c5ce7] hover:text-[#6c5ce7] px-10 py-7 rounded-[10px] font-semibold text-lg transition-all">
              <a href="#packages">View Packages</a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-[2rem] font-[800] text-[#6c5ce7]">1,000+</div>
              <div className="text-[0.85rem] text-[#555] font-semibold uppercase tracking-wider">Projects Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-[2rem] font-[800] text-[#6c5ce7]">7 Days</div>
              <div className="text-[0.85rem] text-[#555] font-semibold uppercase tracking-wider">Fastest Launch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-[2rem] font-[800] text-[#6c5ce7]">40-60%</div>
              <div className="text-[0.85rem] text-[#555] font-semibold uppercase tracking-wider">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who This Is For */}
      <section id="who" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel>Who We Help</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">Built for Founders at Every Stage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Launch Founders",
                icon: <Rocket className="text-[#6c5ce7]" />,
                desc: "You have the idea but haven't launched yet. You need the full stack — website, brand, CRM, marketing, AI — set up correctly from day one so you can focus on building your product and getting customers.",
                package: "Best package: Starter or Growth"
              },
              {
                title: "Early-Stage Startups",
                icon: <TrendingUp className="text-[#6c5ce7]" />,
                desc: "You're up and running but your systems are a mess. Scattered tools, manual processes, leads falling through cracks. You need everything connected and automated so your small team can scale.",
                package: "Best package: Growth or Ultimate"
              },
              {
                title: "Small Businesses Ready for AI",
                icon: <Brain className="text-[#6c5ce7]" />,
                desc: "Your business works, but you know AI could make it work 10x better. You want AI agents handling support, qualifying leads, and automating the repetitive work that's eating your time.",
                package: "Best package: Ultimate"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[16px] border border-[#e8e8e8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#6c5ce71a] rounded-[14px] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[1.3rem] font-bold mb-4">{item.title}</h3>
                <p className="text-[#555] leading-relaxed mb-6">{item.desc}</p>
                <div className="text-[0.85rem] font-bold text-[#1a1a2e] uppercase tracking-wider">{item.package}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Core Services */}
      <section id="services" className="section-padding bg-[#f8f9fa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">Everything Your Business Needs</h2>
            <p className="text-[#555] max-w-[700px] mx-auto text-lg">We handle the full stack of business infrastructure so you can focus on what matters — your product and your customers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Website Development",
                icon: <Globe size={28} />,
                iconBg: "bg-[#6c5ce71a]",
                desc: "Custom, conversion-optimized websites built to grow with your business.",
                list: ["Custom design and development", "Mobile-first responsive build", "SEO-optimized from day one", "Analytics and tracking setup"]
              },
              {
                title: "CRM & Sales Systems",
                icon: <BarChart3 size={28} />,
                iconBg: "bg-[#74b9ff1a]",
                desc: "Set up and configure the right CRM to close deals faster and manage relationships better.",
                list: ["HubSpot, GoHighLevel setup", "Sales pipeline configuration", "Customer data migration", "Automated follow-ups"]
              },
              {
                title: "Marketing & Branding",
                icon: <Megaphone size={28} />,
                iconBg: "bg-[#fdcb6e1a]",
                desc: "Build a brand that stands out and a marketing engine that drives consistent growth.",
                list: ["Brand identity and strategy", "Social media setup", "Content marketing framework", "Email marketing automation"]
              },
              {
                title: "Operations & HR",
                icon: <Settings size={28} />,
                iconBg: "bg-[#55efc41a]",
                desc: "Streamline your operations and build the HR foundation for a growing team.",
                list: ["Workflow optimization", "Process automation", "HR systems setup", "Integrated operational tools"]
              },
              {
                title: "Analytics & Reporting",
                icon: <TrendingUp size={28} />,
                iconBg: "bg-[#ff76751a]",
                desc: "Know exactly how your business is performing with custom dashboards and KPI tracking.",
                list: ["Google Analytics 4 setup", "Custom dashboard creation", "KPI tracking frameworks", "Monthly reporting templates"]
              },
              {
                title: "Business Consulting",
                icon: <Briefcase size={28} />,
                iconBg: "bg-[#a29bfe1a]",
                desc: "Strategic guidance from people who've launched hundreds of businesses.",
                list: ["Go-to-market strategy", "Business model validation", "Growth planning", "Ongoing advisory support"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[16px] border border-[#e8e8e8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                <div className={cn("w-14 h-14 rounded-[14px] flex items-center justify-center mb-6", service.iconBg)}>
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "text-[#1a1a2e]" })}
                </div>
                <h3 className="text-[1.3rem] font-bold mb-4">{service.title}</h3>
                <p className="text-[#555] mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[0.95rem] text-[#1a1a2e]">
                      <ArrowRight size={16} className="text-[#6c5ce7] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: AI Solutions */}
      <section id="ai" className="section-padding ai-section-gradient text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel variant="dark">New: AI Solutions</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">AI Automations & Intelligent Agents</h2>
            <p className="text-white/70 max-w-[700px] mx-auto text-lg">Give your business a competitive edge with custom AI systems that handle repetitive tasks, engage customers 24/7, and scale operations without adding headcount.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Agent Development",
                icon: <Bot size={32} />,
                desc: "Custom AI agents that handle customer support, lead qualification, appointment booking, and more — working around the clock.",
                list: ["Customer support chatbots", "Lead qualification agents", "Appointment scheduling bots", "Internal knowledge assistants", "Multi-channel deployment"]
              },
              {
                title: "Workflow Automation",
                icon: <Zap size={32} />,
                desc: "Eliminate manual, repetitive work with intelligent automations that connect your tools and trigger the right actions automatically.",
                list: ["CRM workflow automation", "Email and follow-up sequences", "Data entry and processing", "Invoice and payment automation", "Cross-platform integrations"]
              },
              {
                title: "AI Strategy Consulting",
                icon: <Brain size={32} />,
                desc: "Not sure where AI fits in your business? We audit your operations and build a roadmap to implement AI where it actually drives ROI.",
                list: ["AI readiness assessment", "ROI-focused implementation plan", "Tool selection and evaluation", "Team training and adoption", "Ongoing optimization"]
              }
            ].map((ai, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[16px] border border-white/10 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1">
                <div className="text-[#a29bfe] mb-6">{ai.icon}</div>
                <h3 className="text-[1.25rem] font-bold mb-4">{ai.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{ai.desc}</p>
                <ul className="space-y-3">
                  {ai.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[0.95rem] text-white/90">
                      <Sparkles size={16} className="text-[#a29bfe] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Comparison Table */}
      <section id="compare" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel>Why Calpir</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">Stop Juggling 6 Different Vendors</h2>
            <p className="text-[#555] max-w-[700px] mx-auto text-lg">Most startups piece together separate tools and agencies. Calpir replaces all of them with one integrated system.</p>
          </div>
          
          <div className="bg-white rounded-[16px] border border-[#e8e8e8] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8f9fa]">
                    <th className="p-6 font-bold text-[#1a1a2e]">What You Need</th>
                    <th className="p-6 font-bold text-[#1a1a2e]">DIY Approach</th>
                    <th className="p-6 font-bold text-[#6c5ce7] bg-[#6c5ce70d]">Calpir</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e8e8]">
                  {[
                    { need: "Website", diy: "Wix/Squarespace ($15-45/mo) + freelance designer ($2-5K)", calpir: "Included" },
                    { need: "CRM & Sales", diy: "HubSpot/GoHighLevel ($97-297/mo) + setup time", calpir: "Included" },
                    { need: "Marketing", diy: "Agency retainer ($2-5K/mo)", calpir: "Included" },
                    { need: "Branding", diy: "Freelance designer ($1-3K)", calpir: "Included" },
                    { need: "AI Agents", diy: "MindStudio/Dust ($20-200/mo) + learning curve", calpir: "Included + Configured" },
                    { need: "Automations", diy: "Make/Zapier ($20-99/mo) + figuring it out", calpir: "Included + Connected" },
                    { need: "Timeline", diy: "3-6 months", calpir: "7-28 days", highlight: true },
                    { need: "Total Year 1 Cost", diy: "$15,000-30,000+", calpir: "Starting at $1,499", highlight: true }
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-6 font-medium">{row.need}</td>
                      <td className="p-6 text-[#555]">{row.diy}</td>
                      <td className={cn("p-6 font-bold bg-[#6c5ce70d] text-[#6c5ce7]", row.highlight && "text-lg")}>
                        <div className="flex items-center gap-2">
                          {!row.highlight && <Check size={18} />}
                          {row.calpir}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 text-center text-[#555] font-medium">All systems integrated out of the box. No vendor management, no compatibility headaches.</p>
        </div>
      </section>

      {/* Section 6: Packages */}
      <section id="packages" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel>Packages</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-[#555] max-w-[700px] mx-auto text-lg">Bundled packages save you 40-60% compared to hiring separate vendors. Everything included — no hidden fees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="bg-white p-10 rounded-[16px] border border-[#e8e8e8] flex flex-col h-full">
              <h3 className="text-[1.4rem] font-bold mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[2.5rem] font-[800]">$1,499</span>
                <span className="text-[#555]">one-time</span>
              </div>
              <div className="inline-block bg-[#6c5ce71a] text-[#6c5ce7] px-3 py-1 rounded-[8px] text-[0.8rem] font-bold mb-8 self-start">Live in 7 days</div>
              <ul className="space-y-4 mb-10 flex-grow">
                {["Professional website", "Basic CRM setup", "Brand identity starter kit", "Google Analytics setup", "Social media profiles", "1 AI chatbot integration", "Basic email automation"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-[0.95rem]">
                    <Check size={18} className="text-[#6c5ce7] mt-0.5 shrink-0 font-bold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full bg-[#f8f9fa] text-[#1a1a2e] border-0 hover:bg-[#e8e8e8] py-6 rounded-[10px] font-bold">
                <a href="#contact">Get Started</a>
              </Button>
            </div>

            {/* Growth */}
            <div className="bg-white p-10 rounded-[16px] border-2 border-[#6c5ce7] flex flex-col h-full relative shadow-2xl shadow-[#6c5ce726]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6c5ce7] text-white px-5 py-1 rounded-full text-[0.75rem] font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-[1.4rem] font-bold mb-2">Growth</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[2.5rem] font-[800]">$3,499</span>
                <span className="text-[#555]">one-time</span>
              </div>
              <div className="inline-block bg-[#6c5ce71a] text-[#6c5ce7] px-3 py-1 rounded-[8px] text-[0.8rem] font-bold mb-8 self-start">Live in 14 days</div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="font-bold text-[#1a1a2e] mb-2">Everything in Starter, plus:</li>
                {["Advanced CRM + sales pipeline", "Full brand identity package", "Marketing automation setup", "Operations & HR systems", "AI agent (support + lead qual)", "3 workflow automations", "Custom analytics dashboard"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-[0.95rem]">
                    <Check size={18} className="text-[#6c5ce7] mt-0.5 shrink-0 font-bold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white py-6 rounded-[10px] font-bold shadow-lg shadow-[#6c5ce74d]">
                <a href="#contact">Get Started</a>
              </Button>
            </div>

            {/* Ultimate */}
            <div className="bg-white p-10 rounded-[16px] border border-[#e8e8e8] flex flex-col h-full">
              <h3 className="text-[1.4rem] font-bold mb-2">Ultimate</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[2.5rem] font-[800]">$6,999</span>
                <span className="text-[#555]">one-time</span>
              </div>
              <div className="inline-block bg-[#6c5ce71a] text-[#6c5ce7] px-3 py-1 rounded-[8px] text-[0.8rem] font-bold mb-8 self-start">Live in 28 days</div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="font-bold text-[#1a1a2e] mb-2">Everything in Growth, plus:</li>
                {["Custom multi-page website", "Full AI agent ecosystem", "Unlimited workflow automations", "AI strategy roadmap", "Team training sessions", "90-day optimization support", "Priority ongoing advisory"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-[0.95rem]">
                    <Check size={18} className="text-[#6c5ce7] mt-0.5 shrink-0 font-bold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full bg-[#f8f9fa] text-[#1a1a2e] border-0 hover:bg-[#e8e8e8] py-6 rounded-[10px] font-bold">
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Process */}
      <section id="process" className="section-padding bg-[#f8f9fa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">From Idea to Launch in 4 Steps</h2>
            <p className="text-[#555] max-w-[700px] mx-auto text-lg"> We've refined this process across 1,000+ launches. It's fast, it's proven, and it works.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "1", title: "Free Consultation", desc: "30-minute call to understand your business, goals, and where AI can drive the most impact." },
              { step: "2", title: "Strategy & Blueprint", desc: "We deep-dive into your needs and build a custom implementation plan with clear deliverables." },
              { step: "3", title: "Build & Integrate", desc: "Our team builds your website, sets up systems, configures AI agents, and connects everything together." },
              { step: "4", title: "Launch & Optimize", desc: "Go live with confidence. We provide training, documentation, and ongoing support to keep things running smoothly." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 brand-gradient text-white rounded-full flex items-center justify-center text-xl font-[800] mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-[1.1rem] font-bold mb-3">{item.title}</h3>
                <p className="text-[0.9rem] text-[#555] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel>Results</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Calpir had our entire business infrastructure — website, CRM, automations, everything — live in 10 days. What would have taken us 3 months of vendor management happened in a week and a half.",
                name: "Sarah K.",
                role: "Founder, NovaBright"
              },
              {
                quote: "The AI chatbot they set up handles 75% of our customer inquiries now. Our support costs dropped by half and response time went from hours to seconds.",
                name: "Marcus T.",
                role: "CEO, UrbanStack"
              },
              {
                quote: "We went from idea to taking our first paying customers in under two weeks. The automation setup alone saves us 20+ hours a week.",
                name: "Lena M.",
                role: "Co-founder, GreenLoop"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[16px] border border-[#e8e8e8] flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="#6c5ce7" className="text-[#6c5ce7]" />)}
                </div>
                <p className="text-[#1a1a2e] text-[1.05rem] leading-relaxed mb-8 flex-grow italic">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-[#1a1a2e]">{t.name}</div>
                  <div className="text-[0.9rem] text-[#555]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: ROI Calculator */}
      <ROICalculator />

      {/* Section 10: FAQ */}
      <section id="faq" className="section-padding bg-[#f8f9fa]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">Common Questions</h2>
          </div>
          <div className="max-w-[720px] mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "How long does it take to launch?", a: "Depending on your package, we go from kickoff to fully live in 7-28 days. The Starter package launches in 7 days, Growth in 14, and Ultimate in 28. This includes website, CRM, AI agents, automations, and everything else in your package." },
                { q: "Do I need technical skills to use the AI agents and automations?", a: "Not at all. We set up everything, train you on how it works, and provide documentation. The systems run on their own — you just monitor the dashboards and step in when you want to. If anything needs adjusting, we're here to help." },
                { q: "What if I already have a website or CRM?", a: "We work with what you have. If your existing tools are solid, we'll integrate them into the new system rather than replacing them. During the consultation, we'll assess your current setup and recommend what to keep, upgrade, or replace." },
                { q: "What AI tools and platforms do you use?", a: "We're platform-agnostic and choose the best tools for your specific needs. This might include OpenAI, Claude, custom-trained models, Make/Zapier for automations, GoHighLevel or HubSpot for CRM, and various specialized tools depending on your industry and goals." },
                { q: "What happens after launch?", a: "Every package includes post-launch support. Starter includes 2 weeks of support, Growth includes 30 days, and Ultimate includes 90 days of optimization. After that, we offer ongoing advisory retainers if you want continued support as you scale." },
                { q: "Can I upgrade my package later?", a: "Absolutely. Many clients start with Starter or Growth and upgrade as they scale. We designed the packages to build on each other, so upgrading is seamless — we add the new features on top of what's already running." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[#e8e8e8] rounded-[12px] px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-bold text-lg py-5 hover:no-underline hover:text-[#6c5ce7] transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#555] text-[1rem] leading-relaxed pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 11: Blog Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <SectionLabel>Blog</SectionLabel>
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-[800] mb-4">Latest Insights</h2>
            <p className="text-[#555] max-w-[700px] mx-auto text-lg">Practical strategies for launching, growing, and automating your business with AI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: "AI for Startups",
                title: "5 AI Agents Every Startup Should Deploy in 2026",
                excerpt: "The AI agents that are giving early-stage companies an unfair advantage in customer support, sales, and operations.",
                link: "/blog/ai-agents-for-startups",
                gradient: "from-[#6c5ce7] to-[#0a0a2e]",
                icon: <Bot size={48} />
              },
              {
                tag: "Automation",
                title: "The Complete Guide to Automating Your Small Business",
                excerpt: "How to identify, prioritize, and implement automations that save 20+ hours per week — without technical expertise.",
                link: "/blog/automate-small-business",
                gradient: "from-[#74b9ff] to-[#6c5ce7]",
                icon: <Zap size={48} />
              },
              {
                tag: "Launch",
                title: "The 2026 Startup Launch Checklist: What You Actually Need",
                excerpt: "Skip the noise. Here's what really matters when launching your startup, and what you can set up with AI from day one.",
                link: "/blog",
                gradient: "from-[#a29bfe] to-[#74b9ff]",
                icon: <Rocket size={48} />
              }
            ].map((post, i) => (
              <Link key={i} to={post.link} className="group bg-white rounded-[16px] border border-[#e8e8e8] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={cn("h-[200px] bg-gradient-to-br flex items-center justify-center text-white", post.gradient)}>
                  {post.icon}
                </div>
                <div className="p-8">
                  <span className="inline-block bg-[#6c5ce71a] text-[#6c5ce7] px-3 py-1 rounded-full text-[0.75rem] font-bold mb-4">{post.tag}</span>
                  <h3 className="text-[1.15rem] font-bold mb-3 group-hover:text-[#6c5ce7] transition-colors">{post.title}</h3>
                  <p className="text-[#555] text-[0.95rem] leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Contact CTA */}
      <section id="contact" className="section-padding brand-gradient text-white text-center">
        <div className="container-custom">
          <h2 className="text-[2.2rem] md:text-[2.5rem] font-[800] mb-6">Ready to Launch Smarter?</h2>
          <p className="text-lg md:text-[1.15rem] text-white/90 max-w-[500px] mx-auto mb-10 leading-relaxed">
            Book a free 30-minute consultation. We'll map out exactly what your business needs and how AI can accelerate your growth.
          </p>
          <Button asChild className="bg-white text-[#6c5ce7] hover:bg-white/90 px-10 py-7 rounded-[10px] font-bold text-lg shadow-xl transition-transform hover:-translate-y-1">
            <a href="https://calendly.com/calpir" target="_blank" rel="noopener noreferrer">Book Your Free Call</a>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;