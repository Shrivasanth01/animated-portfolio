import { useState, useEffect } from 'react';
import { Layout, Globe, Shield, Server, Database, Zap, Cloud, Cpu, ArrowRight } from 'lucide-react';

const iconMap = {
  Layout: Layout,
  Globe: Globe,
  Shield: Shield,
  Server: Server,
  Database: Database,
  Zap: Zap,
  Cloud: Cloud,
  Cpu: Cpu
};

export default function ArchitectureDiagram({ nodes }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!nodes || nodes.length === 0) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % nodes.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [nodes]);

  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="w-full os-glass-panel rounded-xl p-6 border border-emerald-500/20 shadow-xl overflow-hidden font-mono-tech">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-slate-300 tracking-wider">SYSTEM DATA FLOW PIPELINE</span>
        </div>
        <span className="text-[10px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
          ACTIVE STEP: {nodes[activeStep]?.label || 'ONLINE'}
        </span>
      </div>

      {/* Horizontal Flow Diagram for Desktop */}
      <div className="hidden md:flex items-center justify-between relative py-4 px-2">
        {nodes.map((node, index) => {
          const IconComponent = iconMap[node.icon] || Server;
          const isActive = index === activeStep;

          return (
            <div key={node.id} className="flex items-center flex-1 relative">
              {/* Node Card */}
              <div
                onClick={() => setActiveStep(index)}
                className={`relative flex flex-col items-center p-3 rounded-lg border transition-all cursor-pointer z-10 w-28 ${
                  isActive
                    ? 'bg-emerald-950/90 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-md flex items-center justify-center mb-2 transition-colors ${
                    isActive ? 'bg-emerald-400 text-slate-950 shadow-md font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-center text-slate-200 line-clamp-1">
                  {node.label}
                </span>
                <span className="text-[8px] text-slate-500 uppercase mt-0.5">{node.type}</span>
              </div>

              {/* Connecting Line & Pulse Particle */}
              {index < nodes.length - 1 && (
                <div className="flex-1 h-0.5 bg-slate-800 mx-1 relative overflow-hidden">
                  <div
                    className={`absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-700 ${
                      isActive ? 'animate-stream' : 'opacity-20'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Vertical Flow Layout for Mobile */}
      <div className="md:hidden flex flex-col space-y-3">
        {nodes.map((node, index) => {
          const IconComponent = iconMap[node.icon] || Server;
          const isActive = index === activeStep;

          return (
            <div
              key={node.id}
              onClick={() => setActiveStep(index)}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-950/80 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-md ${isActive ? 'bg-emerald-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">{node.label}</div>
                  <div className="text-[9px] text-slate-500 uppercase">{node.type}</div>
                </div>
              </div>
              {isActive && <span className="text-[10px] text-emerald-400 font-bold">PROCESSING ›</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
