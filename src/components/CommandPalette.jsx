import { useState, useEffect } from 'react';
import { Search, Command, Terminal, FileText, Send, Sparkles, Layers, X, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: 'hero', label: 'Jump to Hero / Command Center', icon: Terminal, section: '#hero' },
    { id: 'about', label: 'Explore Developer Bio & Profile', icon: Sparkles, section: '#about' },
    { id: 'stack', label: 'View Technology Universe', icon: Code2, section: '#stack' },
    { id: 'work', label: 'Inspect Featured Case Studies', icon: Layers, section: '#work' },
    { id: 'lab', label: 'Launch Engineering Lab Experiments', icon: Terminal, section: '#lab' },
    { id: 'journey', label: 'View Career & Engineering Timeline', icon: Sparkles, section: '#journey' },
    { id: 'resume', label: 'View & Download One-Page Resume', icon: FileText, section: '#resume' },
    { id: 'contact', label: 'Send Transmission / Get In Touch', icon: Send, section: '#contact' }
  ];

  const filtered = actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (section) => {
    onClose();
    const elem = document.querySelector(section);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-xl glass-panel rounded-xl border border-cyan-500/30 shadow-2xl overflow-hidden font-mono-tech">
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-slate-800 px-4 py-3 bg-slate-900/60">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type command or section name..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            autoFocus
          />
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.section)}
                  className="w-full flex items-center justify-between p-3 rounded-lg text-xs text-left text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 border border-transparent hover:border-cyan-500/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    JUMP
                  </span>
                </button>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs text-slate-500">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-slate-800 px-4 py-2 bg-slate-950 flex items-center justify-between text-[10px] text-slate-500">
          <div className="flex items-center space-x-2">
            <Command className="w-3 h-3 text-cyan-400" />
            <span>DEVELOPER COMMAND PALETTE</span>
          </div>
          <span>[ESC] TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
