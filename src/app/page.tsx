import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import { Button } from '@/components/ui/button';
import TiltCard from '@/components/TiltCard';

export default function Home() {
  const heroData = {
    name: 'Sheshmani Chauhdary',
    title: 'Full-Stack Web Developer',
    phone: '+91 9696995616',
    email: 'sheshmanic952@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sheshmani-chauhary-891878266/',
    github: 'https://github.com/sheshmani123',
  };

  const aboutMe = `Full-stack web developer skilled in building scalable web apps using the MERN stack.
Strong problem-solving skills; solved 150+ coding problems on LeetCode and GFG.
Certified in Full-Stack Development, Spring Boot, and Cloud Computing.`;

  const skillsData = {
    frontend: ['React', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Prisma'],
    languages: ['Java (advanced)', 'Python', 'C', 'JavaScript', 'SQL', 'TypeScript', 'HTML/CSS'],
    tools: ['Docker', 'GCP', 'AWS', 'VS Code', 'IntelliJ', 'Eclipse'],
  };

  const projectsData = [
    {
      title: 'E-commerce Book Website',
      techStack: ['React', 'MongoDB', 'Node.js'],
      description: 'Developed a fully functional book-selling web app with user login, payment integration, and inventory management.',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
    {
      title: 'Food Ordering Web App',
      techStack: ['MERN', 'Stripe'],
      description: 'Created a responsive food ordering website with secure Stripe payments and a dynamic admin panel.',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
    {
      title: 'Paytm Clone',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Built a Paytm-inspired app with real-time payment flow and PostgreSQL DB integration.',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
  ];

  const certificationsData = [
    {
      name: 'AWS Cloud Technical Essentials – Coursera',
      link: 'https://www.coursera.org/account/accomplishments/records/UQ5TX9N18GCQ',
    },
    {
      name: 'Full-Stack Web Development – Udemy',
      link: 'https://www.udemy.com/certificate/UC-fb261059-9789-4313-a84d-92227f71bc66/',
    },
    {
      name: 'Meta UX Designer Certificate – Coursera',
      link: 'https://www.coursera.org/account/accomplishments/records/LXWS34Y993CO',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <Hero {...heroData} />
      <About aboutMe={aboutMe} />
      <Skills {...skillsData} />
      <Projects projects={projectsData} />
      <Education />
      <Certifications certifications={certificationsData} />
      <section className="py-8 text-center">
        <Button variant="outline">
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </section>
    </div>
  );
}

