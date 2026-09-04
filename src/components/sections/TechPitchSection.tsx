import TechCard from "@/components/ui/TechCard";
import { TECH_CARDS } from "@/data/landingData";

export default function TechPitchSection() {
  return (
    <section
      id="tech"
      className="py-24 px-6 relative"
      style={{
        background: "#0a0c10",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.04), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#c4b5fd",
            }}
          >
            &lt;/&gt; Para Desenvolvedores &amp; Investidores
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2
            className="font-black mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#fafafa" }}
          >
            Por trás dos panos do Errômetro
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "#a1a1aa" }}>
            O que começou como uma brincadeira no WhatsApp r/uberlandia foi arquitetado para escalar. Uma análise técnica sobre a construção do produto, stack e visão de futuro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {TECH_CARDS.map((card) => (
            <TechCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
