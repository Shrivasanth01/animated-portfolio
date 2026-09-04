export const projectsData = [
  {
    id: "01",
    title: "[PROJECT NAME 1] — Distributed Real-Time Telemetry System",
    category: "FULL-STACK / REAL-TIME / SYSTEM ARCHITECTURE",
    summary: "High-concurrency streaming telemetry and analytical command platform designed to process 50k+ metrics per second.",
    featured: true,
    
    problem: "Legacy monitoring systems suffered from 3-5 second ingest latency and failed to scale gracefully during high-throughput traffic spikes, degrading system observability.",
    approach: "Architected an event-driven pub/sub data pipeline powered by Redis Streams and Node.js WebSockets, paired with a React & Framer Motion dashboard for instant visualization.",
    
    architectureNodes: [
      { id: "user", label: "Client Dashboard", type: "frontend", icon: "Layout" },
      { id: "gateway", label: "API Gateway (Next.js)", type: "api", icon: "Globe" },
      { id: "auth", label: "JWT / OAuth Guard", type: "auth", icon: "Shield" },
      { id: "pubsub", label: "Redis Pub/Sub Stream", type: "cache", icon: "Zap" },
      { id: "backend", label: "Node.js Ingestion Service", type: "backend", icon: "Server" },
      { id: "database", label: "PostgreSQL + TimescaleDB", type: "database", icon: "Database" },
      { id: "cloud", label: "Docker Container Cloud", type: "infrastructure", icon: "Cloud" }
    ],

    techStack: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      api: ["RESTful Endpoints", "WebSockets", "gRPC"],
      backend: ["Node.js", "Express", "Worker Threads"],
      database: ["PostgreSQL", "Redis Streams", "TimescaleDB"],
      infrastructure: ["Docker", "Vercel", "GitHub Actions CI/CD"]
    },

    challenges: [
      {
        title: "WebSocket Backpressure Handling",
        description: "High incoming metric spikes overwhelmed browser client rendering threads.",
        solution: "Implemented time-sliced chunk buffering on the frontend using requestAnimationFrame, throttling frame renders to a stable 60 FPS."
      },
      {
        title: "Database Write Bottlenecks",
        description: "Individual row inserts saturated database I/O bandwidth during stress bursts.",
        solution: "Built a micro-batching queue in Node.js that flushes 1,000 telemetry events per bulk SQL transaction."
      }
    ],

    result: "Reduced telemetry ingest latency from 3,400ms down to 42ms while cutting infrastructure costs by 38%.",
    liveDemo: "https://example.com/demo-1",
    githubUrl: "https://github.com/shrivasanth01/animated-portfolio",
    caseStudyUrl: "#"
  },
  {
    id: "02",
    title: "[PROJECT NAME 2] — Intelligent AI Engine & Workflow Automation",
    category: "FULL-STACK / AI / CLOUD WORKFLOW",
    summary: "Autonomous AI workspace enabling teams to orchestrate multi-model LLM pipelines, prompt chaining, and vector similarity search.",
    featured: true,

    problem: "Teams struggled with fragmented AI tools, inconsistent response schemas, and poor latency tracking across multi-step LLM operations.",
    approach: "Engineered a unified full-stack application featuring serverless SSE streaming, OpenAI/Anthropic SDK abstraction, and PGVector embeddings.",

    architectureNodes: [
      { id: "user", label: "Workspace UI", type: "frontend", icon: "Layout" },
      { id: "gateway", label: "Next.js Route Handlers", type: "api", icon: "Globe" },
      { id: "auth", label: "NextAuth & RBAC", type: "auth", icon: "Shield" },
      { id: "backend", label: "Python/Node AI Orchestrator", type: "backend", icon: "Cpu" },
      { id: "database", label: "PostgreSQL + PGVector", type: "database", icon: "Database" },
      { id: "cache", label: "Redis Cache Layer", type: "cache", icon: "Zap" },
      { id: "cloud", label: "AWS Lambda & Vercel", type: "infrastructure", icon: "Cloud" }
    ],

    techStack: {
      frontend: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      api: ["Server-Sent Events (SSE)", "REST APIs"],
      backend: ["Node.js", "Python", "LangChain / AI SDK"],
      database: ["PostgreSQL", "PGVector", "Prisma ORM"],
      infrastructure: ["AWS S3", "Vercel", "Docker"]
    },

    challenges: [
      {
        title: "Stream Parsing & Token Cancellation",
        description: "Orphaned HTTP connections wasted expensive model tokens when users navigated away.",
        solution: "Integrated AbortController hooks throughout SSE stream pipelines to cancel remote API requests instantly on disconnect."
      }
    ],

    result: "Accelerated developer productivity by 65% across 12 product teams with zero dropped streaming packets.",
    liveDemo: "https://example.com/demo-2",
    githubUrl: "https://github.com/shrivasanth01/animated-portfolio",
    caseStudyUrl: "#"
  },
  {
    id: "03",
    title: "[PROJECT NAME 3] — Enterprise Collaborative E-Commerce Platform",
    category: "FULL-STACK / WEB APPLICATION / E-COMMERCE",
    summary: "Sub-second performant e-commerce experience with real-time inventory synchronization, dynamic pricing engine, and resilient checkout.",
    featured: true,

    problem: "Monolithic storefronts suffered from slow initial load times (3.8s LCP) and inventory overselling during flash sales events.",
    approach: "Rebuilt storefront on Next.js SSG/ISR architecture combined with Redis distributed locks for transactional checkout safety.",

    architectureNodes: [
      { id: "user", label: "Customer Storefront", type: "frontend", icon: "Layout" },
      { id: "gateway", label: "GraphQL / REST Gateway", type: "api", icon: "Globe" },
      { id: "auth", label: "OAuth 2.0 / JWT", type: "auth", icon: "Shield" },
      { id: "backend", label: "Node.js Express Microservices", type: "backend", icon: "Server" },
      { id: "database", label: "MongoDB + Redis Lock", type: "database", icon: "Database" },
      { id: "cloud", label: "Vercel Edge Network", type: "infrastructure", icon: "Cloud" }
    ],

    techStack: {
      frontend: ["React 19", "Next.js", "Tailwind CSS", "Zustand"],
      api: ["GraphQL", "REST"],
      backend: ["Node.js", "Express", "Stripe API"],
      database: ["MongoDB", "Redis"],
      infrastructure: ["Vercel Edge", "AWS S3", "Cloudflare"]
    },

    challenges: [
      {
        title: "Flash Sale Race Conditions",
        description: "Simultaneous checkout attempts resulted in negative stock quantities.",
        solution: "Leveraged Redis distributed atomic locks (Redlock algorithm) to guarantee atomic inventory decrement."
      }
    ],

    result: "Achieved 99+ Lighthouse performance rating, 0.8s LCP, and handled over 10,000 simultaneous checkouts without inventory drift.",
    liveDemo: "https://example.com/demo-3",
    githubUrl: "https://github.com/shrivasanth01/animated-portfolio",
    caseStudyUrl: "#"
  }
];
