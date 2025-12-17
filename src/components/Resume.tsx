import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/17ukwur9MtZAes03f48U7mvoEFkJZUHuI/view";

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
        </div>
      </div>
    </section>
  );
};

export default Resume;
