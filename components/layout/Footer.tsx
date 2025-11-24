import Link from 'next/link';
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { siteConfig, socialLinks, navLinks } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Github, url: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: socialLinks.twitter, label: 'Twitter' },
    { icon: Dribbble, url: socialLinks.dribbble, label: 'Dribbble' },
  ];

  return (
    <footer className="border-t bg-gray-50/50 dark:bg-slate-900/50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-all hover:scale-110 hover:border-primary hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
