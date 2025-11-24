'use client';

import { Code2, Database, Wrench } from 'lucide-react';
import { skills } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: skills.frontend,
      color: 'text-blue-500',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: skills.backend,
      color: 'text-green-500',
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: skills.tools,
      color: 'text-orange-500',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeader
            overline="Tech Stack"
            title="Skills & Expertise"
            subtitle="Technologies and tools I use to bring ideas to life"
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`rounded-lg bg-primary/10 p-2 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
