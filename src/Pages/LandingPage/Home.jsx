import { HeroSection } from "@/components/LandingPage/HeroSection";
import { Navbar } from "@/components/LandingPage/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
