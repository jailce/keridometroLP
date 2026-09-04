export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-2">
          <span className="text-lg">🦄</span>
          <span
            className="font-bold tracking-tight"
            style={{ color: "#fafafa", letterSpacing: "-0.03em" }}
          >
            errômetro
          </span>
        </div>
        <p className="text-xs" style={{ color: "#52525b" }}>
          © 2024 Errômetro · Feito com 🍪 em Uberlândia, MG
        </p>
        <div className="flex items-center gap-6">
          {["Termos", "Privacidade", "Regras"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs transition-colors"
              style={{ color: "#52525b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a1a1aa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
