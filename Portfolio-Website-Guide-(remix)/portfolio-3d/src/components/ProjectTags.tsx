'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectTagsProps {
  tags: string[];
  className?: string;
}

export default function ProjectTags({ tags, className = '' }: ProjectTagsProps) {
  // Animation variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className={`flex flex-wrap gap-2 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {tags.map((tag, index) => (
        <motion.span
          key={index}
          variants={item}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}
