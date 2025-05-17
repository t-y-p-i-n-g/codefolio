'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProfileInfo } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { Send, Mail, MapPin, Copy, Check } from 'lucide-react';

interface ContactProps {
  profileInfo: ProfileInfo;
}

export default function Contact({ profileInfo }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Feel free to reach out if you'd like to collaborate or have any questions.
          </p>
        </motion.div>

        <BentoGrid className="max-w-4xl mx-auto">
          {/* Email */}
          <BentoGridItem
            title="Email"
            icon={<Mail className="h-5 w-5 text-zinc-500" />}
            colSpan={2}
          >
            <div className="mt-4 flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
              <span className="text-zinc-800 dark:text-zinc-200">
                {profileInfo.email}
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={copyEmail}
                className="ml-2"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="mt-4">
              <Button asChild className="w-full">
                <a href={`mailto:${profileInfo.email}`}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
            </div>
          </BentoGridItem>

          {/* Location */}
          <BentoGridItem
            title="Location"
            icon={<MapPin className="h-5 w-5 text-zinc-500" />}
            colSpan={1}
          >
            <div className="mt-4 bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-zinc-800 dark:text-zinc-200">
                {profileInfo.location}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                Available for remote work and local meetups
              </p>
            </div>
          </BentoGridItem>

          {/* Contact form */}
          <BentoGridItem
            title="Send a Message"
            description="Fill out the form to get in touch"
            colSpan={3}
          >
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  placeholder="Your email"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  placeholder="Your message"
                />
              </div>

              <div className="md:col-span-2">
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 text-center">
                  This is a demo form and doesn't actually send messages.
                </p>
              </div>
            </form>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </section>
  );
}
