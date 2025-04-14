import { Icons } from '@/components/icons';
import Image from 'next/image';

interface HeroProps {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, phone, email, linkedin, github }) => {
  return (
    <section className="text-center py-12">
      <Image
        src="/images/profile.jpg" // Path to your image in the public directory
        alt="Sheshmani Chauhdary"
        width={200} // Adjust the width as needed
        height={200} // Adjust the height as needed
        className="rounded-full mx-auto mb-4" // Optional: Add styling for rounded corners and centering
      />
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-lg text-muted-foreground">{title}</p>
      <div className="mt-4">
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          LinkedIn
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
