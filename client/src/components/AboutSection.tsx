import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          <h2 className="text-4xl font-serif font-bold mb-2 gold-border-gradient inline-block">About Me</h2>
          <p className="text-secondary text-lg">Get to know my journey and philosophy</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-2/5 mb-10 md:mb-0 md:pr-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
          >
            <div className="rounded-lg overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Yagna working on code" 
                className="w-full"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Python Developer & AI Enthusiast</h3>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                I'm Yagna Siva Sai Kumar, a passionate Python Developer and AI Specialist based in Vijayawada, Andhra Pradesh. My journey in technology began during my undergraduate studies, where I discovered my fascination with programming and artificial intelligence.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                With expertise in Python development and AI technologies, I specialize in creating sophisticated applications that leverage the power of machine learning and data analysis. My approach combines technical precision with creative problem-solving, allowing me to develop solutions that are both innovative and practical.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-serif font-bold mb-3 text-secondary">Educational Background</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-graduation-cap mt-1 text-accent mr-3"></i>
                    <span>Bachelor of Technology in Electronics and Communication Engineering, with distinction</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-certificate mt-1 text-accent mr-3"></i>
                    <span>Advanced Certification in Artificial Intelligence and Machine Learning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-award mt-1 text-accent mr-3"></i>
                    <span>Secured 99.2 percentile in JEE Mains, demonstrating exceptional analytical abilities</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-serif font-bold mb-3 text-secondary">My Philosophy</h4>
                <p className="text-gray-700 italic border-l-4 border-accent pl-4 py-2">
                  "I believe in the transformative power of technology to solve real-world problems. My goal is to create solutions that not only meet technical requirements but also enhance human experiences and capabilities."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
