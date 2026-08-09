import { HeroSection } from "@/components/home/HeroSection";
import { MenuSection } from "@/components/home/MenuSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] overflow-hidden">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialSection />
    </div>
  );
}
