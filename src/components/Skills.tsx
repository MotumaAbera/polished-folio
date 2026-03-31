import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Database, 
  Layout, 
  Server, 
  Smartphone,
  PenTool,
  Terminal,
  Palette
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    color: 'text-blue-400'
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Supabase', 'Redis'],
    color: 'text-green-400'
  },
  {
    title: 'Design',
    icon: <Palette className="w-6 h-6" />,
    skills: ['Figma', 'UI/UX Design', 'Design Systems', 'Adobe Creative Suite', 'Prototyping'],
    color: 'text-purple-400'
  },
  {
    title: 'Tools & DevOps',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Jest'],
    color: 'text-orange-400'
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors group"
            >
              <div className={`mb-6 p-3 rounded-xl bg-white/5 w-fit ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-400 group-hover:text-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};