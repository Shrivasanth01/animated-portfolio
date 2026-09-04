import { useState, useEffect } from 'react';
import { Terminal, Command, Menu, X, Sparkles, Layers, Cpu, Code2, Send, FileText, Activity } from 'lucide-react';
import { profileData } from '../data/profile';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ onOpenCommandPalette, currentTheme, onSelectTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'stack', 'work', 'lab', 'journey', 'resume', 'contact'];
      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'stack', label: 'STACK' },
    { id: 'work', label: 'WORK' },
    { id: 'lab', label: 'LAB' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#090a0f]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / OS Status Indicator */}
        <a
          href="#hero"
          className="flex items-center space-x-3 group cursor-pointer"
          data-cursor="SYSTEM"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_#00f0ff] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono-tech text-xs font-bold text-slate-100 tracking-wider group-hover:text-cyan-400 transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono-tech text-[10px] text-emerald-400 flex items-center space-x-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1" />
              ONLINE
            </span>
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-1 rounded-full text-[11px] font-mono-tech font-medium tracking-widest transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Command Palette & Theme Switcher */}
        <div className="hidden lg:flex items-center space-x-3">
          <ThemeSwitcher currentTheme={currentTheme} onSelectTheme={onSelectTheme} />
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-2 px-3 py-1.5 glass-panel rounded-lg border border-slate-800 text-xs font-mono-tech text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all cursor-pointer"
            data-cursor="COMMAND"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span>CMD / K</span>
          </button>
          <a
            href="#contact"
            className="px-4 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono-tech text-xs font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] cursor-pointer"
            data-cursor="TRANSMIT"
          >
            CONNECT
          </a>
        </div>
      </div>
    </header>
  );
}