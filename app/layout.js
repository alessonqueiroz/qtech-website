// app/layout.js
'use client'; // Necessário para usar hooks como useState e useEffect no App Router

import React, { useState, useEffect, useCallback } from 'react';
import { Inter } from 'next/font/google'; // Importe a fonte Inter
import { motion, AnimatePresence } from 'framer-motion'; // Para animações

import './globals.css'; // Importe seu CSS global

// Importe os componentes de ícone e background
import { IconMenu, IconClose, IconArrowUp } from '../components/Icons';
import { BinaryCodeBackground } from '../components/BinaryCodeBackground';
import { NeuralNetworkSVG } from '../components/NeuralNetworkSVG';

const inter = Inter({ subsets: ['latin'] });

// REMOVIDO: export const metadata = { ... } (como na correção anterior)
// Adicionamos as tags <title> e <meta> diretamente no <head> para layouts com 'use client'

export default function RootLayout({ children }) {
  // Inicializa darkMode com false. O estado real será definido no useEffect.
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(0); // Usar número para scrollProgress
  const [scrollProgress, setScrollProgress] = useState(0);


  // useEffect para configurar o modo escuro inicial e persistência
  // Esta lógica agora roda apenas no cliente e manipula a classe 'dark' no html
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode = savedTheme ? savedTheme === 'dark' : prefersDark;

    setDarkMode(initialMode);
    document.documentElement.classList.toggle('dark', initialMode); // Aplica a classe ao <html>
  }, []); // Executa apenas uma vez na montagem do componente no cliente

  // Callback para alternar o modo escuro/claro
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode); // Atualiza a classe no <html>
      return newMode;
    });
  }, []); // Dependências vazias para memoizar a função

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    setScrollProgress((scrolled / totalHeight) * 100);

    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '0%', transition: { type: 'spring', stiffness: 100, damping: 20 } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.2 } },
  };

  return (
    // Removida a classe 'dark' do <html> aqui, pois ela é adicionada/removida via JS no useEffect
    <html lang="pt-BR" className={`${inter.className}`}>
      <head>
        <title>QTech Soluções Tecnológicas</title>
        <meta name="description" content="Tecnologia que transforma, soluções que impulsionam." />
      </head>
      {/* As classes de background e texto do body agora vêm das classes Tailwind base e 'dark:' */}
      <body className="bg-qtech-light text-qtech-text-light dark:bg-qtech-dark dark:text-qtech-text-dark transition-colors duration-300">
        <div className="relative min-h-screen">
          {/* Backgrounds tecnológicos */}
          <BinaryCodeBackground />
          <NeuralNetworkSVG />
          {/* Overlay escuro/claro */}
          {/* Removidas classes 'light:' no overlay para evitar conflitos, a cor de fundo padrão será light e dark via classe 'dark' */}
          <div className="absolute inset-0 bg-black bg-opacity-80 z-20 dark:bg-black dark:bg-opacity-80 transition-colors duration-300"></div>

          <div className="relative z-30 antialiased">
            {/* Barra de Progresso no Scroll */}
            <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 z-50"
                 style={{ width: `${scrollProgress}%` }}></div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-gray-700 border-opacity-30 py-4 px-6 flex justify-between items-center dark:bg-black dark:bg-opacity-30 light:bg-white light:bg-opacity-30 transition-colors duration-300">
              <div className="flex items-center">
                {/* Placeholder para Logomarca da empresa */}
                <img src="/assets/qtech-logo.png" alt="QTech Logo" className="h-10 mr-4 rounded-md" />
              </div>
              <nav className="hidden md:flex space-x-6">
                {['Home', 'Sobre', 'Serviços', 'Portfólio', 'Preços', 'Contato'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`}
                     className={`text-gray-300 hover:text-cyan-400 transition-colors duration-200
                     ${typeof window !== 'undefined' && window.location.hash.slice(1) === item.toLowerCase() ? 'text-cyan-400 font-semibold' : ''}
                     `}>{item}</a>
                ))}
              </nav>
              <div className="flex items-center space-x-4">
                {/* Botão de Dark Mode */}
                <button
                  onClick={toggleDarkMode} // Usando a função memoizada
                  className="p-2 rounded-full bg-gray-700 bg-opacity-50 hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? '💡' : '🌑'}
                </button>
                <button
                  className="md:hidden p-2 rounded-md bg-gray-700 bg-opacity-50 hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Open menu"
                >
                  {isMenuOpen ? <IconClose /> : <IconMenu />}
                </button>
              </div>
            </header>

            {/* Menu Hambúrguer (Mobile) */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  className="fixed inset-y-0 right-0 w-64 bg-black bg-opacity-90 backdrop-filter backdrop-blur-xl z-50 p-6 md:hidden flex flex-col items-start pt-24 dark:bg-black dark:bg-opacity-90 light:bg-white light:bg-opacity-90 transition-colors duration-300"
                >
                  {['Home', 'Sobre', 'Serviços', 'Portfólio', 'Preços', 'Contato'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-xl py-3 hover:text-cyan-400 transition-colors duration-200 text-gray-200 dark:text-gray-200 light:text-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <main className="pt-20"> {/* Ajuste para o header fixo */}
              {children}
            </main>

            {/* Botão Voltar ao Topo */}
            <AnimatePresence>
              {showScrollToTop && (
                <motion.button
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                  aria-label="Voltar ao topo"
                >
                  <IconArrowUp />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg border-t border-gray-700 border-opacity-30 py-8 px-6 text-center text-gray-400 dark:bg-black dark:bg-opacity-30 light:bg-white light:bg-opacity-30 light:border-gray-300 transition-colors duration-300">
              <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                <div className="mb-4 md:mb-0">
                  <p>&copy; {new Date().getFullYear()} QTech Soluções Tecnológicas. Todos os direitos reservados.</p>
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-200 text-gray-400 dark:text-gray-400 light:text-gray-600">Privacidade</a>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-200 text-gray-400 dark:text-gray-400 light:text-gray-600">Termos</a>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-200 text-gray-400 dark:text-gray-400 light:text-gray-600">FAQ</a>
                </div>
              </div>
              {/* Exemplo de integração de chat flutuante (ícone WhatsApp) */}
              <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer"
                 className="fixed bottom-6 left-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
                 aria-label="Chat via WhatsApp">
                {/* Ícone WhatsApp SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2.03c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.5 3.42 1.46 4.88l-1.5 5.57 5.71-1.45c1.37.75 2.92 1.15 4.24 1.15h.02c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm.02 1.62c4.58 0 8.29 3.71 8.29 8.29s-3.71 8.29-8.29 8.29h-.01c-1.35 0-2.67-.38-3.83-1.09l-.27-.16-2.82.72.73-2.73-.18-.28c-.84-1.3-1.29-2.8-1.29-4.36 0-4.58 3.71-8.29 8.29-8.29zm-3.23 4.54c-.2-.09-.44-.1-.65-.1-.18 0-.39.05-.59.25-.19.19-.73.7-.73 1.71s.75 2.01.86 2.15c.11.14 1.42 2.17 3.44 2.97.5.19.88.31 1.17.4.38.11.69.09.95-.02.26-.11.83-.34 1.05-.68.22-.34.22-.63.15-.75-.07-.11-.26-.18-.55-.32-.26-.14-.59-.26-.82-.26-.22 0-.49 0-.74.34-.26.35-.97 1.25-1.18 1.49-.2.24-.39.27-.72.08-.3-.18-1.26-.47-2.4-1.48-.88-.79-1.47-1.75-1.64-2.05-.18-.3-.02-.46.12-.6h.01c.11-.09.25-.2.37-.34.12-.14.23-.29.34-.43s.18-.29.27-.44c.09-.15.05-.28-.02-.4-.07-.12-.65-1.56-.89-2.14-.24-.58-.49-.49-.68-.49-.19 0-.4-.05-.61-.05z"/>
                </svg>
              </a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}