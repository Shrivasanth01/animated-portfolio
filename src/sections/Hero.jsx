import { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Zap, Activity, ArrowRight, Radio, Cpu, Layers, Server, Database, Globe } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero({ onLaunchApp }) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 100);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleViewWork = (e) => {
    e.preventDefault();
    if (onLaunchApp) {
      onLaunchApp('work');
    }
    const elem = document.getElementById('work');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConnect = (e) => {
    e.preventDefault();
    if (onLaunchApp) {
      onLaunchApp('contact');
    }
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center bg-grid-pattern bg-radial-glow overflow-hidden select-text">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & Headline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator bar */}
            <div className="inline-flex items-center space-x-3 px-3.5 py-1.5 glass-panel rounded-full border border-emerald-500/30 bg-emerald-950/20 font-mono-tech text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-emerald-300 font-bold tracking-wide">{profileData.status}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">{profileData.location}</span>
            </div>

            {/* Developer Title */}
            <div>
              <div className="font-mono-tech text-xs font-bold text-emerald-400 tracking-widest uppercase mb-2 flex items-center space-x-2">
                <Terminal className="w-4 h-4" />
                <span>{profileData.name} // {profileData.role}</span>
              </div>
              
              <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.08]">
                BUILDING INTELLIGENT, SECURE, <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  AND RESILIENT DIGITAL SYSTEMS.
                </span>
              </h1>
            </div>

            {/* Primary Positioning Quote */}
            <p className="text-base sm:text-xl font-medium text-emerald-300/90 font-mono-tech border-l-2 border-emerald-400 pl-4 py-1">
              "{profileData.primaryPositioning}"
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              {profileData.tagline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono-tech">
              <button
                onClick={handleViewWork}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all flex items-center space-x-2 cursor-pointer text-xs tracking-wider"
                data-cursor="WORK"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleConnect}
                className="px-6 py-3.5 glass-panel hover:bg-slate-800/80 text-slate-200 font-bold rounded-xl border border-white/10 hover:border-emerald-500/40 transition-all flex items-center space-x-2 cursor-pointer text-xs tracking-wider"
                data-cursor="CONNECT"
              >
                <Radio className="w-4 h-4 text-emerald-400" />
                <span>LET'S CONNECT</span>
              </button>
            </div>

          </div>

          {/* Right Column: Live Developer Command Center System Panel */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl border border-emerald-500/30 p-6 shadow-2xl relative overflow-hidden font-mono-tech space-y-6">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-bold text-slate-300 ml-2">SYSTEM_COMMAND_CENTER</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  SYS_OK
                </span>
              </div>

              {/* Status Grid Panel */}
              <div className="space-y-3">
                <div className="text-[11px] font-bold text-slate-400 tracking-widest flex items-center justify-between">
                  <span>SYSTEM STATUS</span>
                  <span className="text-emerald-400">━━━━━━━━━━━━━━━━━━</span>
                </div>

                <div className="space-y-2">
                  {[
                    { label: "Frontend", status: profileData.systemTelemetry.frontend, icon: Globe },
                    { label: "Backend", status: profileData.systemTelemetry.backend, icon: Server },
                    { label: "Database", status: profileData.systemTelemetry.database, icon: Database },
                    { label: "APIs", status: profileData.systemTelemetry.apis, icon: Cpu },
                    { label: "Deployment", status: profileData.systemTelemetry.deployment, icon: Zap }
                  ].map((item) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-colors"
                      >
                        <div className="flex items-center space-x-3 text-slate-300 text-xs font-medium">
                          <IconComp className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1" />
                          {item.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-[11px]">
                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">RESPONSE LATENCY</span>
                  <span className="text-emerald-300 font-bold text-sm">{profileData.systemTelemetry.latency}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">SYS UPTIME</span>
                  <span className="text-emerald-400 font-bold text-sm">{profileData.systemTelemetry.uptime}</span>
                </div>
              </div>

              {/* Animated Scanline overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-10 scanlines" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}