import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices or reduced motion
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element with custom cursor attribute
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setCursorLabel(target.getAttribute('data-cursor') || '');
      } else {
        const isClickable = e.target.closest('button, a, input, select, [role="button"]');
        setIsHovered(!!isClickable);
        setCursorLabel(isClickable ? '' : '');
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* Small Precision Dot */}
      <div
        className="fixed top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] transition-transform duration-75"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />

      {/* Dynamic Action Ring / Label */}
      <div
        className={`fixed top-0 left-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-950/20 backdrop-blur-[2px] transition-all duration-200 ease-out ${
          isHovered
            ? 'h-14 w-14 border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-110'
            : 'h-8 w-8 scale-100'
        }`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        {cursorLabel && (
          <span className="font-mono-tech text-[9px] font-bold tracking-widest text-cyan-300 uppercase animate-pulse">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
}
