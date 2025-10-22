import { Zap, Code, Mic, Briefcase, Globe, Database, Cloud, Server, Network, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Zap,
    title: "DeepSeek Web Assistant",
    badge: "AI Hackathon",
    description: "Browser extension with LLM integration; 40% faster info retrieval.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
  {
    icon: Code,
    title: "Optimized Code Generator",
    badge: "LLM Hackathon",
    description: "AI code generator with explanations and complexity insights.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
  {
    icon: Mic,
    title: "FILLIT",
    badge: "Voice AI",
    description: "Voice-to-Form AI Automation — Reduced form-filling effort by ~80%.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
  {
    icon: Database,
    title: "Distributed Recommendation Engine",
    badge: "System Design",
    description: "Real-time recommendation system handling 1M+ requests/min using Redis caching and Kafka message queues.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
  {
    icon: Cloud,
    title: "MLOps Pipeline on GCP",
    badge: "System Design",
    description: "End-to-end ML deployment pipeline with Kubernetes orchestration and TensorFlow Serving for model inference.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
  {
    icon: Server,
    title: "Microservices Architecture",
    badge: "System Design",
    description: "Scalable microservices platform with load balancing, service discovery, and distributed tracing.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
  {
    icon: Network,
    title: "High-Availability API Gateway",
    badge: "System Design",
    description: "API gateway implementing rate limiting, circuit breakers, and horizontal scaling for 99.99% uptime.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
  {
    icon: Briefcase,
    title: "AI/ML Freelance Projects",
    badge: "Freelance",
    description: "Built predictive models, custom LLMs, and multimodal recommendation systems.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
  {
    icon: Globe,
    title: "Global Links Tourism Platform",
    badge: "Full-Stack",
    description: "Full-stack system with 35% faster booking and real-time API integration.",
    github: "https://github.com/umarmajeedofficial",
    live: "https://example.com"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass p-6 rounded-lg hover-lift group cursor-pointer fade-in-up border border-border"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 4px 20px rgba(0, 170, 255, 0.15)'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all minimal-glow">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-card border border-border text-muted-foreground">
                  {project.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {project.description}
              </p>

              {/* Project Links */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
