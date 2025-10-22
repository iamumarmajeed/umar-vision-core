import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "MS in Artificial Intelligence",
    institution: "Air University Islamabad",
    gpa: "CGPA 3.4/4.0",
    period: "Expected Dec 2025",
    details: "Advanced studies in AI/ML with focus on multi-agent systems and reinforcement learning.",
    courses: [
      "Advanced Analysis of Algorithms",
      "Deep Learning",
      "Machine Learning",
      "Deep Reinforcement Learning",
      "Computer Vision: From Theory to Applications"
    ],
    research: [
      {
        title: "Thesis",
        content: "Meta-Reinforcement Learning for Cooperative Multi-Agent Navigation Using Reptile-MADDPG"
      },
      {
        title: "Research Publication (Under Review)",
        content: "Meta-Reinforcement Learning for Cooperative Multi-Agent Navigation Using Reptile-MADDPG — Focuses on adaptability and collaboration in multi-agent systems."
      }
    ]
  },
  {
    degree: "BS in Computer Science",
    institution: "University of Poonch, Rawalakot",
    gpa: "CGPA 3.3/4.0",
    period: "2022",
    details: "FYP: Smart Firearm Detection & Alert System — 92% accuracy in real-time firearm detection.",
    courses: [
      "Design & Analysis of Algorithms",
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Object Oriented Programming",
      "Advance OOP",
      "Operating Systems",
      "Intro to Database Systems",
      "Computer Networks",
      "Data Mining",
      "Discrete Structures",
      "Introduction to Software Engineering"
    ]
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="glass p-6 md:p-8 rounded-lg hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 bg-card border border-border rounded-full">{edu.gpa}</span>
                <span className="px-3 py-1 bg-card border border-border rounded-full">{edu.period}</span>
              </div>
              
              <p className="text-foreground/90 leading-relaxed mb-4">
                {edu.details}
              </p>

              {/* Relevant Courses */}
              {edu.courses && (
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-primary mb-3">Relevant Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-xs bg-card border border-border rounded-full text-muted-foreground hover:border-primary/40 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Research section for MS degree */}
              {edu.research && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-semibold text-foreground">Research</h4>
                  </div>
                  <div className="space-y-4">
                    {edu.research.map((item, idx) => (
                      <div key={idx} className="pl-4 border-l-2 border-primary/30">
                        <p className="text-sm font-semibold text-primary mb-1">{item.title}</p>
                        <p className="text-foreground/80 text-sm leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
