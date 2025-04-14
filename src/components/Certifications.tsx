
interface CertificationsProps {
  certifications: string[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index} className="text-muted-foreground">{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
