import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-card border-b border-border/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold gradient-text">
            PK
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Button variant="hero" className="w-full" asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
