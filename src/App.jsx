import { useState, useEffect } from 'react';
import BootLoader from './components/BootLoader';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import OSMenuBar from './components/OSMenuBar';
import OSDock, { desktopApps } from './components/OSDock';
import OSWindow from './components/OSWindow';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import InteractiveArchitecture from './sections/InteractiveArchitecture';
import About from './sections/About';
import TechUniverse from './sections/TechUniverse';
import FeaturedProjects from './sections/FeaturedProjects';
import EngineeringLab from './sections/EngineeringLab';
import LiveSystemDashboard from './sections/LiveSystemDashboard';
import JourneyTimeline from './sections/JourneyTimeline';
import ResumeSection from './sections/ResumeSection';
import AchievementsSection from './sections/AchievementsSection';
import ContactSection from './sections/ContactSection';

import { Terminal, Folder, Layers, Code2, Calendar, FileText, Send, Cpu, Sparkles } from 'lucide-react';
import { profileData } from './data/profile';

export default function App() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // OS Window Manager State
  const [openWindowIds, setOpenWindowIds] = useState(['hero', 'work']); // Default open Command Center & Case Studies
  const [activeWindowId, setActiveWindowId] = useState('hero');
  const [minimizedWindowIds, setMinimizedWindowIds] = useState([]);
  const [maximizedWindowIds, setMaximizedWindowIds] = useState([]);
  const [zIndices, setZIndices] = useState({ hero: 10, work: 9 });
  const [highestZIndex, setHighestZIndex] = useState(10);

  const focusWindow = (id) => {
    if (!openWindowIds.includes(id)) {
      setOpenWindowIds((prev) => [...prev, id]);
    }
    if (minimizedWindowIds.includes(id)) {
      setMinimizedWindowIds((prev) => prev.filter((wId) => wId !== id));
    }
    const nextZ = highestZIndex + 1;
    setHighestZIndex(nextZ);
    setZIndices((prev) => ({ ...prev, [id]: nextZ }));
    setActiveWindowId(id);
  };

  const closeWindow = (id) => {
    setOpenWindowIds((prev) => prev.filter((wId) => wId !== id));
    if (activeWindowId === id) {
      const remaining = openWindowIds.filter((wId) => wId !== id);
      setActiveWindowId(remaining[remaining.length - 1] || null);
    }
  };

  const toggleMinimize = (id) => {
    if (minimizedWindowIds.includes(id)) {
      setMinimizedWindowIds((prev) => prev.filter((wId) => wId !== id));
      focusWindow(id);
    } else {
      setMinimizedWindowIds((prev) => [...prev, id]);
      if (activeWindowId === id) {
        setActiveWindowId(null);
      }
    }
  };

  const toggleMaximize = (id) => {
    if (maximizedWindowIds.includes(id)) {
      setMaximizedWindowIds((prev) => prev.filter((wId) => wId !== id));
    } else {
      setMaximizedWindowIds((prev) => [...prev, id]);
    }
  };

  const activeAppObj = desktopApps.find((app) => app.id === activeWindowId);

  return (
    <div className="bg-desktop-wallpaper min-h-screen text-slate-100 font-sans relative overflow-hidden select-none">
      {/* System Initialization Sequence */}
      <BootLoader onComplete={() => setBootCompleted(true)} />

      {/* Custom Desktop OS Cursor */}
      <CustomCursor />

      {/* Top OS Menu Bar */}
      <OSMenuBar
        activeAppTitle={activeAppObj?.name}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Floating Bottom OS Dock */}
      <OSDock
        openWindowIds={openWindowIds}
        activeWindowId={activeWindowId}
        onLaunchApp={focusWindow}
      />

      {/* Keyboard Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Desktop Spatial Canvas with Desktop Shortcuts */}
      <div className="pt-12 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
        
        {/* Desktop Header Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-white/5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-mono-tech text-sm font-bold text-slate-100">{profileData.name} // WORKSPACE</h1>
              <p className="text-[11px] text-slate-400 font-mono-tech">
                Full-Stack Web Developer — "{profileData.primaryPositioning}"
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 font-mono-tech text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1" />
            <span>DEV_OS ACTIVE</span>
          </div>
        </div>

        {/* Desktop Folder Shortcuts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 my-8">
          {desktopApps.map((app) => {
            const IconComp = app.icon;
            const isOpen = openWindowIds.includes(app.id);

            return (
              <div
                key={app.id}
                onClick={() => focusWindow(app.id)}
                className={`flex flex-col items-center p-4 rounded-2xl border transition-all cursor-pointer text-center group ${
                  isOpen
                    ? 'os-glass-panel border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-100 hover:bg-slate-900/80'
                }`}
                data-cursor="LAUNCH"
              >
                <div className={`p-3 rounded-xl mb-2 transition-transform group-hover:scale-110 ${
                  isOpen ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800/80 text-slate-300'
                }`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <span className="font-mono-tech text-xs font-bold tracking-tight">{app.name}</span>
                <span className="font-mono-tech text-[9px] text-slate-500 mt-1 line-clamp-1">{app.desc}</span>
              </div>
            );
          })}
        </div>

        {/* Quick Instructions banner */}
        <div className="glass-panel p-4 rounded-2xl border border-white/5 text-center text-xs font-mono-tech text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>💡 Click any desktop icon or launch apps from the bottom dock to open workspace windows.</span>
          <span className="text-emerald-400 font-bold">PRESS CMD+K FOR COMMAND PALETTE</span>
        </div>

      </div>

      {/* App Windows Layer */}
      {/* 1. Command Center Window */}
      <OSWindow
        id="hero"
        title="COMMAND CENTER // HERO"
        icon={Terminal}
        isOpen={openWindowIds.includes('hero')}
        isMinimized={minimizedWindowIds.includes('hero')}
        isMaximized={maximizedWindowIds.includes('hero')}
        zIndex={zIndices['hero'] || 1}
        onFocus={() => focusWindow('hero')}
        onClose={() => closeWindow('hero')}
        onMinimize={() => toggleMinimize('hero')}
        onMaximize={() => toggleMaximize('hero')}
      >
        <Hero />
      </OSWindow>

      {/* 2. Architecture Pipeline Window */}
      <OSWindow
        id="architecture"
        title="ARCHITECTURE PIPELINE // WHAT I DO"
        icon={Cpu}
        isOpen={openWindowIds.includes('architecture')}
        isMinimized={minimizedWindowIds.includes('architecture')}
        isMaximized={maximizedWindowIds.includes('architecture')}
        zIndex={zIndices['architecture'] || 1}
        onFocus={() => focusWindow('architecture')}
        onClose={() => closeWindow('architecture')}
        onMinimize={() => toggleMinimize('architecture')}
        onMaximize={() => toggleMaximize('architecture')}
      >
        <InteractiveArchitecture />
        <About />
      </OSWindow>

      {/* 3. Case Studies & Projects Window */}
      <OSWindow
        id="work"
        title="CASE STUDIES // FEATURED PROJECTS"
        icon={Folder}
        isOpen={openWindowIds.includes('work')}
        isMinimized={minimizedWindowIds.includes('work')}
        isMaximized={maximizedWindowIds.includes('work')}
        zIndex={zIndices['work'] || 1}
        onFocus={() => focusWindow('work')}
        onClose={() => closeWindow('work')}
        onMinimize={() => toggleMinimize('work')}
        onMaximize={() => toggleMaximize('work')}
      >
        <FeaturedProjects />
        <LiveSystemDashboard />
      </OSWindow>

      {/* 4. Tech Lab Window */}
      <OSWindow
        id="lab"
        title="ENGINEERING LAB // INTERACTIVE SIMULATORS"
        icon={Layers}
        isOpen={openWindowIds.includes('lab')}
        isMinimized={minimizedWindowIds.includes('lab')}
        isMaximized={maximizedWindowIds.includes('lab')}
        zIndex={zIndices['lab'] || 1}
        onFocus={() => focusWindow('lab')}
        onClose={() => closeWindow('lab')}
        onMinimize={() => toggleMinimize('lab')}
        onMaximize={() => toggleMaximize('lab')}
      >
        <EngineeringLab />
      </OSWindow>

      {/* 5. Tech Universe Window */}
      <OSWindow
        id="stack"
        title="TECH UNIVERSE // SKILL ECOSYSTEM"
        icon={Code2}
        isOpen={openWindowIds.includes('stack')}
        isMinimized={minimizedWindowIds.includes('stack')}
        isMaximized={maximizedWindowIds.includes('stack')}
        zIndex={zIndices['stack'] || 1}
        onFocus={() => focusWindow('stack')}
        onClose={() => closeWindow('stack')}
        onMinimize={() => toggleMinimize('stack')}
        onMaximize={() => toggleMaximize('stack')}
      >
        <TechUniverse />
      </OSWindow>

      {/* 6. Journey Window */}
      <OSWindow
        id="journey"
        title="JOURNEY // CAREER & EVOLUTION"
        icon={Calendar}
        isOpen={openWindowIds.includes('journey')}
        isMinimized={minimizedWindowIds.includes('journey')}
        isMaximized={maximizedWindowIds.includes('journey')}
        zIndex={zIndices['journey'] || 1}
        onFocus={() => focusWindow('journey')}
        onClose={() => closeWindow('journey')}
        onMinimize={() => toggleMinimize('journey')}
        onMaximize={() => toggleMaximize('journey')}
      >
        <JourneyTimeline />
        <AchievementsSection />
      </OSWindow>

      {/* 7. Resume Window */}
      <OSWindow
        id="resume"
        title="RESUME // CURRICULUM VITAE"
        icon={FileText}
        isOpen={openWindowIds.includes('resume')}
        isMinimized={minimizedWindowIds.includes('resume')}
        isMaximized={maximizedWindowIds.includes('resume')}
        zIndex={zIndices['resume'] || 1}
        onFocus={() => focusWindow('resume')}
        onClose={() => closeWindow('resume')}
        onMinimize={() => toggleMinimize('resume')}
        onMaximize={() => toggleMaximize('resume')}
      >
        <ResumeSection />
      </OSWindow>

      {/* 8. Terminal Transmission Contact Window */}
      <OSWindow
        id="contact"
        title="TERMINAL // INITIATE TRANSMISSION"
        icon={Send}
        isOpen={openWindowIds.includes('contact')}
        isMinimized={minimizedWindowIds.includes('contact')}
        isMaximized={maximizedWindowIds.includes('contact')}
        zIndex={zIndices['contact'] || 1}
        onFocus={() => focusWindow('contact')}
        onClose={() => closeWindow('contact')}
        onMinimize={() => toggleMinimize('contact')}
        onMaximize={() => toggleMaximize('contact')}
      >
        <ContactSection />
      </OSWindow>

      {/* Footer */}
      <Footer />
    </div>
  );
}