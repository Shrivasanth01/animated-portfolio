import { useState } from 'react';
import { skillsCategories } from '../data/skills';
import { Code2, Layers, Cpu, Server, Database, Cloud, Wrench, CheckCircle2 } from 'lucide-react';

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  devops: Cloud,
  tools: Wrench
};

export default function TechUniverse() {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0]);
  const [selectedSkill, setSelectedSkill] = useState(skillsCategories[0].skills[0]);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setSelectedSkill(category.skills[0]);
  };

  return (
    <section id="stack" className="py-24 bg-[#08090d] border-t border-slate-900 font-mono-tech relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            THE STACK ARCHITECTURE
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            TECHNOLOGY UNIVERSE
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Cleanly structured ecosystem of technologies I actually engineer with.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillsCategories.map((cat) => {
            const IconComp = categoryIcons[cat.id] || Code2;
            const isSelected = activeCategory.id === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                    : 'glass-panel text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
                data-cursor="CATEGORY"
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Grid & Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Skills Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeCategory.skills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                  data-cursor="INSPECT"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-100">{skill.name}</span>
                    <span className="text-xs font-mono-tech font-bold text-cyan-400">{skill.level}%</span>
                  </div>

                  {/* Level meter bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-cyan-400 rounded-full transition-all duration-500 shadow-[0_0_8px_#00f0ff]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[10px] text-slate-400 line-clamp-2">{skill.useCase}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Skill Detail Inspector */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl border border-cyan-500/30 p-6 shadow-2xl space-y-6 sticky top-28">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest block">TECH INSPECTOR</span>
                  <h3 className="font-sans text-xl font-bold text-slate-100">{selectedSkill.name}</h3>
                </div>
                <div className="text-xs font-bold text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  {selectedSkill.level}% PROFICIENCY
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block mb-2">PRACTICAL USE CASE:</span>
                <p className="text-xs text-slate-300 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 leading-relaxed">
                  {selectedSkill.useCase}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block mb-2">CONNECTED PROJECTS:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.projects.map((proj) => (
                    <span key={proj} className="text-xs bg-cyan-950/60 text-cyan-300 px-3 py-1 rounded-lg border border-cyan-500/30 font-bold">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 text-[10px] text-slate-500 flex items-center justify-between">
                <span>CATEGORY: {activeCategory.name}</span>
                <span className="text-emerald-400">READY FOR PRODUCTION</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
