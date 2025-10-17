import { Zap, Code, Mic, Briefcase, Globe } from "lucide-react";

const projects = [
  {
    icon: Zap,
    title: "DeepSeek Web Assistant",
    badge: "AI Hackathon",
    description: "Browser extension with LLM integration; 40% faster info retrieval.",
  },
  {
    icon: Code,
    title: "Optimized Code Generator",
    badge: "LLM Hackathon",
    description: "AI code generator with explanations and complexity insights.",
  },
  {
    icon: Mic,
    title: "FILLIT",
    badge: "Voice AI",
    description: "Voice-to-Form AI Automation — Reduced form-filling effort by ~80%.",
  },
  {
    icon: Briefcase,
    title: "AI/ML Freelance Projects",
    badge: "Freelance",
    description: "Built predictive models, custom LLMs, and multimodal recommendation systems.",
  },
  {
    icon: Globe,
    title: "Global Links Tourism Platform",
    badge: "Full-Stack",
    description: "Full-stack system with 35% faster booking and real-time API integration.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 ml-24">
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass p-6 rounded-lg hover-lift group cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-card border border-border text-muted-foreground">
                  {project.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
