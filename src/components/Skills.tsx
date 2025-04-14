
interface SkillsProps {
  frontend: string[];
  backend: string[];
  languages: string[];
  tools: string[];
}

const Skills: React.FC<SkillsProps> = ({ frontend, backend, languages, tools }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold">Frontend</h3>
          <ul>
            {frontend.map((skill, index) => (
              <li key={index} className="text-muted-foreground">{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Backend</h3>
          <ul>
            {backend.map((skill, index) => (
              <li key={index} className="text-muted-foreground">{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Languages</h3>
          <ul>
            {languages.map((skill, index) => (
              <li key={index} className="text-muted-foreground">{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Tools</h3>
          <ul>
            {tools.map((skill, index) => (
              <li key={index} className="text-muted-foreground">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
