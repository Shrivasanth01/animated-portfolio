import { useState } from 'react';
import { profileData } from '../data/profile';
import { Terminal, Send, Radio, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setTransmitting(true);
    setTerminalLogs(['ENCRYPTING TRANSMISSION PAYLOAD (AES-256-GCM)...']);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, 'CONNECTING TO DEVELOPER RELAY NODE...']);
    }, 400);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, 'TRANSMISSION SENT SUCCESSFULLY TO SHRIVASANTH J.']);
      setTransmitting(false);
      setTransmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#040d0a] border-t border-slate-900 font-mono-tech relative select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs text-emerald-400 font-bold bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>INITIATE CONNECTION</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              LET'S BUILD SOMETHING <br />
              <span className="text-emerald-400">WORTH SHIPPING.</span>
            </h2>

            <p className="text-slate-300 text-sm font-sans leading-relaxed">
              Have an engineering role, full-stack application, or system design challenge? Send a transmission directly to my system console.
            </p>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="p-4 os-glass-panel rounded-xl border border-slate-800 flex items-center justify-between hover:border-emerald-500/30 transition-all group cursor-pointer"
                data-cursor="EMAIL"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase">DIRECT EMAIL</span>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-300">{profileData.email}</span>
                  </div>
                </div>
                <span className="text-xs text-slate-500 group-hover:text-emerald-400">SEND ›</span>
              </a>

              <div className="flex gap-3">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3.5 os-glass-panel rounded-xl border border-slate-800 flex items-center justify-center space-x-2 text-xs font-bold text-slate-200 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
                  data-cursor="GITHUB"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3.5 os-glass-panel rounded-xl border border-slate-800 flex items-center justify-center space-x-2 text-xs font-bold text-slate-200 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
                  data-cursor="LINKEDIN"
                >
                  <FiLinkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Transmission Form */}
          <div className="lg:col-span-7">
            <div className="os-glass-panel rounded-2xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-xs text-slate-200">TRANSMISSION_TERMINAL_v5.0</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30 font-bold">
                  PORT 443 READY
                </span>
              </div>

              {transmitted ? (
                <div className="p-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-slate-100">TRANSMISSION RECEIVED.</h3>
                  <p className="text-xs text-slate-300 font-sans max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name}. I'll review your message payload and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setTransmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 text-xs font-bold rounded-xl border border-slate-800 cursor-pointer"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1.5">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-slate-950 text-xs text-slate-100 p-3.5 rounded-xl border border-slate-800 focus:border-emerald-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1.5">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-slate-950 text-xs text-slate-100 p-3.5 rounded-xl border border-slate-800 focus:border-emerald-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1.5">TRANSMISSION MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your project requirements or engineering position..."
                      className="w-full bg-slate-950 text-xs text-slate-100 p-3.5 rounded-xl border border-slate-800 focus:border-emerald-500/50 focus:outline-none font-sans"
                    />
                  </div>

                  {/* Terminal Diagnostic Log output */}
                  {terminalLogs.length > 0 && (
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 space-y-1 text-[10px] text-emerald-400">
                      {terminalLogs.map((log, i) => (
                        <div key={i}>› {log}</div>
                      ))}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={transmitting}
                    className="w-full py-4 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all cursor-pointer disabled:opacity-50"
                    data-cursor="TRANSMIT"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND TRANSMISSION</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
