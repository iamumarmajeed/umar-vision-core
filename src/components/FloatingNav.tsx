import { useState } from "react";
import { Menu, X, Home, User, GraduationCap, Briefcase, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 top-6 z-50 glass p-3 rounded-full glow-cyan transition-all duration-300 hover:scale-110"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`fixed left-6 top-24 z-40 glass rounded-2xl p-4 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10 glow-hover-cyan group w-full text-left"
              >
                <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
