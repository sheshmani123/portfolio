
interface AboutProps {
  aboutMe: string;
}

const About: React.FC<AboutProps> = ({ aboutMe }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-muted-foreground">{aboutMe}</p>
    </section>
  );
};

export default About;
