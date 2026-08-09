import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Kolom Kiri: Branding & Sosial Media */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Logo Dapure Nduk" className="h-20 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Menyajikan dimsum premium buatan rumah yang otentik, hangat, dan selalu dibuat dengan bahan segar berkualitas setiap harinya.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/dapure.nduk" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all" title="Instagram Dapure Nduk">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Kolom Kanan: Info Kontak */}
          <div className="md:ml-auto">
            <h4 className="font-semibold text-lg mb-6 text-foreground">Hubungi Kami</h4>
            <ul className="space-y-4 text-muted-foreground text-sm max-w-md">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Citra Raya Graha Indira Jalan Kana 1 Blok K 12 Nomer 15 Kelurahan Mekar Bakti, Panongan, Tangerang, Banten 15710, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+62 852-8388-8916</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p>Senin - Sabtu: 10:00 - 18:00</p>
                  <p className="text-destructive font-semibold">Minggu: Tutup</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dapure Nduk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
