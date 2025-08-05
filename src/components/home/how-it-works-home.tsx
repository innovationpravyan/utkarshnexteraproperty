'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Map, PencilRuler, Building, KeyRound, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants"

const StepCard = ({ step, index, isInView, totalSteps }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    // Simulate step completion for demo
    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setIsCompleted(true);
            }, (index + 1) * 800);
            return () => clearTimeout(timer);
        }
    }, [isInView, index]);

    return (
        <div 
            className={cn(
                "flex flex-col items-center text-center relative px-4 transition-all duration-400",
                isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12"
            )}
            style={{
                transitionDelay: `${400 + (index * 200)}ms`,
                animationDelay: `${400 + (index * 200)}ms`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* Step card */}
            <div className={cn(
                "relative mb-6 transition-all duration-300 group",
                isHovered && "transform scale-105"
            )}>
                {/* Main icon container */}
                <div className={cn(
                    "flex h-24 w-24 items-center justify-center rounded-full shadow-lg transition-all duration-300 relative overflow-hidden border-4",
                    isCompleted 
                        ? "bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 border-orange-500" 
                        : "bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-600",
                    "group-hover:shadow-xl group-hover:shadow-orange-500/25"
                )}>
                    {/* Background glow */}
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-0 transition-opacity duration-300 rounded-full",
                        isHovered && "opacity-100"
                    )} />

                    {/* Icon */}
                    <step.icon className={cn(
                        "h-10 w-10 transition-all duration-300 relative z-10",
                        isCompleted 
                            ? "text-orange-600 dark:text-orange-400" 
                            : "text-gray-600 dark:text-gray-400",
                        "group-hover:scale-110 group-hover:rotate-6"
                    )} />

                    {/* Animated ring */}
                    <div className={cn(
                        "absolute inset-0 rounded-full border-2 opacity-0 transition-all duration-500",
                        isCompleted ? "border-orange-500/50 animate-ping" : "border-gray-400/50",
                        isHovered && "opacity-100"
                    )} />
                </div>

                {/* Step number badge */}
                <div className={cn(
                    "absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full font-bold text-lg border-4 border-white dark:border-slate-900 transition-all duration-300",
                    isCompleted 
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg scale-110" 
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                )}>
                    {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 animate-bounce-in" />
                    ) : (
                        <span className="transition-all duration-300">{index + 1}</span>
                    )}
                </div>

                {/* Success particles */}
                {isCompleted && isHovered && (
                    <>
                        <div className="absolute top-2 right-8 w-1 h-1 bg-orange-400/60 rounded-full animate-particle-success-1" />
                        <div className="absolute bottom-2 left-8 w-1.5 h-1.5 bg-amber-400/50 rounded-full animate-particle-success-2" />
                        <div className="absolute top-8 left-2 w-0.5 h-0.5 bg-orange-500/70 rounded-full animate-particle-success-3" />
                    </>
                )}
            </div>

            {/* Step content */}
            <div className="space-y-3">
                <h3 className={cn(
                    "text-xl font-semibold transition-all duration-300",
                    isCompleted 
                        ? "text-orange-700 dark:text-orange-300" 
                        : "text-foreground",
                    "group-hover:scale-105"
                )}>
                    {step.title}
                </h3>
                <p className={cn(
                    "text-sm leading-relaxed transition-colors duration-300 max-w-xs mx-auto",
                    isCompleted 
                        ? "text-gray-700 dark:text-gray-300" 
                        : "text-muted-foreground"
                )}>
                    {step.description}
                </p>
            </div>
        </div>
    );
};

