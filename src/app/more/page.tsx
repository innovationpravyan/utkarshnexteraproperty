import { Newspaper, HelpCircle, Briefcase, Info } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'More Resources | Utkarsh Next Era',
  description: 'Explore more about Utkarsh Next Era. Find our blog, career opportunities, company information, and support channels all in one place.',
  alternates: {
    canonical: '/more',
  },
};

const moreLinks = [
  {
    icon: Newspaper,
    title: "Blog",
    description: "Read our latest articles on construction, design trends, and home ownership.",
    href: "/blog"
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Join our team of innovators and builders. Explore open positions.",
    href: "/careers"
  },
  {
    icon: Info,
    title: "Contact",
    description: "Learn more about our company's mission, vision, and the team behind our success.",
    href: "/contact"
  },
  {
    icon: HelpCircle,
    title: "Help & Support",
    description: "Find answers to your questions and get support from our dedicated team.",
    href: "/smart-faq"
  }
];

export default function MorePage() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold text-foreground md:text-5xl">More Resources</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Explore more about utkarsh next era, from our latest news to career opportunities and support channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {moreLinks.map((item, index) => (
            <Link href={item.href} key={index} className="block">
              <Card className="h-full hover:bg-muted/50 transition-colors hover:shadow-lg">
                <CardHeader className="flex-row gap-4 items-center p-4">
                  <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-sm">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
