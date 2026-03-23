"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Globe, BarChart3, Megaphone, Settings, 
  Bot, Zap, Brain, CheckCircle2, ArrowRight 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import NotFound from './NotFound';

const ServiceDetail = () => {
  const { slug } = useParams();

  const servicesData: any = {
    'website-development': {
      title: "Website & Branding",
      tagline: "Your digital foundation, designed to convert",
      icon: <Globe size={48} />,
      color: "bg-purple-50 text-purple-600",
      included: [
        "Custom website design (mobile-first, responsive)",
        "Up to 5 pages (Starter) or 10 pages (Ultimate)",
        "Professional logo design",
        "Brand identity kit (colors, fonts, guidelines)",
        "UI/UX design with conversion-optimized layouts",
        "Contact forms and lead capture integration",
        "Speed optimization and performance tuning",
        "SSL certificate and security setup",
        "Analytics tracking installation (GA4)",
        "SEO foundation (meta tags, sitemap, schema markup)"
      ],
      who: "Pre-launch founders needing their first website | Existing businesses with outdated sites | Startups rebranding",
      get: "Full website source code, Brand guidelines PDF, Logo source files, Analytics access"
    },
    'crm-sales': {
      title: "CRM & Sales System Setup",
      tagline: "Never lose a lead again",
      icon: <BarChart3 size={48} />,
      color: "bg-blue-50 text-blue-600",
      included: [
        "CRM platform setup (HubSpot, GoHighLevel, or best fit)",
        "Sales pipeline configuration with custom stages",
        "Contact management and segmentation",
        "Lead scoring and qualification rules",
        "Automated follow-up email sequences",
        "Meeting/appointment scheduling integration",
        "Deal tracking and forecasting dashboards",
        "Customer data migration from existing tools",
        "Team permissions and workflow setup",
        "Integration with website forms and chatbots"
      ],
      who: "Startups managing leads in spreadsheets | Businesses with messy CRMs | Sales teams drowning in manual work",
      get: "Configured CRM account, Sales pipeline map, Automated sequence templates, Team training"
    },
    'ai-agents': {
      title: "AI Agent Development",
      tagline: "Your 24/7 team members that never sleep",
      icon: <Bot size={48} />,
      color: "bg-violet-50 text-violet-600",
      included: [
        "Custom AI customer support chatbot (trained on YOUR data)",
        "Lead qualification agent (asks questions, scores, books meetings)",
        "Appointment scheduling bot connected to your calendar",
        "Internal knowledge base assistant for your team",
        "Multi-channel deployment (website, WhatsApp, email)",
        "AI agent training on your FAQs and processes",
        "Escalation rules — AI handles 70-80%, routes rest to humans",
        "Conversation analytics dashboard",
        "Monthly optimization and retraining",
        "Integration with your CRM"
      ],
      who: "Businesses losing leads due to slow response | Support teams overwhelmed | Companies wanting 24/7 service",
      get: "Deployed AI agents, Training data set, Analytics dashboard, Retraining schedule"
    },
    'ai-automation': {
      title: "Workflow Automation & AI Integration",
      tagline: "Eliminate the work that's keeping you from growing",
      icon: <Zap size={48} />,
      color: "bg-cyan-50 text-cyan-600",
      included: [
        "Automation audit (identify highest-impact opportunities)",
        "CRM workflow automation (lead routing, follow-ups)",
        "Email sequence automation (welcome, nurture, re-engagement)",
        "Invoice and payment processing automation",
        "Data sync between all your tools",
        "Social media scheduling automation",
        "Reporting automation (weekly/monthly reports)",
        "Custom Zapier/Make/n8n workflow builds",
        "Cross-platform integrations",
        "Documentation of all automations"
      ],
      who: "Owners spending 15+ hours/week on manual tasks | Teams copying data manually | Anyone seeking a 'better way'",
      get: "Active automated workflows, Integration map, Documentation, Maintenance guide"
    }
  };

  const data = servicesData[slug || ''];

  if (!data) return <NotFound />;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-24 px-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className={cn("w-24 h-24 rounded-[24px] flex items-center justify-center shrink-0", data.color)}>
              {data.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#1a1a2e]">{data.title}</h1>
              <p className="text-xl md:text-2xl text-[#6c5ce7] font-medium">{data.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-8">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.included.map((item: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="text-[#6c5ce7] shrink-0" />
                      <span className="text-[#555] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Who This Is For</h2>
                <p className="text-lg text-[#555] leading-relaxed">{data.who}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">What You Get</h2>
                <p className="text-lg text-[#555] leading-relaxed">{data.get}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#f8f9fa] p-10 rounded-[30px] border border-gray-100 sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
                <p className="text-[#555] mb-8">Book a free 30-minute consultation to discuss your specific needs.</p>
                <Button asChild className="w-full bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white py-7 rounded-[12px] font-bold text-lg">
                  <Link to="/#contact">Book a Consultation</Link>
                </Button>
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

export default ServiceDetail;