import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import { Button } from '@/components/ui/button';

export default function Home() {
  const heroData = {
    name: 'Sheshmani Chauhdary',
    title: 'Full-Stack Web Developer',
    phone: '+91 9696995616',
    email: 'sheshmanic952@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sheshmani-chauhary-891878266/',
    github: 'https://github.com/sheshmani123',
  };

  const aboutMe = `Full-stack developer skilled in building scalable web apps using the MERN stack.
Solved 150+ coding problems on LeetCode and GFG.
Certified in Full-Stack Web Development, Spring Boot, Cloud Computing.`;

  const skillsData = {
    frontend: ['React', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Prisma'],
    languages: ['Java (advanced)', 'Python', 'C', 'JavaScript', 'SQL', 'TypeScript', 'HTML/CSS'],
    tools: ['Docker', 'AWS', 'Google Cloud Platform', 'VS Code', 'IntelliJ', 'Eclipse'],
  };

  const projectsData = [
    {
      title: 'E-commerce Book Website',
      techStack: ['React', 'Node.js', 'MongoDB'],
      description: 'User authentication, payment integration, REST API, responsive UI',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
    {
      title: 'Food Ordering Web App',
      techStack: ['MERN Stack', 'Stripe'],
      description: 'Full online food selling platform with Stripe integration',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
    {
      title: 'Paytm Clone',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Payment gateway, PostgreSQL database management',
      liveLink: 'https://leafy-monstera-6920ea.netlify.app/',
    },
  ];

  const educationData = {
    degree: 'B.E. in Computer Science & Engineering',
    institution: 'Acharya Institute of Technology, Bengaluru',
    years: '2021 – 2025',
    highSchool: 'Jagdish Singh Inter College (U.P. Board – Hindi Medium)',
    highSchoolDetails: '10th: 86%, 12th: 81%',
  };

  const certificationsData = [
    'Full-Stack Web Development (Udemy)',
    'Spring Boot & Cloud Computing (Udemy)',
    'AWS Essentials (Coursera)',
  ];

  return (
    <div className="container mx-auto py-10">
      <Hero {...heroData} />
      <About aboutMe={aboutMe} />
      <Skills {...skillsData} />
      <Projects projects={projectsData} />
      <Education {...educationData} />
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
