export const projectsData = [
  {
    id: "01",
    title: "ResQNet — Decentralized Disaster Response System",
    category: "DISTRIBUTED / OFFLINE-FIRST / MESH / CRYPTOGRAPHY",
    summary: "Offline-first emergency communication platform and real-time responder dashboard designed to maintain P2P connectivity when internet infrastructure fails.",
    featured: true,
    date: "August 2026 – Present",

    problem: "During major natural disasters, cellular networks and internet infrastructure collapse completely, leaving victims stranded and severing real-time communication between emergency response teams.",
    approach: "Architected a decentralized, offline-first mesh network leveraging Bluetooth Low Energy (BLE) peer-to-peer data relays, local SQLite capsules, AES-256-GCM encryption, Ed25519 digital signatures, and a real-time FastAPI incident command dashboard.",

    architectureNodes: [
      { id: "mobile", label: "React Native App (BLE)", type: "client", icon: "Layout" },
      { id: "mesh", label: "BLE P2P Mesh Relay", type: "network", icon: "Zap" },
      { id: "auth", label: "Ed25519 & AES-256-GCM", type: "crypto", icon: "Shield" },
      { id: "storage", label: "Local SQLite Capsule", type: "database", icon: "Database" },
      { id: "backend", label: "FastAPI Ingestion Node", type: "backend", icon: "Server" },
      { id: "dashboard", label: "Next.js Incident Dashboard", type: "frontend", icon: "Globe" },
      { id: "cloud", label: "Vercel / Cloud Bridge", type: "infrastructure", icon: "Cloud" }
    ],

    techStack: {
      frontend: ["React Native", "Next.js", "TypeScript", "Tailwind CSS"],
      networking: ["BLE (Bluetooth GATT)", "P2P Mesh Relays", "Offline-First Sync"],
      backend: ["FastAPI", "Python", "Node.js"],
      security: ["AES-256-GCM", "Ed25519 Signatures", "SHA-256 Hash Chains", "Replay Protection"],
      database: ["SQLite (Local)", "PostgreSQL (Command Central)"]
    },

    challenges: [
      {
        title: "Peer-to-Peer Relay Integrity & Replay Attacks",
        description: "Adversaries could re-transmit old emergency payloads to trigger false alarms.",
        solution: "Implemented signed hash-chain verification with Ed25519 keys and millisecond timestamp replay windows."
      },
      {
        title: "Zero-Bandwidth Synchronization",
        description: "Transmitting critical SOS data capsules without active internet or cellular connectivity.",
        solution: "Engineered automatic GATT characteristic advertising over BLE so nearby responder nodes hop data packets peer-to-peer."
      }
    ],

    result: "Guaranteed tamper-proof, zero-internet emergency SOS packet propagation across multi-hop BLE peer devices.",
    liveDemo: "https://github.com/shrivasanth01",
    githubUrl: "https://github.com/shrivasanth01/animated-portfolio",
    caseStudyUrl: "#"
  },
  {
    id: "02",
    title: "AI-Powered Behavioral Biometric Authentication & Risk System",
    category: "AI / ML / CYBERSECURITY / BIOMETRICS",
    summary: "Continuous authentication engine leveraging machine learning anomaly detection to continuously evaluate user interaction risk scores.",
    featured: true,
    date: "February – March 2026",

    problem: "Traditional single-point authentication (passwords/2FA) cannot detect session hijacking, credential theft, or unauthorized takeover after login.",
    approach: "Built a continuous behavioral biometric authentication platform that continuously monitors micro-interaction telemetry (keystroke dynamics, cursor velocity, navigation cadence) to compute dynamic risk scores in real time.",

    architectureNodes: [
      { id: "user", label: "Client Telemetry Collector", type: "frontend", icon: "Layout" },
      { id: "gateway", label: "REST / Fast API Gateway", type: "api", icon: "Globe" },
      { id: "ai", label: "Scikit-Learn ML Model", type: "ai", icon: "Cpu" },
      { id: "evaluator", label: "Risk Assessment Engine", type: "security", icon: "Shield" },
      { id: "database", label: "PostgreSQL Feature Store", type: "database", icon: "Database" }
    ],

    techStack: {
      frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS"],
      ai_ml: ["Machine Learning", "Anomaly Detection", "Behavioral Biometrics", "Risk Assessment"],
      backend: ["FastAPI", "Python"],
      database: ["PostgreSQL"]
    },

    challenges: [
      {
        title: "Micro-Telemetry Latency",
        description: "Processing continuous user interaction telemetry without introducing client-side input lag.",
        solution: "Utilized asynchronous event buffering and background ML feature extraction pipelines."
      }
    ],

    result: "Achieved continuous post-login threat evaluation with instantaneous risk score recalculation.",
    liveDemo: "https://github.com/shrivasanth01",
    githubUrl: "https://github.com/shrivasanth01/animated-portfolio",
    caseStudyUrl: "#"
  },
  {
    id: "03",
    title: "IoT-Based Adaptive Smart Lighting System Using ESP32",
    category: "IoT / EMBEDDED SYSTEMS / SENSORS",
    summary: "Intelligent ambient light sensing platform on ESP32 microcontrollers for dynamic illumination and real-time power management.",
    featured: true,
    date: "January – May 2026",

    problem: "Static commercial lighting systems consume unnecessary electrical power by maintaining constant brightness regardless of natural daylight availability.",
    approach: "Designed embedded real-time sensor processing algorithms on ESP32 microcontrollers with ambient light sensors to dynamically adjust illumination levels and minimize power consumption.",

    architectureNodes: [
      { id: "sensor", label: "Ambient Light Sensor", type: "sensor", icon: "Zap" },
      { id: "esp32", label: "ESP32 Microcontroller", type: "hardware", icon: "Cpu" },
      { id: "algo", label: "Embedded Control System", type: "firmware", icon: "Server" },
      { id: "power", label: "Power Management Unit", type: "power", icon: "Database" }
    ],

    techStack: {
      embedded: ["ESP32", "C / C++", "Embedded Control Systems"],
      hardware: ["Ambient Light Sensors", "PWM Illumination Controllers"],
      domain: ["IoT", "Real-Time Sensor Processing", "Intelligent Power Management"]
    },

    challenges: [
      {
        title: "Real-Time Noise Filtering",
        description: "Transient shadows caused erratic brightness fluctuations.",
        solution: "Implemented moving-average digital filtering algorithms directly in C++ firmware."
      }
    ],

    result: "Optimized lighting power consumption while delivering smooth, flicker-free illumination adjustments.",
    liveDemo: "https://github.com/shrivasanth01",
    githubUrl: "https://github.com/shrivasanth01/animated-portfolio",
    caseStudyUrl: "#"
  },
  {
    id: "04",
    title: "Skyloom — Weather Data Analytics Dashboard for NASA",
    category: "FULL-STACK / DATA VISUALIZATION / NASA API",
    summary: "Full-stack weather data analytics dashboard built for the NASA POWER API dataset featuring location-based insights.",
    featured: false,
    date: "October 2025",

    problem: "Raw meteorological datasets are complex and difficult for non-specialists to analyze quickly.",
    approach: "Engineered a Next.js and Express.js full-stack platform integrated with PostgreSQL and the NASA POWER API to render interactive weather visualizations.",

    architectureNodes: [
      { id: "ui", label: "Next.js Dashboard", type: "frontend", icon: "Layout" },
      { id: "api", label: "Express.js API", type: "backend", icon: "Server" },
      { id: "nasa", label: "NASA POWER API", type: "external", icon: "Globe" },
      { id: "db", label: "PostgreSQL Database", type: "database", icon: "Database" }
    ],

    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Express.js", "Node.js", "NASA POWER API"],
      database: ["PostgreSQL"]
    },

    challenges: [
      {
        title: "Large Dataset Visualization",
        description: "Rendering multi-year climate data without crashing browser memory.",
        solution: "Aggregated spatial historical data on PostgreSQL backend prior to streaming to frontend chart components."
      }
    ],

    result: "Delivered intuitive weather visualizations and location analytics for NASA POWER API datasets.",
    liveDemo: "https://github.com/shrivasanth01",
    githubUrl: "https://github.com/shrivasanth01/animated-portfolio",
    caseStudyUrl: "#"
  }
];
