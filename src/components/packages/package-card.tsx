import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Package } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface PackageCardProps {
    packageData: Package;
}

export default function PackageCard({ packageData }: PackageCardProps) {
    const { name, price, description, highlights, isPopular, brands } = packageData;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className={cn(
                "group flex flex-col h-full border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm", 
                isPopular ? "border-amber-400" : "border-border"
            )}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {isPopular && (
                    <div className="relative bg-amber-400 text-center py-1 text-sm font-semibold text-white shadow-md z-10">
                        POPULAR
                    </div>
                )}
                
                <CardHeader className="text-left relative z-10">
                    <CardTitle className="text-2xl font-bold font-headline">{name}</CardTitle>
                    <p className="text-3xl font-bold text-primary">₹{price} <span className="text-lg font-normal text-muted-foreground">/ sqft</span></p>
                    <CardDescription className="text-balance pt-2">{description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow text-left relative z-10">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">HIGHLIGHTS</p>
                    <ul className="space-y-2">
                        {highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start text-sm">
                                <span className="text-primary mr-2 mt-1 transition-transform duration-300 group-hover:rotate-180">◆</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                
                <CardFooter className="flex-col items-start pt-4 relative z-10">
                    <Button asChild variant="outline" className="w-full bg-white/50 dark:bg-slate-800/50 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 group/btn">
                        <Link href="https://wa.me/919214143300" target="_blank" rel="noopener noreferrer">
                            Contact Us
                        </Link>
                    </Button>
                </CardFooter>
                 {isHovered && (
                    <>
                        <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400/60 rounded-full animate-particle-float-1" />
                        <div className="absolute bottom-24 left-8 w-1.5 h-1.5 bg-amber-400/50 rounded-full animate-particle-float-2" />
                        <div className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-orange-500/70 rounded-full animate-particle-float-3" />
                    </>
                )}
            </Card>
        </motion.div>
    );
}
