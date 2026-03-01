import { motion } from "framer-motion"

const projects = [
  {
    title: "Cyber-Threat Detection Using Behavioural Biometrics",
    description:
      "Built a machine learning model to analyze data and make predictions using preprocessing, training, and evaluation techniques.",
    tech: ["Python", "Machine Learning"],
  },
  {
    title: "Banking Management System",
    description:
      "A console-based banking system implementing account creation, transactions, and balance management using core programming concepts.",
    tech: ["Python", "OOP"],
  },
  {
    title: "Smart Lighting System",
    description:
      "Developed a structured system to manage the lighting in a room with the available lighting in a room and optimize the lighting.",
    tech: ["IOT", "Automations"],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen  px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          {project.title}
        </h3>

        <p className="text-slate-300 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}