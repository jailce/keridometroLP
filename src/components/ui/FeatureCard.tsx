import { FeatureItem } from "@/types/landing";

interface FeatureCardProps {
  feature: FeatureItem;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const { icon, title, desc, accent } = feature;

  return (
    <div
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all duration-200"
      style={{ borderRadius: "18px" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.border = `1px solid ${accent}33`;
        el.style.background = `${accent}08`;
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.border = "1px solid rgba(255,255,255,0.07)";
        el.style.background = "rgba(24,24,27,0.5)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{
          background: `${accent}15`,
          border: `1px solid ${accent}25`,
        }}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-bold text-sm" style={{ color: "#fafafa" }}>
          {title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "#71717a" }}>
          {desc}
        </p>
      </div>

      {/* Accent line at bottom */}
      <div
        className="mt-auto h-px rounded-full opacity-20"
        style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
      />
    </div>
  );
}
