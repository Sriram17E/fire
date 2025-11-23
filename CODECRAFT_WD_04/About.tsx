import { GraduationCap, Award, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Business Systems",
      institution: "M. Kumarasamy College of Engineering",
      year: "2022 - 2026",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cheran Matric Hr. Sec School, Vennaimalai",
      year: "2022 - 78%",
      icon: Award,
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Cheran Matric Hr. Sec School, Vennaimalai",
      year: "2020 - 63%",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <Card className="bg-card border-border card-glow hover-lift h-full">
              <CardContent className="p-8">
                <Target className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aspiring Web Developer with a solid foundation in front-end technologies 
                  and a keen eye for design and user experience. I am passionate about building 
                  responsive, accessible, and performance-optimized web applications that deliver 
                  seamless user interactions.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Currently seeking opportunities to apply my skills in web development and 
                  contribute to innovative projects that make a difference.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <edu.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                      <p className="text-primary text-sm font-medium">{edu.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
