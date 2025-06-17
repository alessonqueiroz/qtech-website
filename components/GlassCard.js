// components/GlassCard.js
import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '', glowColor = 'blue-500' }) => {
  return (
    <motion.div
      className={`
        relative p-6 rounded-2xl shadow-xl backdrop-filter backdrop-blur-lg border border-opacity-20
        bg-white bg-opacity-5 dark:bg-gray-800 dark:bg-opacity-20
        overflow-hidden
        hover:scale-[1.02] transition-transform duration-300 ease-out
        ${className}
      `}
      whileHover={{
        boxShadow: `0 0 30px rgba(var(--neon-rgb-${glowColor}), 0.7)`,
        borderColor: `rgba(var(--neon-rgb-${glowColor}), 0.5)`,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className={`absolute inset-0 rounded-2xl pointer-events-none z-0`}>
        <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-300 hover:opacity-70`}
             style={{
               boxShadow: `0 0 50px rgba(var(--neon-rgb-${glowColor}), 0.8)`,
               backgroundColor: `rgba(var(--neon-rgb-${glowColor}), 0.3)`,
             }}></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
