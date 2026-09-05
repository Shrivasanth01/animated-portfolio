import { useState } from 'react';
import { Lightbulb, Layout, Code2, Globe, Server, Database, Cloud, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const pipelineStages = [
  {
    id: "idea",
    name: "IDEA",
    icon: Lightbulb,
    tech: ["Product Spec", "Architecture Design", "Disaster Mesh Spec"],
    whatIBuild: "Translate real-world problems (such as offline emergency communication) into strict software engineering specifications, cryptographic primitives, and data relay boundaries.",
    relevantProject: "ResQNet",
    codeBlueprint: "// System Definition\ntype ResQNetSpec = {\n  meshProtocol: 'BLE GATT';\n  encryption: 'AES-256-GCM';\n  signature: 'Ed25519';\n};"
  },
  {
    id: "uxui",
    name: "UX / UI",
    icon: Layout,
    tech: ["Figma", "React Native UI", "Spatial OS Windows", "Accessibility"],
    whatIBuild: "Design spatial desktop OS interfaces, command central incident dashboards, and responsive mobile disaster emergency views.",
    relevantProject: "Spatial Desktop OS",
    codeBlueprint: "/* Cyber Emerald Tokens */\n:root {\n  --accent-color: #10b981;\n  --bg-primary: #040d0a;\n}"
  },
  {
    id: "frontend",
    name: "FRONTEND",
    icon: Code2,
    tech: ["React.js", "Next.js App Router", "TypeScript", "Tailwind CSS"],
    whatIBuild: "Engineered single-page apps, full-stack NASA climate data dashboards, and real-time responder command centers.",
    relevantProject: "Skyloom NASA Dashboard",
    codeBlueprint: "export default function WeatherDashboard() {\n  return <NASADataStream />;\n}"
  },
  {
    id: "apilayer",
    name: "API LAYER",
    icon: Globe,
    tech: ["FastAPI", "RESTful Endpoints", "BLE GATT Profiles", "P2P Relays"],
    whatIBuild: "Design high-performance Python FastAPI endpoints, BLE characteristic listeners, payload validation schemas, and rate-limit security.",
    relevantProject: "ResQNet Ingestion Node",
    codeBlueprint: "@app.post('/api/v1/sos')\nasync function ingest_sos(capsule: CapsuleSchema):\n    return verify_and_store(capsule)"
  },
  {
    id: "backend",
    name: "BACKEND",
    icon: Server,
    tech: ["Python", "FastAPI", "Node.js", "Express.js"],
    whatIBuild: "High-concurrency microservices, AI biometrics anomaly evaluators, and background data processing pipelines.",
    relevantProject: "AI Behavioral Biometrics",
    codeBlueprint: "class AnomalyEvaluator:\n    def compute_risk_score(self, telemetry):\n        return self.model.predict_proba(telemetry)"
  },
  {
    id: "database",
    name: "DATABASE",
    icon: Database,
    tech: ["SQLite", "PostgreSQL", "MySQL", "MongoDB"],
    whatIBuild: "Offline-first mobile SQLite storage capsules, relational SQL optimization, and feature store caching.",
    relevantProject: "ResQNet / Skyloom",
    codeBlueprint: "CREATE TABLE emergency_capsules (\n  id UUID PRIMARY KEY,\n  payload BLOB,\n  signature TEXT NOT NULL\n);"
  },
  {
    id: "infrastructure",
    name: "INFRASTRUCTURE",
    icon: Cloud,
    tech: ["Docker", "Git", "GitHub Actions CI/CD", "Linux"],
    whatIBuild: "Containerized development environments, automated GitHub CI/CD build tests, and serverless Vercel edge deployments.",
    relevantProject: "All Infrastructure",
    codeBlueprint: "FROM python:3.11-slim\nWORKDIR /app\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\"]"
  },
  {
    id: "production",
    name: "PRODUCTION",
    icon: Rocket,
    tech: ["Vercel", "Netlify", "Lighthouse 99+", "Zero-Downtime"],
    whatIBuild: "Automated continuous delivery pipelines, real-time error logging, and high-performance production builds.",
    relevantProject: "Production Systems",
    codeBlueprint: "# CI/CD Workflow\n- name: Build & Verify\n  run: npm run build"
  }
];

export default function InteractiveArchitecture() {
  const [selectedStage, setSelectedStage] = useState(pipelineStages[2]);

  return (
    <section className="py-24 bg-[#040d0a] border-t border-slate-900 font-mono-tech relative overflow-hidden select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            SYSTEM ARCHITECTURE PIPELINE
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            WHAT I ACTUALLY DO
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            End-to-end system engineering across every layer of modern software, AI, and distributed hardware.
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
                    ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105 z-10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
                data-cursor="SELECT"
              >
                <div className={`p-2 rounded-lg mb-2 ${isSelected ? 'bg-emerald-400 text-slate-950 font-bold' : 'bg-slate-800'}`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold tracking-wider">{stage.name}</span>
                <span className="text-[8px] text-slate-500 mt-1">STEP 0{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Inspector */}
        <div className="os-glass-panel rounded-2xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-emerald-400 text-slate-950 rounded-xl font-bold">
                  {(() => {
                    const IconComp = selectedStage.icon;
                    return <IconComp className="w-5 h-5" />;
                  })()}
                </div>
                <div>
                  <span className="text-[10px] text-emerald-400 uppercase tracking-widest block font-bold">LAYER INSPECTOR</span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100">{selectedStage.name} ARCHITECTURE</h3>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {selectedStage.whatIBuild}
              </p>

              {/* Technologies list */}
              <div>
                <span className="text-[10px] text-slate-400 font-bold block mb-2 uppercase">TECHNOLOGIES & TOOLING:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.tech.map((t) => (
                    <span key={t} className="text-xs bg-slate-900 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-500/20 font-mono-tech">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center space-x-2">
                <span className="text-slate-500">RELEVANT IMPLEMENTATION:</span>
                <span className="text-emerald-300 font-bold">{selectedStage.relevantProject}</span>
              </div>
            </div>

            {/* Right Blueprint Code Panel */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono-tech text-xs space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-900 pb-2">
                  <span>LOGIC_BLUEPRINT.ts</span>
                  <span className="text-emerald-400">LAYER 0{pipelineStages.findIndex(s => s.id === selectedStage.id) + 1}</span>
                </div>
                <pre className="text-emerald-300/90 whitespace-pre-wrap overflow-x-auto p-2 bg-slate-900/60 rounded border border-slate-800 text-[11px]">
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
