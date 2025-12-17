import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pavish Kumar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
