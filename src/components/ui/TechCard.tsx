import { TechCardItem } from "@/types/landing";

interface TechCardProps {
  card: TechCardItem;
}

export default function TechCard({ card }: TechCardProps) {
  const { icon, badge, title, desc, tags } = card;

  return (
    <div
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200"
      style={{ borderRadius: "18px" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.border = "1px solid rgba(139,92,246,0.2)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
        >
          {icon}
        </div>
        <span
          className="text-[10px] font-semibold px-2 py-1 rounded-md"
          style={{ background: "rgba(255,255,255,0.05)", color: "#71717a" }}
        >
          {badge}
        </span>
      </div>
      <div>
        <h3 className="font-bold text-sm mb-2" style={{ color: "#fafafa" }}>
          {title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "#71717a" }}>
          {desc}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium px-2.5 py-1 rounded-lg"
            style={{
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.15)",
              color: "#67e8f9",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
