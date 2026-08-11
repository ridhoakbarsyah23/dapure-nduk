import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dapure Nduk | Premium Dimsum & Mentai Homemade",
  description: "Dapure Nduk menyajikan dimsum dan mentai premium buatan rumah yang hangat, lembut, dan menggugah selera. Dibuat dengan 100% bahan pilihan segar.",
  keywords: ["dimsum", "mentai", "dapure nduk", "dimsum tangerang", "dimsum premium", "mentai rice", "jual dimsum online", "halal"],
  authors: [{ name: "Dapure Nduk" }],
  openGraph: {
    title: "Dapure Nduk | Premium Dimsum & Mentai",
    description: "Rasakan kelembutan dimsum buatan rumah yang diolah dengan bahan pilihan terbaik. Pesan sekarang secara online!",
    url: "https://dapure-nduk.vercel.app/", // Bisa disesuaikan nanti dengan domain asli
    siteName: "Dapure Nduk",
    images: [
      {
        url: "/gambar-dimsum.png", // Menggunakan gambar dimsum yang sudah ada sebagai thumbnail
        width: 1200,
        height: 630,
        alt: "Sajian Premium Dapure Nduk",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dapure Nduk | Premium Dimsum & Mentai",
    description: "Sajian dimsum hangat, lembut, dan menggugah selera tanpa bahan pengawet.",
    images: ["/gambar-dimsum.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Dapure Nduk",
    "image": "https://dapure-nduk.vercel.app/gambar-dimsum.png",
    "description": "Sajian Dimsum dan Mentai Rice premium buatan rumah. 100% tanpa bahan pengawet dan halal.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Citra Raya Graha Indira Jl. Kana 1 Blok K 12 Nomer 15",
      "addressLocality": "Panongan",
      "addressRegion": "Banten",
      "addressCountry": "ID"
    },
    "telephone": "+6285283888916",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "url": "https://dapure-nduk.vercel.app/"
  };

  return (
    <html lang="id" className={`scroll-smooth scroll-pt-20 ${plusJakarta.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pt-20">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
