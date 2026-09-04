import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/data/landingData";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 relative">
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.3), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-black mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#fafafa" }}
          >
            Seu grupo, suas regras.
          </h2>
          <p className="text-sm max-w-sm mx-auto" style={{ color: "#71717a" }}>
            Configure tudo do zero. Nenhum grupo é igual ao outro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
