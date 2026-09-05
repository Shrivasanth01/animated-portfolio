import { useState } from 'react';
import { resumeData } from '../data/resume';
import { profileData } from '../data/profile';
import { FileText, Download, Eye, CheckCircle2, ExternalLink, X, GraduationCap, Code2, Shield } from 'lucide-react';

export default function ResumeSection() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="py-24 bg-[#040d0a] border-t border-slate-900 font-mono-tech relative select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="os-glass-panel rounded-2xl border border-emerald-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                CURRICULUM VITAE // {profileData.name.toUpperCase()}
              </span>

              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                {resumeData.headline}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                {resumeData.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {resumeData.highlights.map((item) => (
                  <div key={item.label} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">{item.label}</span>
                    <span className="text-slate-200 font-sans mt-0.5 block">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Column */}
            <div className="lg:col-span-4 flex flex-col space-y-3 justify-center">
              <button
                onClick={() => setShowPreviewModal(true)}
                className="w-full py-4 os-glass-panel hover:bg-slate-800 text-slate-100 font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                data-cursor="PREVIEW"
              >
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>VIEW RESUME PREVIEW</span>
              </button>

              <a
                href={resumeData.pdfUrl}
                download="Shrivasanth_J_Resume.pdf"
                className="w-full py-4 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer"
                data-cursor="DOWNLOAD"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <span className="text-[10px] text-slate-500 text-center block pt-2">
                UPDATED: {resumeData.lastUpdated} // ONE-PAGE CV FORMAT
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Resume Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl os-glass-window rounded-2xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base text-slate-100">DOCUMENT PREVIEW // {profileData.name}</h3>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-6 text-xs text-slate-300 font-sans">
              <div className="border-b border-slate-800 pb-4">
                <h4 className="text-xl font-bold text-slate-100">{profileData.name}</h4>
                <p className="text-emerald-400 font-mono-tech text-xs mt-1">{profileData.role}</p>
                <p className="text-slate-400 text-xs mt-1">
                  {profileData.email} | {profileData.phone} | {profileData.location}
                </p>
              </div>

              <div>
                <h5 className="font-mono-tech font-bold text-slate-200 uppercase tracking-widest text-[10px] mb-2 text-emerald-400 flex items-center space-x-1">
                  <GraduationCap className="w-3.5 h-3.5 mr-1" />
                  <span>EDUCATION</span>
                </h5>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 space-y-1">
                  <div className="font-bold text-slate-100">{profileData.education.degree}</div>
                  <div className="text-slate-400">{profileData.education.institution}</div>
                  <div className="text-emerald-300 text-[11px] font-mono-tech">
                    CGPA: {profileData.education.cgpa} | Graduation: {profileData.education.graduation}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-mono-tech font-bold text-slate-200 uppercase tracking-widest text-[10px] mb-2 text-emerald-400 flex items-center space-x-1">
                  <Code2 className="w-3.5 h-3.5 mr-1" />
                  <span>CORE SKILLS & TECHNOLOGIES</span>
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>• <b>Frontend:</b> React.js, Next.js, React Native, TypeScript</div>
                  <div>• <b>Backend:</b> Node.js, Express.js, FastAPI, Python</div>
                  <div>• <b>Databases:</b> PostgreSQL, MySQL, SQLite, MongoDB</div>
                  <div>• <b>AI/ML:</b> Anomaly Detection, Behavioral Biometrics</div>
                  <div>• <b>Security:</b> AES-256-GCM, Ed25519, SHA-256</div>
                  <div>• <b>Hardware/IoT:</b> ESP32, C/C++, BLE Mesh</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
