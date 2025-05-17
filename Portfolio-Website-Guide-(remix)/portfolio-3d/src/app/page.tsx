'use client';

import { profileInfo, projects, skills, experiences, education } from '@/lib/data';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import ExperienceSection from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <Hero profileInfo={profileInfo} />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Experience Section */}
      <ExperienceSection
        experiences={experiences}
        education={education}
      />

      {/* Contact Section */}
      <Contact profileInfo={profileInfo} />

      {/* Footer */}
      <Footer profileInfo={profileInfo} />
    </main>
  );
}
