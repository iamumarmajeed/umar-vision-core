import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { TechnicalSkillsSection } from "@/components/TechnicalSkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { QuizSection } from "@/components/QuizSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedCharacter } from "@/components/AnimatedCharacter";
import { BikeRider } from "@/components/BikeRider";

const Index = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <AnimatedCharacter />
      <BikeRider />
      <FloatingNav />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <TechnicalSkillsSection />
        <ProjectsSection />
        <QuizSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
