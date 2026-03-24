"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, RefreshCcw, Share2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'stage',
      title: "What stage is your business at?",
      options: [
        { label: "Pre-launch — I have an idea but haven't started yet", value: "pre-launch" },
        { label: "Just launched — Under 6 months, getting first customers", value: "just-launched" },
        { label: "Growing — 6 months to 2 years, need to scale systems", value: "growing" },
        { label: "Established — 2+ years, looking to optimize and add AI", value: "established" }
      ]
    },
    {
      id: 'industry',
      title: "What's your industry/niche?",
      options: [
        { label: "E-commerce / Product-based", value: "ecommerce" },
        { label: "SaaS / Tech", value: "saas" },
        { label: "Professional Services (consulting, agency, legal, etc.)", value: "services" },
        { label: "Local / Service-based (cleaning, landscaping, medical, etc.)", value: "local" }
      ]
    },
    {
      id: 'website',
      title: "Do you have a website?",
      options: [
        { label: "No website yet", value: "none" },
        { label: "Yes, but it's basic/outdated and doesn't convert", value: "outdated" },
        { label: "Yes, it's decent but needs improvement", value: "decent" },
        { label: "Yes, it's professional and optimized", value: "pro" }
      ]
    },
    {
      id: 'crm',
      title: "How do you currently manage leads and customers?",
      options: [
        { label: "Spreadsheets, notes, or my head", value: "manual" },
        { label: "A CRM I set up myself (but it's a mess)", value: "messy" },
        { label: "A CRM that's properly configured", value: "pro" },
        { label: "I don't really track leads", value: "none" }
      ]
    },
    {
      id: 'hours',
      title: "How many hours per week do you or your team spend on repetitive manual tasks?",
      options: [
        { label: "5 or less", value: 5 },
        { label: "5-15 hours", value: 15 },
        { label: "15-25 hours", value: 25 },
        { label: "25+ hours", value: 40 }
      ]
    },
    {
      id: 'systems',
      title: "Which of these do you currently have set up?",
      multi: true,
      options: [
        { label: "Professional website", value: "website" },
        { label: "CRM system", value: "crm" },
        { label: "Email marketing", value: "email" },
        { label: "Social media presence", value: "social" },
        { label: "Automated workflows", value: "automation" },
        { label: "AI chatbot or agent", value: "ai" },
        { label: "Analytics dashboard", value: "analytics" },
        { label: "SOPs / documented processes", value: "sops" }
      ]
    },
    {
      id: 'bottleneck',
      title: "What's your biggest bottleneck right now?",
      options: [
        { label: "Getting found online (no visibility)", value: "visibility" },
        { label: "Converting visitors into leads/customers", value: "conversion" },
        { label: "Managing leads and follow-ups", value: "leads" },
        { label: "Too much manual/repetitive work", value: "manual" },
        { label: "No systems — doing everything ad hoc", value: "systems" },
        { label: "I know I need AI but don't know where to start", value: "ai" }
      ]
    },
    {
      id: 'budget',
      title: "What's your budget range for getting your business properly set up?",
      options: [
        { label: "Under $1,000", value: "low" },
        { label: "$1,000 - $2,500", value: "starter" },
        { label: "$2,500 - $5,000", value: "growth" },
        { label: "$5,000 - $10,000", value: "ultimate" },
        { label: "$10,000+", value: "enterprise" }
      ]
    }
  ];

  const handleAnswer = (value: any) => {
    const currentQ = questions[step];
    if (currentQ.multi) {
      const currentAnswers = answers[currentQ.id] || [];
      const newAnswers = currentAnswers.includes(value) 
        ? currentAnswers.filter((a: any) => a !== value)
        : [...currentAnswers, value];
      setAnswers({ ...answers, [currentQ.id]: newAnswers });
    } else {
      setAnswers({ ...answers, [currentQ.id]: value });
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateResults = () => {
    // Score calculation
    let score = 0;
    if (answers.stage === 'pre-launch') score += 1;
    else if (answers.stage === 'just-launched') score += 3;
    else if (answers.stage === 'growing') score += 6;
    else score += 8;

    if (answers.website === 'pro') score += 1;
    if (answers.crm === 'pro') score += 1;

    // Wasted money
    const wastedMoney = (answers.hours || 0) * 50 * 4;
    
    // Package recommendation
    let pkg = "Starter";
    if (answers.budget === 'growth' || answers.stage === 'growing') pkg = "Growth";
    if (answers.budget === 'ultimate' || answers.budget === 'enterprise' || answers.stage === 'established') pkg = "Ultimate";

    // Missing systems
    const allSystems = ['website', 'crm', 'email', 'social', 'automation', 'ai', 'analytics', 'sops'];
    const missing = allSystems.filter(s => !(answers.systems || []).includes(s));

    return { score, wastedMoney, pkg, missing };
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <main className="pt-48 pb-24 px-6">
        <div className="container-custom max-w-[900px]">
          {!showResults ? (
            <div>
              <div className="mb-16">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[#064e3b] mono font-bold uppercase tracking-widest text-xs">Question {step + 1} of {questions.length}</span>
                  <span className="text-white/40 mono font-bold text-xs">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <Progress value={((step + 1) / questions.length) * 100} className="h-1 bg-white/10" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{questions[step].title}</h1>
                  <div className="grid grid-cols-1 gap-4">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value)}
                        className={cn(
                          "p-8 text-left border transition-all font-bold text-xl uppercase tracking-tighter",
                          (questions[step].multi ? (answers[questions[step].id] || []).includes(opt.value) : answers[questions[step].id] === opt.value)
                            ? "border-[#064e3b] bg-[#064e3b]/10 text-[#064e3b]"
                            : "border-white/10 bg-white/5 hover:border-[#064e3b]/50 hover:bg-white/10"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {questions[step].multi && (
                    <Button 
                      onClick={() => setStep(step + 1)}
                      className="w-full bg-[#064e3b] hover:bg-[#053e2f] text-white py-10 rounded-none font-black text-2xl uppercase tracking-tighter"
                    >
                      Continue <ArrowRight className="ml-2" />
                    </Button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20">
              <div className="text-center">
                <SectionLabel>Assessment Complete</SectionLabel>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">Your Growth <br /> Roadmap.</h1>
                <p className="text-xl mono text-white/40">Based on your answers, here is your personalized business analysis.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/10 p-12 bg-white/5">
                  <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-6">Business Stage Score</div>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-8xl font-black text-[#064e3b]">{results.score}</span>
                    <span className="text-3xl font-black text-white/20 mb-4">/ 10</span>
                  </div>
                  <p className="mono text-sm text-white/60 leading-relaxed">
                    {results.score <= 3 ? "Starting from scratch. You need a solid foundation." : 
                     results.score <= 6 ? "Foundation needs work. You're ready to professionalize." : 
                     "Good foundation. You're ready to scale with AI."}
                  </p>
                </div>

                <div className="border border-white/10 p-12 bg-white/5">
                  <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-6">Estimated Monthly Waste</div>
                  <div className="text-7xl font-black text-red-900 mb-6">${results.wastedMoney.toLocaleString()}</div>
                  <p className="mono text-sm text-white/60 leading-relaxed">
                    This is the estimated cost of manual tasks that could be automated. {results.wastedMoney > 2000 ? "That's essentially a part-time employee's worth of wasted time." : ""}
                  </p>
                </div>
              </div>

              <div className="border border-white/10 p-12 bg-white/5">
                <h3 className="text-3xl mb-12">Your Missing Systems</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {results.missing.map((m) => (
                    <div key={m} className="flex gap-4">
                      <AlertTriangle className="text-red-900 shrink-0" size={20} />
                      <div>
                        <div className="font-black uppercase text-sm mb-1">{m.replace('-', ' ')}</div>
                        <p className="mono text-[0.7rem] text-white/40">
                          {m === 'website' && "You're invisible to 87% of customers who research online before buying."}
                          {m === 'crm' && "You're losing an estimated 30-40% of leads that fall through the cracks."}
                          {m === 'email' && "You're leaving the most profitable marketing channel on the table."}
                          {m === 'automation' && "Your team is doing work that machines could handle in seconds."}
                          {m === 'ai' && "Your competitors who use AI respond 100x faster and convert at 2x the rate."}
                          {m === 'analytics' && "You're making decisions based on gut feeling instead of data."}
                          {m === 'sops' && "Every time someone leaves, your knowledge walks out the door."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#064e3b] p-16 text-center">
                <h3 className="text-4xl md:text-6xl mb-8">Recommended Package: <br /> <span className="text-white">{results.pkg}</span></h3>
                <p className="text-xl mono mb-12 opacity-80">
                  {answers.bottleneck === 'visibility' ? "Get a professional, SEO-optimized website live in 7 days." :
                   answers.bottleneck === 'conversion' ? "Deploy an AI lead qualification chatbot on your site." :
                   "Run an automation audit to identify highest-impact opportunities."}
                </p>
                <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all">
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 border-white/10 py-8 rounded-none font-black text-xl uppercase tracking-tighter" onClick={() => window.location.reload()}>
                  <RefreshCcw className="mr-2" /> Retake Assessment
                </Button>
                <Button variant="outline" className="flex-1 border-white/10 py-8 rounded-none font-black text-xl uppercase tracking-tighter">
                  <Share2 className="mr-2" /> Share Results
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Assessment;