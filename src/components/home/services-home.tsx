'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Home, Paintbrush, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";

export default function ServicesHome() {
    const [isInView, setIsInView] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const sectionRef = useRef(null);

    // Intersection Observer for entrance animation
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
                "py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden transition-all duration-400",
                isInView ? "opacity-100" : "opacity-0"
            )}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-full animate-float-slow blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-orange-400/5 to-yellow-500/5 rounded-full animate-float-reverse blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-500/3 to-orange-500/3 rounded-full animate-pulse-slow blur-2xl" />
                
                {/* Geometric patterns */}
                <div className="absolute top-20 right-1/4 w-4 h-4 bg-orange-400/20 rotate-45 animate-spin-slow" />
                <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-amber-400/15 rounded-full animate-bounce-slow" />
                <div className="absolute top-1/3 right-20 w-3 h-3 bg-orange-500/25 animate-pulse" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header section with enhanced animations */}
                <div className={cn(
                    "text-center mb-12 transition-all duration-300 delay-100",
                    isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                )}>
                    <h2 className="text-3xl font-bold text-foreground md:text-4xl relative inline-block">
                        <span className={cn(
                            "relative z-10 transition-all duration-300 delay-150",
                            isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                        )}>
                            Our Core Services
                        </span>
                        <div className={cn(
                            "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 delay-200",
                            isInView ? "w-full" : "w-0"
                        )} />
                    </h2>
                    <p className={cn(
                        "mt-6 text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-300 delay-250",
                        isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                    )}>
                        We offer a complete range of services to bring your vision to life, from initial design to final construction and interior finishing.
                    </p>
                </div>

                {/* Services grid with staggered animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service, index) => (
                        <Card 
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={cn(
                                "flex flex-col text-center items-center p-6 transition-all duration-200 hover:shadow-2xl group relative overflow-hidden border-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm",
                                "hover:border-orange-300 dark:hover:border-orange-500 hover:-translate-y-3 hover:scale-105",
                                hoveredCard === index ? "shadow-2xl border-orange-400 dark:border-orange-500" : "border-gray-200 dark:border-gray-700",
                                isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12"
                            )}
                            style={{
                                transitionDelay: `${300 + (index * 50)}ms`,
                                animationDelay: `${300 + (index * 50)}ms`
                            }}
                        >
                            {/* Hover background effect */}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            )} />
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
                            </div>

                            <CardHeader className="p-0 relative z-10">
                                <div className={cn(
                                    "flex h-20 w-20 items-center justify-center rounded-full mb-4 transition-all duration-200 group-hover:scale-110 relative overflow-hidden",
                                    "bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30",
                                    "group-hover:from-orange-200 group-hover:to-amber-200 dark:group-hover:from-orange-800/40 dark:group-hover:to-amber-800/40",
                                    "group-hover:shadow-lg group-hover:shadow-orange-500/25"
                                )}>
                                    {/* Icon background glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-full" />
                                    
                                    <service.icon className={cn(
                                        "h-10 w-10 transition-all duration-200 relative z-10",
                                        "text-orange-600 dark:text-orange-400",
                                        "group-hover:text-orange-700 dark:group-hover:text-orange-300",
                                        "group-hover:scale-110 group-hover:rotate-6"
                                    )} />
                                    
                                    {/* Animated ring */}
                                    <div className={cn(
                                        "absolute inset-0 rounded-full border-2 border-orange-500/30 opacity-0 group-hover:opacity-100 transition-all duration-200",
                                        "animate-ping group-hover:animate-pulse"
                                    )} />
                                </div>
                                
                                <CardTitle className={cn(
                                    "text-xl transition-all duration-150 group-hover:text-orange-700 dark:group-hover:text-orange-300",
                                    "group-hover:scale-105"
                                )}>
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            
                            <CardContent className="p-0 mt-4 flex-grow relative z-10">
                                <p className={cn(
                                    "text-muted-foreground text-sm transition-all duration-150 leading-relaxed",
                                    "group-hover:text-gray-700 dark:group-hover:text-gray-300"
                                )}>
                                    {service.description}
                                </p>
                            </CardContent>

                            {/* Floating particles on hover */}
                            {hoveredCard === index && (
                                <>
                                    <div className="absolute top-4 right-4 w-1 h-1 bg-orange-400/60 rounded-full animate-particle-float-1" />
                                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-amber-400/50 rounded-full animate-particle-float-2" />
                                    <div className="absolute top-1/3 left-4 w-0.5 h-0.5 bg-orange-500/70 rounded-full animate-particle-float-3" />
                                </>
                            )}
                        </Card>
                    ))}
                </div>

                {/* Enhanced CTA button */}
                <div className={cn(
                    "mt-16 text-center transition-all duration-300 delay-500",
                    isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                )}>
                    <Button 
                        size="lg" 
                        variant="outline"
                        asChild
                        className={cn(
                            "group relative overflow-hidden px-8 py-6 text-lg font-semibold transition-all duration-200",
                            "hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25",
                            "border-2 border-orange-500 text-orange-600 dark:text-orange-400",
                            "hover:border-orange-600 hover:text-white hover:bg-orange-500",
                            "active:scale-95"
                        )}
                    >
                        <a href="/projects">
                            {/* Button background animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                            
                            {/* Button content */}
                            <span className="relative z-10 flex items-center gap-2">
                                See Our Work
                                <ArrowRight className={cn(
                                    "h-5 w-5 transition-all duration-150",
                                    "group-hover:translate-x-1 group-hover:scale-110"
                                )} />
                            </span>
                            
                            {/* Ripple effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 scale-0 group-hover:scale-100 transition-transform duration-200 rounded-lg" />
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                            </div>
                        </a>
                    </Button>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-slow { 
                    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 
                    33% { transform: translateY(-20px) rotate(120deg) scale(1.05); }
                    66% { transform: translateY(10px) rotate(240deg) scale(0.95); }
                }
                
                @keyframes float-reverse { 
                    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 
                    33% { transform: translateY(15px) rotate(-60deg) scale(1.02); }
                    66% { transform: translateY(-10px) rotate(-120deg) scale(0.98); }
                }

                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
                    50% { transform: scale(1.1) rotate(180deg); opacity: 0.5; }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.1); }
                }

                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-15deg); }
                    100% { transform: translateX(200%) skewX(-15deg); }
                }

                @keyframes particle-float-1 {
                    0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-20px) translateX(10px) scale(1.5); opacity: 1; }
                    100% { transform: translateY(-40px) translateX(-5px) scale(0.5); opacity: 0; }
                }

                @keyframes particle-float-2 {
                    0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.5; }
                    50% { transform: translateY(15px) translateX(-15px) scale(1.3); opacity: 0.8; }
                    100% { transform: translateY(30px) translateX(10px) scale(0.7); opacity: 0; }
                }

                @keyframes particle-float-3 {
                    0% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.7; }
                    50% { transform: translateY(-25px) translateX(5px) rotate(180deg) scale(1.4); opacity: 1; }
                    100% { transform: translateY(-50px) translateX(-10px) rotate(360deg) scale(0.6); opacity: 0; }
                }

                .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 15s ease-in-out infinite; }
                .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 4s linear infinite; }
                .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
                .animate-shine { animation: shine 1s ease-in-out; }
                .animate-particle-float-1 { animation: particle-float-1 2s ease-out infinite; }
                .animate-particle-float-2 { animation: particle-float-2 2.5s ease-out infinite 0.5s; }
                .animate-particle-float-3 { animation: particle-float-3 2.2s ease-out infinite 1s; }
            `}</style>
        </section>
    );
}
