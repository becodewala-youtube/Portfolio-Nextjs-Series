import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsSection from '@/components/home/SkillsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <CTASection />
    </>
  );
}
