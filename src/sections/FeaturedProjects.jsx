import { useState } from 'react';
import { projectsData } from '../data/projects';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import CaseStudyModal from '../components/CaseStudyModal';
import { ExternalLink, Layers, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

export default function FeaturedProjects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="work" className="py-24 bg-[#090a0f] border-t border-slate-900 font-mono-tech relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            CASE STUDY EXPERIENCES
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            FEATURED PROJECTS
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Deep-dive case studies detailing system problem, architecture approach, engineering challenges, and results.
          </p>
        </div>

        {/* Project Cards Stream */}
        <div className="space-y-16">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-cyan-500/20 p-6 sm:p-8 shadow-2xl hover:border-cyan-500/40 transition-all space-y-8 relative overflow-hidden group"
            >
              {/* Top Header info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-extrabold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-lg border border-cyan-500/30">
                    {project.id}
                  </span>
                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] text-slate-500 tracking-widest block uppercase mt-0.5">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 border border-cyan-500/30 text-xs font-bold rounded-lg transition-all flex items-center space-x-2 cursor-pointer"
                    data-cursor="CASE STUDY"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Summary & Problem/Approach Split */}
              <p className="text-slate-300 text-sm leading-relaxed font-sans">{project.summary}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-red-500/20">
                  <div className="flex items-center space-x-2 text-red-400 mb-1.5 text-xs font-bold uppercase">
                    <AlertTriangle className="w-4 h-4" />
                    <span>PROBLEM</span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{project.problem}</p>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-emerald-500/20">
                  <div className="flex items-center space-x-2 text-emerald-400 mb-1.5 text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>APPROACH</span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{project.approach}</p>
                </div>
              </div>

              {/* Architecture Visualizer Preview */}
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3 flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                </span>
                <ArchitectureDiagram nodes={project.architectureNodes} />
              </div>

              {/* Card Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  <span className="text-slate-500">MEASURABLE RESULT: </span>
                  <span className="text-emerald-400 font-bold">{project.result}</span>
                </div>

                <div className="flex items-center space-x-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 glass-panel text-slate-200 hover:text-cyan-300 text-xs font-bold rounded-lg border border-slate-800 flex items-center space-x-2 transition-all cursor-pointer"
                      data-cursor="DEMO"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 glass-panel text-slate-200 hover:text-cyan-300 text-xs font-bold rounded-lg border border-slate-800 flex items-center space-x-2 transition-all cursor-pointer"
                      data-cursor="GITHUB"
                    >
                      <FiGithub className="w-3.5 h-3.5 text-cyan-400" />
                      <span>SOURCE</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Fullscreen Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}
