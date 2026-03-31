import React from 'react';
import { Code, ExternalLink, Share2, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
              ALEX.DEV
            </div>
            <p className="text-gray-500 text-sm">
              © {year} Alex Rivera. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Code className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
          Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Alex Rivera
        </div>
      </div>
    </footer>
  );
};