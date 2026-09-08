export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 glass"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg">🦄</span>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ color: "#fafafa", letterSpacing: "-0.03em" }}
          >
            errômetro
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="#tech"
            className="text-sm font-medium hidden sm:block transition-colors"
            style={{ color: "#a1a1aa" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fafafa")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
          >
            Tech &amp; Portfólio
          </a>
          <a
            href="https://karmometro.kodehouse.com/"
            className="btn-outline text-sm px-4 py-2 inline-flex items-center"
          >
            Fazer Login
          </a>
        </div>
      </div>
    </nav>
  );
}
