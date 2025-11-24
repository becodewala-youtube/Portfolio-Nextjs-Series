import type { Metadata } from 'next';
import { MapPin, Mail, Coffee } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import StatsSection from '@/components/about/StatsSection';
import Timeline from '@/components/about/Timeline';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, experience, and skills',
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeader
            overline="About Me"
            title="Hi, I'm Vikash Kumar"
            subtitle={siteConfig.description}
          />
        </AnimatedSection>

        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:gap-12">
          <AnimatedSection>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over 6 years of experience
                building modern web applications. I specialize in creating seamless user
                experiences with cutting-edge technologies like React, Next.js, and
                TypeScript.
              </p>
              <p>
                My journey in tech started with a curiosity about how websites work, and
                it has evolved into a career focused on solving complex problems through
                elegant, scalable solutions. I believe in writing clean, maintainable code
                and continuously learning new technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new coffee shops, contributing
                to open-source projects, or sharing knowledge through technical writing and
                mentoring.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{siteConfig.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Coffee className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <p className="font-medium">{siteConfig.availability}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="mb-20">
            <h3 className="mb-8 text-center text-3xl font-bold">Career Achievements</h3>
            <StatsSection />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-20">
            <h3 className="mb-8 text-center text-3xl font-bold">Work Experience</h3>
            <Timeline />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
