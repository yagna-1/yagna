import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData } from '@/lib/types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();
  
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "An error occurred. Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(24,90,219,0.02),transparent_70%)]"></div>
      <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-accent/20 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 border-accent/20 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          <h2 className="text-4xl font-serif font-bold mb-2 gold-border-gradient inline-block">Get in Touch</h2>
          <p className="text-secondary text-lg">Let's discuss your project or opportunities</p>
        </motion.div>
        
        <div className="flex justify-center">
          <motion.div 
            className="w-full max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
          >
            <div className="bg-gradient-to-b from-neutral-light to-white p-8 rounded-xl shadow-xl h-full border-t-4 border-accent">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gradient-blue">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary/10 to-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md border border-accent/10">
                    <i className="fas fa-map-marker-alt text-xl text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1 text-lg">Location</h4>
                    <p className="text-gray-600">Vijayawada, Andhra Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary/10 to-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md border border-accent/10">
                    <i className="fas fa-envelope text-xl text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1 text-lg">Email</h4>
                    <p className="text-gray-600">yagnasivasaikumar@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary/10 to-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md border border-accent/10">
                    <i className="fas fa-phone text-xl text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1 text-lg">Phone</h4>
                    <p className="text-gray-600">+91 83674 99619</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-primary mb-6 text-lg">Connect with me</h4>
                <div className="flex space-x-5">
                  <a 
                    href="https://www.linkedin.com/in/yagna-siva-sai-kumar-984881201/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 accent-glow"
                  >
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </a>
                  <a 
                    href="https://github.com/yagna-1" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 accent-glow"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a 
                    href="https://leetcode.com/u/Kolla_Yagna_Siva_Sai_Kumar/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 accent-glow"
                  >
                    <i className="fas fa-code text-lg"></i> {/* LeetCode */}
                  </a>
                  <a 
                    href="https://www.geeksforgeeks.org/user/yagnasivasaikumar/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 accent-glow"
                  >
                    <i className="fas fa-laptop-code text-lg"></i> {/* GeeksforGeeks */}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
