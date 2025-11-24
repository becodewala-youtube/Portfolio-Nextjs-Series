'use client';

import { Briefcase } from 'lucide-react';
import { experience } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function Timeline() {
  return (
    <div className="relative space-y-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-transparent md:before:left-1/2">
      {experience.map((exp, index) => (
        <AnimatedSection key={exp.id} delay={index * 0.1}>
          <div
            className={`relative md:w-1/2 ${
              index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'
            }`}
          >
            <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
              <Briefcase className="h-6 w-6" />
            </div>
            <Card className="ml-16 md:ml-0">
              <CardContent className="p-6">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-sm text-primary">{exp.company}</p>
                  </div>
                  <Badge variant="outline">
                    {exp.startDate} - {exp.endDate}
                  </Badge>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {exp.location}
                </p>
                <ul className="mb-4 space-y-2 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
