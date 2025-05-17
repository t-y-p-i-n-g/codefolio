// Define types for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  avatar: string;
  resume?: string;
  socialLinks: SocialLink[];
}
