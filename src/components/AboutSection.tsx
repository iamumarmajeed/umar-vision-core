export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          About Me
        </h2>
        
        <div className="glass p-8 md:p-12 rounded-3xl glow-cyan">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Umar Majeed is a passionate AI/ML Software Engineer with expertise in{" "}
            <span className="text-primary font-semibold">Reinforcement Learning</span>,{" "}
            <span className="text-secondary font-semibold">Computer Vision</span>, and{" "}
            <span className="text-accent font-semibold">Autonomous Systems</span>. 
            With 3+ years of experience, he has mentored 40+ global teams, delivered 100+ AI projects, 
            and deployed 20+ intelligent models. His mission is to innovate at the intersection of 
            AI and real-world automation.
          </p>
        </div>
      </div>
    </section>
  );
};
