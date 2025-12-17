import { Code2, Sparkles, Cpu, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, label: "Full-Stack Development" },
    { icon: Sparkles, label: "AI & Machine Learning" },
    { icon: Cpu, label: "IoT Systems" },
    { icon: Rocket, label: "Scalable Solutions" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Passionate about creating
              <span className="gradient-text"> impactful technology</span>
            </h2>
          </div>

          {/* Content */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 hover-lift">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a <span className="text-foreground font-medium">B.Tech student specializing in AI & Data Science</span>, 
              driven by curiosity and a passion for building solutions that matter. My journey spans across 
              full-stack web development, artificial intelligence, and IoT systems.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
              I thrive on transforming complex problems into elegant, scalable solutions. Whether it's 
              crafting intuitive user interfaces or designing intelligent backend systems, I bring a 
              blend of creativity and technical precision to every project.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
