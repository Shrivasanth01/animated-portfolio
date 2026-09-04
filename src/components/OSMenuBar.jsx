import { useState, useEffect } from 'react';
import { Terminal, Command, Maximize2, Minimize2, Cpu, Wifi, Activity } from 'lucide-react';
import { profileData } from '../data/profile';

export default function OSMenuBar({ activeAppTitle, onOpenCommandPalette }) {
  const [timeString, setTimeString] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-8 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 px-4 flex items-center justify-between font-mono-tech text-xs select-none">
      {/* Left Menu Items */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-emerald-400 font-bold">
          <Terminal className="w-3.5 h-3.5" />
          <span>DEV_OS v5.0</span>
        </div>

        <span className="text-slate-700">|</span>

        <span className="text-slate-300 font-medium hidden sm:inline">
          {profileData.name}
        </span>

        {activeAppTitle && (
          <>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 text-[10px] hidden md:inline">
              APP: {activeAppTitle}
            </span>
          </>
        )}
      </div>

      {/* Right Telemetry Controls */}
      <div className="flex items-center space-x-4 text-[11px] text-slate-400">
        <div className="hidden lg:flex items-center space-x-1.5 text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1" />
          <span>ONLINE</span>
        </div>

        <button
          onClick={onOpenCommandPalette}
          className="flex items-center space-x-1.5 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:text-emerald-300 transition-colors cursor-pointer text-[10px]"
          data-cursor="CMD"
        >
          <Command className="w-3 h-3 text-emerald-400" />
          <span>CMD+K</span>
        </button>

        <button
          onClick={toggleFullscreen}
          className="p-1 hover:text-emerald-400 transition-colors cursor-pointer"
          title="Toggle Fullscreen Mode"
          data-cursor="FULLSCREEN"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

        <span className="text-slate-200 font-bold tracking-wider">{timeString}</span>
      </div>
    </header>
  );
}
