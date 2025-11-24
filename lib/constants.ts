import { Project, SkillCategory, Experience, Stat, NavLink } from '@/types';

export const siteConfig = {
  name: "Vikash Kumar",
  title: "Full-Stack Developer & Designer",
  description: "Building beautiful and functional web experiences with modern technologies",
  url: "https://vikashkumar.dev",
  email: "hello@vikashkumar.dev",
  location: "San Francisco, CA",
  availability: "Available for freelance projects",
};

export const socialLinks = {
  github: "https://github.com/vikashkumar",
  linkedin: "https://linkedin.com/in/vikashkumar",
  twitter: "https://twitter.com/vikashkumar",
  dribbble: "https://dribbble.com/vikashkumar",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack online marketplace with real-time inventory, secure payments, and comprehensive admin dashboard",
    longDescription: "A comprehensive e-commerce solution built with Next.js 14, featuring server-side rendering for optimal SEO, Stripe integration for payments, and a powerful admin panel for managing products, orders, and analytics.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    category: "Web App",
    featured: true,
    github: "https://github.com/vikashkumar/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    year: "2024",
  },
  {
    id: 2,
    title: "Task Management SaaS",
    description: "Collaborative project management tool with real-time updates, team chat, and advanced analytics",
    longDescription: "Modern task management application with drag-and-drop kanban boards, real-time collaboration using WebSockets, and comprehensive reporting features.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    category: "Web App",
    featured: true,
    github: "https://github.com/vikashkumar/taskmanager",
    demo: "https://taskmanager-demo.vercel.app",
    year: "2024",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content creation platform using GPT-4 for blog posts, social media, and marketing copy",
    longDescription: "Innovative content generation tool leveraging OpenAI's GPT-4 API to create high-quality, SEO-optimized content across multiple formats and languages.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Next.js", "OpenAI", "Python", "FastAPI", "Redis"],
    category: "Web App",
    featured: true,
    github: "https://github.com/vikashkumar/ai-content",
    demo: "https://ai-content-demo.vercel.app",
    year: "2023",
  },
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    description: "Cross-platform mobile app for workout tracking, nutrition logging, and progress visualization",
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    category: "Mobile",
    featured: false,
    github: "https://github.com/vikashkumar/fitness-app",
    year: "2023",
  },
  {
    id: 5,
    title: "Design System Library",
    description: "Comprehensive UI component library with accessibility features and extensive documentation",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    category: "Open Source",
    featured: false,
    github: "https://github.com/vikashkumar/design-system",
    demo: "https://design-system.vikashkumar.dev",
    year: "2023",
  },
  {
    id: 6,
    title: "Real Estate Marketplace",
    description: "Property listing platform with advanced search, virtual tours, and mortgage calculator",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Next.js", "Mapbox", "Supabase", "TypeScript"],
    category: "Web App",
    featured: false,
    github: "https://github.com/vikashkumar/realestate",
    demo: "https://realestate-demo.vercel.app",
    year: "2022",
  },
];

export const skills: SkillCategory = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Vue.js", level: 80 },
    { name: "Framer Motion", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Python", level: 82 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "GraphQL", level: 78 },
    { name: "REST APIs", level: 90 },
  ],
  tools: [
    { name: "Git", level: 92 },
    { name: "Docker", level: 75 },
    { name: "Figma", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Vercel", level: 90 },
    { name: "AWS", level: 70 },
  ],
};

export const experience: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    startDate: "2022",
    endDate: "Present",
    description: [
      "Led development of customer-facing web applications serving 100K+ users",
      "Improved application performance by 45% through code optimization and lazy loading",
      "Mentored team of 4 junior developers and conducted code reviews",
      "Implemented comprehensive testing strategy increasing code coverage to 85%",
    ],
    tech: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    startDate: "2020",
    endDate: "2022",
    description: [
      "Built MVP from scratch using modern web technologies",
      "Developed RESTful APIs handling 10K+ daily requests",
      "Integrated third-party services including Stripe, SendGrid, and AWS S3",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    startDate: "2018",
    endDate: "2020",
    description: [
      "Delivered 15+ client projects on time and within budget",
      "Created responsive websites with focus on accessibility and SEO",
      "Worked with diverse tech stack adapting to client requirements",
      "Implemented CI/CD pipelines improving deployment efficiency by 60%",
    ],
    tech: ["Vue.js", "React", "WordPress", "Sass"],
  },
];

export const stats: Stat[] = [
  { label: "Years Experience", value: 6 },
  { label: "Projects Completed", value: 50 },
  { label: "Happy Clients", value: 35 },
  { label: "Cups of Coffee", value: 2847 },
];

export const projectCategories = [
  "All",
  "Web App",
  "Mobile",
  "Open Source",
  "Design",
];
