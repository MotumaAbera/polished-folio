import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe2, Cpu } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '40+' },
  { label: 'Happy Clients', value: '25+' },
  { label: 'Lines of Code', value: '100K+' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9850e865-4bc8-492b-8c27-9baf689348b0/profile-photo-f4e744d7-1774956342518.webp"
                alt="Alex Rivera"
                className="relative rounded-2xl w-full aspect-square object-cover border border-white/10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate about creating <br />
              <span className="text-indigo-400">impactful technology</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm a full-stack developer based in San Francisco. I thrive at the intersection
              of design and engineering, crafting experiences that are both visually stunning
              and technically robust.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              With a background in both Frontend and Backend systems, I bring a holistic
              perspective to every project I touch, ensuring scalability, performance,
              and accessibility are never compromised.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};