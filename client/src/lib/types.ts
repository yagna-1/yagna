// Experience types
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

// Project types
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  repo?: string;
}

// Skills types
export interface SkillItem {
  name: string;
  level: number;
}

export interface ToolItem {
  name: string;
  icon: string;
}

export interface SoftSkill {
  name: string;
  icon: string;
}

// Achievement types
export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API response types
export interface ContactResponse {
  success: boolean;
  message: string;
}
