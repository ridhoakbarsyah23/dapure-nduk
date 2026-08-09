"use client";

import { motion } from "framer-motion";
import { MoreHorizontal, X } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    username: "zulfikartito",
    time: "2h",
    text: "Enak banget! Thank you @lenyrahayu @dapure.nduk | Langsung diantar loh!",
    image: "/images/testi1.jpg", // Tempat untuk gambar IG story 1
  },
  {
    id: 2,
    username: "jehanauda",
    time: "14h",
    text: "Orang kabupaten Tangerang mesti banget coba, lembut dan ga pelit salmonnya. Mentainya ga bikin eneggg. Cuss order di @dapure.nduk 🙌\n\nUdah dimakan setengah lupa difoto saking yummy nya, duh mao pengsan",
    image: "/images/testi2.jpg", // Tempat untuk gambar IG story 2
  },
  {
    id: 3,
    username: "Indra Helmy",
    time: "16.35",
    text: "PO BATCH 1 - Enjoy your food! Testimoni Mentai @dapure.nduk",
    image: "/images/testi3.jpg", // Tempat untuk gambar IG story 3
  },
];

export function TestimonialSection() {
  return (
    <section id="testimoni" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-4"
          >
            Kata <span className="text-primary">Pelanggan Kami</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            Intip apa kata mereka yang sudah mencoba kelezatan dimsum & mentai dari Dapure Nduk di Instagram.
          </motion.p>
          <motion.a
            href="https://www.instagram.com/stories/highlights/18194472499004005/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Lihat Highlight Testimoni IG
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[9/16] bg-muted rounded-2xl overflow-hidden shadow-xl border border-border group"
            >
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-secondary/20 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                 <span className="text-muted-foreground text-sm px-4 text-center">
                   (Simpan gambar IG di public/images/{`testi${testi.id}.jpg`})
                 </span>
                 {/* Jika gambar sudah ditambahkan di public folder, bisa gunakan tag img ini */}
                 <img src={testi.image} alt="Testimoni" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

              {/* IG Story Header */}
              <div className="absolute top-0 left-0 right-0 p-4">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/30 rounded-full mb-4 overflow-hidden">
                  <div className="h-full bg-white w-full rounded-full" />
                </div>
                
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold border border-white/50">
                      {testi.username.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-sm drop-shadow-md">{testi.username}</span>
                    <span className="text-xs text-white/70 drop-shadow-md">{testi.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MoreHorizontal className="w-5 h-5 opacity-80" />
                    <X className="w-6 h-6 opacity-80" />
                  </div>
                </div>
              </div>

              {/* IG Story Content / Text */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <p className="text-white text-center font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
                  {testi.text}
                </p>
              </div>

              {/* IG Story Footer / Reply Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="w-full py-3 px-4 rounded-full border border-white/40 flex items-center justify-between text-white/70 text-sm backdrop-blur-sm">
                  <span>Send message</span>
                  <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">
                    <span className="text-[10px]">❤</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
