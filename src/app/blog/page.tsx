import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { BlogPosts } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Construction & Design Blog | Insights & Trends | PropertyPro',
  description: 'Stay updated with the latest construction insights, design trends, and news from PropertyPro. Read our expert articles on renovation and property.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Our Blog</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Stay updated with the latest insights, trends, and expert advice from our team. Discover valuable tips for construction, renovation, and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={`blog post image for ${post.title}`}
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {/* <Link href={`/blog/${post.slug}`}> */}
                    {post.title}
                  {/* </Link> */}
                </CardTitle>
                <CardDescription className="line-clamp-3 mb-4">
                  {post.description}
                </CardDescription>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-muted-foreground gap-4 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to stay updated with our latest posts?
          </p>
          <Button size="lg" className="group">
            Subscribe to Newsletter
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
