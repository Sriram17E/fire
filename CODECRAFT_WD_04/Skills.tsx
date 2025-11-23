import { Code, Layout, Laptop } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java"],
      gradient: "from-primary to-accent",
    },
    {
      title: "Web Development",
      icon: Layout,
      skills: ["HTML", "CSS", "JavaScript"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Focus Areas",
      icon: Laptop,
      skills: [
        "Responsive Design",
        "User Experience",
        "Performance Optimization",
        "Accessibility",
      ],
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Building modern web applications with a focus on clean code and exceptional user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover-lift card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`p-4 rounded-lg bg-gradient-to-br ${category.gradient} inline-block mb-6`}>
                  <category.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
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

export default Skills;
