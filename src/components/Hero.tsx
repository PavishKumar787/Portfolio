import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-in inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main headline */}
          <h1 className="animate-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Building{" "}
            <span className="gradient-text">Intelligent Systems</span>
            <br />
            & Modern Web Experiences
          </h1>

          {/* Subtitle */}
          <p className="animate-in-delay-2 text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Hi, I'm <span className="text-foreground font-semibold">Pavish Kumar</span>
          </p>
          <p className="animate-in-delay-2 text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Software Developer • AI & Data Science • Full-Stack & IoT
          </p>

          {/* CTA Buttons */}
          <div className="animate-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://drive.google.com/file/d/17ukwur9MtZAes03f48U7mvoEFkJZUHuI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                View Resume
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://github.com/PavishKumar787" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/pavishkumar-m-99a1b524b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-in-delay-4 mt-20">
            <a href="#about" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <ArrowRight className="w-4 h-4 rotate-90 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
