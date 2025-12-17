import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Figma,
  Braces,
  FileCode
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java"],
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["HTML", "CSS", "React"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["FastAPI","Python"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "SQL"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: ["Git", "Figma"],
      color: "from-red-500/20 to-rose-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Skills & Technologies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              My <span className="gradient-text">tech stack</span>
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group glass-card rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
