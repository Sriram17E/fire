import { Github, Mail, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-center md:text-left">
            <p>© 2024 Sriram JB. All rights reserved.</p>
            <p className="text-sm">Built with passion and dedication</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Sriram17E"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/cyvalorant170421"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors duration-300"
              aria-label="HackerRank"
            >
              <Code2 size={20} />
            </a>
            <a
              href="mailto:jbpsriram@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-secondary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
