import { useState } from 'react';
import { Terminal, Layers, Cpu, Code2, Calendar, FileText, Send, Sparkles, Folder } from 'lucide-react';

export const desktopApps = [
  { id: 'hero', name: 'Command Center', icon: Terminal, desc: 'Hero & System Telemetry' },
  { id: 'architecture', name: 'Architecture Pipeline', icon: Cpu, desc: '9-Stage Stack Pipeline' },
  { id: 'work', name: 'Case Studies', icon: Folder, desc: 'Featured Case Studies' },
  { id: 'lab', name: 'Tech Lab', icon: Layers, desc: 'Interactive Engineering Lab' },
  { id: 'stack', name: 'Tech Universe', icon: Code2, desc: 'Skill Ecosystem' },
  { id: 'journey', name: 'Journey', icon: Calendar, desc: 'Engineering Evolution' },
  { id: 'resume', name: 'Resume', icon: FileText, desc: 'One-Page CV' },
  { id: 'contact', name: 'Terminal', icon: Send, desc: 'Contact Transmission' }
];

export default function OSDock({ openWindowIds, activeWindowId, onLaunchApp }) {
  const [hoveredApp, setHoveredApp] = useState(null);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 select-none">
      <div className="glass-panel px-3 py-2 rounded-2xl border border-emerald-500/30 shadow-2xl flex items-center space-x-2 bg-slate-950/70 backdrop-blur-2xl">
        {desktopApps.map((app) => {
          const IconComp = app.icon;
          const isOpen = openWindowIds.includes(app.id);
          const isActive = activeWindowId === app.id;

          return (
            <div key={app.id} className="relative group">
              {/* Tooltip Label */}
              {hoveredApp === app.id && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 glass-panel rounded-lg text-[10px] font-mono-tech font-bold text-slate-100 whitespace-nowrap shadow-xl border border-emerald-500/30 pointer-events-none animate-in fade-in duration-100">
                  {app.name}
                </div>
              )}

              {/* Launcher Icon Button */}
              <button
                onClick={() => onLaunchApp(app.id)}
                onMouseEnter={() => setHoveredApp(app.id)}
                onMouseLeave={() => setHoveredApp(null)}
                className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer relative ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110'
                    : isOpen
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`}
                data-cursor={app.name.toUpperCase()}
              >
                <IconComp className="w-5 h-5" />

                {/* Active Dot indicator under icon */}
                {isOpen && (
                  <span
                    className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full transition-all ${
                      isActive ? 'bg-slate-950' : 'bg-emerald-400'
                    }`}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
