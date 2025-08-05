'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { ArrowRight, PackagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PACKAGES_DATA } from "@/lib/constants";
import PackageCard from "../packages/package-card";
import { useCity } from "@/context/city-context";
import { cn } from '@/lib/utils';

export default function PackagesHome() {
    const { selectedCity } = useCity();
    const packages = PACKAGES_DATA[selectedCity]?.["Homes"] || [];
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            className={cn(
                "py-16 lg:py-24 bg-gradient-to-br from-orange-50/20 to-white dark:from-slate-900 dark:to-slate-800/50 relative overflow-hidden transition-opacity duration-1000",
                isInView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange-50/30 via-transparent to-transparent opacity-50 animate-pulse-slow"/>
                <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-t from-amber-50/20 via-transparent to-transparent opacity-40 animate-float-reverse"/>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-orange-200/50 rounded-full opacity-0 animate-ping-slow" style={{ animationDelay: '1s' }}/>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-t-2 border-amber-300/60 rounded-full opacity-0 animate-spin-slow" style={{ animationDelay: '2s' }}/>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className={cn(
                    "text-center mb-12 transition-all duration-700",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full mb-4">
                        <PackagePlus className="h-5 w-5" />
                        <span className="font-semibold text-sm">Tailored Packages</span>
                    </div>
                    <h2 className="text-3xl font-headline font-bold text-foreground md:text-4xl">
                        Construction Packages in {selectedCity}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                        Choose from a range of packages designed to meet your specific needs and budget, all with transparent pricing and quality assurance.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 items-stretch">
                    {packages.map((pkg, index) => (
                        <div 
                            key={pkg.name} 
                            className={cn(
                                "transition-all duration-700",
                                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: `{200 + index * 150}ms` }}
                        >
                            <PackageCard packageData={pkg} />
                        </div>
                    ))}
                </div>

                <div className={cn(
                    "mt-16 text-center transition-all duration-700",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )} style={{ transitionDelay: '800ms' }}>
                    <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link href="/packages">
                            <span className="relative z-10 flex items-center">
                                View All Packages
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                             <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shine opacity-0 group-hover:opacity-100"/>
                        </Link>
                    </Button>
                </div>
            </div>
            <style jsx>{`
                @keyframes float-reverse { 
                    0%, 100% { transform: translateY(0px); } 
                    50% { transform: translateY(20px); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.1); }
                }
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); opacity: 0.6; }
                    to { transform: rotate(360deg); opacity: 0; }
                }
                 @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-20deg); }
                    100% { transform: translateX(100%) skewX(-20deg); }
                }
                .animate-float-reverse { animation: float-reverse 10s ease-in-out infinite; }
                .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
                .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
                .animate-spin-slow { animation: spin-slow 10s linear infinite; }
                .animate-shine { animation: shine 1.5s ease-in-out; }
            `}</style>
        </section>
    );
}
