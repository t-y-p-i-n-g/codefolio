'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import ProjectTags from './ProjectTags';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  className = '',
  priority = false
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        {/* Project Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.link && (
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-black hover:bg-white/90"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </motion.div>
      </div>

      <div className="p-4 bg-white dark:bg-zinc-900">
        <h3 className="text-lg font-semibold mb-1 text-zinc-800 dark:text-zinc-100">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
          {project.description}
        </p>

        <ProjectTags tags={project.tags} />
      </div>
    </motion.div>
  );
}
