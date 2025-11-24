'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Badge className="absolute top-4 left-4 z-10" variant="secondary">
            {project.category}
          </Badge>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-3">
          <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.year}</p>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2 p-6 pt-0">
        {project.github && (
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1 hover:scale-105"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {project.demo && (
          <Button
            asChild
            size="sm"
            className="flex-1 hover:scale-105"
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
