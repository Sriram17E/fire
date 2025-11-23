import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Sriram JB</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Aspiring Web Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about building responsive, accessible, and performance-optimized 
              web applications that deliver seamless user interactions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <Code2 className="mr-2" size={20} />
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Sriram17E"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary transition-colors duration-300 hover-lift"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/cyvalorant170421"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-300 hover-lift"
              >
                <Code2 size={24} />
              </a>
              <a
                href="mailto:jbpsriram@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-secondary transition-colors duration-300 hover-lift"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30"></div>
              <img
                src={profileImage}
                alt="Sriram JB"
                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-primary shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
