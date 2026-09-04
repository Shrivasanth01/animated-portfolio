import { useState } from 'react';
import { Lightbulb, Layout, Code2, Globe, Server, Database, Cloud, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const pipelineStages = [
  {
    id: "idea",
    name: "IDEA",
    icon: Lightbulb,
    tech: ["Product Spec", "Architecture Design", "System Requirements"],
    whatIBuild: "Translate complex business demands into strict engineering specifications, data flow diagrams, and component boundaries.",
    relevantProject: "[PROJECT NAME 1]",
    codeBlueprint: "// System Definition\ntype SystemSpec = {\n  scale: '50k ops/sec';\n  targetLatency: '<50ms';\n};"
  },
  {
    id: "uxui",
    name: "UX / UI",
    icon: Layout,
    tech: ["Figma", "Design Systems", "User Journeys", "Accessibility (a11y)"],
    whatIBuild: "Design glassmorphic component libraries, responsive grids, dark OS interfaces, and intuitive user navigation flows.",
    relevantProject: "Portfolio System",
    codeBlueprint: "/* Design System Tokens */\n:root {\n  --color-accent: #00f0ff;\n  --glass-blur: 16px;\n}"
  },
  {
    id: "frontend",
    name: "FRONTEND",
    icon: Code2,
    tech: ["React 19", "Next.js App Router", "TypeScript", "Tailwind CSS"],
    whatIBuild: "Engineered single-page and server-rendered web applications with zero hydration flash and sub-100ms LCP times.",
    relevantProject: "[PROJECT NAME 3]",
    codeBlueprint: "export default function App() {\n  return <DashboardState />;\n}"
  },
  {
    id: "apilayer",
    name: "API LAYER",
    icon: Globe,
    tech: ["RESTful Endpoints", "WebSockets", "GraphQL", "SSE"],
    whatIBuild: "Design type-safe API gateways, middleware authentication wrappers, payload validation schemas, and rate-limit controls.",
    relevantProject: "[PROJECT NAME 1]",
    codeBlueprint: "app.post('/api/v1/telemetry', validate(Schema), async (req, res) => {\n  return res.json({ status: 200 });\n});"
  },
  {
    id: "backend",
    name: "BACKEND",
    icon: Server,
    tech: ["Node.js", "Express", "Python", "Worker Threads"],
    whatIBuild: "High-concurrency microservices, background job workers, transaction processors, and pub/sub message brokers.",
    relevantProject: "[PROJECT NAME 2]",
    codeBlueprint: "const worker = new Worker('./processor.js', { workerData: payload });"
  },
  {
    id: "database",
    name: "DATABASE",
    icon: Database,
    tech: ["PostgreSQL", "MongoDB", "Redis Streams", "Prisma ORM"],
    whatIBuild: "Normalized relational schemas, B-tree query indexing, Redis atomic locking, and vector embedding similarity search.",
    relevantProject: "[PROJECT NAME 1]",
    codeBlueprint: "CREATE INDEX idx_telemetry_timestamp ON metrics (timestamp DESC);"
  },
  {
    id: "infrastructure",
    name: "INFRASTRUCTURE",
    icon: Cloud,
    tech: ["Docker", "AWS S3/Lambda", "Vercel Edge", "Linux Admin"],
    whatIBuild: "Multi-stage containerized environments, isolated microservice networks, and resilient object storage configurations.",
    relevantProject: "[PROJECT NAME 2]",
    codeBlueprint: "FROM node:20-alpine AS runner\nWORKDIR /app\nCMD [\"npm\", \"start\"]"
  },
  {
    id: "production",
    name: "PRODUCTION",
    icon: Rocket,
    tech: ["GitHub Actions CI/CD", "Sentry", "Lighthouse 99+", "SSL/DNS"],
    whatIBuild: "Automated zero-downtime continuous deployment pipelines, live error monitoring, and performance benchmarking.",
    relevantProject: "All Production Systems",
    codeBlueprint: "# CI Pipeline\n- run: npm run test && npm run build"
  }
];

export default function InteractiveArchitecture() {
  const [selectedStage, setSelectedStage] = useState(pipelineStages[2]); // Default FRONTEND

  return (
    <section className="py-24 bg-[#08090d] border-t border-slate-900 font-mono-tech relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            SYSTEM ARCHITECTURE PIPELINE
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            WHAT I ACTUALLY DO
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            I don't just write code — I architect and engineer products end-to-end through every layer of the modern tech stack.
          </p>
        </div>

        {/* Pipeline Horizontal Flow Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {pipelineStages.map((stage, idx) => {
            const IconComp = stage.icon;
            const isSelected = selectedStage.id === stage.id;

            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className={`flex flex-col items-center p-3 rounded-xl border transition-all cursor-pointer text-center relative ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-105 z-10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
                data-cursor="SELECT"
              >
                <div className={`p-2 rounded-lg mb-2 ${isSelected ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800'}`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold tracking-wider">{stage.name}</span>
                <span className="text-[8px] text-slate-500 mt-1">STEP 0{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Inspector */}
        <div className="glass-panel rounded-2xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-cyan-500 text-slate-950 rounded-xl font-bold">
                  {(() => {
                    const IconComp = selectedStage.icon;
                    return <IconComp className="w-5 h-5" />;
                  })()}
                </div>
                <div>
                  <span className="text-[10px] text-cyan-400 uppercase tracking-widest block font-bold">LAYER INSPECTOR</span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100">{selectedStage.name} ARCHITECTURE</h3>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedStage.whatIBuild}
              </p>

              {/* Technologies list */}
              <div>
                <span className="text-[10px] text-slate-400 font-bold block mb-2 uppercase">TECHNOLOGIES & TOOLING:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.tech.map((t) => (
                    <span key={t} className="text-xs bg-slate-900 text-cyan-300 px-3 py-1 rounded-lg border border-cyan-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center space-x-2">
                <span className="text-slate-500">RELEVANT IMPLEMENTATION:</span>
                <span className="text-emerald-400 font-bold">{selectedStage.relevantProject}</span>
              </div>
            </div>

            {/* Right Blueprint Code Panel */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono-tech text-xs space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-900 pb-2">
                  <span>LOGIC_BLUEPRINT.ts</span>
                  <span className="text-cyan-400">LAYER 0{pipelineStages.findIndex(s => s.id === selectedStage.id) + 1}</span>
                </div>
                <pre className="text-cyan-300/90 whitespace-pre-wrap overflow-x-auto p-2 bg-slate-900/60 rounded border border-slate-800 text-[11px]">
                  <code>{selectedStage.codeBlueprint}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
