import { motion } from "framer-motion"

const navItems = [
  { label: "Home", link: "#home" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Education", link: "#education" },
  { label: "Contact", link: "#contact" },
]

export default function FloatingNav() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-10">
      {navItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          className="group relative w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center cursor-pointer hover:bg-cyan-400 transition"
          whileHover={{ scale: 1.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-black"></span>

          {/* Tooltip */}
          <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded">
            {item.label}
          </span>
        </motion.a>
      ))}
    </div>
  )
}