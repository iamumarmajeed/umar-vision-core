import { useState, useEffect } from "react";
import { Home, User, GraduationCap, Briefcase, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Briefcase, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 flex items-center pointer-events-none">
      {/* Vertical line */}
      <div className="hidden md:block w-0.5 h-80 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      
      {/* Navigation buttons */}
      <div className="flex flex-col gap-4 md:gap-6 md:ml-4 pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`group flex items-center gap-3 transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              aria-label={item.label}
              title={item.label}
            >
              <div
                className={`p-2.5 md:p-2 rounded-full md:rounded-lg border transition-all duration-300 backdrop-blur-sm ${
                  isActive
                    ? "bg-primary/20 border-primary minimal-glow"
                    : "bg-card/80 border-border hover:border-primary/50"
                }`}
              >
                <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <span
                className={`hidden md:block text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive ? "opacity-100 translate-x-0 text-foreground" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
