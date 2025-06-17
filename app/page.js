// app/page.js
'use client'; // Necessário para usar hooks e interatividade no Next.js App Router

import React from 'react'; // Removido useState e useEffect, pois a navegação é gerenciada no layout
import { motion } from 'framer-motion';

// Importe seus componentes de seção e UI
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { GlassCard } from '../components/GlassCard';

export default function Page() {
  // Removido: const [currentPage, setCurrentPage] = useState('home');
  // Removido: Este useEffect para IntersectionObserver, pois a lógica de destaque de navegação
  // e o monitoramento de seções visíveis serão centralizados no layout.js,
  // ou diretamente no CSS/JavaScript de navegação se preferir um método mais leve.

  return (
    <>
      <Home onCTA={() => window.location.hash = 'servicos'} />
      <About />
      <Services />

      {/* Seção Portfólio */}
      <section id="portfolio" className="py-20 px-4 scroll-mt-20 relative z-30 container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
        >
          Nosso Portfólio
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cards do Portfólio (com GlassCard) */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard glowColor="purple-500" className="h-full">
                <img src={`https://placehold.co/400x250/1a202c/e0e0e0?text=Projeto+${i+1}`} alt={`Projeto ${i+1}`} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-2">Projeto Inovador {i + 1}</h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">Solução de {['Desenvolvimento Web', 'IA Aplicada', 'Sistema Personalizado'][i % 3]}.</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-12 text-gray-300 dark:text-gray-300 light:text-gray-700">
          <a href="#" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300">Ver Portfólio Completo</a>
        </p>
      </section>

      {/* Seção Preços */}
      <section id="precos" className="py-20 px-4 scroll-mt-20 relative z-30 container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
        >
          Planos e Preços
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Básico', 'Profissional', 'Enterprise'].map((plan, i) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <GlassCard glowColor={['blue-500', 'green-500', 'purple-500'][i]} className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4">{plan}</h3>
                <p className="text-4xl font-bold text-cyan-400 mb-4">$X.XXX<span className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-600">/mês</span></p>
                <ul className="text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-2 mb-6 flex-grow">
                  <li>✔️ Característica 1</li>
                  <li>✔️ Característica 2</li>
                  <li>✔️ Característica 3</li>
                  {i > 0 && <li>✔️ Característica Avançada</li>}
                  {i > 1 && <li>✔️ Suporte Dedicado</li>}
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-md shadow-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                  Escolher Plano
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}