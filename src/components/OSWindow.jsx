import { useState } from 'react';
import { Minus, Square, X, Terminal, Maximize2, Minimize2 } from 'lucide-react';

export default function OSWindow({
  id,
  title,
  icon: IconComponent,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  children
}) {
  if (!isOpen || isMinimized) return null;

  return (
    <div
      onClick={onFocus}
      style={{ zIndex }}
      className={`fixed transition-all duration-200 select-text ${
        isMaximized
          ? 'inset-x-0 top-8 bottom-16 rounded-none border-t border-b border-emerald-500/30'
          : 'top-14 left-4 right-4 sm:left-12 sm:right-12 md:left-24 md:right-24 bottom-20 rounded-2xl border border-emerald-500/30'
      } os-glass-window shadow-2xl flex flex-col overflow-hidden font-mono-tech`}
    >
      {/* Title Bar Header */}
      <div className="h-10 bg-slate-950/90 border-b border-slate-800 px-4 flex items-center justify-between select-none cursor-pointer">
        {/* Left: Window Traffic Light Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-slate-950 text-[8px] font-bold group"
            title="Close Window"
            data-cursor="CLOSE"
          >
            <X className="w-2 h-2 opacity-0 group-hover:opacity-100" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-slate-950 text-[8px] font-bold group"
            title="Minimize Window"
            data-cursor="MINIMIZE"
          >
            <Minus className="w-2 h-2 opacity-0 group-hover:opacity-100" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onMaximize();
            }}
            className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-slate-950 text-[8px] font-bold group"
            title="Maximize Window"
            data-cursor="MAXIMIZE"
          >
            <Square className="w-2 h-2 opacity-0 group-hover:opacity-100" />
          </button>
        </div>

        {/* Center: Title & Icon */}
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-200">
          {IconComponent && <IconComponent className="w-3.5 h-3.5 text-emerald-400" />}
          <span>{title}</span>
        </div>

        {/* Right: Window Controls */}
        <div className="flex items-center space-x-2 text-[10px] text-slate-500">
          <span>SYS_WIN // {id.toUpperCase()}</span>
        </div>
      </div>

      {/* Window Body Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#060a08]/80 text-slate-200">
        {children}
      </div>
    </div>
  );
}
