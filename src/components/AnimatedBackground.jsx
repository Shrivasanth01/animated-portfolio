export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#040d0a]">
      
      {/* Gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#040d0a] via-[#081814] to-[#040d0a] animate-gradient" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-float-medium" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float-fast" />
    </div>
  )
}