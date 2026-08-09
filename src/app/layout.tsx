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
  return (
    <html lang="id" className={`${plusJakarta.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pt-20">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
