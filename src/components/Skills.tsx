"use client";

import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  frontend: string[];
  backend: string[];
  languages: string[];
  tools: string[];
}

const Skills: React.FC<SkillsProps> = ({ frontend, backend, languages, tools }) => {
  return (
    <section className="py-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {frontend.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {backend.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
