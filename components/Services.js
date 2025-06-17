// components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';

export const Services = () => (
  <section id="servicos" className="py-20 px-4 scroll-mt-20 relative z-30 container mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
    >
      Nossos Serviços
    </motion.h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ServiceCard
        icon="🌐"
        title="Desenvolvimento Web"
        description="Criação de sites e aplicações web modernas, responsivas e de alta performance para impulsionar sua presença online."
        delay={0.1}
        glowColor="blue-500"
      />
      <ServiceCard
        icon="⚙️"
        title="Sistemas Personalizados"
        description="Desenvolvimento de sistemas sob medida para otimizar seus processos, gerenciar dados e aumentar a eficiência do seu negócio."
        delay={0.2}
        glowColor="green-500"
      />
      <ServiceCard
        icon="🤖"
        title="IA Aplicada a Negócios"
        description="Implementação de soluções de inteligência artificial para automação, análise preditiva e otimização de decisões estratégicas."
        delay={0.3}
        glowColor="purple-500"
      />
      <ServiceCard
        icon="💻"
        title="Softwares Sob Demanda"
        description="Concepção e desenvolvimento de softwares customizados, projetados especificamente para atender às suas necessidades únicas."
        delay={0.4}
        glowColor="cyan-500"
      />
    </div>
  </section>
);
