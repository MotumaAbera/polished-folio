import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Zenith Analytics',
    description: 'A real-time data visualization dashboard for enterprise SaaS metrics.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9850e865-4bc8-492b-8c27-9baf689348b0/project-dashboard-33cdcb6f-1774956343088.webp',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'Vitality App',
    description: 'Health and fitness tracking application with social sharing features.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9850e865-4bc8-492b-8c27-9baf689348b0/project-mobile-app-7c899804-1774956342827.webp',
    tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    title: 'Aura Luxe',
    description: 'Luxury e-commerce experience for a boutique fashion brand.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9850e865-4bc8-492b-8c27-9baf689348b0/project-ecommerce-2c1d6d5a-1774956343835.webp',
    tags: ['React', 'Shopify', 'Stripe', 'Framer Motion'],
    link: '#',
    github: '#'
  },
  {
    title: 'Flux Agency',
    description: 'Modern landing page for a creative design agency.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9850e865-4bc8-492b-8c27-9baf689348b0/project-agency-402ec9e0-1774956342550.webp',
    tags: ['Astro', 'GSAP', 'CSS Modules', 'Lenis'],
    link: '#',
    github: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-xl"
            >
              A collection of projects that define my commitment to quality and innovation.
            </motion.p>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2"
          >
            View all projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-400 transition-colors">
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-400 transition-colors">
                    View Code <Code className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};