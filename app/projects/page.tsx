import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { projects } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my web development projects and work',
};

export default function ProjectsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeader
            overline="Portfolio"
            title="My Projects"
            subtitle={`A collection of ${projects.length} projects showcasing my skills in web development and design`}
          />
        </AnimatedSection>

        <ProjectsGrid />
      </div>
    </div>
  );
}
