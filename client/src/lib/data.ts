import {
  Experience,
  Project,
  SkillItem,
  ToolItem,
  SoftSkill,
  Achievement,
  Certification
} from './types';

// Experience data
export const experienceItems: Experience[] = [
  {
    role: "Python Developer",
    company: "",
    period: "2024 - Present",
    description: "Leading the development of AI-driven applications, focusing on natural language processing and document analysis tools. Mentoring junior developers and implementing best practices in software development.",
    skills: ["Python", "TensorFlow", "Django"]
  },
  {
    role: "SDE Intern",
    company: "Exilire",
    period: "2024 - 2024",
    description: "Conducted research on advanced machine learning algorithms for document analysis. Developed a prototype for automated data extraction from unstructured documents using computer vision techniques.",
    skills: ["Pythn", "Django", "React Native"]
  }
];

// Projects data
export const projects: Project[] = [
  {
    title: "Notes App",
    description: "A modern web application for note-taking using Django and React.js",
    image: "https://raw.githubusercontent.com/yagna-1/photos/refs/heads/main/premium_photo-1705010649877-f561dd47dee9.jpeg",
    technologies: ["Django", "React.js", "PostgreSQL"],
    repo: "https://github.com/yagna-1/notes-app"
  },
  {
    title: "Automating PDF Interaction",
    description: "A tool leveraging LangChain and ChatGPT for efficient PDF data extraction",
    image: "https://raw.githubusercontent.com/yagna-1/photos/refs/heads/main/photo-1616861771635-49063a4636ed.jpeg",
    technologies: ["Python", "LangChain", "OpenAI API"],
    repo: "https://github.com/yagna-1/RAG-based-QA"
  },
  {
    title: "Agentic Document Extractor",
    description: "An AI-driven document analysis tool utilizing TensorFlow and Spacy",
    image: "https://raw.githubusercontent.com/yagna-1/photos/refs/heads/main/istockphoto-1933417108-612x612.jpg",
    technologies: ["TensorFlow", "Spacy", "Python"],
    repo: "https://github.com/yagna-1/gentic-document-extractor"
  }
];

// Skills data
export const programmingLanguages: SkillItem[] = [
  { name: "Python", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "C++", level: 80 },
  { name: "Java", level: 75 }
];

export const frameworks: SkillItem[] = [
  { name: "Django", level: 90 },
  { name: "React.js", level: 85 },
  { name: "TensorFlow", level: 80 }
];

export const tools: ToolItem[] = [
  { name: "Docker", icon: "fab fa-docker" },
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "PostgreSQL", icon: "fas fa-database" },
  { name: "Machine Learning", icon: "fas fa-brain" },
  { name: "NLP", icon: "fas fa-robot" },
  { name: "REST API", icon: "fas fa-server" },
  { name: "CI/CD", icon: "fas fa-code-branch" }
];

export const softSkills: SoftSkill[] = [
  { name: "Team Leadership", icon: "fas fa-users" },
  { name: "Communication", icon: "fas fa-comments" },
  { name: "Problem Solving", icon: "fas fa-lightbulb" },
  { name: "Time Management", icon: "fas fa-clock" },
  { name: "Mentoring", icon: "fas fa-chalkboard-teacher" },
  { name: "Project Management", icon: "fas fa-project-diagram" }
];

// Achievements data
export const achievements: Achievement[] = [
  {
    title: "JEE Mains Excellence ✨",
    description: "Secured 99.2 percentile in JEE Mains, demonstrating exceptional analytical and problem-solving abilities.",
    year: "2016",
    icon: "fas fa-trophy"
  },
  {
    title: "LeetCode Champion 🏆",
    description: "Achieved top 1400 rank in LeetCode contests, showcasing exceptional algorithmic skills and competitive programming prowess.",
    year: "2021",
    icon: "fas fa-code"
  },
  {
    title: "Raising Star 🌟",
    description: "Received the Raising Star Award for commitment and hard work.",
    year: "2024",
    icon: "fas fa-award"
  }
];

export const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    description: "Completed a comprehensive specialization covering machine learning techniques."
  },
  {
    title: "Python for Data Science and Machine Learning",
    issuer: "Udemy",
    description: "Mastered advanced Python techniques for data analysis, visualization, and machine learning model development."
  },
  {
    title: "TensorFlow Developer Certification",
    issuer: "Coursera",
    description: "Demonstrated proficiency in building and training neural networks using TensorFlow for various AI applications."
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    description: "Completed a comprehensive specialization covering deep learning, NLP, and computer vision techniques."
  }
];

