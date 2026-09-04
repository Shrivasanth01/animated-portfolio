import { useState } from 'react';
import { journeyTimelineData } from '../data/journey';
import { Calendar, ChevronDown, ChevronUp, CheckCircle2, Sparkles } from 'lucide-react';

export default function JourneyTimeline() {
  const [expandedYear, setExpandedYear] = useState('2026');

  return (
    <section id="journey" className="py-24 bg-[#08090d] border-t border-slate-900 font-mono-tech relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            ENGINEERING EVOLUTION
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            CAREER & DEVELOPMENT TIMELINE
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            From foundational computer science to shipping production-grade distributed applications.
          </p>
        </div>

        {/* Minimal Timeline Accordion Stream */}
        <div className="max-w-4xl mx-auto space-y-4">
          {journeyTimelineData.map((item) => {
            const isExpanded = expandedYear === item.year;

            return (
              <div
                key={item.year}
                className={`glass-panel rounded-2xl border transition-all overflow-hidden ${
                  isExpanded ? 'border-cyan-500/40 shadow-2xl bg-slate-900/60' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedYear(isExpanded ? null : item.year)}
                  className="w-full p-6 flex items-center justify-between text-left cursor-pointer"
                  data-cursor="EXPAND"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-extrabold font-sans text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-xl border border-cyan-500/30">
                      {item.year}
                    </span>
                    <div>
                      <span className="text-[10px] text-emerald-400 font-bold tracking-widest block uppercase">
                        STAGE: {item.stage}
                      </span>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-slate-100">{item.headline}</h3>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 space-y-6 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">{item.summary}</p>

                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-2">
                        SKILLS & ARCHITECTURES MASTERED:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.skillsAcquired.map((skill) => (
                          <span key={skill} className="text-xs bg-slate-900 text-cyan-300 px-3 py-1 rounded-lg border border-cyan-500/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-2">
                        KEY MILESTONES:
                      </span>
                      <div className="space-y-2">
                        {item.milestones.map((m, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-slate-300 font-sans">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
