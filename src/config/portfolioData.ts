import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://miracleflow.github.io/portfolio", // update if you have a custom domain
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Kevin Pang",
    title: "Full Stack AI Software Engineer",
    headline: "LLMs · RAG · AI Agents · MCP · Prompt Engineering · React · Next.js · Angular · Redux · HTML5 · CSS3 · Sass · AWS · Docker · Kubernetes · Terraform · TypeScript · JavaScript · Python · Go    Java   Node.js    NestJS    Express.js    REST APIs    GraphQL   Microservices    Docker   PostgreSQL    MySQL    MongoDB    Redis   Git    GitHub Actions    CI/CD",
    // avatar can be a string, an object with { url, label }, or an array of those.
    avatar: [
      // use public root path so Vite serves the static asset from /public/profile.jpg
      { url: "./profile.jpg", label: "" },
      { url: "./profile1.jpg", label: "" },
    ],
    summary:
      "",// optional hero summary used in the site hero; keeps a concise, senior-level intro tuned to your data
    hero: {
      summary:
        "Senior Full-Stack AI Software Engineer with 9+ years of experience designing and building scalable web, cloud native, and AI-powered applications. Expertise in TypeScript, Python, React, Node.js, Java, AWS, and modern AI technologies including LLMs, RAG, AI Agents, and Model Context Protocol (MCP). Passionate about delivering secure, maintainable, and high-performance software using modern engineering practices.",
    },
    contact: {
      email: "kevinpang8142@gmail.com",
      phone: ":+1 202 681 5715",
      location: "Bonifacio Global City (BGC), Taguig City, Metro Manila, Philippines",
      website: "https://miracleflow.github.io/portfolio",
      socials: [
        {
          label: "GitHub",
          url: "https://github.com/miracleflow",
          icon: "SiGithub",
        },
        {
          label: "Hugging Face",
          url: "https://huggingface.co/spaces/miracleflow/",
          icon: "SiHuggingface",
        },
        {
          label: "Kaggle",
          url: "https://www.kaggle.com/miracleflow",
          icon: "SiKaggle",
          size: 32,
        },
      ],
    },
  },
  highlights: [
    "AI Software Engineer - DXC Technology Philippines, Philippines (2023/9-2026/6)",
    "Senior Software Engineer - Hootsuite, Canada (2021/1-2023/8)",
    "Full-Stack Engineer - Typeform, Spain (2018/3-2020/12)",
    "Junior Software Engineer - Part-time while completing Bachelor's degree, Philippines (2016/3-2018/1)",
  ],
  skills: [
    {
      title: "AI & ML",
      skills: [
        {
          name: "LLMs",
          level: 85,
          icon: "SiOpenai",
          category: "data",
          years: 3,
          note: "Built enterprise AI applications with OpenAI and Anthropic models.",
        },
        {
          name: "RAG",
          level: 85,
          icon: "SiLangchain",
          category: "data",
          years: 3,
          note: "Developed Retrieval-Augmented Generation pipelines for production AI systems.",
        },
        {
          name: "AI Agents",
          level: 80,
          icon: "SiLangchain",
          category: "data",
          years: 3,
          note: "Designed multi-agent workflows for enterprise AI automation.",
        },
        {
          name: "MCP",
          level: 75,
          icon: "SiAnthropic",
          category: "data",
          years: 3,
          note: "Integrated Model Context Protocol into AI agent architectures.",
        },
        {
          name: "Prompt Engineering",
          level: 80,
          icon: "SiOpenai",
          category: "data",
          years: 3,
          note: "Designed prompts and structured outputs for reliable AI workflows.",
        },
        {
          name: "LangChain",
          level: 75,
          icon: "SiLangchain",
          category: "data",
          years: 3,
          note: "Built AI orchestration pipelines using LangChain.",
        },
      ],
    },
    { //TypeScript    JavaScript    Python    Go    Java
      title: "Programming Languages",
      skills: [
        {
          name: "TypeScript",
          level: 90,
          icon: "SiTypescript",
          category: "devops",
          years: 6,
          note: "Developed scalable frontend and backend applications.",
        },
        {
          name: "JavaScript",
          level: 90,
          icon: "SiJavascript",
          category: "devops",
          years: 9,
          note: "Built modern web applications using ES6+.",
        },
        {
          name: "Python",
          level: 85,
          icon: "SiPython",
          category: "devops",
          years: 4,
          note: "Developed AI services and backend applications.",
        },
        {
          name: "Go",
          level: 75,
          icon: "SiGo",
          category: "devops",
          years: 3,
          note: "Built backend services and concurrent applications.",
        },
        {
          name: "Java",
          level: 88,
          icon: "SiOpenjdk",
          category: "devops",
          years: 8,
          note: "Developed enterprise backend systems with Spring Boot.",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 92,
          icon: "SiReact",
          category: "frontend",
          years: 8,
          note: "Built scalable single-page applications and reusable components.",
        },
        {
          name: "Next.js",
          level: 88,
          icon: "SiNextdotjs",
          category: "frontend",
          years: 5,
          note: "Developed server-rendered and SEO-friendly web applications.",
        },
        {
          name: "Angular",
          level: 85,
          icon: "SiAngular",
          category: "frontend",
          years: 4,
          note: "Built enterprise dashboards and business applications.",
        },
        {
          name: "Redux",
          level: 90,
          icon: "SiRedux",
          category: "frontend",
          years: 8,
          note: "Managed application state in large React applications.",
        },
        {
          name: "HTML5",
          level: 95,
          icon: "SiHtml5",
          category: "frontend",
          years: 9,
          note: "Built responsive and accessible web interfaces.",
        },
        {
          name: "CSS3",
          level: 92,
          icon: "SiCss3",
          category: "frontend",
          years: 9,
          note: "Created responsive layouts and modern UI designs.",
        },
        {
          name: "Sass",
          level: 82,
          icon: "SiSass",
          category: "frontend",
          years: 5,
          note: "Built maintainable and reusable styling architectures.",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          level: 90,
          icon: "SiNodedotjs",
          category: "backend",
          years: 8,
          note: "Developed scalable REST APIs and backend services.",
        },
        {
          name: "NestJS",
          level: 88,
          icon: "SiNestjs",
          category: "backend",
          years: 6,
          note: "Built modular enterprise backend applications.",
        },
        {
          name: "Express.js",
          level: 85,
          icon: "SiExpress",
          category: "backend",
          years: 8,
          note: "Implemented RESTful APIs and middleware services.",
        },
        {
          name: "REST APIs",
          level: 95,
          icon: "SiPostman",
          category: "backend",
          years: 9,
          note: "Designed and implemented secure RESTful APIs.",
        },
        {
          name: "GraphQL",
          level: 80,
          icon: "SiGraphql",
          category: "backend",
          years: 5,
          note: "Developed GraphQL APIs for modern web applications.",
        },
        {
          name: "Microservices",
          level: 82,
          icon: "SiGit",
          category: "backend",
          years: 5,
          note: "Built scalable distributed backend architectures.",
        },
      ],
    },
    {
      title: "Cloud & Platform",
      skills: [
        {
          name: "AWS",
          level: 88,
          icon: "SiAmazonwebservices",
          category: "devops",
          years: 6,
          note: "Designed and deployed cloud-native applications on AWS.",
        },
        {
          name: "Docker",
          level: 85,
          icon: "SiDocker",
          category: "devops",
          years: 6,
          note: "Containerized enterprise applications for production deployment.",
        },
        {
          name: "Kubernetes",
          level: 82,
          icon: "SiKubernetes",
          category: "devops",
          years: 5,
          note: "Managed container orchestration for scalable applications.",
        },
        {
          name: "Terraform",
          level: 82,
          icon: "SiTerraform",
          category: "devops",
          years: 4,
          note: "Automated cloud infrastructure using Infrastructure as Code.",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          level: 90,
          icon: "SiPostgresql",
          category: "database",
          years: 8,
          note: "Designed schemas and optimized relational databases.",
        },
        {
          name: "MySQL",
          level: 88,
          icon: "SiMysql",
          category: "database",
          years: 9,
          note: "Built production applications using relational databases.",
        },
        {
          name: "MongoDB",
          level: 85,
          icon: "SiMongodb",
          category: "database",
          years: 5,
          note: "Developed document-oriented backend applications.",
        },
        {
          name: "Redis",
          level: 82,
          icon: "SiRedis",
          category: "database",
          years: 5,
          note: "Implemented caching and session management solutions.",
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          level: 95,
          icon: "SiGit",
          category: "tooling",
          years: 9,
          note: "Managed version control using collaborative Git workflows.",
        },
        {
          name: "GitHub",
          level: 92,
          icon: "SiGithub",
          category: "tooling",
          years: 9,
          note: "Collaborated on code reviews and repository management.",
        },
        {
          name: "CI/CD",
          level: 88,
          icon: "SiJira",
          category: "tooling",
          years: 6,
          note: "Built automated build, test, and deployment pipelines.",
        },
      ],
    },
  ],
  projects: [
    {
      id: "alochona",
      title: "Alochona",
      description:
        "Alochona is an experimental chatbot hosted on Hugging Face Spaces. It uses OpenAI under the hood for responses. This project was built as a way to explore chatbot UIs, Hugging Face deployment, and integrating OpenAI APIs.",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmc5dDY1c2ZnOGs0ODF0eDkwbzBvMHZ2ZXJvYml2amRmdzN2dnZueSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AFQj6uviWpwudbOWg/giphy.gif",
      href: "https://huggingface.co/spaces/miracleflow/alochona",
      links: [
        {
          label: "Huggingface",
          url: "https://huggingface.co/spaces/miracleflow/alochona/tree/main",
          icon: "SiHuggingface",
        },
        {
          label: "GitHub",
          url: "https://github.com/miracleflow/alochona",
          icon: "SiGithub",
        },
      ],
      tags: ["Chatbot", "OpenAI", "Hugging Face", "Beginner Project"],
    },
    {
      id: "diagrammatic",
      title: "Diagrammatic",
      description:
        "Diagrammatic (System Design Playground): A component library and living documentation for a design system.",
      tags: ["System Design", "AI & ML", "React"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTFnOGF3d3BodjFvY3NhanY5cnl5bmd4Z243aXB5M3hrOHg3d2tmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WvzQektcJxs0oDFkHq/giphy.gif",
      href: "https://diagrammatic.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/miracleflow/diagrammatic",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "mui-color-wheel",
      title: "MUI Color Wheel",
      description:
        "A Material-UI based color wheel component with real-time color picking.",
      tags: ["React", "Material-UI", "NPM Package", "Storybook"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJxYjhmdTVjam41aWlzczZreGZ2eXc5eThjdDRpMXgxYzVuYTAzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tWnCyw4rmoFY8CmhLV/giphy.gif",
      href: "https://mui-color-wheel.vercel.app/",
      links: [
        {
          label: "Storybook",
          url: "https://mui-color-wheel.vercel.app/",
          icon: "SiStorybook",
        },
        {
          label: "NPM",
          url: "https://www.npmjs.com/package/mui-color-wheel",
          icon: "SiNpm",
        },
        {
          label: "GitHub",
          url: "https://github.com/miracleflow/mui-color-wheel",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "landing-zone-orchestrator",
      title: "Landing Zone Orchestrator",
      description:
        "A production-ready platform that transforms cloud infrastructure provisioning from manual IaC coding to an intuitive, form-driven workflow. Built with React, FastAPI, and MongoDB to generate validated Terraform templates for AWS, Azure, and GCP. Features include schema-driven form builder for VPC, Subnets, IAM, and networking resources, real-time Terraform code generation and validation, JWT-based authentication, MongoDB storage for projects and templates, and multi-cloud support.",
      tags: [
        "Terraform",
        "IaC",
        "React",
        "FastAPI",
        "MongoDB",
        "AWS",
        "Azure",
        "Full Stack",
      ],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGtuYjY1emtsZmNjMXp1czdrdXR5bXE5ZDJheHVvZjY1azZxYnJieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qzImRjQVb2OUI84mTt/giphy.gif",
      href: "https://orchestrator.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/miracleflow/landing-zone-orchestrator",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "tic-tac-toe-ai",
      title: "Tic Tac Toe AI",
      description:
        "A minimal Tic-Tac-Toe AI game built with Next.js to understand the Minimax algorithm.",
      tags: ["Next.js", "AI", "Game", "Minimax"],
      image:
        "https://raw.githubusercontent.com/miracleflow/tic-tac-toe/main/public/tic-tac-toe.png",
      href: "https://miracleflow.github.io/tic-tac-toe/",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/miracleflow/tic-tac-toe",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "night-sky",
      title: "Night Skyline",
      description:
        "A breathtaking recreation of the city skyline under a starlit night sky, capturing the serene beauty and glowing atmosphere of the evening.",
      tags: ["React", "CSS"],
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RjaHAxY3N3enY0d3RldWVpczg2ZTNzMHhsY2dpam0yYnp6bWh2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P2jddT5c9g9OeHI17p/giphy.gif",
      href: "https://miracleflow.github.io/night-sky/",
      links: [
        {
          label: "Watch",
          url: "https://www.loom.com/share/1516014366e34135a67f5dd4e551fec5",
          icon: "FaPlay",
        },
        {
          label: "GitHub",
          url: "https://github.com/miracleflow/night-sky",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Biju Patnaik University of Technology",
      date: "2013-2017",
    },
    {
      degree: "Higher Secondary",
      school: "Bellaguntha Science College",
      date: "2011-2013",
    },
    {
      degree: "High School",
      school: "G.T High School Bellaguntha",
      date: "2011",
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2022",
      url: "https://www.credly.com/badges/56ba404b-b2ec-49d7-b869-d41c8c88d7b5",
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
    },
  ],
  extras: {
    languages: [{ name: "English", level: "Native" }],
    interests: ["astronomy", "music"],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  Chatbot: "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  GCP: "bg-red-600 text-white",
  Algorithms: "bg-blue-500 text-blue-100",
  DSA: "bg-purple-300 text-purple-900",
  ML: "bg-blue-200 text-blue-800",
  AI: "bg-gray-200 text-gray-800",
  "AI & ML": "bg-amber-100 text-amber-900",
  Visualization: "bg-orange-100 text-purple-900",
  "Next.js": "bg-black text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
};
