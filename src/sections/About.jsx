import { profileData } from '../data/profile';
import { Terminal, Shield, Cpu, Sparkles, CheckCircle2, Flame } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#090a0f] border-t border-slate-900 font-mono-tech relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs text-cyan-400 font-bold bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE ENGINEER</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              {profileData.bio.title}
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {profileData.bio.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {profileData.bio.pillars.map((pillar) => (
                <div key={pillar.label} className="glass-panel p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block">{pillar.label}</span>
                  <span className="text-xs font-bold text-cyan-300 mt-1 block">{pillar.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl border border-cyan-500/30 p-6 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-100">{profileData.name}</h3>
                    <span className="text-[10px] text-cyan-400">{profileData.role}</span>
                  </div>
                </div>
                <div className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center space-x-1">
                  <Flame className="w-3 h-3 text-emerald-400" />
                  <span>MODE: {profileData.currentMode}</span>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="space-y-3 text-xs">
                {profileData.quickSpecs.map((spec) => (
                  <div key={spec.label} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-slate-200 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Footer info */}
              <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-[10px] text-slate-500">
                <span>LOCATION: {profileData.location}</span>
                <span className="text-cyan-400 font-bold">SYSTEM PROFILE ID // 0x4F92</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
