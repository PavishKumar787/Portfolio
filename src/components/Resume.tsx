import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1KWsuQsk5xs3W88nBrwm4m7DmBDwjZ3x2/view?usp=sharing";
  const internships = [
    {
      role: "Student Tutor Intern",
      company: "NotedQuic.ly",
      mode: "Remote",
      duration: "Jan 2026 – Feb 2026",
      points: [
        "Explained technical and academic concepts clearly to learners during tutoring sessions",
        "Assisted students in solving problems and clarifying doubts",
        "Created short tutoring and explanation videos for learning content",
        "Supported development of educational materials for EdTech learning sessions",
      ],
    },
    {
      role: "Cyber Security Intern",
      company: "Corizo",
      duration: "Nov 2024 – Dec 2024",
      points: [
        "Conducted vulnerability assessments for web applications",
        "Identified common security issues and implemented mitigation techniques",
        "Gained practical exposure to cybersecurity tools and best practices",
      ],
    },
    {
      role: "ReactJS Developer Intern",
      company: "Pinesphere Solutions",
      duration: "Aug 2024 – Sep 2024",
      points: [
        "Developed responsive UI components using ReactJS",
        "Improved user experience by debugging and optimizing frontend performance",
        "Collaborated with designers to implement modern UI/UX designs",
      ],
    },
  ];

  return (
    <section id="resume" className="py-24 sm:py-32 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Resume
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              View my <span className="gradient-text">credentials</span>
            </h2>
          </div>

          {/* Resume card */}
          <div className="glass-card rounded-2xl p-8 sm:p-12 hover-lift text-center">
            {/* Document icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Pavish Kumar's Resume
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              A detailed overview of my education, experience, skills, and achievements.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Open Resume
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href={resumeLink} download>
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-10 glass-card rounded-2xl p-8 sm:p-10 hover-lift">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Internship Experience
            </h3>

            <div className="space-y-6">
              {internships.map((internship) => (
                <div key={`${internship.role}-${internship.company}`} className="rounded-xl border border-border bg-card/50 p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold">
                        {internship.role} — {internship.company}
                        {internship.mode ? ` (${internship.mode})` : ""}
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {internship.duration}
                    </p>
                  </div>

                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    {internship.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
