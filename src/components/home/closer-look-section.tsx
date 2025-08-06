'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CLOSER_LOOK_DATA } from '@/lib/constants';


export default function CloserLookSection() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sectionRef = useRef(null);

    const scrollTo = (index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSelectedIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const scrollPrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSelectedIndex(prev => prev > 0 ? prev - 1 : CLOSER_LOOK_DATA.length - 1);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const scrollNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSelectedIndex(prev => prev < CLOSER_LOOK_DATA.length - 1 ? prev + 1 : 0);
        setTimeout(() => setIsTransitioning(false), 500);
    };

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
                "py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden transition-all duration-1000",
                isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            )}
        >
            {/* Enhanced floating background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full animate-float-slow blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/2 w-80 h-80 bg-gradient-to-tr from-orange-600/10 to-yellow-500/10 rounded-full animate-float-reverse blur-3xl" />
                <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full animate-pulse-slow blur-2xl" />
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div 
                    className={cn(
                        "flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4 transition-all duration-700 delay-200",
                        isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-6"
                    )}
                >
                    <div className="flex-1">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground relative mb-2 overflow-hidden">
                            <span className={cn(
                                "relative z-10 inline-block transition-all duration-800 delay-300",
                                isInView ? "transform translate-y-0 opacity-100" : "transform translate-y-8 opacity-0"
                            )}>
                                A Closer Look at Our Packages
                            </span>
                            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 animate-slide-in-left transform scale-x-0 origin-left" 
                                 style={{ 
                                     animationDelay: '800ms', 
                                     animationFillMode: 'forwards',
                                     animationDuration: '1s'
                                 }} />
                        </h2>
                        <p className={cn(
                            "text-base text-muted-foreground max-w-2xl transition-all duration-700 delay-500",
                            isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                        )}>
                            Explore the material and brand details that go into each of our packages.
                        </p>
                    </div>
                    
                    <div className={cn(
                        "flex items-center gap-3 self-end lg:self-center transition-all duration-700 delay-600",
                        isInView ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-8"
                    )}>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={scrollPrev}
                            disabled={isTransitioning}
                            className="h-12 w-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 active:scale-95 hover:rotate-12 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                            <ChevronLeft className="h-5 w-5 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:drop-shadow-sm relative z-10" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={scrollNext}
                            disabled={isTransitioning}
                            className="h-12 w-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 active:scale-95 hover:-rotate-12 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                            <ChevronRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:drop-shadow-sm relative z-10" />
                        </Button>
                    </div>
                </div>

                <div 
                    className={cn(
                        "overflow-hidden transition-all duration-700 delay-400 mb-6 rounded-2xl",
                        isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                    )}
                >
                    <div className="relative">
                        <div 
                            className={cn(
                                "flex transition-all duration-700 ease-in-out",
                                isTransitioning && "blur-sm scale-95"
                            )}
                            style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                        >
                            {CLOSER_LOOK_DATA.map((pkg, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                                    <Card className={cn(
                                        "overflow-hidden transition-all duration-700 hover:shadow-2xl group border-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md hover:border-orange-300 dark:hover:border-orange-500 relative",
                                        selectedIndex === index ? "ring-2 ring-orange-500 shadow-2xl animate-glow" : "border-gray-200 dark:border-gray-700"
                                    )}>
                                        <CardContent className="p-0 relative overflow-hidden">
                                            <div className="relative w-full aspect-[16/7] min-h-[400px] overflow-hidden">
                                                <img
                                                    src={pkg.mainImage}
                                                    alt={`${pkg.name} package visual`}
                                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                                />
                                                
                                                {/* Animated overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                                
                                                {/* Content overlay with enhanced animations */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
                                                    <h3 className={cn(
                                                        "text-3xl md:text-4xl font-bold text-shadow-lg transition-all duration-500 transform",
                                                        "group-hover:scale-105 group-hover:-translate-y-2"
                                                    )}>
                                                        {pkg.title}
                                                    </h3>
                                                    <p className={cn(
                                                        "mt-2 text-lg max-w-2xl text-shadow-md text-white/90 transition-all duration-500 delay-100 transform",
                                                        "group-hover:translate-y-0 group-hover:opacity-100",
                                                        "translate-y-4 opacity-80"
                                                    )}>
                                                        {pkg.description}
                                                    </p>
                                                    
                                                    {/* Enhanced badge */}
                                                    <div className="absolute top-4 right-4 z-20">
                                                        <div className={cn(
                                                            "bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg transition-all duration-300",
                                                            "group-hover:scale-110 group-hover:shadow-xl group-hover:from-amber-500 group-hover:to-orange-500 animate-shimmer"
                                                        )}>
                                                            {pkg.name}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Shine effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div 
                    className={cn(
                        "flex justify-center items-center flex-wrap gap-3 transition-all duration-700 delay-600",
                        isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                    )}
                >
                    {CLOSER_LOOK_DATA.map((pkg, index) => (
                        <Button 
                            key={pkg.name}
                            variant={index === selectedIndex ? 'default' : 'outline'}
                            onClick={() => scrollTo(index)}
                            disabled={isTransitioning}
                            className={cn(
                                "capitalize transition-all duration-500 hover:scale-110 active:scale-95 relative overflow-hidden px-6 py-3 font-medium group",
                                index === selectedIndex 
                                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xl scale-110 border-0 animate-pulse-gentle" 
                                    : "hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 border-gray-300 dark:border-gray-600 hover:shadow-lg"
                            )}
                            style={{
                                animationDelay: `${700 + (index * 150)}ms`,
                                transform: isInView ? 'translateY(0)' : 'translateY(16px)',
                                opacity: isInView ? 1 : 0
                            }}
                        >
                            <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-sm">
                                {pkg.name} Package
                            </span>
                            
                            {/* Enhanced active state animation */}
                            {index === selectedIndex && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-100" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-sweep" />
                                </>
                            )}
                            
                            {/* Hover ripple effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
                        </Button>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .text-shadow-lg { text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); }
                .text-shadow-md { text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4); }

                @keyframes slide-in-left { 
                    from { opacity: 0; transform: scaleX(0); } 
                    to { opacity: 1; transform: scaleX(1); } 
                }
                
                @keyframes float-slow { 
                    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 
                    33% { transform: translateY(-30px) rotate(120deg) scale(1.1); }
                    66% { transform: translateY(15px) rotate(240deg) scale(0.9); }
                }
                
                @keyframes float-reverse { 
                    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 
                    33% { transform: translateY(25px) rotate(-90deg) scale(1.05); }
                    66% { transform: translateY(-15px) rotate(-180deg) scale(0.95); }
                }

                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
                    50% { transform: scale(1.2) rotate(180deg); opacity: 0.6; }
                }

                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
                }

                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-15deg); }
                    100% { transform: translateX(200%) skewX(-15deg); }
                }

                @keyframes sweep {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }

                @keyframes pulse-gentle {
                    0%, 100% { transform: scale(1.1); }
                    50% { transform: scale(1.15); }
                }

                .animate-slide-in-left { animation: slide-in-left 1s ease-out forwards; }
                .animate-float-slow { animation: float-slow 25s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 30s ease-in-out infinite; }
                .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
                .animate-glow { animation: glow 2s ease-in-out infinite; }
                .animate-shimmer { 
                    background-size: 200% 100%; 
                    animation: shimmer 2s ease-in-out infinite; 
                }
                .animate-shine { animation: shine 2s ease-in-out; }
                .animate-sweep { animation: sweep 1.5s ease-in-out; }
                .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
            `}</style>
        </section>
    );
}
