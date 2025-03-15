import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-primary relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.03),transparent_70%)]"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-accent/20 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          <h2 className="text-4xl font-serif font-bold mb-2 text-white gold-border-gradient inline-block">Featured Projects</h2>
          <p className="text-accent text-lg">Showcasing my most significant work</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card relative rounded-lg overflow-hidden shadow-2xl h-96 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              custom={index * 0.1}
            >
              <img 
                src={project.image}
                alt={project.title} 
                className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-accent w-24 h-24 -top-12 -right-12 opacity-80"></div>
              </div>
              
              <div className="project-content absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{project.title}</h3>
                <p className="text-neutral-light mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs mr-2 mb-2 border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      className="flex items-center bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <i className="fab fa-github mr-2"></i> Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
