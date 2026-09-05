import { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function BootLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logText, setLogText] = useState('INITIALIZING DEVELOPER SYSTEM...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const logs = [
      'INITIALIZING DEVELOPER SYSTEM...',
      'LOADING CORE STACK (REACT, FASTAPI, TS)...',
      'CONNECTING TELEMETRY STREAMS...',
      'VERIFYING CRYPTOGRAPHIC SECURITY PROTOCOLS...',
      'SYSTEM READY.'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < logs.length) {
        setLogText(logs[currentStep]);
        setProgress(Math.min(currentStep * 25, 100));
      } else {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 300);
      }
    }, 220);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040d0a] text-slate-100 font-mono-tech select-none">
      <div className="relative w-11/12 max-w-md p-6 os-glass-window rounded-xl border border-emerald-500/30 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">SYS_INIT v5.0</span>
          </div>
          <button
            onClick={() => {
              setIsDone(true);
              onComplete?.();
            }}
            className="text-[10px] text-slate-400 hover:text-emerald-300 underline cursor-pointer"
          >
            SKIP [ESC]
          </button>
        </div>

        {/* Console logs */}
        <div className="h-16 flex flex-col justify-center text-xs space-y-1 mb-4 text-slate-300">
          <p className="flex items-center text-emerald-300 font-medium">
            <span className="text-emerald-500 mr-2">›</span> {logText}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-600 via-emerald-400 to-emerald-300 transition-all duration-200 ease-out shadow-[0_0_12px_#10b981]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between mt-3 text-[10px] text-slate-500">
          <span>STATUS: LOADING</span>
          <span className="text-emerald-400 font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
