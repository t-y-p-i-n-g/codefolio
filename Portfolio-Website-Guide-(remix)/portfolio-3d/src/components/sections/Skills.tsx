'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import SkillRating from '@/components/SkillRating';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Here are the skills and technologies I work with. I'm constantly learning and expanding my skillset.
          </p>
        </motion.div>

        <BentoGrid className="max-w-4xl mx-auto">
          {/* Frontend Skills */}
          <BentoGridItem
            title="Frontend Skills"
            description="Technologies and frameworks I use for building user interfaces"
            colSpan={2}
          >
            <div className="grid gap-3 mt-4">
              {skills
                .filter(skill =>
                  ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"].includes(skill.name)
                )
                .map((skill) => (
                  <SkillRating key={skill.name} skill={skill} />
                ))}
            </div>
          </BentoGridItem>

          {/* Tools & Others */}
          <BentoGridItem
            title="Tools & Others"
            description="Libraries, tools and other technologies"
            colSpan={1}
            rowSpan={2}
          >
            <div className="grid gap-3 mt-4">
              {skills
                .filter(skill =>
                  !["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"].includes(skill.name)
                )
                .map((skill) => (
                  <SkillRating key={skill.name} skill={skill} />
                ))}
            </div>
          </BentoGridItem>

          {/* Skill stats */}
          <BentoGridItem
            title="Skill Distribution"
            description="Breakdown of my expertise areas"
            colSpan={2}
          >
            <div className="mt-4 h-48 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-end justify-between p-4">
              {skills.map((skill, index) => {
                const barWidth = 100 / skills.length;
                const barHeight = (skill.level / 5) * 100;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center"
                    style={{ width: `${barWidth}%` }}
                  >
                    <motion.div
                      className="w-full bg-zinc-700 dark:bg-zinc-400 rounded-t"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${barHeight}%` }}
                      transition={{ delay: index * 0.1, duration: 0.7 }}
                      viewport={{ once: true }}
                    />
                    <span className="text-[10px] mt-2 text-center text-zinc-600 dark:text-zinc-400">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </section>
  );
}
