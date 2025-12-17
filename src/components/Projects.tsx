import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Smart Campus Assistant",
      description: "An intelligent campus management system with real-time features, secure authentication, and a modern dashboard for students and administrators.",
      tech: ["React", "FastAPI", "MongoDB", "JWT"],
      github: "https://github.com/PavishKumar787/smart-campus-assisstant",
      live: null,
      featured: true,
    },
    {
      title: "Smart Mat Reminder",
      description: "IoT-based smart reminder system using ESP32 microcontroller and sensors, integrated with a mobile app for seamless user experience.",
      tech: ["ESP32", "IoT Sensors", "Mobile App", "AI"],
      github: "https://github.com/PavishKumar787/smartmat",
      live: null,
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Things I've <span className="gradient-text">built</span>
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-card rounded-2xl overflow-hidden hover-lift"
              >
                {/* Project header gradient */}
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] group-hover:animate-shimmer" />
                
                <div className="p-6 sm:p-8">
                  {/* Featured badge */}
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Featured
                    </span>
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3">
                    <Button variant="hero-outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/PavishKumar787"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>View all projects on GitHub</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
