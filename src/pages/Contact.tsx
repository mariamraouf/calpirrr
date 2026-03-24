"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    }, 1500);
  };

  const reveal = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-40 pb-24 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Side: Info */}
            <motion.div {...reveal} className="space-y-12">
              <div>
                <SectionLabel>Get in Touch</SectionLabel>
                <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#1a1a2e] leading-tight">
                  Let's Talk <br /> <span className="purple-gradient-text">Strategy.</span>
                </h1>
                <p className="text-xl text-[#555] leading-relaxed max-w-[500px]">
                  Have questions about our packages or need a custom solution? Our team is ready to help you scale.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[#6c5ce71a] text-[#6c5ce7] flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Email Us</div>
                    <a href="mailto:hello@calpir.com" className="text-xl font-bold text-[#1a1a2e] hover:text-[#6c5ce7] transition-colors">hello@calpir.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[#6c5ce71a] text-[#6c5ce7] flex items-center justify-center shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Live Chat</div>
                    <p className="text-xl font-bold text-[#1a1a2e]">Available Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[#6c5ce71a] text-[#6c5ce7] flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Headquarters</div>
                    <p className="text-xl font-bold text-[#1a1a2e]">Austin, Texas · Remote Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Trusted by founders from</p>
                <div className="flex flex-wrap gap-8 opacity-30 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" className="h-6" />
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div 
              {...reveal} 
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-2xl shadow-[#6c5ce710]"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#1a1a2e]">Full Name</label>
                      <Input required placeholder="John Doe" className="h-14 rounded-xl border-gray-100 focus:border-[#6c5ce7] focus:ring-[#6c5ce710]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#1a1a2e]">Email Address</label>
                      <Input required type="email" placeholder="john@company.com" className="h-14 rounded-xl border-gray-100 focus:border-[#6c5ce7] focus:ring-[#6c5ce710]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1a2e]">Company Website</label>
                    <Input placeholder="https://yourcompany.com" className="h-14 rounded-xl border-gray-100 focus:border-[#6c5ce7] focus:ring-[#6c5ce710]" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1a1a2e]">How can we help?</label>
                    <Textarea required placeholder="Tell us about your project and goals..." className="min-h-[150px] rounded-xl border-gray-100 focus:border-[#6c5ce7] focus:ring-[#6c5ce710] resize-none" />
                  </div>

                  <Button 
                    disabled={isSubmitting}
                    className="w-full bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white py-8 rounded-xl font-bold text-lg btn-hover shadow-xl shadow-[#6c5ce733]"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="ml-2" size={18} /></>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-gray-400">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              ) : (
                <div className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1a1a2e]">Message Received!</h2>
                  <p className="text-[#555] max-w-[300px] mx-auto">
                    Thanks for reaching out. One of our strategy experts will contact you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-8 rounded-xl">
                    Send another message
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;