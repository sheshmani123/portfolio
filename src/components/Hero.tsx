'use client';

import {Icons} from '@/components/icons';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  leetcode: string;
  gfg: string;
  naukri: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  phone,
  email,
  linkedin,
  github,
  leetcode,
  gfg,
  naukri,
}) => {
  const whatsappLink = `https://wa.me/${phone.replace(
    /[^+0-9]/g,
    ''
  )}?text=Hello, I'm contacting you through your portfolio website.`;
  return (
    <section className="text-center py-12 animate-fade-in relative">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-20 z-0"
        style={{
          backgroundImage: `url('https://picsum.photos/1920/1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10">
        <Image
          src="https://lh3.googleusercontent.com/pw/ABLVV87mWkS6vM6yU2N7Ztk4KeVjWQEr0Yh2J394_h6g1q-Vn9T9ubp1eZ8S51uNyu007tS2N-z4Wz6-cgbV6LrT-3mH74m0b-4mGvQ-0q8-0qQ8q2_q8-0q8q2_q8"
          alt="Sheshmani Chauhdary"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4 shadow-md transition-transform transform hover:scale-105"
        />
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg text-muted-foreground">{title}</p>
        <div className="mt-4">
          <p>
            <Phone className="inline-block h-4 w-4 mr-1" />
            {phone}
          </p>
          <p>
            <Mail className="inline-block h-4 w-4 mr-1" />
            {email}
          </p>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline">
            <Linkedin className="inline-block h-4 w-4 mr-1" />
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline">
            <Github className="inline-block h-4 w-4 mr-1" />
            GitHub
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline">
            <svg
              className="inline-block h-4 w-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M2.81 21.44l1.24-4.54A9.21 9.21 0 0 1 3 12 10 10 0 1 1 13 2.13a9 9 0 0 1 7 2.83 8 8 0 0 1 1.79 2.38 1 1 0 0 1-.21 1.35l-.97.87a8 8 0 0 1-3.41.92 1 1 0 0 0-.74.08l-2-.55a8 8 0 0 1-2.34-2.43 1 1 0 0 0-1.45-.08l-.91.83a8 8 0 0 1-.45 3.33L2 21a1 1 0 0 0 .81.44z"></path>
            </svg>
            WhatsApp
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline">
            <Badge>LeetCode</Badge>
          </a>
          <a
            href={gfg}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline">
            <Badge>GFG Profile</Badge>
          </a>
          <a
            href={naukri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline">
            <Badge>Naukri Profile</Badge>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
