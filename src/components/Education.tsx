"use client";

import { GraduationCap, School } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <School className="h-6 w-6" /> Education
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <GraduationCap className="h-5 w-5" /> Bachelor of Engineering (B.E.) in Computer Science and Engineering
        </h3>
        <p className="text-muted-foreground">Acharya Institute of Technology, Bengaluru</p>
        <div className="flex gap-2 mt-1">
          <Badge>CGPA: 8.4</Badge>
          <Badge>Percentage: 85%</Badge>
        </div>
        <p className="text-muted-foreground mt-2">Duration: Jan 2021 – May 2025 (Expected Graduation)</p>
        <p className="text-muted-foreground mt-2">
          Actively learning and applying core CS fundamentals, software engineering principles, and full-stack development techniques.
        </p>
        <p className="text-muted-foreground mt-2">
          Participated in hackathons, cloud computing workshops, and team-based coding projects.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <School className="h-5 w-5" /> High School &amp; Intermediate – U.P. Board (Hindi Medium)
        </h3>
        <p className="text-muted-foreground">Jagdish Singh Inter College</p>
        <p className="text-muted-foreground mt-2">10th: 86%</p>
        <p className="text-muted-foreground">12th: 81%</p>
      </div>
    </section>
  );
};

export default Education;
