import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import { programmingLanguages, frameworks, tools, softSkills } from '@/lib/data';

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When skills section is visible, animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                (bar as HTMLElement).style.width = width;
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-neutral-light relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(24,90,219,0.03),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          <h2 className="text-4xl font-serif font-bold mb-2 gold-border-gradient inline-block">Technical Skills</h2>
          <p className="text-secondary text-lg">My expertise and technical proficiency</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16" ref={skillsRef}>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <motion.h3 
              className="text-2xl font-serif font-bold mb-8 text-primary gold-border-gradient inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
            >
              Programming Languages
            </motion.h3>
            
            {programmingLanguages.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-primary">{skill.name}</span>
                  <span className="text-accent font-medium">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    data-width={`${skill.level}%`} 
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
            
            <motion.h3 
              className="text-2xl font-serif font-bold mb-8 mt-12 text-primary gold-border-gradient inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
            >
              Frameworks & Libraries
            </motion.h3>
            
            {frameworks.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-primary">{skill.name}</span>
                  <span className="text-accent font-medium">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    data-width={`${skill.level}%`} 
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <motion.h3 
              className="text-2xl font-serif font-bold mb-8 text-primary gold-border-gradient inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
            >
              Tools & Technologies
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 card-hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={slideUp}
                  custom={index * 0.1}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-secondary/20 flex items-center justify-center mr-3 border border-accent/20">
                      <i className={`${tool.icon} text-xl text-secondary`}></i>
                    </div>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.h3 
              className="text-2xl font-serif font-bold mb-8 mt-12 text-primary gold-border-gradient inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
            >
              Soft Skills
            </motion.h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-md text-center card-hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={slideUp}
                  custom={index * 0.1}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/10 to-secondary/20 rounded-full flex items-center justify-center mb-3 border border-accent/10">
                    <i className={`${skill.icon} text-2xl text-secondary`}></i>
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
