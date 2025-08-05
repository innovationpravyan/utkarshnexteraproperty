"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { PROJECTS, Project } from '@/lib/constants';
import { useCity } from '@/context/city-context';
import { AreaChart, Calendar, CheckCircle } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="h-full"
    >
        <Card className="overflow-hidden group h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-60 w-full">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.aiHint}
                />
                 <Badge className="absolute top-3 right-3" variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                    <CheckCircle className="mr-1.5 h-3 w-3" />
                    {project.status}
                </Badge>
            </div>
            <CardContent className="p-6 flex-grow flex flex-col">
                <Badge variant="secondary">{project.category}</Badge>
                <h3 className="mt-4 text-xl font-headline font-semibold text-balance">{project.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow text-balance text-sm">{project.description}</p>
                 <div className="mt-4 border-t pt-4 flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <AreaChart className="h-4 w-4 text-primary" />
                        <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{project.timeline}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

export default function ProjectList() {
    const { selectedCity } = useCity();
    const [filter, setFilter] = useState('All');

    const cityProjects = PROJECTS.filter(p => p.city === selectedCity);
    const filteredProjects = cityProjects.filter(project => 
        filter === 'All' || project.category === filter
    );

    const categories = ['All', 'Renovation', 'Construction', 'Interiors'];

    return (
        <div>
            <Tabs value={filter} onValueChange={setFilter} className="w-full flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-md mx-auto h-auto">
                    {categories.map(category => (
                        <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
            
            <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                           <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <p className="text-muted-foreground text-center col-span-full">No projects found for this category in {selectedCity}.</p>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
