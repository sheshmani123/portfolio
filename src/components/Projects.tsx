
interface ProjectProps {
  title: string;
  techStack: string[];
  description: string;
  liveLink: string;
}

interface ProjectsProps {
  projects: ProjectProps[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="mt-2">
              <span className="font-semibold">Tech Stack:</span>
              {project.techStack.join(', ')}
            </div>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mt-2 block">
              Live Link
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
