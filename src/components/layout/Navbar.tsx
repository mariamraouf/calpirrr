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
    { name: 'AI Solutions', href: '/#ai' },
    { name: 'Packages', href: '/#packages' },
    { name: 'Process', href: '/#process' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b",
      scrolled ? "bg-white/95 backdrop-blur-md py-3 border-[#e8e8e8]" : "bg-transparent py-5 border-transparent"
    )}>
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0.5 text-2xl font-extrabold tracking-tight">
          <span className="text-[#0a0a0a]">cal</span>
          <span className="text-[#6c5ce7]">pir</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[0.95rem] font-medium text-[#1a1a2e] hover:text-[#6c5ce7] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white rounded-[8px] px-6 font-semibold transition-transform hover:-translate-y-0.5"
          >
            <Link to="/#contact" onClick={() => handleNavClick('/#contact')}>Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#1a1a2e]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e8e8e8] transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-lg font-medium py-2 border-b border-[#e8e8e8] last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white rounded-[8px] py-6 text-lg font-semibold mt-2"
          >
            <Link to="/#contact" onClick={() => handleNavClick('/#contact')}>Free Consultation</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;