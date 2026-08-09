"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Utensils, Info, Star } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for navbar height
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }} 
          className="flex items-center gap-2"
        >
          {/* Logo Gambar */}
          <img src="/logo.png" alt="Logo Dapure Nduk" className="h-12 w-auto" />
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <a href="#menu" onClick={(e) => handleScroll(e, 'menu')} className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5">
            <Utensils className="w-4 h-4" /> Menu Dimsum
          </a>
          <a href="#tentang" onClick={(e) => handleScroll(e, 'tentang')} className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5">
            <Info className="w-4 h-4" /> Tentang Kami
          </a>
          <a href="#testimoni" onClick={(e) => handleScroll(e, 'testimoni')} className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5">
            <Star className="w-4 h-4" /> Testimoni
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background border-b border-border/50 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <a href="#menu" onClick={(e) => handleScroll(e, 'menu')} className="flex items-center gap-3 text-base font-medium text-foreground hover:text-primary transition-colors">
                <Utensils className="w-5 h-5" /> Menu Dimsum
              </a>
              <a href="#tentang" onClick={(e) => handleScroll(e, 'tentang')} className="flex items-center gap-3 text-base font-medium text-foreground hover:text-primary transition-colors">
                <Info className="w-5 h-5" /> Tentang Kami
              </a>
              <a href="#testimoni" onClick={(e) => handleScroll(e, 'testimoni')} className="flex items-center gap-3 text-base font-medium text-foreground hover:text-primary transition-colors">
                <Star className="w-5 h-5" /> Testimoni
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
