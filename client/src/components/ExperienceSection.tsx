import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import { experienceItems } from '@/lib/data';

export default function ExperienceSection() {
  // Function to render skill tag with better visibility
  const renderSkillTag = (skill: string, idx: number) => (
    <span 
      key={idx} 
      className="inline-block bg-secondary/15 text-secondary font-medium px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-secondary/30"
    >
      {skill}
    </span>
  );
  return (
    <section id="experience" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(24,90,219,0.02),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          <h2 className="text-4xl font-serif font-bold mb-2 gold-border-gradient inline-block">Professional Experience</h2>
          <p className="text-secondary text-lg">My journey through the tech industry</p>
        </motion.div>
        
        <div className="relative timeline-container">
          {experienceItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`timeline-item mb-16 flex flex-col md:flex-row`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              custom={index * 0.1}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                    <div className="bg-neutral-light p-8 rounded-xl shadow-lg inline-block card-hover border-t-4 border-accent">
                      <div className="mb-4 inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                        <i className="far fa-calendar-alt mr-2"></i>
                        {item.period}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-gradient-blue mb-2">{item.role}</h3>
                      <h4 className="text-xl text-primary mb-4 flex items-center justify-end">
                        <i className="far fa-building mr-2"></i>
                        {item.company}
                      </h4>
                      <p className="text-gray-700 mb-5">{item.description}</p>
                      <div className="mt-4">
                        {item.skills.map(renderSkillTag)}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-8 md:justify-center">
                    <div className="relative">
                      <div className="w-10 h-10 bg-accent rounded-full border-4 border-white shadow-lg accent-glow"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="hidden md:flex md:w-8 md:justify-center">
                    <div className="relative">
                      <div className="w-10 h-10 bg-accent rounded-full border-4 border-white shadow-lg accent-glow"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <div className="bg-neutral-light p-8 rounded-xl shadow-lg inline-block card-hover border-t-4 border-accent">
                      <div className="mb-4 inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                        <i className="far fa-calendar-alt mr-2"></i>
                        {item.period}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-gradient-blue mb-2">{item.role}</h3>
                      <h4 className="text-xl text-primary mb-4 flex items-center">
                        <i className="far fa-building mr-2"></i>
                        {item.company}
                      </h4>
                      <p className="text-gray-700 mb-5">{item.description}</p>
                      <div className="mt-4">
                        {item.skills.map(renderSkillTag)}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
