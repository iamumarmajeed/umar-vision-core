import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MS in Artificial Intelligence",
    institution: "Air University Islamabad",
    gpa: "CGPA 3.4/4.0",
    period: "Expected Dec 2025",
    details: "Thesis: Meta-Reinforcement Learning for Cooperative Multi-Agent Navigation Using Reptile-MADDPG",
  },
  {
    degree: "BS in Computer Science",
    institution: "University of Poonch, Rawalakot",
    gpa: "CGPA 3.3/4.0",
    period: "2022",
    details: "FYP: Smart Firearm Detection & Alert System — 92% accuracy in real-time firearm detection.",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          Education
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="relative pl-20 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary glow-cyan border-4 border-background" />
                
                <div className="glass p-6 md:p-8 rounded-2xl glow-hover-cyan">
                  <div className="flex items-start gap-4 mb-4">
                    <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-foreground/80">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 glass rounded-full">{edu.gpa}</span>
                    <span className="px-3 py-1 glass rounded-full">{edu.period}</span>
                  </div>
                  
                  <p className="text-foreground/90 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
