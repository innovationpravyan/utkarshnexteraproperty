import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Briefcase, Users, ArrowRight, Building2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import JobApplicationDialog from '@/components/careers/job-application-dialog';
import type { Metadata } from 'next';
import { JobOpenings } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Careers in Construction | Join Our Team | PropertyPro',
  description: 'Explore exciting career opportunities in construction, engineering, and project management at PropertyPro. Build your future with a leading company.',
  alternates: {
    canonical: '/careers',
  },
};

const benefits = [
  {
    icon: Building2,
    title: "Career Growth",
    description: "Clear advancement paths and professional development opportunities"
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with experienced professionals in a collaborative environment"
  },
  {
    icon: Briefcase,
    title: "Competitive Benefits",
    description: "Health insurance, retirement plans, and performance bonuses"
  }
];

export default function CareersPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Join Our Team</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Build your career with PropertyPro. We're looking for talented individuals who share our passion for excellence in construction and innovation.
          </p>
        </div>

        {/* Why Work With Us Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6">
              <CardHeader className="p-0 pb-2">
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Openings */}
        <div className="mb-8">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">Current Openings</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {JobOpenings.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {job.department}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{job.posted}</span>
                </div>
                <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.experience}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                <CardDescription className="leading-relaxed">
                  {job.description}
                </CardDescription>
                <div>
                  <h4 className="font-semibold mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <JobApplicationDialog jobTitle={job.title} jobLocation={job.location}>
                    <Button className="w-full group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </JobApplicationDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
