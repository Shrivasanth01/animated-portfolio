import { motion } from "framer-motion"

const skills = {
  languages: ["Python", "C", "C++", "HTML - CSS"],
  ml: ["Data Preprocessing", "Model Training", "Basic ML Algorithms"],
  concepts: ["Tamil", "English", "Japanese"]
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen  px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Programming Languages */}
        <SkillCard title="Programming" items={skills.languages} />

        {/* Machine Learning */}
        <SkillCard title="Machine Learning" items={skills.ml} />

        {/* Concepts */}
        <SkillCard title="Language" items={skills.concepts} />
      </div>
    </section>
  )
}

function SkillCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800"
    >
      <h3 className="text-xl font-semibold text-cyan-400 mb-4">
        {title}
      </h3>

      <ul className="space-y-2 text-slate-300">
        {items.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="h-2 w-2 bg-cyan-400 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}