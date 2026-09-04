import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TechPitchSection from "@/components/sections/TechPitchSection";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#09090b", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechPitchSection />
      <Footer />
    </div>
  );
}
