// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const About = () => (
  <section id="sobre" className="py-20 px-4 scroll-mt-20 relative z-30 container mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500"
    >
      Sobre a QTech
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="space-y-6 text-lg dark:text-gray-300 light:text-gray-700"
      >
        <p>A QTech Soluções Tecnológicas nasceu da paixão por inovação e do desejo de impulsionar negócios através da tecnologia. Nossa missão é criar soluções digitais que não apenas atendam às necessidades atuais, mas que antecipem as demandas futuras do mercado.</p>
        <p>Somos especializados em <strong>Desenvolvimento Web</strong>, <strong>Sistemas Personalizados</strong>, <strong>Inteligência Artificial Aplicada a Negócios</strong> e <strong>Softwares Sob Demanda</strong>. Combinamos criatividade, expertise técnica e as mais recentes tecnologias para entregar projetos de alto impacto.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <GlassCard glowColor="green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-400 dark:text-green-400 light:text-green-600">Nossa Visão e Tecnologias</h3>
          <p className="mb-4 dark:text-gray-200 light:text-gray-800">Ser referência em inovação tecnológica, reconhecida pela excelência e pela capacidade de transformar desafios em oportunidades digitais.</p>
          <ul className="list-disc list-inside dark:text-gray-300 light:text-gray-700">
            <li><strong>Frameworks:</strong> Next.js, React, Node.js</li>
            <li><strong>Estilização:</strong> Tailwind CSS</li>
            <li><strong>Animações:</strong> Framer Motion, Three.js/R3F</li>
            <li><strong>Bancos de Dados:</strong> PostgreSQL, MongoDB</li>
            <li><strong>Cloud:</strong> AWS, Google Cloud, Vercel</li>
            <li><strong>IA/ML:</strong> Python, TensorFlow, PyTorch</li>
          </ul>
        </GlassCard>
      </motion.div>
    </div>
  </section>
);
