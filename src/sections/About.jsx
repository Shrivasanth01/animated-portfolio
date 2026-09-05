import { profileData } from '../data/profile';
import { Terminal, Shield, Cpu, Sparkles, CheckCircle2, Flame, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#040d0a] border-t border-slate-900 font-mono-tech relative select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs text-emerald-400 font-bold bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
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
                <div key={pillar.label} className="os-glass-panel p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block">{pillar.label}</span>
                  <span className="text-xs font-bold text-emerald-300 mt-1 block font-mono-tech">{pillar.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile Card */}
          <div className="lg:col-span-5">
            <div className="os-glass-panel rounded-2xl border border-emerald-500/30 p-6 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-100">{profileData.name}</h3>
                    <span className="text-[10px] text-emerald-400">{profileData.role}</span>
                  </div>
                </div>
                <div className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center space-x-1">
                  <Flame className="w-3 h-3 text-emerald-400" />
                  <span>MODE: {profileData.currentMode}</span>
                </div>
              </div>

              {/* Education Banner */}
              <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center space-x-1">
                  <GraduationCap className="w-3.5 h-3.5 mr-1" />
                  <span>EDUCATION</span>
                </div>
                <div className="text-xs font-bold text-slate-100">{profileData.education.degree}</div>
                <div className="text-[11px] text-slate-400">{profileData.education.institution}</div>
                <div className="text-[10px] text-emerald-300 font-bold">
                  CGPA: {profileData.education.cgpa} | Graduation: {profileData.education.graduation}
                </div>
              </div>

              {/* Quick Specs */}
              <div className="space-y-2.5 text-xs">
                {profileData.quickSpecs.map((spec) => (
                  <div key={spec.label} className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800">
                    <span className="text-[9px] text-slate-500 font-bold tracking-widest uppercase block mb-0.5">
                      {spec.label}
                    </span>
                    <span className="text-slate-200 font-sans text-xs">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Footer info */}
              <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-[10px] text-slate-500">
                <span>LOCATION: {profileData.location}</span>
                <span className="text-emerald-400 font-bold">SRM IST ENGINEERING // CS</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
