export const skillsCategories = [
  {
    id: "frontend",
    name: "FRONTEND",
    description: "Web & Mobile Interfaces, Design Systems & Client Applications",
    skills: [
      { name: "React.js", level: 92, useCase: "Component architecture, hooks, state management, SPA interfaces", projects: ["ResQNet", "AI Biometrics"] },
      { name: "Next.js", level: 90, useCase: "App Router, SSR, SSG, Route Handlers, NASA API Dashboard", projects: ["ResQNet", "Skyloom"] },
      { name: "React Native", level: 88, useCase: "Cross-platform mobile apps, BLE hardware device integration", projects: ["ResQNet"] },
      { name: "TypeScript", level: 90, useCase: "Strict type safety, interfaces, schema validation", projects: ["ResQNet", "Skyloom"] },
      { name: "JavaScript (ES6+)", level: 95, useCase: "Asynchronous processing, DOM manipulation, event loop", projects: ["All Projects"] },
      { name: "HTML5 & CSS3", level: 96, useCase: "Semantic document structure, responsive Tailwind layouts", projects: ["All Projects"] }
    ]
  },
  {
    id: "backend",
    name: "BACKEND",
    description: "High-Performance APIs, Microservices & Server Runtimes",
    skills: [
      { name: "FastAPI", level: 90, useCase: "High-speed Python APIs, async endpoints, Pydantic data schemas", projects: ["ResQNet", "AI Biometrics"] },
      { name: "Python", level: 92, useCase: "AI/ML modeling, FastAPI backends, data processing", projects: ["AI Biometrics", "ResQNet"] },
      { name: "Node.js", level: 88, useCase: "Event-driven runtime, non-blocking I/O, serverless routes", projects: ["Skyloom", "ResQNet"] },
      { name: "Express.js", level: 88, useCase: "RESTful API routes, middleware validation, rate limiting", projects: ["Skyloom"] },
      { name: "RESTful APIs", level: 95, useCase: "Stateless HTTP endpoint design, status code precision", projects: ["All Projects"] },
      { name: "JWT", level: 90, useCase: "Secure token signing, claims verification, authentication", projects: ["AI Biometrics", "Skyloom"] }
    ]
  },
  {
    id: "database",
    name: "DATABASES",
    description: "Relational, Document, Embedded & Real-Time Storage",
    skills: [
      { name: "PostgreSQL", level: 88, useCase: "Relational schemas, SQL query optimization, NASA datasets", projects: ["Skyloom", "ResQNet"] },
      { name: "MySQL", level: 85, useCase: "Relational tables, transactions, foreign key constraints", projects: ["Academic / Projects"] },
      { name: "SQLite", level: 90, useCase: "Offline-first embedded mobile storage, emergency data capsules", projects: ["ResQNet"] },
      { name: "MongoDB", level: 84, useCase: "Document schemas, dynamic query models, BSON storage", projects: ["Web Applications"] },
      { name: "Firebase", level: 85, useCase: "Real-time database, authentication, push notifications", projects: ["Mobile Apps"] }
    ]
  },
  {
    id: "ai_ml",
    name: "AI / ML",
    description: "Machine Learning, Anomaly Detection & Behavioral Biometrics",
    skills: [
      { name: "Machine Learning", level: 85, useCase: "Pattern recognition, predictive modeling, feature engineering", projects: ["AI Biometrics", "Fraud Detection"] },
      { name: "Anomaly Detection", level: 88, useCase: "Identifying statistical deviations & suspicious interaction threats", projects: ["AI Biometrics", "Fraud Detection"] },
      { name: "Behavioral Biometrics", level: 86, useCase: "Keystroke dynamics, cursor telemetry, continuous user verification", projects: ["AI Biometrics"] },
      { name: "Risk Assessment", level: 86, useCase: "Dynamic risk scoring, automated security response escalation", projects: ["AI Biometrics"] }
    ]
  },
  {
    id: "systems",
    name: "SYSTEMS & NETWORKING",
    description: "Mesh Relays, BLE, P2P & Offline-First Protocols",
    skills: [
      { name: "Bluetooth Low Energy (BLE)", level: 88, useCase: "BLE GATT profiles, peripheral advertising, data packet hopping", projects: ["ResQNet"] },
      { name: "Mesh Networking & P2P", level: 86, useCase: "Decentralized peer-to-peer data relays without internet", projects: ["ResQNet"] },
      { name: "Offline-First Architecture", level: 90, useCase: "Local-first storage, sync queues, disconnected data capsules", projects: ["ResQNet"] }
    ]
  },
  {
    id: "security",
    name: "SECURITY & CRYPTOGRAPHY",
    description: "Encryption, Digital Signatures & Tamper Protection",
    skills: [
      { name: "AES-256-GCM", level: 88, useCase: "Authenticated symmetric payload encryption", projects: ["ResQNet"] },
      { name: "Ed25519 Signatures", level: 86, useCase: "Asymmetric public-key payload signing & verification", projects: ["ResQNet"] },
      { name: "SHA-256 Hash Chains", level: 90, useCase: "Replay protection, immutable data capsule audit trails", projects: ["ResQNet"] }
    ]
  },
  {
    id: "iot",
    name: "IOT / EMBEDDED",
    description: "ESP32, Microcontrollers, Sensors & Real-Time Control",
    skills: [
      { name: "ESP32", level: 88, useCase: "Microcontroller programming, GPIO, Wi-Fi / BLE hardware", projects: ["Smart Lighting"] },
      { name: "C / C++", level: 86, useCase: "Embedded control algorithms, low-level sensor signal processing", projects: ["Smart Lighting"] },
      { name: "Sensor Processing", level: 86, useCase: "Ambient light sensing, digital filtering, power management", projects: ["Smart Lighting"] }
    ]
  },
  {
    id: "tools",
    name: "DEVOPS & TOOLS",
    description: "Version Control, Containerization & CI/CD Deployment",
    skills: [
      { name: "Git & GitHub", level: 95, useCase: "Version control, branching, PR workflows, open source", projects: ["All Projects"] },
      { name: "Docker", level: 82, useCase: "Containerization, docker-compose local dev environments", projects: ["Full-Stack Apps"] },
      { name: "Linux", level: 85, useCase: "Bash scripting, process management, SSH server admin", projects: ["All Projects"] },
      { name: "Vercel / Netlify", level: 92, useCase: "Serverless web deployment, environment variables, CI/CD", projects: ["ResQNet", "Skyloom"] }
    ]
  }
];
