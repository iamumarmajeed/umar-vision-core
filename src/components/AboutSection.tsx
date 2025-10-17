export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          About Me
        </h2>
        
        <div className="glass p-8 md:p-12 rounded-lg hover-lift">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            I am <span className="text-primary font-semibold">Umar Majeed</span>, an AI/ML Software Engineer 
            passionate about <span className="text-primary">Reinforcement Learning</span>, <span className="text-primary">Computer Vision</span>, 
            and <span className="text-primary">Autonomous Systems</span>. With over 3 years of experience, 
            I've led 30+ AI projects and mentored 40+ international teams through global hackathons. 
            My expertise spans Meta-Reinforcement Learning, Deep Learning, and AI automation systems. 
            I thrive on building intelligent systems that solve complex real-world problems and pushing 
            boundaries in autonomous AI research.
          </p>
        </div>
      </div>
    </section>
  );
};
