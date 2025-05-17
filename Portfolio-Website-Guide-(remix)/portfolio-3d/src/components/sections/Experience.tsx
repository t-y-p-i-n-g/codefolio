'use client';

import { motion } from 'framer-motion';
import { Experience, Education } from '@/lib/types';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { Separator } from '@/components/ui/separator';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';

interface ExperienceProps {
  experiences: Experience[];
  education: Education[];
}

// Type guard to check if an item is an Experience
function isExperience(item: Experience | Education): item is Experience {
  return 'company' in item;
}

export default function ExperienceSection({ experiences, education }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Experience & Education
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            My professional journey and educational background.
          </p>
        </motion.div>

        <BentoGrid className="max-w-4xl mx-auto">
          {/* Professional Experience */}
          <BentoGridItem
            title="Work Experience"
            icon={<BriefcaseIcon className="h-5 w-5 text-zinc-500" />}
            colSpan={2}
            className="min-h-64"
          >
            <div className="mt-4 space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-2">
                    {exp.company}
                  </h4>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.description}
                  </p>

                  {index < experiences.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </motion.div>
              ))}
            </div>
          </BentoGridItem>

          {/* Education */}
          <BentoGridItem
            title="Education"
            icon={<GraduationCapIcon className="h-5 w-5 text-zinc-500" />}
            colSpan={1}
            className="min-h-64"
          >
            <div className="mt-4 space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-2">
                    {edu.institution}
                  </h4>

                  {edu.description && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {edu.description}
                    </p>
                  )}

                  {index < education.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </motion.div>
              ))}
            </div>
          </BentoGridItem>

          {/* Timeline */}
          <BentoGridItem
            title="Career Timeline"
            description="My professional journey visualized"
            colSpan={3}
          >
            <div className="mt-6 relative">
              {/* Timeline bar */}
              <div className="absolute left-0 right-0 h-1 top-6 bg-zinc-200 dark:bg-zinc-700"></div>

              <div className="flex justify-between">
                {[...experiences, ...education]
                  .sort((a, b) => {
                    // Sort by end year descending
                    const aYear = extractYear(a);
                    const bYear = extractYear(b);

                    // Handle "Present" as the latest
                    const aYearNum = isNaN(aYear) ? 9999 : aYear;
                    const bYearNum = isNaN(bYear) ? 9999 : bYear;

                    return bYearNum - aYearNum;
                  })
                  .slice(0, 4) // Only show most recent 4 items
                  .map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center w-1/4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 rounded-full bg-zinc-800 dark:bg-zinc-200 mb-2 z-10"></div>
                      <div className="text-center">
                        <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                          {isExperience(item) ? item.title : item.degree}
                        </p>
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                          {item.period}
                        </p>
                      </div>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </section>
  );
}

// Helper function to extract year from period string
function extractYear(item: Experience | Education): number {
  const periodParts = item.period.split(' - ');
  const yearStr = periodParts[1];

  // Handle "Present" case
  if (yearStr === "Present") {
    return 9999;
  }

  return parseInt(yearStr);
}
