export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: string;
  featured: boolean;
  github?: string;
  demo?: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo?: string;
  tech: string[];
}

export interface Stat {
  label: string;
  value: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}
