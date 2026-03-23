"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Pricing', href: '/#packages' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      scrolled ? "bg-white/80 backdrop-blur-xl py-4 border-b border-black/5" : "bg-transparent py-6 border-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#064e3b] rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden">
            <img src="/Calpir.jpg" alt="Calpir Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-[#064e3b]">Calpir</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[0.9rem] font-semibold text-black/60 hover:text-[#064e3b] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-[#064e3b] hover:bg-[#053f30] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#064e3b]/10"
          >
            <Link to="/#contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-[#064e3b] w-full py-7 text-lg rounded-xl">
            <Link to="/#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;