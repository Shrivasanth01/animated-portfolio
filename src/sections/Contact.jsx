import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen  px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-10"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-slate-400 max-w-xl mx-auto mb-14"
      >
        I’m open to internships, projects, and learning opportunities.
        Feel free to reach out if you’d like to connect.
      </motion.p>

      <div className="text-2xl max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
        <p className="text-slate-300 mb-6">
           9363664299 
        </p>

        <a
          href="mailto:yourmail@example.com"
          className="text-cyan-400 text-lg font-semibold hover:underline"
        >
          shrivasanth01@gmail.com
        </a>

        <div className="flex justify-center gap-8 mt-10">
          <SocialLink label="GitHub" url="https://github.com/yourusername" />
          <SocialLink label="LinkedIn" url="https://linkedin.com/in/yourusername" />
        </div>
      </div>
    </section>
  )
}

function SocialLink({ label, url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="text-slate-300 hover:text-cyan-400 transition font-medium"
    >
      {label}
    </motion.a>
  )
}