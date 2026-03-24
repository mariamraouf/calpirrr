"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className="min-h-screen bg-black bg-grid">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 border-b border-white/10">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Transmission</SectionLabel>
            <h1 className="text-6xl md:text-[8rem] leading-[0.85] mb-16 font-black uppercase tracking-tighter">
              Get in <br /> <span className="text-[#064e3b]">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-12">
              <p className="text-2xl mono text-white/60 leading-tight">
                Ready to deploy your infrastructure? Send us your requirements and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-[#064e3b]"><Mail size={32} /></div>
                  <div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Email</div>
                    <div className="text-xl font-black">HELLO@CALPIR.COM</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-[#064e3b]"><MapPin size={32} /></div>
                  <div>
                    <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Location</div>
                    <div className="text-xl font-black">AUSTIN, TX // REMOTE</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-12 bg-white/5 backdrop-blur-sm">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Name</label>
                    <Input className="bg-black border-white/10 rounded-none h-14 focus:border-[#064e3b]" />
                  </div>
                  <div className="space-y-2">
                    <label className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Email</label>
                    <Input className="bg-black border-white/10 rounded-none h-14 focus:border-[#064e3b]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="mono text-[0.6rem] uppercase tracking-widest text-white/40">Message</label>
                  <Textarea className="bg-black border-white/10 rounded-none min-h-[150px] focus:border-[#064e3b]" />
                </div>
                <Button className="w-full bg-[#064e3b] hover:bg-[#053e2f] text-white py-8 rounded-none font-black text-xl uppercase tracking-tighter">
                  Send Message <Send className="ml-2" size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;