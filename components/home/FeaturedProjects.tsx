'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/constants';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="section-padding bg-gray-50/50 dark:bg-slate-900/50">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeader
            overline="Featured Work"
            title="Projects I'm Proud Of"
            subtitle="A selection of recent projects showcasing my skills in modern web development"
          />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="gap-2 p-6 pt-0">
                  {project.github && (
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="hover:scale-105"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="hover:scale-105"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                See All Projects →
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
