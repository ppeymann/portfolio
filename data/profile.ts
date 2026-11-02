export const site = {
  name: "Peyman Malek",
  title: "Senior Fullstack & Mobile Developer",
  location: "Iran",
  url: "https://ppeymann.netlify.app",
  email: "p.malek32@gmail.com",
  linkedin: "https://www.linkedin.com/in/peyman-malek",
  linkedinLabel: "linkedin.com/in/peyman-malek",
  github: "https://github.com/ppeymann",
  githubLabel: "github.com/ppeymann",
  description:
    "Senior Fullstack & Mobile Developer in Iran with 7 years of experience, specializing in backend engineering with Go.",
};

export const about = {
  lead: "Backend engineering with Go is the specialty. Around that is 7 years of fullstack and mobile work.",
  body: "I design and build scalable APIs, microservices, and distributed backend systems. A lot of that is gRPC and REST, including fintech and payment infrastructure such as wallets and ledgers. On the web I use React and Next.js. On mobile, Flutter and Swift with SwiftUI. I like owning a system from architecture and API design through implementation, and I use Clean Architecture, Hexagonal Architecture, DDD, and SOLID to structure that work. The products have been in healthtech, AI, social platforms, SaaS, and e-commerce.",
};

export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: "Languages",
    items: [
      "Go (Golang)",
      "TypeScript",
      "JavaScript",
      "Swift",
      "Dart",
      "Python",
    ],
  },
  {
    name: "Backend",
    items: [
      "Gin",
      "Echo",
      "REST APIs",
      "gRPC / Protocol Buffers",
      "Microservices",
      "Django",
      "FastAPI",
      "Authentication & authorization",
      "Middleware",
      "Async/background processing",
    ],
  },
  {
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Component architecture",
      "State management",
    ],
  },
  {
    name: "Mobile",
    items: [
      "Flutter (Dart, Provider)",
      "SwiftUI (MVVM)",
      "Cross-platform & native iOS development",
    ],
  },
  {
    name: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "TigerBeetle",
      "MinIO (S3-compatible object storage)",
    ],
  },
  {
    name: "Architecture",
    items: [
      "Clean Architecture",
      "Hexagonal Architecture",
      "Domain-Driven Design (DDD)",
      "SOLID",
      "Design patterns",
      "Monolith & microservices trade-offs",
    ],
  },
  {
    name: "DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "Linux",
      "GitLab CI",
      "Reverse proxies",
      "Logging & monitoring",
    ],
  },
];

export type Role = {
  company: string;
  role: string;
  dates: string;
  meta: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "BesazAI",
    role: "Backend Engineer",
    dates: "2025 – 2026",
    meta: "Full-time · Concurrent with Beenbo",
    bullets: [
      "Developed backend services for an AI-focused platform using Go, integrating multiple AI APIs and services.",
      "Built backend infrastructure to expose and manage AI-powered features for platform users.",
      "Contributed to designing and implementing the platform's financial/payment system, including related backend services and APIs.",
    ],
  },
  {
    company: "Beenbo",
    role: "Backend Go Developer",
    dates: "2025 – 2026",
    meta: "Full-time · Concurrent with BesazAI",
    bullets: [
      "Designed and developed backend services and REST APIs for a social/digital engagement platform connecting users, content, and advertising campaigns.",
      "Implemented business logic, database integration, and authentication; contributed to overall backend architecture.",
      "Worked on scalable API design and efficient data management for a user-facing product with user-generated content.",
    ],
  },
  {
    company: "Meta Hospital",
    role: "Swift Developer",
    dates: "2023 – 2024",
    meta: "Full-time",
    bullets: [
      "Implemented key features and UI for an iOS healthcare application connecting patients with doctors.",
      "Built real-time video calling and in-app chat/messaging between patients and doctors.",
      "Developed patient-facing features for viewing laboratory test results and prescribed medications.",
      "Integrated the mobile application with backend services to deliver a reliable, user-friendly experience.",
    ],
  },
  {
    company: "Metamedland",
    role: "Full-Stack Developer",
    dates: "2021 – 2023",
    meta: "Full-time",
    bullets: [
      "Owned a medical platform end-to-end, building the entire frontend with Next.js and the backend from scratch with Go.",
      "Designed and implemented a complete real-time video calling system and chat system, including UI, backend services, APIs, and underlying architecture.",
      "Handled system design, implementation, integration, and delivery across both frontend and backend.",
    ],
  },
];

export type Project = {
  name: string;
  kicker?: string;
  href?: string;
  stack: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    name: "Digital Wallet & Ledger Platform",
    kicker: "Personal / portfolio project",
    href: "https://github.com/ppeymann/Orvex-showcase",
    stack:
      "Go · gRPC / Protobuf · TigerBeetle · PostgreSQL · Redis · Docker · Flutter · Riverpod",
    bullets: [
      "Designed and built a production-oriented digital wallet system focused on financial correctness and reliability, using TigerBeetle as the financial ledger for transaction processing.",
      "Built the backend in Go with a gRPC/Protobuf API, applying Clean/Hexagonal Architecture to separate domain, application, and infrastructure layers.",
      "Designed the system with attention to transaction integrity, idempotency, and reliable ledger-based accounting — core distributed-systems and fintech concerns.",
      "Containerized the full stack (Go services, PostgreSQL, Redis, TigerBeetle) with Docker and Docker Compose for reproducible local and deployment environments.",
      "Built the companion Flutter mobile client with Riverpod for state management, a gRPC client, and secure token storage.",
    ],
  },
  {
    name: "Maya Azma",
    kicker: "Laboratory equipment e-commerce platform",
    stack: "Next.js · Go",
    bullets: [
      "Built an e-commerce platform for laboratory equipment and supplies, with a Next.js frontend and a Go backend.",
    ],
  },
  {
    name: "Atelier",
    kicker: "Tailoring workshop management system",
    href: "https://github.com/ppeymann/Atelier",
    stack: "Flutter · FastAPI",
    bullets: [
      "Built a workshop management system for tailoring businesses, with a Flutter mobile app and a FastAPI backend.",
    ],
  },
  {
    name: "ci-templates",
    kicker: "Reusable CI/CD templates",
    href: "https://github.com/ppeymann/ci-templates",
    stack: "GitHub Actions · Kubernetes",
    bullets: ["Reusable GitHub Actions and Kubernetes CI/CD templates."],
  },
];

export const education = {
  degree: "B.Sc. in Engineering Physics (Laser and Optics)",
  school: "Kermanshah University of Technology",
  dates: "2016 – 2020",
};

export const languages: { name: string; level: string }[] = [
  { name: "Persian (Farsi)", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
];
