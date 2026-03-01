import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import profile from "../assets/profile.png"
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"
import { FaHome, FaTools, FaProjectDiagram, FaGraduationCap, FaEnvelopeOpenText } from "react-icons/fa"

const words = [
  "Shrivasanth",
  "an ML Engineer",
  "a Programmer",
]

export default function Hero() {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const isName = wordIndex === 0

  useEffect(() => {
    const currentWord = words[wordIndex]
    const speed = isDeleting ? 50 : 90

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 900)
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-10"
      
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 pt-2"
        >
          {/* SINGLE-LINE TYPING HEADING */}
          <div className="min-h-[4.8rem] sm:min-h-[5.8rem] md:min-h-[6.8rem]">
  <h1 className="text-4xl sm:text-6xl sm:text-5xl font-bold text-white leading-[1.25]">
    Hi, I’m{" "}
    <span
      className={`transition-colors duration-300 ${
        isName ? "text-cyan-400" : "text-purple-400"
      }`}
    >
      {text}
      <span className="animate-pulse ml-1">|</span>
    </span>
  </h1>
</div>

          {/* TWO-LINE DESCRIPTION */}
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Computer Science Engineering student passionate about building
            intelligent systems and solving real-world problems using code.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-4 pt-4 flex-wrap">
  <div className="flex justify-center items-center gap-4 pt-4 flex-wrap">

  {/* GitHub */}
  <IconButton
    href="https://github.com/yourusername"
    label="GitHub"
  >
    <FaGithub size={20} />
  </IconButton>

  {/* LinkedIn */}
  <IconButton
    href="https://linkedin.com/in/yourusername"
    label="LinkedIn"
  >
    <FaLinkedin size={20} />
  </IconButton>

  {/* Email */}
  <IconButton
    href="mailto:yourmail@gmail.com"
    label="Email"
  >
    <FaEnvelope size={20} />
  </IconButton>

  {/* Twitter / X */}
  <IconButton
    href="https://twitter.com/yourusername"
    label="Twitter"
  >
    <FaTwitter size={20} />
  </IconButton>

  {/* RESUME BUTTON (WIDER) */}
  <a
  href="/resume.pdf"
  download
  className="group relative h-12 px-7 rounded-full bg-cyan-400 text-black font-semibold flex items-center justify-center hover:scale-110 transition shadow-lg"
>
  Resume

  {/* Tooltip */}
  <span className="absolute -bottom-9 opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap">
    Download
  </span>
</a>
</div>
  
</div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-red-400 blur-2xl opacity-40"></div>
            <img
              src={profile}
              alt="Profile"
              className="relative w-72 h-73 md:w-72 md:h-72  rounded-full object-cover  "
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
  
}


/* SOCIAL BUTTON */
function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:scale-110 transition"
      aria-label={label}
      title={label}
    >
      {label[0]}
    </a>
  )
}
function IconButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:scale-110 transition"
    >
      {children}

      {/* Tooltip */}
      <span className="absolute -bottom-9 opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap">
        {label}
      </span>
    </a>
  )
}
function NavIcon({ icon, label, link }) {
  return (
    <a
      href={link}
      className="group relative w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:scale-110 transition"
    >
      {icon}

      {/* Tooltip */}
      <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap">
        {label}
      </span>
    </a>
  )
}