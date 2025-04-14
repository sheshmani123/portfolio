interface CertificationProps {
  name: string;
  link: string;
}

interface CertificationsProps {
  certifications: CertificationProps[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section className="py-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index} className="text-muted-foreground">
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
