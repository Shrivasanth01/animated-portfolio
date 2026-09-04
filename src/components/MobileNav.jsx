import { useState } from 'react';
import { Menu, X, Terminal, Command, Send } from 'lucide-react';
import { profileData } from '../data/profile';
import ThemeSwitcher from './ThemeSwitcher';

export default function MobileNav({ onOpenCommandPalette, currentTheme, onSelectTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: '01 // HOME' },
    { id: 'about', label: '02 // ABOUT' },
    { id: 'stack', label: '03 // STACK' },
    { id: 'work', label: '04 // WORK' },
    { id: 'lab', label: '05 // LAB' },
    { id: 'journey', label: '06 // JOURNEY' },
    { id: 'contact', label: '07 // CONTACT' }
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Floating Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 transition-transform"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#090a0f]/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="font-mono-tech font-bold text-slate-100 text-sm">{profileData.name}</span>
            </div>
            <ThemeSwitcher currentTheme={currentTheme} onSelectTheme={onSelectTheme} />
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-4 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className="font-mono-tech text-lg font-bold text-slate-300 hover:text-cyan-400 transition-colors tracking-wide py-2 border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="space-y-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full py-3 glass-panel rounded-xl text-xs font-mono-tech text-cyan-300 flex items-center justify-center space-x-2 border border-cyan-500/30"
            >
              <Command className="w-4 h-4 text-cyan-400" />
              <span>LAUNCH COMMAND PALETTE</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}