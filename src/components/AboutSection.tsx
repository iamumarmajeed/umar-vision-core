export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          About Me
        </h2>
        
        <div className="glass p-8 md:p-12 rounded-lg hover-lift border border-border">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            I am an <span className="text-primary font-semibold">AI/ML Engineer and Researcher</span> (MS in AI, Dec 2025) specializing in <span className="text-primary">multi-agent systems</span> and <span className="text-primary">Meta-Reinforcement Learning</span>. My foundation as a <span className="text-primary">Codeforces Expert</span> and <span className="text-primary">Meta Hacker Cup Global Rank #45</span> drives my passion for solving complex algorithmic problems.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            My core technical expertise is in <span className="text-primary">architecting and building scalable, high-availability distributed systems</span> for AI. I am proficient in <span className="text-primary">Python and C++</span> and have hands-on experience designing end-to-end systems using <span className="text-primary">microservices, load balancing (Redis), and message queues (Kafka)</span>. I deploy robust <span className="text-primary">MLOps pipelines</span> using <span className="text-primary">Kubernetes, Docker, and TensorFlow Serving</span> on <span className="text-primary">GCP and AWS</span>, with projects including a real-time recommendation engine handling 1M+ requests/min.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Beyond my technical skills in <span className="text-primary">GenAI (RAG)</span> and <span className="text-primary">MLOps</span>, I am a proven leader, mentoring for <span className="text-primary">Stanford's Code in Place</span> and <span className="text-primary">Harvard's CS50x</span>. I am actively seeking a high-impact software engineering role (targeting Google L4) or a fully-funded PhD position to continue my work at the frontier of scalable AI.
          </p>
        </div>
      </div>
    </section>
  );
};
