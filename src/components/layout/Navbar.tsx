"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '01 // Services', href: '/services' },
    { name: '02 // About', href: '/about' },
    { name: '03 // Blog', href: '/blog' },
    { name: '04 // Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container-custom h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src="/Calpir.jpg" alt="Calpir" className="w-10 h-10 grayscale hover:grayscale-0 transition-all" />
          <span className="text-2xl font-black tracking-tighter uppercase">Calpir</span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="mono text-[0.75rem] font-bold text-white/50 hover:text-[#064e3b] transition-colors tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/#contact" className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#064e3b] hover:text-white transition-all">
            Initialize
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-8 gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="mono text-xl font-bold">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;