export default function HowItWorksHome() {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer for entrance animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
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
                "py-16 lg:py-24 bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-slate-900 dark:to-orange-950/20 relative overflow-hidden transition-all duration-400",
                isInView ? "opacity-100" : "opacity-0"
            )}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full animate-float-slow blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-orange-400/8 to-yellow-500/8 rounded-full animate-float-reverse blur-3xl" />
                
                {/* Decorative elements */}
                <div className="absolute top-40 right-1/3 w-3 h-3 bg-orange-400/30 rotate-45 animate-spin-slow" />
                <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-amber-400/25 rounded-full animate-bounce-slow" />
                <div className="absolute top-1/2 left-20 w-2 h-2 bg-orange-500/35 animate-pulse" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Enhanced header */}
                <div className={cn(
                    "text-center mb-16 transition-all duration-300 delay-100",
                    isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                )}>
                    <h2 className="text-3xl font-bold text-foreground md:text-4xl relative inline-block mb-4">
                        <span className={cn(
                            "relative z-10 transition-all duration-300 delay-150",
                            isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                        )}>
                            Your Dream Home, Simplified
                        </span>
                        <div className={cn(
                            "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 delay-200",
                            isInView ? "w-full" : "w-0"
                        )} />
                    </h2>
                    <p className={cn(
                        "text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-300 delay-250",
                        isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                    )}>
                        We follow a transparent and streamlined process to make your construction journey hassle-free, from initial concept to final handover.
                    </p>
                </div>

                {/* Enhanced steps container */}
                <div className="relative max-w-6xl mx-auto">
                   
                    {/* Steps grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-12 pt-8">
                        {HOW_IT_WORKS_STEPS.map((step, index) => (
                            <StepCard 
                                key={index} 
                                step={step} 
                                index={index} 
                                isInView={isInView}
                                totalSteps={HOW_IT_WORKS_STEPS.length}
                            />
                        ))}
                    </div>
                </div>

                {/* Enhanced CTA */}
                <div className={cn(
                    "mt-16 text-center transition-all duration-300 delay-1000",
                    isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                )}>
                    <Button 
                        size="lg" 
                        variant="outline"
                        asChild
                        className={cn(
                            "group relative overflow-hidden px-8 py-6 text-lg font-semibold transition-all duration-300",
                            "hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25",
                            "border-2 border-orange-500 text-orange-600 dark:text-orange-400",
                            "hover:border-orange-600 hover:text-white hover:bg-orange-500",
                            "active:scale-95"
                        )}
                    >
                        <a href="/how-it-works">
                            {/* Button background animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Button content */}
                            <span className="relative z-10 flex items-center gap-3">
                                Learn More About Our Process
                                <ArrowRight className={cn(
                                    "h-5 w-5 transition-all duration-300",
                                    "group-hover:translate-x-1 group-hover:scale-110"
                                )} />
                            </span>
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                            </div>
                            
                            {/* Ripple effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 scale-0 group-hover:scale-100 transition-transform duration-400 rounded-lg" />
                        </a>
                    </Button>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-slow { 
                    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 
                    33% { transform: translateY(-12px) rotate(45deg) scale(1.02); }
                    66% { transform: translateY(6px) rotate(90deg) scale(0.98); }
                }
                
                @keyframes float-reverse { 
                    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 
                    33% { transform: translateY(8px) rotate(-30deg) scale(1.01); }
                    66% { transform: translateY(-6px) rotate(-60deg) scale(0.99); }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-6px) scale(1.05); }
                }

                @keyframes bounce-in {
                    0% { transform: scale(0) rotate(0deg); opacity: 0; }
                    50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
                    100% { transform: scale(1) rotate(360deg); opacity: 1; }
                }

                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-15deg); }
                    100% { transform: translateX(200%) skewX(-15deg); }
                }

                @keyframes particle-success-1 {
                    0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-12px) translateX(6px) scale(1.4); opacity: 1; }
                    100% { transform: translateY(-24px) translateX(-3px) scale(0.8); opacity: 0; }
                }

                @keyframes particle-success-2 {
                    0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.5; }
                    50% { transform: translateY(8px) translateX(-8px) scale(1.3); opacity: 0.8; }
                    100% { transform: translateY(16px) translateX(6px) scale(0.9); opacity: 0; }
                }

                @keyframes particle-success-3 {
                    0% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.7; }
                    50% { transform: translateY(-15px) translateX(3px) rotate(120deg) scale(1.5); opacity: 1; }
                    100% { transform: translateY(-30px) translateX(-6px) rotate(240deg) scale(0.7); opacity: 0; }
                }

                .animate-float-slow { animation: float-slow 16s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 20s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 8s linear infinite; }
                .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
                .animate-bounce-in { animation: bounce-in 0.6s ease-out; }
                .animate-shine { animation: shine 1.5s ease-in-out; }
                .animate-particle-success-1 { animation: particle-success-1 2s ease-out infinite; }
                .animate-particle-success-2 { animation: particle-success-2 2.5s ease-out infinite 0.5s; }
                .animate-particle-success-3 { animation: particle-success-3 2.2s ease-out infinite 1s; }
            `}</style>
        </section>
    );
}
