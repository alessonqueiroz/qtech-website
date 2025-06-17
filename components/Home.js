// components/Home.js
import React from 'react';
import { motion } from 'framer-motion';

export const Home = ({ onCTA }) => (
  <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 py-20 relative z-30 scroll-mt-20">
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 drop-shadow-lg"
      >
        Tecnologia Que Transforma, Soluções Que Impulsionam.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto dark:text-gray-300 light:text-gray-700"
      >
        Na QTech, transformamos ideias em realidade digital com inovação, inteligência artificial e excelência em desenvolvimento.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
        onClick={onCTA}
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
      >
        Descubra Nossas Soluções
      </motion.button>
    </div>
  </section>
);
