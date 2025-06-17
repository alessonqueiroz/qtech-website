// components/ServiceCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const ServiceCard = ({ icon, title, description, delay, glowColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay, duration: 0.5 }}
  >
    <GlassCard glowColor={glowColor} className="h-full flex flex-col justify-between">
      <div className="text-5xl mb-4 text-cyan-400">{icon}</div> {/* Ícone placeholder */}
      <h3 className="text-2xl font-bold mb-3 dark:text-white light:text-gray-900">{title}</h3>
      <p className="dark:text-gray-300 light:text-gray-700 flex-grow">{description}</p>
      <a href="#" className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 transition-colors duration-200">Saiba Mais &rarr;</a>
    </GlassCard>
  </motion.div>
);