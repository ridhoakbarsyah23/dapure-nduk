"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const MENU_CATEGORIES = [
  {
    category: "Dimsum Mentai & Original",
    items: [
      {
        id: "d1",
        name: "Dimsum Mentai Nyemil",
        description: "5 pcs dimsum full ayam yang juicy dengan bumbu spesial dan premium menjadi sempurna ditorch dengan saus mentai yang creamy dan full tobiko.",
        price: "Rp 35.000",
        image: "/images/dimsum-mentai.jpg", // Ganti dengan nama file gambar Anda di folder public/images
        emoji: "🥟",
      },
      {
        id: "d2",
        name: "Dimsum Mix",
        description: "6 pcs dimsum full ayam menggunakan bumbu spesial (2 pcs saus mentai creamy, 2 pcs mozarella, 2 pcs original).",
        price: "Rp 38.000",
        image: "/images/dimsum-mix.jpg",
        emoji: "🍱",
      },
      {
        id: "d3",
        name: "Dimsum Original",
        description: "Dimsum full ayam yang juicy dengan bumbu spesial. (Minimal 5 pcs, FREE saus dimsum original).",
        price: "Rp 27.000",
        image: "/images/dimsum-original.jpg",
        emoji: "🥢",
      },
    ]
  },
  {
    category: "Fresh Homemade Mentai",
    items: [
      {
        id: "m1",
        name: "Salmon Kani Mentai Rice",
        description: "Nasi putih dengan bumbu spesial, topping kani (crabstick) & fresh salmon ditorch dengan saus mentai creamy & full tobiko.",
        price: "Rp 58.000",
        image: "/images/salmon-mentai.jpg",
        emoji: "🍣",
      },
      {
        id: "m2",
        name: "Salmon Kani Mentai Shirataki",
        description: "Mie shirataki dengan bumbu spesial, topping kani (crabstick) & fresh salmon ditorch dengan saus mentai creamy & full tobiko.",
        price: "Rp 68.000",
        image: "/images/salmon-shirataki.jpg",
        emoji: "🍜",
      },
      {
        id: "m3",
        name: "Beef Kani Mentai Rice",
        description: "Nasi putih, topping kani & beef teriyaki juicy ditorch dengan saus mentai creamy.",
        price: "Rp 53.000",
        image: "/images/beef-mentai.jpg",
        emoji: "🥩",
      },
      {
        id: "m4",
        name: "Beef Kani Mentai Shirataki",
        description: "Mie shirataki, topping kani & beef teriyaki juicy ditorch dengan saus mentai creamy.",
        price: "Rp 63.000",
        image: "/images/beef-shirataki.jpg",
        emoji: "🍜",
      },
      {
        id: "m5",
        name: "Chicken Kani Mentai Rice",
        description: "Nasi putih, topping kani & chicken katsu ditorch dengan saus mentai creamy.",
        price: "Rp 38.000",
        image: "/images/chicken-mentai.jpg",
        emoji: "🍗",
      },
      {
        id: "m6",
        name: "Chicken Kani Mentai Shirataki",
        description: "Mie shirataki, topping kani & chicken katsu ditorch dengan saus mentai creamy.",
        price: "Rp 48.000",
        image: "/images/chicken-shirataki.jpg",
        emoji: "🍜",
      },
    ]
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-4"
          >
            Food <span className="text-primary">Menu</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Fresh Homemade Mentai & Dimsum. Nikmati kelezatan saus mentai creamy dengan tobiko melimpah, serta dimsum ayam juicy kami. (Tersedia Extra Mozarella +5k)
          </motion.p>
        </div>

        {MENU_CATEGORIES.map((category, catIndex) => (
          <div key={category.category} className="mb-16 last:mb-0">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-secondary mb-8 border-b-2 border-secondary/20 pb-2 inline-block"
            >
              {category.category}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="bg-background rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border border-border/50 group flex flex-col h-full"
                >
                  <div className="aspect-video bg-secondary/10 rounded-2xl mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
                    {/* Placeholder for images. Change the 'image' field above when you have the actual images in public/images/ */}
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                       <span className="opacity-50">{item.emoji}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors leading-tight">{item.name}</h3>
                    <span className="font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <a 
                    href={`https://wa.me/6285283888916?text=Halo%20Dapure%20Nduk,%20saya%20mau%20pesan%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl border-2 border-primary text-primary font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all mt-auto"
                  >
                    <Plus className="w-4 h-4" /> Order Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
