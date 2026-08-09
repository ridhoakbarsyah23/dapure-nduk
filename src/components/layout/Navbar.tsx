"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="flex items-center gap-2"
        >
          {/* Logo Gambar. Pastikan Anda meletakkan file logo yang Anda unggah dengan nama "logo.png" di dalam folder "public" */}
          <img src="/logo.png" alt="Logo Dapure Nduk" className="h-12 w-auto" />
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <a href="#menu" className="text-sm font-medium hover:text-primary transition-colors">Menu Dimsum</a>
          <a href="#tentang" className="text-sm font-medium hover:text-primary transition-colors">Tentang Kami</a>
          <a href="#testimoni" className="text-sm font-medium hover:text-primary transition-colors">Testimoni</a>
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
            className="md:hidden bg-background border-b border-border/50 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <a onClick={() => setIsOpen(false)} href="#menu" className="block text-base font-medium text-foreground hover:text-primary transition-colors">Menu Dimsum</a>
              <a onClick={() => setIsOpen(false)} href="#tentang" className="block text-base font-medium text-foreground hover:text-primary transition-colors">Tentang Kami</a>
              <a onClick={() => setIsOpen(false)} href="#testimoni" className="block text-base font-medium text-foreground hover:text-primary transition-colors">Testimoni</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
