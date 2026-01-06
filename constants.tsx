import { ResumeData } from './types';

const getDoodlePeriod = () => {
  const endOfTenure = new Date('2026-02-01'); // Check if date is past Jan 2026
  const now = new Date();
  
  if (now >= endOfTenure) {
    return "Dec 2023 — Jan 2026";
  }
  return "Dec 2023 — Present";
};

export const RESUME_DATA: ResumeData = {
  name: "Lekan Koku",
  headline: "AI Driven Software Engineer",
  subheadline: "Building revenue-critical distributed systems and scalable web products.",
  avatarUrl: "./profile.jpg", // Make sure to name your image file "profile.jpg" and place it in the public folder
  summary: [
    "Fullstack engineer with 6+ years of experience engineering high-traffic systems for 20M+ users.",
    "Specialized in modernizing billing architectures and leading greenfield MVPs in regulated environments.",
    "Deep expertise in distributed consistency, event-driven microservices, and growth experimentation.",
    "Proven track record of bridging product goals with technical rigor in complex domains."
  ],
  education: [
    {
      institution: "BTU Cottbus",
      location: "Brandenburg, DE",
      degree: "B.Sc. Computer Science"
    }
  ],
  experience: [
    {
      company: "Doodle",
      url: "https://doodle.com/",
      role: "Senior Fullstack Engineer",
      period: getDoodlePeriod(),
      location: "Berlin, DE (Remote)",
      description: "Leading billing architecture modernization and growth engineering for a platform serving 2M+ DAU.",
      highlights: [
        "Architected the end-to-end checkout flow for 2M+ DAU by decoupling legacy monoliths into event-driven microservices, ensuring 99.9% uptime during peak traffic.",
        "Engineered a flexible billing engine supporting multi-plan pricing and dynamic discounts, directly enabling a 15% increase in B2B revenue capture.",
        "Migrated critical frontend paths to Next.js (SSR) to reduce First Contentful Paint by 40%, enhancing SEO and user retention across key markets.",
        "Orchestrated 30+ high-velocity growth experiments, including a pricing page overhaul that doubled monthly conversions from 40k to 80k.",
      ],
      tech: ["React", "Next.js", "Java Spring", "Kafka", "PostgreSQL", "Kubernetes", "Nx"]
    },
    {
      company: "Notch",
      url: "https://www.notch.so/",
      role: "Founding Engineer",
      period: "Oct 2022 — Oct 2023",
      location: "Hamburg, DE",
      description: "Established core engineering practices and delivered product-market fit features for an early-stage startup.",
      highlights: [
        "Led the full-cycle development of 'Action Plans' and 'Space Templates', delivering core features that secured the platform's first 10 enterprise pilot customers.",
        "Designed a modular monolith architecture on AWS Aurora, balancing rapid iteration speed with strict boundary enforcement for future microservices extraction.",
        "Implemented the complete vertical stack using Kotlin/Spring Boot and Vue.js, establishing type-safe patterns that reduced regression bugs by 30%."
      ],
      tech: ["Vue.js", "TypeScript", "Kotlin", "Spring Boot", "AWS Aurora"]
    },
    {
      company: "BXC Security",
      url: "https://www.bxc-security.com/",
      role: "Founding Engineer (MVP Lead)",
      period: "Mar 2021 — Oct 2022",
      location: "Bavaria, DE",
      description: "Built the MVP for an enterprise cybersecurity risk analysis platform from ground zero.",
      highlights: [
        "Designed a compliant single-tenant hybrid cloud architecture to meet strict German data residency laws, enabling deployment within air-gapped enterprise environments.",
        "Engineered complex OIDC identity federation strategies to integrate seamlessly with fragmented enterprise Identity Providers (IdPs), ensuring zero-trust security compliance.",
        "Rebuilt the legacy AngularJS prototype into a performant React/Node.js application, reducing technical debt and accelerating feature delivery speed by 2x.",
        "Delivered a verifiable MVP within 6 months, validating technical feasibility through successful pilots with three major DAX-listed German enterprises."
      ],
      tech: ["React", "Node.js", "AWS", "OIDC", "PostgreSQL"]
    },
    {
      company: "JustWatch",
      url: "https://www.justwatch.com/",
      role: "Fullstack Software Engineer",
      period: "May 2019 — Dec 2020",
      location: "Berlin, DE",
      description: "Engineered high-scale scraping systems and cross-platform TV applications for 20M+ users.",
      highlights: [
        "Engineered concurrent Go scraping pipelines to ingest real-time availability data from 40+ streaming providers, ensuring 99.9% data accuracy for 20M+ users.",
        "Architected a resilient cross-platform deep linking system for Apple TV and Android TV, driving a 25% increase in partner app engagement.",
        "Implemented high-impact frontend A/B testing infrastructure, enabling rapid experimentation that boosted user retention by 25% during peak seasonal traffic.",
        "Reverse-engineered undocumented third-party API behaviors to bypass strict rate limits, maintaining data freshness without triggering vendor blocks."
      ],
      tech: ["Go", "Vue.js", "React Native", "Ionic", "Scraping"]
    }
  ],
  projects: [
    {
      title: "Distributed Billing Platform",
      context: "at Doodle",
      description: "Architected and implemented a new event-driven billing system to replace legacy payments infrastructure. The system handles subscription lifecycle events, plan upgrades, and prorations across distributed services.",
      outcome: "Successfully processed 20M+ daily events and enabled the launch of dynamic discount pricing strategies.",
      tech: ["Java Spring", "Kafka", "PostgreSQL", "React"]
    },
    {
      title: "Enterprise Risk Analysis MVP",
      context: "at BXC Security",
      description: "Built a compliant, single-tenant SaaS platform from scratch for cybersecurity risk assessment. Addressed strict data residency laws and complex enterprise identity management requirements.",
      outcome: "Secured 3 pilot contracts with major German enterprises by delivering a verifiable, secure MVP in under 6 months.",
      tech: ["React", "Node.js", "AWS Hybrid Cloud", "OIDC"]
    },
    {
      title: "Real-time Streaming Ingestion Engine",
      context: "at JustWatch",
      description: "Developed high-throughput scraping pipelines to ingest content availability data from over 40 distinct streaming providers in real-time.",
      outcome: "Reduced data latency by 60% and ensured 99.9% data accuracy for a user base of 20 million.",
      tech: ["Go", "Concurrency", "Distributed Scraping"]
    }
  ],
  skills: [
    {
      title: "Backend Engineering",
      skills: [
        "Java (Spring Boot / Distributed)", 
        "Kotlin (Domain Modeling)", 
        "Node.js (API / Logic)", 
        "Go (Real-time Ingestion)"
      ]
    },
    {
      title: "Frontend Engineering",
      skills: [
        "React (High Traffic Flows)", 
        "Next.js (SSR / Latency)", 
        "TypeScript (Production)", 
        "Vue.js"
      ]
    },
    {
      title: "Distributed Systems & Data",
      skills: [
        "Kafka (Event Driven)", 
        "Debezium (CDC)", 
        "PostgreSQL (SQL)", 
        "MongoDB", 
        "Real-time Ingestion"
      ]
    },
    {
      title: "Architecture & Design",
      skills: [
        "Microservices (High Scale)", 
        "Modular Monolith", 
        "Single Tenant / Hybrid Cloud", 
        "API Design & Versioning"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        "Kubernetes (Orchestration)", 
        "AWS (IAM / RDS)", 
        "GitHub Actions (CI/CD)", 
        "Live Traffic Migration"
      ]
    },
    {
      title: "Experimentation & Product",
      skills: [
        "A/B Testing", 
        "Growth Engineering", 
        "Metric Driven Iteration", 
        "Conversion Optimization"
      ]
    },
    {
      title: "Security",
      skills: [
        "OIDC Authentication", 
        "Data Residency Compliance"
      ]
    },
    {
      title: "Leadership",
      skills: [
        "Mentorship", 
        "Architecture Proposals", 
        "Stakeholder Management", 
        "Cross-functional Leadership"
      ]
    }
  ],
  values: [
    {
      title: "Correctness > Speed",
      description: "In finance and security, data integrity is non-negotiable. I prioritize rigorous consistency checks over rapid shipping when money is involved."
    },
    {
      title: "Simplicity Wins",
      description: "Complex systems fail in complex ways. I advocate for boring technology, modular monoliths when appropriate, and clear ownership boundaries."
    },
    {
      title: "Impact Driven",
      description: "Code is a means to an end. I focus on moving metrics—whether it's doubling conversion rates or reducing incident frequency."
    },
    {
      title: "Design for Change",
      description: "Requirements evolve, especially in startups. I build loosely coupled systems that are easy to delete, replace, or scale."
    }
  ],
  references: [
    {
      name: "Philip Defner",
      title: "Head of Content Engineering",
      company: "JustWatch",
      linkedin: "Linkedin"
    },
    {
      name: "Vladan Petrovic",
      title: "Tech Lead",
      company: "Rivian",
      linkedin: "Linkedin"
    },
    {
      name: "Damiano Stoffe",
      title: "Technical Lead",
      company: "Gecal Informatica Srl",
      linkedin: "Linkedin"
    }
  ],
  currentFocus: "Currently deepening expertise in event-driven consistency patterns for distributed financial systems and exploring Rust for high-performance tooling.",
  contact: {
    email: "hello@lekankoku.com",
    linkedin: "www.linkedin.com/in/lekankoku/",
    github: "github.com/lekankoku",
    location: "Based in Germany · Open to Remote"
  }
};