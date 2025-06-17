// components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState(''); // 'idle', 'sending', 'sent', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Em um ambiente real, você integraria aqui EmailJS, Resend ou seu próprio backend
    // Exemplo simulado de envio:
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula delay de rede
      // Aqui você faria a chamada fetch para EmailJS/Resend
      // const response = await fetch('YOUR_EMAILJS_ENDPOINT', { method: 'POST', body: new FormData(e.target) });
      // if (response.ok) {
        setFormStatus('sent');
        e.target.reset(); // Limpa o formulário
      // } else {
      //   throw new Error('Erro ao enviar mensagem.');
      // }
    } catch (error) {
      console.error("Erro no envio do formulário:", error);
      setFormStatus('error');
    }
  };

  const statusMessages = {
    idle: '',
    sending: 'Enviando...',
    sent: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
    error: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.',
  };

  return (
    <section id="contato" className="py-20 px-4 scroll-mt-20 relative z-30 container mx-auto max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500"
      >
        Fale Conosco
      </motion.h2>
      <GlassCard glowColor="cyan-500">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2 dark:text-gray-300 light:text-gray-700">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 rounded-md bg-gray-700 bg-opacity-30 border border-gray-600 dark:text-gray-200 light:text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
              placeholder="Seu nome"
              aria-label="Nome completo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2 dark:text-gray-300 light:text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 rounded-md bg-gray-700 bg-opacity-30 border border-gray-600 dark:text-gray-200 light:text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
              placeholder="seu.email@example.com"
              aria-label="Seu email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2 dark:text-gray-300 light:text-gray-700">Sua Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-md bg-gray-700 bg-opacity-30 border border-gray-600 dark:text-gray-200 light:text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
              placeholder="Descreva suas necessidades ou projeto..."
              aria-label="Sua mensagem"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-md shadow-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
          </motion.button>
          {formStatus !== 'idle' && (
            <p className={`mt-4 text-center ${formStatus === 'error' ? 'text-red-400' : 'text-green-400'}`}>
              {statusMessages[formStatus]}
            </p>
          )}
        </form>
      </GlassCard>
    </section>
  );
};
