import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
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
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif font-bold">
              <span className="text-accent">Y</span>agna <span className="text-accent">S</span>iva <span className="text-accent">S</span>ai <span className="text-accent">K</span>umar
            </h2>
            <p className="text-gray-300 mt-2">Python Developer & AI Specialist</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-accent transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">
            &copy; {currentYear} Yagna Siva Sai Kumar. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://www.linkedin.com/in/yagna-siva-sai-kumar-984881201/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-accent transition-colors duration-300 text-lg">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/yagna-1" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-accent transition-colors duration-300 text-lg">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://leetcode.com/u/Kolla_Yagna_Siva_Sai_Kumar/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-accent transition-colors duration-300 text-lg">
              <i className="fas fa-code"></i>
            </a>
            <a href="https://www.geeksforgeeks.org/user/yagnasivasaikumar/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-accent transition-colors duration-300 text-lg">
              <i className="fas fa-laptop-code"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
