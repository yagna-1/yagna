import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center text-white relative">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.08),transparent_60%)]"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-accent/30 hidden md:block"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-accent/30 hidden md:block"></div>
      
      {/* Floating elements for atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/40 hidden lg:block animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-accent/30 hidden lg:block animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-accent/40 hidden lg:block animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          animate="visible" 
          variants={fadeIn}
        >
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent font-medium text-xl mb-2 tracking-wider"
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            <span className="text-gradient">Yagna Siva Sai Kumar</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-3xl font-light mb-6"
          >
            <span className="text-accent">Python Developer</span> & AI Specialist
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg mb-8 max-w-lg opacity-90 leading-relaxed"
          >
            Crafting intelligent solutions with code, transforming complex challenges 
            into elegant algorithms with precision and creativity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button
              onClick={() => handleScrollToSection('projects')}
              className="button-accent py-3 px-6 rounded-md inline-flex items-center justify-center"
            >
              <span className="mr-2">View Projects</span>
              <i className="fas fa-arrow-right text-primary"></i>
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="button-primary py-3 px-6 rounded-md inline-flex items-center justify-center"
            >
              <span className="mr-2">Contact Me</span>
              <i className="fas fa-envelope text-accent"></i>
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 hidden md:block"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('about');
              }}
              className="inline-flex items-center text-accent hover:text-white transition-colors"
            >
              <span className="mr-2 font-medium">Scroll to learn more</span>
              <i className="fas fa-chevron-down animate-bounce"></i>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            {/* Enhanced gold ring decorative elements */}
            <div className="absolute -inset-2 rounded-full border-2 border-accent opacity-40 animate-[spin_20s_linear_infinite] backdrop-blur-sm"></div>
            <div className="absolute -inset-4 rounded-full border-2 border-accent opacity-30 animate-[spin_25s_linear_infinite_reverse]"></div>
            <div className="absolute -inset-6 rounded-full border-1 border-accent/20 animate-[spin_30s_linear_infinite]"></div>
            
            {/* Gold glow effect */}
            <div className="absolute inset-0 rounded-full bg-accent opacity-10 filter blur-xl"></div>
            
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-3xl relative z-10 accent-glow">
              {/* Professional photograph */}
              <img 
                src="https://raw.githubusercontent.com/yagna-1/photos/refs/heads/main/yagna.jpg" 
                alt="Yagna Siva Sai Kumar" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-8 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full shadow-xl border border-accent/40"
            >
              <span className="text-sm font-medium flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-accent"></i>
                Vijayawada, India
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
