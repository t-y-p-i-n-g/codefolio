import {
  ProfileInfo,
  Project,
  Skill,
  Experience,
  Education
} from './types';

export const profileInfo: ProfileInfo = {
  name: "Abhishek Gupta",
  title: "Frontend Developer",
  bio: "Passionate frontend developer with experience in React, Next.js, and Three.js. I love creating beautiful and interactive user experiences.",
  location: "Kolkata, India",
  email: "itzabhi888@gmail.com",
  avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
  resume: "/resume.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter"
    }
  ]
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Website",
    description: "A fully responsive e-commerce website built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "https://example.com/project1"
  },
  {
    id: "2",
    title: "Weather App",
    description: "A weather application that shows real-time weather data using OpenWeatherMap API.",
    tags: ["React", "API", "CSS"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "https://example.com/project2"
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A personal portfolio website with 3D elements using Three.js.",
    tags: ["Next.js", "Three.js", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "https://example.com/project3"
  },
  {
    id: "4",
    title: "Task Manager",
    description: "A simple task management application with drag-and-drop functionality.",
    tags: ["React", "DnD", "Firebase"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "https://example.com/project4"
  }
];

export const skills: Skill[] = [
  { name: "HTML", icon: "html", level: 5 },
  { name: "CSS", icon: "css", level: 5 },
  { name: "JavaScript", icon: "javascript", level: 4 },
  { name: "TypeScript", icon: "typescript", level: 4 },
  { name: "React", icon: "react", level: 4 },
  { name: "Next.js", icon: "nextjs", level: 3 },
  { name: "Three.js", icon: "threejs", level: 3 },
  { name: "Tailwind CSS", icon: "tailwind", level: 4 },
  { name: "Git", icon: "git", level: 4 }
];

export const experiences: Experience[] = [
  {
    title: "Public Relations Specialist",
    company: "GDG JIS University",
    period: "Sep 2024 – Present",
    description: `Building and managing a strong community of 400+ developers and technology enthusiasts within the college campus. Collaborated with other GDSC Leads and Google Developer Experts to plan and execute large-scale events and hackathons. Focus on event planning, strategic communications, and student empowerment.`
  },
  {
    title: "Core Member",
    company: "GDG JIS University",
    period: "Aug 2023 – Present",
    description: `Played a key role in organizing regular tech events and sessions related to technology, programming, and software development. Helped with community initiatives, member development, and communication.`
  },
  {
    title: "Google Cloud Arcade / Qwiklabs Learner",
    company: "Qwiklabs",
    period: "Sep 2023 – Present",
    description: `Explored Google Cloud Platform (GCP), cloud applications, and hands-on labs for cloud skills development via Qwiklabs and Google Cloud Arcade.`
  },
  {
    title: "Contributor",
    company: "Google Crowdsource India",
    period: "Jul 2024 – Present",
    description: `Contributed to global Google Crowdsource programs to improve the quality of Google products for everyone.`
  },
  {
    title: "Open Source Contributor",
    company: "Hacktoberfest",
    period: "Oct 2024",
    description: `Participated as an open source contributor for Hacktoberfest 2024 (Remote). Worked primarily with HTML, Tailwind CSS, and related technologies.`
  }
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science Engineering (2nd year)",
    institution: "JIS University, Kolkata",
    period: "2023 - Present",
    description: "Focused on cloud computing, DevOps, automation, and digital product design."
  }
];
