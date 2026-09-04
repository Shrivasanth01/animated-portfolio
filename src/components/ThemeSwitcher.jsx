import { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

export const themes = [
  { id: 'emerald', name: 'Emerald Matrix', color: '#10b981', bg: '#060A08', border: 'emerald-500' },
  { id: 'violet', name: 'Violet Cyber', color: '#8b5cf6', bg: '#0a0714', border: 'violet-500' },
  { id: 'amber', name: 'Amber Terminal', color: '#f59e0b', bg: '#0c0a07', border: 'amber-500' },
  { id: 'cyan', name: 'Obsidian Cyan', color: '#00f0ff', bg: '#090a0f', border: 'cyan-400' }
];

export default function ThemeSwitcher({ currentTheme, onSelectTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-mono-tech">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 px-3 py-1.5 glass-panel rounded-lg border border-slate-800 text-xs text-slate-300 hover:text-slate-100 hover:border-slate-700 transition-all cursor-pointer"
        aria-label="Switch Theme Palette"
        data-cursor="THEME"
      >
        <Palette className="w-3.5 h-3.5" style={{ color: themes.find(t => t.id === currentTheme)?.color }} />
        <span className="hidden sm:inline text-[11px] uppercase font-bold">THEME</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 glass-panel rounded-xl border border-slate-800 p-2 shadow-2xl z-50 animate-in fade-in duration-150 bg-[#090a0f]/95 backdrop-blur-2xl">
          <div className="text-[9px] font-bold text-slate-500 px-2 py-1 uppercase tracking-widest border-b border-slate-900 mb-1">
            SELECT COLOR SYSTEM
          </div>
          <div className="space-y-1">
            {themes.map((t) => {
              const isActive = currentTheme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    onSelectTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-bold transition-all text-left cursor-pointer ${
                    isActive ? 'bg-slate-800/80 text-slate-100' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: t.color }}
                    />
                    <span>{t.name}</span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-slate-100" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
