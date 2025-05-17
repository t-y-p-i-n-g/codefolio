import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Johnson | Frontend Developer Portfolio",
  description: "Portfolio of Alex Johnson, a frontend developer specializing in React, Next.js and Three.js.",
  keywords: ["frontend developer", "portfolio", "react", "next.js", "three.js", "web development"],
  authors: [{ name: "Alex Johnson" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
