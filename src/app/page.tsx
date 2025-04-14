'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import {Button} from '@/components/ui/button';
import {ContactForm} from '@/components/ContactForm';
import {Badge} from '@/components/ui/badge';
import {Freelancing} from '@/components/Freelancing';
import {useEffect, useState} from 'react';

export default function Home() {
  const heroData = {
    name: 'Sheshmani chaudhary',
    title: 'Full-Stack Web Developer',
    phone: '+91 9696995616',
    email: 'sheshmanic952@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sheshmani-chauhary-891878266/',
    github: 'https://github.com/sheshmani123',
    leetcode: 'https://leetcode.com/u/user2023Jx/',
    gfg: 'https://geeksforgeeks.org/user/sheshmaniecq0/',
    naukri: 'https://naukri.com/mnjuser/profile',
  };

  const aboutMe = `I’m a passionate Full-Stack Web Developer with hands-on experience in building modern, scalable web apps using the MERN stack (MongoDB, Express.js, React, Node.js). Along with NoSQL, I’m also skilled in SQL-based databases and backend development using ASP.NET and C#.

As a tech enthusiast, I also create engaging and simplified tech content on Instagram, sharing the latest updates on AI tools, coding tips, smart devices, and more.

I've solved 350+ Data Structures & Algorithms questions on platforms like LeetCode and GeeksforGeeks, which has helped me build a strong problem-solving foundation.

I'm always learning, building, and creating — whether it's through code or content`;

  const skillsData = {
    frontend: ['React', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Prisma'],
    languages: [
      'Java (Advanced)',
      'Python',
      'C',
      'SQL',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
    ],
    tools: ['Docker', 'GCP', 'AWS', 'VS Code', 'IntelliJ', 'Eclipse'],
  };

  const projectsData = [
    {
      title: 'E-commerce Book Website',
      techStack: ['React', 'Node.js', 'MongoDB'],
      description:
        'Built a full-stack book-selling app with login, payment, and inventory management',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
    {
      title: 'Food Ordering Web App',
      techStack: ['MERN', 'Stripe'],
      description:
        'Created a dynamic food ordering platform with cart system and Stripe payment gateway',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
    {
      title: 'Paytm Clone',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Cloned Paytm’s core UI and integrated secure backend logic',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
  ];

  const certificationsData = [
    {
      name: 'AWS Cloud Technical Essentials – Coursera',
      link:
        'https://www.coursera.org/account/accomplishments/records/UQ5TX9N18GCQ',
    },
    {
      name: 'Full-Stack Web Development – Udemy',
      link:
        'https://www.udemy.com/certificate/UC-fb261059-9789-4313-a84d-92227f71bc66/',
    },
    {
      name: 'Meta UX Designer Certificate – Coursera',
      link:
        'https://www.coursera.org/account/accomplishments/records/LXWS34Y993CO',
    },
  ];
  const downloadLink =
    'https://drive.google.com/uc?export=download&id=1f3_W5bMJNIet-dV4v8KONB_NYowNyRvP';
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto py-10 ">
      <Hero {...heroData} />
      <About aboutMe={aboutMe} />
      <Skills {...skillsData} />
      <Education />
      <Certifications certifications={certificationsData} />
      <Freelancing />
      <section className="py-8 text-center">
        <Button variant="outline">
          {isMounted && (
            <a
              href={downloadLink}
              download="Sheshmani_Chauhdary_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Download Resume
            </a>
          )}
        </Button>
      </section>
      <ContactForm />
    </div>
  );
}
