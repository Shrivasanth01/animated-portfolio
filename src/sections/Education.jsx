import { motion } from "framer-motion"

const education = [
  {
    year: "2024 – Present",
    title: "B.E / B.Tech in Computer Science Engineering",
    institute: "SRM Institute Of Science And Technology",
    description:
      "Currently pursuing Computer Science Engineering with focus on programming, data structures, and machine learning.",
  },
  {
    year: "2021 – 2023",
    title: "Higher Secondary Education",
    institute: "Sri Raghavendra Matric Hr. Sec School",
    description:
      "Completed higher secondary education with strong foundation in mathematics and computer science.",
  },
  {
    year: "2020 – 2021",
    title: "Secondary School Education",
    institute: "St. Judes Public School and Junior College",
    description:
      "Completed secondary education with emphasis on analytical thinking and problem solving.",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen  px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto relative border-l border-slate-800">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 ml-6"
          >
            {/* Dot */}
            <span className="absolute -left-[7px] mt-2 h-4 w-4 rounded-full bg-cyan-400"></span>

            <p className="text-sm text-slate-400 mb-1">{item.year}</p>

            <h3 className="text-xl font-semibold text-cyan-400">
              {item.title}
            </h3>

            <p className="text-slate-300 font-medium">
              {item.institute}
            </p>

            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}