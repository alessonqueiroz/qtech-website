// components/NeuralNetworkSVG.js
import React from 'react';
import { motion } from 'framer-motion';

export const NeuralNetworkSVG = () => {
  return (
    <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="animate-pulse-light">
        {/* Simulação de nós da rede neural */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r={Math.random() * 3 + 1}
            fill="url(#neon-gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: Math.random() * 2, duration: 1 }}
          />
        ))}
        {/* Simulação de conexões */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={Math.random() * 1000}
            y1={Math.random() * 1000}
            x2={Math.random() * 1000}
            y2={Math.random() * 1000}
            stroke="url(#neon-gradient)"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: Math.random() * 2.5, duration: 1.5 }}
          />
        ))}
        <defs>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffcc" />
            <stop offset="100%" stopColor="#00ccff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
