# Errômetro — Landing Page

Landing page moderna para o **Errômetro**, o queridômetro interativo e anônimo para grupos de amigos e comunidades.

## 🚀 Tecnologias

- **React 19** — Biblioteca para construção da interface de usuário
- **Vite 8** — Build tool rápida com suporte a Hot Module Replacement (HMR)
- **TypeScript 5.7** — Tipagem estática e segurança no desenvolvimento
- **Tailwind CSS v4** — Estilização moderna via `@tailwindcss/vite`

---

## 📁 Estrutura do Projeto

O projeto foi estruturado seguindo boas práticas de componentização, separação de responsabilidades e tipagem estática:

```text
keridometroLP/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/            # Componentes de estrutura (Navbar, Footer, etc.)
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/          # Seções da landing page
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   └── TechPitchSection.tsx
│   │   └── ui/                # Componentes reutilizáveis de interface
│   │       ├── FeatureCard.tsx
│   │       ├── PhoneMockup.tsx
│   │       └── TechCard.tsx
│   ├── data/                  # Dados constantes e configurações da landing page
│   │   └── landingData.ts
│   ├── imports/               # Assets importados (imagens, ícones)
│   │   └── image.png
│   ├── types/                 # Interfaces e definições de tipos TypeScript
│   │   └── landing.ts
│   ├── App.tsx                # Componente principal / orquestrador das seções
│   ├── index.css              # Estilos globais e importação do Tailwind CSS v4
│   └── main.tsx               # Ponto de entrada do React
├── index.html                 # Shell HTML da aplicação
├── package.json               # Dependências e scripts do projeto
├── tsconfig.json              # Configurações do TypeScript
└── vite.config.ts             # Configuração do Vite com suporte ao Tailwind v4
```

---

## 🛠️ Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`
Inicia o servidor de desenvolvimento na porta local (default `:8443`) com suporte a **Hot Module Replacement (HMR)**.

### `npm run build`
Gera a versão de produção otimizada na pasta `dist`.

### `npm run preview`
Visualiza a build de produção localmente.

### `npm run format`
Formata o código-fonte utilizando o `oxfmt`.
