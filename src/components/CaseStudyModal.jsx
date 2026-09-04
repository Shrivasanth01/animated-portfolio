import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu, Code2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto font-mono-tech animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-panel rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-6 bg-slate-950/80 sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded">
              CASE STUDY //{project.id}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            data-cursor="CLOSE"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-100 mb-3 tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">{project.summary}</p>
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-5 rounded-xl border border-red-500/20 bg-red-950/10">
              <div className="flex items-center space-x-2 text-red-400 mb-2">
                <AlertTriangle className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-wider">PROBLEM</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
              <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-wider">ENGINEERING APPROACH</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{project.approach}</p>
            </div>
          </div>

          {/* Architecture Visualization */}
          {project.architectureNodes && (
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>INTERACTIVE SYSTEM ARCHITECTURE</span>
              </h3>
              <ArchitectureDiagram nodes={project.architectureNodes} />
            </div>
          )}

          {/* Tech Stack Layers */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>TECHNOLOGY LAYERS</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(project.techStack || {}).map(([layer, techList]) => (
                <div key={layer} className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] text-cyan-400 font-bold uppercase mb-1.5">{layer}</div>
                  <div className="flex flex-wrap gap-1">
                    {techList.map((tech) => (
                      <span key={tech} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges */}
          {project.challenges && (
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                KEY ENGINEERING CHALLENGES & SOLUTIONS
              </h3>
              <div className="space-y-3">
                {project.challenges.map((c, i) => (
                  <div key={i} className="glass-panel p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                    <h4 className="text-xs font-bold text-cyan-300 mb-1">{c.title}</h4>
                    <p className="text-xs text-slate-400 mb-2">Challenge: {c.description}</p>
                    <p className="text-xs text-emerald-400">Solution: {c.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practical Impact / Result */}
          <div className="glass-panel p-5 rounded-xl border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">MEASURABLE IMPACT</span>
              <p className="text-sm font-sans font-bold text-slate-100 mt-1">{project.result}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between p-6 bg-slate-950 border-t border-slate-800">
          <div className="flex items-center space-x-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-lg flex items-center space-x-2 transition-all cursor-pointer"
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
                className="px-4 py-2 glass-panel hover:bg-slate-800 text-slate-200 text-xs font-bold rounded-lg flex items-center space-x-2 border border-slate-700 transition-all cursor-pointer"
                data-cursor="SOURCE"
              >
                <FiGithub className="w-3.5 h-3.5 text-cyan-400" />
                <span>VIEW SOURCE</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
          >
            CLOSE [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
