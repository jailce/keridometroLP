import PhoneMockup from "@/components/ui/PhoneMockup";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background noise/texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Subtle gradient orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "#06b6d4" }}
      />
      <div
        className="absolute top-20 right-1/4 w-64 h-64 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: "#8b5cf6" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.25)",
                color: "#67e8f9",
              }}
            >
              <span className="blink w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Testando no r/uberlandia
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.04em", color: "#fafafa" }}
            >
              O queridômetro<br />
              <span className="gradient-text">da sua galera.</span>
            </h1>

            {/* Body */}
            <p className="text-base leading-relaxed max-w-md" style={{ color: "#a1a1aa" }}>
              Crie seu grupo, distribua emojis secretamente e descubra quem é a planta, a cobra ou o biscoiteiro da roda de amigos. Resultados toda terça e sexta.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://karmometro.kodehouse.com/"
                className="btn-primary flex items-center gap-2 px-6 py-3 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continuar com Google
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex -space-x-2">
                {["🧑‍💻", "👩‍🎤", "🧕", "👨‍🍳"].map((e, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
                    style={{ background: "#27272a", border: "2px solid #09090b" }}
                  >
                    {e}
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "#71717a" }}>
                +240 pessoas de Uberlândia já votaram
              </p>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
