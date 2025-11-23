import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Boxes } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Psoriasis Skin Disease Detection Using CNN",
      description:
        "Developed a Convolutional Neural Network-based model for early detection of psoriasis from hand images to aid effective treatment. Implemented both front-end and back-end components to create a complete diagnostic tool.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "CNN"],
      icon: Brain,
      gradient: "from-primary to-accent",
    },
    {
      title: "3D Animation Web Project",
      description:
        "Created an interactive 3D rotating object using CSS transformations and JavaScript. Features smooth animations and user interaction capabilities including mouse drag and scroll controls for an engaging user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "3D Transformations"],
      icon: Boxes,
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcase of my recent work and development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover-lift card-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`p-4 rounded-lg bg-gradient-to-br ${project.gradient} inline-block mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="text-primary-foreground" size={32} />
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
