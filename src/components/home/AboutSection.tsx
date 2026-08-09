"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "100% Halal & Tanpa Pengawet",
  "Daging Segar & Isian Melimpah",
  "Saus Mentai Creamy Anti-Eneg",
  "Selalu Fresh (Dibuat Setiap Hari)",
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-video lg:aspect-square bg-secondary/10 rounded-[3rem] p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/10" />
              <div className="text-center z-10">
                <span className="text-8xl">🤤</span>
                <p className="mt-6 font-serif text-2xl text-foreground font-semibold">100% Homemade Premium</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground leading-tight">
              Kelezatan <span className="text-primary">Mentai & Dimsum</span> dalam Tiap Suapan
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dapure Nduk adalah spesialis sajian Dimsum dan Mentai Rice/Shirataki berkualitas premium. Kami pantang pelit soal rasa maupun isian. Setiap porsi menjanjikan daging yang juicy, dipadukan dengan saus mentai super creamy plus tobiko melimpah yang dijamin bikin nagih!
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Dibuat dari dapur rumah sendiri setiap harinya tanpa campuran bahan pengawet, sehingga selalu <i>fresh</i> dan aman dinikmati kapan saja. Cobain sekarang, pasti mau nambah lagi!
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
