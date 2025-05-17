'use client';

import { ProfileInfo } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  profileInfo: ProfileInfo;
}

export default function Footer({ profileInfo }: FooterProps) {
  // Map social icons
  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
  };

  return (
    <footer className="py-8 bg-zinc-100 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              {profileInfo.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {profileInfo.title}
            </p>
          </div>

          <div className="flex space-x-4">
            {profileInfo.socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon.toLowerCase()] || null}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} {profileInfo.name}. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js and Three.js
          </div>
        </div>
      </div>
    </footer>
  );
}
