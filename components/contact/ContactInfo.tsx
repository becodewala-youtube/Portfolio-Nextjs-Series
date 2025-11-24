import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { siteConfig, socialLinks } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.location,
    },
    {
      icon: Clock,
      label: 'Availability',
      value: siteConfig.availability,
    },
  ];

  const socialIcons = [
    { icon: Github, url: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: socialLinks.twitter, label: 'Twitter' },
    { icon: Dribbble, url: socialLinks.dribbble, label: 'Dribbble' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="space-y-6 p-6">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <detail.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="font-medium">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 font-semibold">Connect With Me</h3>
          <div className="flex flex-wrap gap-3">
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background transition-all hover:scale-110 hover:border-primary hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="mb-2 font-semibold text-primary">Quick Response</h3>
          <p className="text-sm text-muted-foreground">
            I typically respond to inquiries within 24 hours during business days.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
