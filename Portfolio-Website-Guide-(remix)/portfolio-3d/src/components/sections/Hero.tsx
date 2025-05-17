'use client';

import { motion } from 'framer-motion';
import { ProfileInfo } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ArrowDown,
  Download
} from 'lucide-react';

interface HeroProps {
  profileInfo: ProfileInfo;
}

export default function Hero({ profileInfo }: HeroProps) {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Map social icons
  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 md:py-24">
      <motion.div
        className="container max-w-4xl mx-auto px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex flex-col md:flex-row md:items-center gap-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border-4 border-zinc-100 dark:border-zinc-800 overflow-hidden h-32 w-32 md:h-40 md:w-40"
                >
                  <Avatar className="h-full w-full">
                    <AvatarImage src={profileInfo.avatar} alt={profileInfo.name} />
                    <AvatarFallback>{profileInfo.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </motion.div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={profileInfo.avatar} />
                  <AvatarFallback>{profileInfo.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{profileInfo.name}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{profileInfo.title}</p>
                  <div className="flex items-center pt-2">
                    <MapPin className="mr-1 h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {profileInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <div className="flex-1">
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50"
            >
              {profileInfo.name}
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 mt-2"
            >
              {profileInfo.title}
            </motion.h2>

            <motion.div
              variants={item}
              className="flex items-center gap-2 mt-4"
            >
              <Mail className="h-4 w-4 text-zinc-500" />
              <a
                href={`mailto:${profileInfo.email}`}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                {profileInfo.email}
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-6">
              <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
                {profileInfo.bio}
              </p>
            </motion.div>

            <Separator className="my-6" />

            <motion.div variants={item} className="flex gap-4 flex-wrap">
              {profileInfo.socialLinks.map((social) => (
                <Button key={social.name} variant="outline" size="sm" asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {socialIcons[social.icon.toLowerCase()] || null}
                    {social.name}
                  </a>
                </Button>
              ))}

              {profileInfo.resume && (
                <Button size="sm" asChild>
                  <a
                    href={profileInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center mt-16"
        >
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 animate-bounce"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              });
            }}
          >
            Scroll Down <ArrowDown className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
