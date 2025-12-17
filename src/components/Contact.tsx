import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/PavishKumar787",
      color: "hover:text-foreground hover:border-foreground",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pavishkumar-m-99a1b524b/",
      color: "hover:text-blue-400 hover:border-blue-400",
    },
    {
      name: "Resume",
      icon: FileText,
      href: "https://drive.google.com/file/d/17ukwur9MtZAes03f48U7mvoEFkJZUHuI/view",
      color: "hover:text-green-400 hover:border-green-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:pavishkumar215@gmail.com",
      color: "hover:text-primary hover:border-primary",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="container px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
                <span className="font-medium">{social.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <p className="text-muted-foreground mb-6">
              Prefer a direct conversation?
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:pavishkumar215@gmail.com">
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
