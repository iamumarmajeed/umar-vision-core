import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { TechnicalSkillsSection } from "@/components/TechnicalSkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <FloatingNav />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <TechnicalSkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
