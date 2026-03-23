"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, RefreshCcw, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
        { label: "Professional Services (consulting, agency, etc.)", value: "services" },
        { label: "Local / Service-based (cleaning, medical, etc.)", value: "local" }
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
      title: "How many hours per week do you spend on repetitive manual tasks?",
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
        { label: "Automated workflows", value: "automation" },
        { label: "AI chatbot or agent", value: "ai" },
        { label: "None of the above", value: "none" }
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
        { label: "I know I need AI but don't know where to start", value: "ai" }
      ]
    },
    {
      id: 'budget',
      title: "What's your budget range for getting set up?",
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
    const score = answers.stage === 'pre-launch' ? 2 : answers.stage === 'just-launched' ? 4 : answers.stage === 'growing' ? 7 : 9;
    const wastedMoney = (answers.hours || 0) * 50 * 4;
    
    let pkg = "Starter";
    if (answers.budget === 'growth' || answers.stage === 'growing') pkg = "Growth";
    if (answers.budget === 'ultimate' || answers.budget === 'enterprise' || answers.stage === 'established') pkg = "Ultimate";

    return { score, wastedMoney, pkg };
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="container-custom max-w-[800px]">
          {!showResults ? (
            <div>
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[#6c5ce7] font-bold uppercase tracking-widest text-xs">Question {step + 1} of {questions.length}</span>
                  <span className="text-gray-400 font-bold text-xs">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <Progress value={((step + 1) / questions.length) * 100} className="h-2 bg-gray-100" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">{questions[step].title}</h1>
                  <div className="grid grid-cols-1 gap-4">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value)}
                        className={cn(
                          "p-6 text-left rounded-[16px] border-2 transition-all font-bold text-lg",
                          (questions[step].multi ? (answers[questions[step].id] || []).includes(opt.value) : answers[questions[step].id] === opt.value)
                            ? "border-[#6c5ce7] bg-[#6c5ce705] text-[#6c5ce7]"
                            : "border-[#e8e8e8] hover:border-[#6c5ce733] hover:bg-[#f8f9fa]"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {questions[step].multi && (
                    <Button 
                      onClick={() => setStep(step + 1)}
                      className="w-full bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white py-8 rounded-[10px] font-bold text-xl"
                    >
                      Continue <ArrowRight className="ml-2" />
                    </Button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Assessment Results</h1>
                <p className="text-lg text-[#555]">Based on your answers, here is your personalized growth roadmap.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[16px] border border-[#e8e8e8] shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Business Stage Score</div>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-6xl font-black text-[#6c5ce7]">{results.score}</span>
                    <span className="text-2xl font-bold text-gray-300 mb-2">/ 10</span>
                  </div>
                  <p className="text-sm text-[#555] font-medium">
                    {results.score <= 3 ? "Starting from scratch. You need a solid foundation." : 
                     results.score <= 6 ? "Foundation needs work. You're ready to professionalize." : 
                     "Good foundation. You're ready to scale with AI."}
                  </p>
                </div>

                <div className="bg-white p-8 rounded-[16px] border border-[#e8e8e8] shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Estimated Monthly Waste</div>
                  <div className="text-5xl font-black text-red-500 mb-4">${results.wastedMoney.toLocaleString()}</div>
                  <p className="text-sm text-[#555] font-medium">
                    This is the estimated cost of manual tasks that could be automated.
                  </p>
                </div>
              </div>

              <div className="bg-[#f8f9fa] p-10 rounded-[24px] border border-[#e8e8e8]">
                <h3 className="text-2xl font-bold mb-8">Recommended Package: <span className="text-[#6c5ce7]">{results.pkg}</span></h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-[#6c5ce7] shrink-0" />
                    <div>
                      <div className="font-bold mb-1">Immediate Action Item</div>
                      <p className="text-sm text-[#555]">
                        {answers.bottleneck === 'visibility' ? "Get a professional, SEO-optimized website live in 7 days." :
                         answers.bottleneck === 'conversion' ? "Deploy an AI lead qualification chatbot on your site." :
                         "Run an automation audit to identify highest-impact opportunities."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white py-8 rounded-[10px] font-bold text-xl btn-hover">
                  <Link to="/#contact">Book Free Consultation</Link>
                </Button>
                <Button variant="outline" className="flex-1 border-[#e8e8e8] py-8 rounded-[10px] font-bold text-xl" onClick={() => window.location.reload()}>
                  <RefreshCcw className="mr-2" /> Retake Assessment
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