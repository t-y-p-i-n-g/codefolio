'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import ProjectCard from '@/components/ProjectCard';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            My Projects
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <BentoGrid>
          {projects.map((project, index) => {
            // Make the first project span 2 columns
            const colSpan = index === 0 ? 2 : 1;

            return (
              <BentoGridItem
                key={project.id}
                colSpan={colSpan}
                className="min-h-[15rem]"
              >
                <div className="h-full">
                  <ProjectCard
                    project={project}
                    priority={index < 2} // Only prioritize loading for first two projects
                  />
                </div>
              </BentoGridItem>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
