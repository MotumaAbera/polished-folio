import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'TechFlow Solutions',
    role: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: 'Leading the development of a cloud-native SaaS platform. Mentoring junior developers and implementing modern CI/CD practices.',
    achievements: [
      'Reduced infrastructure costs by 30% through migration to serverless architecture.',
      'Improved application performance by 40% with optimized React components.',
      'Designed and implemented a scalable design system used across 5 products.'
    ]
  },
  {
    company: 'Creative Pixel Agency',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Specialized in building high-fidelity interactive web applications for enterprise clients.',
    achievements: [
      'Delivered 15+ complex web projects on time and within budget.',
      'Specialized in complex animations using GSAP and Framer Motion.',
      'Collaborated closely with UI/UX designers to ensure pixel-perfect implementation.'
    ]
  },
  {
    company: 'Spark Innovations',
    role: 'Junior Web Developer',
    period: '2019 - 2020',
    description: 'Worked on maintaining and scaling a large e-commerce platform.',
    achievements: [
      'Successfully integrated 3rd party payment gateways including Stripe and PayPal.',
      'Migrated legacy jQuery codebase to React, improving developer productivity.',
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and the impact I've made at various organizations.
          </motion.p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Connector */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_2fr] gap-8 md:gap-16">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                  <div className="flex items-center md:justify-end gap-2 text-indigo-400 font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="text-gray-400 font-medium">{exp.role}</div>
                </div>

                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-black ring-1 ring-indigo-600/50"></div>
                  <div className="flex-1 w-px bg-white/10"></div>
                </div>

                <div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};