export const skillsCategories = [
  {
    id: "frontend",
    name: "FRONTEND",
    description: "User Interfaces, Client Architecture & Design Systems",
    skills: [
      { name: "React", level: 95, useCase: "Component architecture, hooks, state management, SSR/CSR hydration", projects: ["[PROJECT NAME 1]", "[PROJECT NAME 3]"] },
      { name: "Next.js", level: 90, useCase: "App Router, SSG, ISR, Server Actions, Route Handlers", projects: ["[PROJECT NAME 2]", "[PROJECT NAME 3]"] },
      { name: "TypeScript", level: 92, useCase: "Strict type safety, generics, utility types, schema validation", projects: ["[PROJECT NAME 1]", "[PROJECT NAME 2]"] },
      { name: "JavaScript (ES6+)", level: 96, useCase: "Event loop, asynchronous patterns, DOM optimization", projects: ["All Projects"] },
      { name: "HTML5", level: 98, useCase: "Semantic document structure, ARIA accessibility, SEO metadata", projects: ["All Projects"] },
      { name: "CSS3 / Modern CSS", level: 95, useCase: "Flexbox, CSS Grid, custom properties, animations, responsiveness", projects: ["All Projects"] },
      { name: "Tailwind CSS", level: 94, useCase: "Utility-first design systems, custom themes, responsive layouts", projects: ["[PROJECT NAME 1]", "[PROJECT NAME 2]"] }
    ]
  },
  {
    id: "backend",
    name: "BACKEND",
    description: "Server Architectures, RESTful APIs & Real-Time Data Streams",
    skills: [
      { name: "Node.js", level: 92, useCase: "Event-driven runtime, non-blocking I/O, worker threads, microservices", projects: ["[PROJECT NAME 1]", "[PROJECT NAME 3]"] },
      { name: "Express", level: 90, useCase: "RESTful API routes, middleware validation, rate limiting, error handling", projects: ["[PROJECT NAME 1]", "[PROJECT NAME 3]"] },
      { name: "REST APIs", level: 95, useCase: "Stateless HTTP design, OpenAPI schemas, status code precision", projects: ["All Projects"] },
      { name: "Authentication", level: 88, useCase: "JWT tokens, OAuth 2.0, HTTP-only cookies, session management", projects: ["[PROJECT NAME 2]", "[PROJECT NAME 3]"] },
      { name: "WebSockets", level: 86, useCase: "Real-time bidirectional streams, pub/sub reconnection handling", projects: ["[PROJECT NAME 1]"] }
    ]
  },
  {
    id: "database",
    name: "DATABASE",
    description: "Relational, Document & In-Memory Data Storage Systems",
    skills: [
      { name: "PostgreSQL", level: 88, useCase: "Relational schema design, complex joins, indexing, ACID transactions", projects: ["[PROJECT NAME 1]", "[PROJECT NAME 2]"] },
      { name: "MongoDB", level: 85, useCase: "Document schemas, aggregation pipelines, dynamic query modeling", projects: ["[PROJECT NAME 3]"] },
      { name: "Redis", level: 84, useCase: "In-memory caching, distributed locks, rate limiting, pub/sub queues", projects: ["[PROJECT NAME 1]", "[PROJECT NAME 3]"] }
    ]
  },
  {
    id: "devops",
    name: "DEVOPS / CLOUD",
    description: "Containerization, Continuous Deployment & Infrastructure",
    skills: [
      { name: "Docker", level: 82, useCase: "Multi-stage container builds, docker-compose local dev environments", projects: ["[PROJECT NAME 1]"] },
      { name: "Git", level: 94, useCase: "Feature branching, interactive rebase, pull requests, semantic versioning", projects: ["All Projects"] },
      { name: "GitHub", level: 95, useCase: "Repository management, code review workflows, issue tracking", projects: ["All Projects"] },
      { name: "CI/CD", level: 84, useCase: "Automated test runs, linting checks, zero-downtime deployment pipelines", projects: ["[PROJECT NAME 1]", "[PROJECT NAME 2]"] },
      { name: "Cloud Deployment", level: 88, useCase: "Vercel edge deployment, environment variables, SSL/DNS setup", projects: ["All Projects"] }
    ]
  },
  {
    id: "tools",
    name: "TOOLS",
    description: "Development Environments, API Testing & Systems Utilities",
    skills: [
      { name: "VS Code", level: 96, useCase: "Primary IDE, workspace configurations, debugging tooling", projects: ["All Projects"] },
      { name: "Figma", level: 85, useCase: "UI wireframing, component design systems, developer handoff", projects: ["All Projects"] },
      { name: "Postman", level: 90, useCase: "API endpoint testing, environment variables, collection mocks", projects: ["All Projects"] },
      { name: "Linux", level: 84, useCase: "Bash scripting, process management, SSH server administration", projects: ["All Projects"] }
    ]
  }
];
