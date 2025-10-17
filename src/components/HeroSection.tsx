import { Button } from "@/components/ui/button";
import { Download, BookOpen, Linkedin, Github, Code, Trophy, MessageSquare } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "20+", label: "AI Models Deployed" },
  { value: "700+", label: "LeetCode Problems" },
];

const socialLinks = [
  { icon: Download, label: "Download CV", href: "https://drive.google.com/file/d/12pxfackoXzMRzjIj-R1trzHGEjbYZgDA/view?usp=drive_link" },
  { icon: BookOpen, label: "Visit Blog", href: "https://hashnode.com/@umarmajeed" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/umarmajeedofficial" },
  { icon: Github, label: "GitHub", href: "https://github.com/umarmajeedofficial" },
  { icon: Code, label: "LeetCode", href: "https://leetcode.com/umarmajeedofficial" },
  { icon: Trophy, label: "Codeforces", href: "https://codeforces.com/profile/umarmajeed" },
  { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/+923075588988" },
];

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full space-y-12 fade-in-up">
        {/* Hero Text */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-pulse-glow">
            Umar Majeed
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            AI/ML Software Engineer | Stanford University Section Leader
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass p-6 rounded-2xl text-center glow-hover-cyan"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                variant="outline"
                className="glass border-primary/30 hover:bg-primary/10 glow-hover-cyan group"
              >
                <link.icon className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" />
                {link.label}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
