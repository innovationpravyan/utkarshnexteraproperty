import ProjectList from '@/components/projects/project-list';
import ProjectFAQ from '@/components/projects/project-faq';
import HappyCustomers from '@/components/home/happy-customers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Construction Projects Portfolio | PropertyPro',
  description: 'Explore our portfolio of completed construction, renovation, and interior design projects. See our quality craftsmanship and attention to detail.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Our Projects</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Explore our portfolio of successfully completed projects. We take pride in our craftsmanship and attention to detail, delivering exceptional results across various sectors.
          </p>
        </div>
        <ProjectList />
      </section>
      <HappyCustomers />
      <ProjectFAQ />
    </div>
  );
}
