import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS, Project } from "@/lib/constants";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const FeaturedProjectCard = ({ project }: { project: Project }) => (
    <Card className="overflow-hidden group text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-60 w-full">
            <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.aiHint}
            />
        </div>
        <CardContent className="p-4">
            <h3 className="text-base font-bold text-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground">CRN{project.crn}</p>
        </CardContent>
    </Card>
);


export default function FeaturedProjects() {
    const featuredProjects = PROJECTS.filter(p => p.featured);

    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold text-foreground md:text-4xl text-balance">Our Construction Projects</h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                    Take a look at some of our proudest achievements and successful projects.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map(project => (
                        <FeaturedProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button asChild size="lg" variant="outline">
                    <Link href="/projects">
                        View 12 more projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
