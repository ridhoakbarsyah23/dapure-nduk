"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Gambar. Pastikan Anda meletakkan file logo yang Anda unggah dengan nama "logo.png" di dalam folder "public" */}
          <img src="/logo.png" alt="Logo Dapure Nduk" className="h-12 w-auto" />
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="#menu" className="text-sm font-medium hover:text-primary transition-colors">Menu Dimsum</Link>
          <Link href="#tentang" className="text-sm font-medium hover:text-primary transition-colors">Tentang Kami</Link>
          <Link href="#testimoni" className="text-sm font-medium hover:text-primary transition-colors">Testimoni</Link>
        </nav>

        <div className="flex items-center gap-4">

          <button className="md:hidden p-2 hover:bg-muted rounded-full transition-colors">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
