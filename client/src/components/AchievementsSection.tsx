import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import { achievements, certifications } from '@/lib/data';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          <h2 className="text-4xl font-serif font-bold mb-2 gold-border-gradient inline-block">Achievements</h2>
          <p className="text-secondary text-lg">Recognition and milestones</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-neutral-light rounded-lg overflow-hidden shadow-lg card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              custom={index * 0.1}
            >
              <div className="h-24 bg-primary flex items-center justify-center">
                <i className={`${achievement.icon} text-5xl text-accent`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-secondary mb-2">{achievement.title}</h3>
                <p className="text-gray-700 mb-4">{achievement.description}</p>
                <p className="text-sm text-gray-500">{achievement.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <motion.h3 
            className="text-2xl font-serif font-bold mb-8 text-primary text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
          >
            Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <motion.div 
                key={index}
                className="flex bg-white border border-neutral p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideUp}
                custom={index * 0.1}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center">
                    <i className="fas fa-certificate text-2xl text-secondary"></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary mb-1">{certification.title}</h4>
                  <p className="text-gray-600 mb-2">{certification.issuer}</p>
                  <p className="text-sm text-gray-500">{certification.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
