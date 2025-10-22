import { Button } from "@/components/ui/button";
import { Download, BookOpen, Linkedin, Github, Code, Trophy, MessageSquare, Briefcase, FolderGit, Brain, Award, GraduationCap } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience", icon: Briefcase },
  { value: "100+", label: "Projects Completed", icon: FolderGit },
  { value: "20+", label: "AI Models Deployed", icon: Brain },
  { value: "700+", label: "LeetCode Problems", icon: Code },
  { value: "700+", label: "Hours Teaching", icon: GraduationCap },
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
      <div className="max-w-5xl w-full space-y-12 fade-in-up">
        {/* Profile Image and Name */}
        <div className="text-center space-y-8">
          {/* Circular profile image with soft glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 minimal-glow">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  {/* Placeholder - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">UM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Umar Majeed
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Software Engineer | Artificial Intelligence & Machine Learning | Stanford University Section Leader
            </p>
          </div>
        </div>

        {/* Stats Grid - Professional with icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass p-6 rounded-lg text-center hover-lift group cursor-pointer border-2 border-border hover:border-primary/40 transition-all relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-glow" />
              </div>
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all group-hover:animate-glow-border">
                  <stat.icon className="w-6 h-6 text-primary group-hover:animate-rotate-slow" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links - Glowing buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                variant="outline"
                className="relative border-2 border-border hover:border-primary transition-all overflow-hidden bg-card/60 backdrop-blur-sm hover:animate-glow-border"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                <link.icon className="w-4 h-4 mr-2 relative z-10 group-hover:animate-rotate-slow" />
                <span className="relative z-10">{link.label}</span>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
