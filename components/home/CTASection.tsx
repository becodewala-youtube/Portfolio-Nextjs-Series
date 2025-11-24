'use client';

import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              I'm currently available for freelance projects and full-time opportunities.
              Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
