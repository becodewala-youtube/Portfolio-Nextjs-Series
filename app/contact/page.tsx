import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import AnimatedSection from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for project inquiries and collaborations',
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeader
            overline="Get In Touch"
            title="Let's Connect"
            subtitle="Have a project in mind or just want to chat? I'd love to hear from you!"
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ContactInfo />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
