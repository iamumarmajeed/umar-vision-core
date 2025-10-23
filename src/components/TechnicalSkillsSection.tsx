import { Code, Brain, Cloud, Cpu } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Programming & System Design",
    description: "Expertise in Python and C++ used to architect scalable, high-availability distributed systems. Deep practical knowledge of microservices, load balancing, caching, and core scaling principles (CAP Theorem, Horizontal/Vertical Scaling)."
  },
  {
    icon: Brain,
    title: "AI / ML & Generative AI",
    description: "Advanced proficiency in core AI concepts, including Deep Learning, Reinforcement Learning, Computer Vision (CV), and AI agent automation. Specialized expertise in Generative AI, covering LLMs, RAG, fine-tuning, embeddings, and multimodal models."
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    description: "End-to-end experience in deploying and managing models at scale using GCP, AWS, and Azure. Proficient in MLOps pipelines, containerization (Docker, Kubernetes), and model serving frameworks (TensorFlow Serving, TorchServe)."
  },
  {
    icon: Cpu,
    title: "Core AI Stack",
    description: "Mastery of the essential AI/ML ecosystem, including PyTorch, TensorFlow, Transformers, Scikit-learn, NumPy, and Pandas."
  }
];

export const TechnicalSkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
          <div
            key={skill.title}
            className="glass p-6 md:p-8 rounded-lg hover-lift card-3d border-2 border-border hover:border-primary/40 transition-all group cursor-pointer fade-in-up relative overflow-hidden"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              boxShadow: '0 0 20px rgba(0, 170, 255, 0.1)'
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse-glow" />
            </div>
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all group-hover:animate-glow-border">
                <skill.icon className="w-7 h-7 text-primary group-hover:animate-rotate-slow" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex-1 pt-2">
                {skill.title}
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base relative z-10">
              {skill.description}
            </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
