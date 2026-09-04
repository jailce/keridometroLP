import { DictionaryItem, FeatureItem, TechCardItem, FloatingEmojiItem } from "@/types/landing";

export const DICTIONARY: DictionaryItem[] = [
  { emoji: "🦄", title: "Asno", desc: "Erra com convicção. Sempre confiante, raramente certo." },
  { emoji: "🍪", title: "Biscoito", desc: "Mendiga atenção o tempo todo. Carece de autoestima." },
  { emoji: "🐍", title: "Cobra", desc: "Fala, age pelas costas. Sorriso falso garantido." },
  { emoji: "🪴", title: "Planta", desc: "Existe, mas ninguém percebe. Suma que ninguém nota." },
  { emoji: "💼", title: "Mala", desc: "Inconveniente, difícil de suportar. Traz peso pra todo rolê." },
  { emoji: "🎂", title: "Bolo", desc: "Anima o rolê e não aparece. Suma na hora H." },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: "🔒",
    title: "Comunidades Fechadas",
    desc: "Crie grupos isolados no estilo Discord. O que acontece no grupo, fica no grupo.",
    accent: "#06b6d4",
  },
  {
    icon: "🎨",
    title: "Votações Personalizadas",
    desc: "Escolha os emojis e crie os significados baseados nas piadas internas da sua galera.",
    accent: "#8b5cf6",
  },
  {
    icon: "⏱️",
    title: "Cadência Flexível",
    desc: "Configure a frequência de revelação dos resultados: todo dia, toda sexta-feira ou quando você quiser.",
    accent: "#f59e0b",
  },
];

export const TECH_CARDS: TechCardItem[] = [
  {
    icon: "⚡",
    badge: "Stack",
    title: "Arquitetura & Stack",
    desc: "Construído com Next.js App Router, Server Actions e banco de dados em tempo real para votos instantâneos.",
    tags: ["Next.js", "Tailwind", "Supabase", "Vercel"],
  },
  {
    icon: "🎮",
    badge: "Produto",
    title: "UX & Gamificação",
    desc: "Mecânica de votação anônima com revelação semanal. Tensão social vira engajamento orgânico.",
    tags: ["Anônimo", "Semanal", "Grupos", "Rankings"],
  },
  {
    icon: "📈",
    badge: "Negócio",
    title: "Escalabilidade",
    desc: "Infraestrutura projetada para escalar com suporte técnico e parceria estratégica da Kodehouse.",
    tags: ["Kodehouse", "Multi-tenant", "SaaS", "API"],
  },
];

export const FLOATING_EMOJIS: FloatingEmojiItem[] = [
  { emoji: "🐍", top: "4%", left: "2%", size: "2.6rem", delay: "0s", duration: "5s" },
  { emoji: "🍪", top: "8%", right: "4%", size: "2.8rem", delay: "0.6s", duration: "4.5s" },
  { emoji: "🦄", top: "78%", left: "0%", size: "3.2rem", delay: "1.2s", duration: "5.5s" },
  { emoji: "❤️", top: "55%", right: "2%", size: "2rem", delay: "0.3s", duration: "4s" },
  { emoji: "💔", top: "88%", right: "8%", size: "1.8rem", delay: "0.9s", duration: "6s" },
  { emoji: "🎂", top: "38%", left: "-4%", size: "1.6rem", delay: "1.5s", duration: "4.8s" },
];
