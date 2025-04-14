
interface EducationProps {
  degree: string;
  institution: string;
  years: string;
  highSchool: string;
  highSchoolDetails: string;
}

const Education: React.FC<EducationProps> = ({ degree, institution, years, highSchool, highSchoolDetails }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div>
        <h3 className="text-xl font-semibold">{degree}</h3>
        <p className="text-muted-foreground">{institution}</p>
        <p className="text-muted-foreground">{years}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{highSchool}</h3>
        <p className="text-muted-foreground">{highSchoolDetails}</p>
      </div>
    </section>
  );
};

export default Education;
