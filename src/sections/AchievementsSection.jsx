import { achievementsData } from '../data/achievements';
import { Award, Trophy, ShieldCheck, GitPullRequest, ExternalLink } from 'lucide-react';

const iconMap = {
  'PROJECT HIGHLIGHT': Trophy,
  'RESEARCH PRESENTATION': ShieldCheck,
  'HACKATHON / PROJECT': GitPullRequest,
  'ACADEMIC EXCELLENCE': Award
};

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-[#040d0a] border-t border-slate-900 font-mono-tech relative select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            ENGINEERING RECOGNITION
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            ACHIEVEMENTS & CERTIFICATIONS
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            Research presentations, hackathons, open-source milestones, and academic honors.
          </p>
        </div>

        {/* Grid Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => {
            const IconComp = iconMap[item.type] || Award;
            return (
              <div
                key={item.id}
                className="os-glass-panel rounded-2xl border border-slate-800 p-6 shadow-xl hover:border-emerald-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-500">{item.year}</span>
                  </div>

                  <div className="flex items-start space-x-3 pt-1">
                    <div className="p-2.5 bg-slate-900 text-emerald-400 rounded-xl border border-slate-800 group-hover:border-emerald-400/40 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-sans">{item.organization}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-900 mt-4 text-xs">
                  <span className="text-emerald-300 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30 text-[10px]">
                    {item.badge}
                  </span>
                  {item.link && item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 hover:underline flex items-center space-x-1 text-[11px]"
                      data-cursor="VERIFY"
                    >
                      <span>VERIFY PROOF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
