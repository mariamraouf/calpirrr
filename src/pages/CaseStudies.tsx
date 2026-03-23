"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { CheckCircle2, Quote } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      company: "NovaBright",
      role: "E-commerce Startup",
      challenge: "Sarah had a product idea and a Shopify store she'd been tinkering with for 3 months. Disconnected tools, no CRM, losing leads.",
      results: [
        "First paying customers within 2 weeks",
        "AI chatbot handles 75% of inquiries",
        "Email automation generates 23% of revenue",
        "15 hours/week saved"
      ],
      quote: "What would have taken us 3 months of vendor management happened in a week and a half.",
      author: "Sarah K., Founder"
    },
    {
      company: "UrbanStack",
      role: "B2B SaaS",
      challenge: "Marcus had a working product but terrible sales infrastructure. Leads came in through 4 different channels, nothing was tracked.",
      results: [
        "Sales conversion rate up 40%",
        "Support costs cut in half",
        "Response time under 30 seconds",
        "Zero hours/week on data entry"
      ],
      quote: "The AI chatbot they set up handles 75% of our customer inquiries now. Our support costs dropped by half.",
      author: "Marcus T., CEO"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="hero-gradient pt-40 pb-24 px-6 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-[#555] max-w-[800px] mx-auto">
            Real results from real businesses. See how we've helped founders launch faster and automate smarter.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container-custom space-y-24">
          {cases.map((c, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[#f8f9fa] p-12 rounded-[40px] border border-gray-100">
                <div className="text-[#6c5ce7] font-bold uppercase tracking-widest text-sm mb-4">{c.role}</div>
                <h2 className="text-4xl font-bold mb-8">{c.company}</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold mb-2">The Challenge</h4>
                    <p className="text-[#555] leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">The Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {c.results.map((r, j) => (
                        <div key={j} className="flex gap-3">
                          <CheckCircle2 className="text-[#6c5ce7] shrink-0" size={20} />
                          <span className="text-sm font-medium text-[#555]">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <Quote size={48} className="text-[#6c5ce71a]" />
                <p className="text-2xl font-medium italic leading-relaxed text-[#1a1a2e]">"{c.quote}"</p>
                <div className="font-bold text-[#6c5ce7]">— {c.author}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudies;