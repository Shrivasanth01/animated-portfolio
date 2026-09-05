import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profileData } from '../data/profile';

export default function Footer({ onLaunchApp }) {
  const scrollToTop = () => {
    if (onLaunchApp) onLaunchApp('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#020604] border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-mono-tech text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 rounded-md bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-200">{profileData.name}</div>
            <div className="text-[10px] text-slate-500">{profileData.role}</div>
          </div>
        </div>

        {/* Middle positioning quote */}
        <div className="text-center text-xs text-slate-500 max-w-md">
          "Designed, engineered & shipped with intention."
        </div>

        {/* Social Links & Scroll Top */}
        <div className="flex items-center space-x-4">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
            data-cursor="GITHUB"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
            data-cursor="LINKEDIN"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Send Email"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
            data-cursor="EMAIL"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 transition-all cursor-pointer ml-2"
            data-cursor="TOP"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
