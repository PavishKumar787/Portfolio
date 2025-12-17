import { Trophy, Award, GraduationCap, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "Multiple hackathon victories showcasing innovative solutions",
      type: "achievement",
    },
    {
      icon: GraduationCap,
      title: "IIT Hyderabad Certification",
      description: "Advanced certification in Data Science and Analytics",
      type: "certification",
    },
    {
      icon: Award,
      title: "Coursera Specialization",
      description: "Completed professional development courses in AI/ML",
      type: "certification",
    },
    {
      icon: Medal,
      title: "Corizo Certification",
      description: "Industry-recognized certification in full-stack development",
      type: "certification",
    },
  ];

  return (
    <section id="achievements" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Achievements & Certifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Recognition & <span className="gradient-text">credentials</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden sm:block" />

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-6 sm:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 hidden sm:flex">
                    <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 glass-card rounded-2xl p-6 hover-lift">
                    <div className="flex items-start gap-4 sm:gap-0">
                      {/* Mobile icon */}
                      <div className="sm:hidden w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full mb-2 ${
                          item.type === 'achievement' 
                            ? 'bg-yellow-500/10 text-yellow-400' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {item.type === 'achievement' ? 'Achievement' : 'Certification'}
                        </span>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
