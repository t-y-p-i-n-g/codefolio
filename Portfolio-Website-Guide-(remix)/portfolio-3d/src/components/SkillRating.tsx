'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';

interface SkillRatingProps {
  skill: Skill;
  className?: string;
}

export default function SkillRating({ skill, className = '' }: SkillRatingProps) {
  const maxRating = 5;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-md">
        <span className="text-zinc-700 dark:text-zinc-300 text-lg font-medium">
          {skill.name.charAt(0)}
        </span>
      </div>

      <div className="flex-grow">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">{skill.level}/{maxRating}</span>
        </div>

        <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-zinc-800 dark:bg-zinc-400"
            initial={{ width: 0 }}
            animate={{ width: `${(skill.level / maxRating) * 100}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
}
