import { useEffect, useState } from "react"
import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelopeOpenText,
  FaPhoneAlt,
} from "react-icons/fa"

const sections = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "skills", icon: <FaTools />, label: "Skills" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
  { id: "contact", icon: <FaPhoneAlt />, label: "Contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6, // section must be 60% visible
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-5">
        {sections.map((section) => (
          <NavItem
            key={section.id}
            {...section}
            active={activeSection === section.id}
          />
        ))}
      </div>
    </div>
  )
}

function NavItem({ id, icon, label, active }) {
  return (
    <a
      href={`#${id}`}
      className={`
        group relative w-12 h-12 rounded-full flex items-center justify-center
        transition-all duration-300
        ${
          active
            ? "bg-cyan-400 text-black shadow-[0_0_20px_#22d3ee]"
            : "bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400"
        }
      `}
    >
      <span className="text-lg">{icon}</span>

      {/* Tooltip */}
      <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap">
        {label}
      </span>
    </a>
  )
}