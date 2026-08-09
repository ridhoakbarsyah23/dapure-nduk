"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold w-fit"
          >
            Dimsum Premium Homemade
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-foreground">
            Hangat, Lembut, <br />
            <span className="text-primary relative inline-block">
              Menggugah Selera.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Rasakan kelembutan dimsum buatan rumah yang diolah dengan bahan pilihan terbaik,
            disajikan hangat khusus untuk memanjakan lidah Anda.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#menu" className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all shadow-sm flex items-center gap-2">
              Lihat Menu Dimsum
            </a>
            <a href="https://wa.me/6285283888916" target="_blank" rel="noreferrer" className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/30">
              Pesan via WhatsApp
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white/50">
            <img
              src="/gambar-dimsum.png"
              alt="Dimsum dan Mentai Premium Dapure Nduk"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
