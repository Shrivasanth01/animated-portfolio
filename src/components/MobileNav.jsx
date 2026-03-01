import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelopeOpenText,
} from "react-icons/fa"

export default function MobileNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex gap-4 px-5 py-3 bg-slate-900/90 backdrop-blur-xl rounded-full border border-slate-700">
        <NavItem icon={<FaHome />} link="#home" />
        <NavItem icon={<FaTools />} link="#skills" />
        <NavItem icon={<FaProjectDiagram />} link="#projects" />
        <NavItem icon={<FaGraduationCap />} link="#education" />
        <NavItem icon={<FaEnvelopeOpenText />} link="#contact" />
      </div>
    </div>
  )
}

function NavItem({ icon, link }) {
  return (
    <a
      href={link}
      className="w-11 h-11 rounded-full flex items-center justify-center text-slate-300 hover:bg-cyan-400 hover:text-black transition"
    >
      {icon}
    </a>
  )
}