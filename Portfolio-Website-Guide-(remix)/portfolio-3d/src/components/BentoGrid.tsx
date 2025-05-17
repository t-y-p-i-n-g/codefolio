'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  title?: string;
  description?: string;
  header?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  colSpan?: number;
  rowSpan?: number;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  children,
  icon,
  colSpan = 1,
  rowSpan = 1,
}: BentoGridItemProps) {
  const gridSpanClasses = cn({
    'md:col-span-1': colSpan === 1,
    'md:col-span-2': colSpan === 2,
    'md:col-span-3': colSpan === 3,
    'md:row-span-1': rowSpan === 1,
    'md:row-span-2': rowSpan === 2,
    'md:row-span-3': rowSpan === 3,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className={cn(
        "group/bento rounded-xl border border-zinc-200 bg-white/50 dark:bg-zinc-900/50 dark:border-zinc-800 overflow-hidden",
        "backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-300",
        "flex flex-col justify-between",
        gridSpanClasses,
        className
      )}
    >
      <div className="p-6 h-full flex flex-col">
        {header && <div className="mb-2">{header}</div>}

        {(title || icon) && (
          <div className="flex items-center justify-between gap-2 mb-2">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            {title && (
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 flex-grow">
                {title}
              </h3>
            )}
          </div>
        )}

        {description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}

        {children && <div className="flex-grow mt-3">{children}</div>}
      </div>
    </motion.div>
  );
}
