'use client';

import { useState, useMemo, useEffect, useRef } from "react";
import { Star, PlayCircle, Users, CheckCircle, Quote, MapPin, Calendar, Package, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/constants";
import YoutubeDialog from "./youtube-dialog";

const filters = ["All", "Basic Package", "Premium Package"];

const TestimonialCard = ({ testimonial, index, isInView }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Card 
            className={cn(
                "text-center flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 relative border-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm",
                "hover:border-orange-300 dark:hover:border-orange-500",
                isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12"
            )}
            style={{
                transitionDelay: `${400 + (index * 200)}ms`,
                animationDelay: `${400 + (index * 200)}ms`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <CardContent className="p-0 flex flex-col flex-grow relative z-10">
                {/* Enhanced image container */}
                <div className="relative overflow-hidden">
                    <img
                        src={testimonial.image}
                        alt={`Testimonial from ${testimonial.name}`}
                        className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                        data-ai-hint="happy customer portrait"
                    />
                    
                    {/* Rating badge in top right */}
                    <div className="absolute top-4 right-4">
                        <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                            <Star className="h-3 w-3 fill-current" />
                            {testimonial.rating}
                        </div>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shine" />
                    </div>
                </div>

                {/* Enhanced content section */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Header with name and year */}
                    <div className="flex justify-between items-start mb-3">
                        <h3 className={cn(
                            "font-bold text-foreground text-left transition-all duration-300 group-hover:text-orange-700 dark:group-hover:text-orange-300",
                            "group-hover:scale-105 transform-gpu"
                        )}>
                            {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                            <Calendar className="h-3 w-3" />
                            {testimonial.year}
                        </div>
                    </div>
                    
                    {/* Project details */}
                    <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{testimonial.city}</span>
                        </div>
                        <div className={cn(
                            "px-2 py-1 rounded-full font-semibold transition-all duration-300",
                            "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
                            "group-hover:bg-orange-200 dark:group-hover:bg-orange-800/40"
                        )}>
                            CRN{testimonial.crn}
                        </div>
                    </div>
                    
                    {/* Enhanced star rating */}
                    <div className="flex justify-center mb-4 gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={cn(
                                    "h-5 w-5 transition-all duration-200",
                                    i < testimonial.rating 
                                        ? 'text-yellow-400 fill-current transform scale-110' 
                                        : 'text-gray-300',
                                    "group-hover:scale-125"
                                )}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            />
                        ))}
                    </div>
                    
                    {/* Enhanced testimonial text */}
                    <div className="relative flex-grow mb-4">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-orange-300 opacity-50" />
                        <p className={cn(
                            "text-muted-foreground italic text-sm leading-relaxed transition-colors duration-300 pl-4",
                            "group-hover:text-gray-700 dark:group-hover:text-gray-300"
                        )}>
                            {testimonial.text}
                        </p>
                    </div>
                    
                    {/* Project type */}
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
                        <FileText className="h-3 w-3" />
                        <span>{testimonial.projectType}</span>
                    </div>
                </div>
            </CardContent>

            {/* Floating particles on hover */}
            {isHovered && (
                <>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400/60 rounded-full animate-particle-float-1" />
                    <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-amber-400/50 rounded-full animate-particle-float-2" />
                    <div className="absolute top-1/2 left-8 w-0.5 h-0.5 bg-orange-500/70 rounded-full animate-particle-float-3" />
                </>
            )}
        </Card>
    );
};

export default function HappyCustomers() {
    const [selectedCity] = useState("Varanasi"); // Mock selected city
    const [activeFilter, setActiveFilter] = useState("All");
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    const cityTestimonials = useMemo(() => {
        const filteredByCity = TESTIMONIALS.filter(t => t.city === selectedCity);
        if (activeFilter === "All") {
            return filteredByCity;
        }
        return filteredByCity.filter(t => t.package === activeFilter);
    }, [selectedCity, activeFilter]);

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
                "py-16 lg:py-24 bg-gradient-to-br from-orange-50/40 to-amber-50/20 dark:from-slate-900 dark:to-orange-950/10 relative overflow-hidden transition-all duration-400",
                isInView ? "opacity-100" : "opacity-0"
            )}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-500/8 to-amber-500/8 rounded-full animate-float-slow blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-orange-400/6 to-yellow-500/6 rounded-full animate-float-reverse blur-3xl" />
                
                {/* Testimonial-themed decorative elements */}
                <div className="absolute top-32 right-1/4">
                    <Quote className="w-8 h-8 text-orange-400/20 animate-pulse" />
                </div>
                <div className="absolute bottom-40 left-1/4">
                    <Users className="w-6 h-6 text-amber-400/25 animate-bounce-slow" />
                </div>
                <div className="absolute top-1/2 right-32">
                    <Star className="w-4 h-4 text-orange-500/30 animate-spin-slow" />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Enhanced header */}
                <div className={cn(
                    "text-center mb-12 transition-all duration-300 delay-100",
                    isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                )}>
                    <h2 className="text-3xl font-bold text-foreground md:text-4xl relative inline-block mb-4">
                        <span className={cn(
                            "relative z-10 transition-all duration-300 delay-150",
                            isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                        )}>
                            Our Happy Customers
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
                        Trusted by 7000+ Happy Owners in {selectedCity}
                    </p>
                    
                    {/* Trust indicators */}
                    <div className={cn(
                        "flex justify-center items-center gap-6 mt-6 transition-all duration-300 delay-300",
                        isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                    )}>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Verified Reviews</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.8 Average Rating</span>
                        </div>
                    </div>
                </div>

                {/* Enhanced filter buttons */}
                <div className={cn(
                    "flex justify-center flex-wrap gap-3 mb-12 transition-all duration-300 delay-350",
                    isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-6"
                )}>
                    {filters.map((filter, index) => (
                        <Button
                            key={filter}
                            variant={activeFilter === filter ? "default" : "outline"}
                            onClick={() => setActiveFilter(filter)}
                            className={cn(
                                "group relative overflow-hidden px-6 py-3 font-medium transition-all duration-300 hover:scale-105 active:scale-95",
                                activeFilter === filter 
                                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg border-0" 
                                    : "hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 border-gray-300 dark:border-gray-600"
                            )}
                            style={{
                                animationDelay: `${350 + (index * 100)}ms`
                            }}
                        >
                            {/* Active state background */}
                            {activeFilter === filter && (
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-100" />
                            )}
                            
                            {/* Button content */}
                            <span className="relative z-10 flex items-center gap-2">
                                {filter === "All" && <Users className="h-4 w-4" />}
                                {filter !== "All" && <Package className="h-4 w-4" />}
                                {filter}
                            </span>
                            
                            {/* Hover ripple effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
                        </Button>
                    ))}
                </div>

                {/* Enhanced testimonials grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {cityTestimonials.slice(0, 3).map((testimonial, index) => (
                        <TestimonialCard 
                            key={testimonial.crn} 
                            testimonial={testimonial} 
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Enhanced CTA */}
                <div className={cn(
                    "text-center transition-all duration-300 delay-700",
                    isInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                )}>
                    <Button 
                        variant="outline"
                        size="lg"
                        className={cn(
                            "group relative overflow-hidden px-8 py-6 text-lg font-semibold transition-all duration-300",
                            "hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25",
                            "border-2 border-orange-500 text-orange-600 dark:text-orange-400",
                            "hover:border-orange-600 hover:text-white hover:bg-orange-500",
                            "active:scale-95"
                        )}
                    >
                        {/* Button background animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Button content */}
                        <span className="relative z-10 flex items-center gap-3">
                            <Users className="h-5 w-5" />
                            View More Reviews
                        </span>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                        </div>
                        
                        {/* Ripple effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 scale-0 group-hover:scale-100 transition-transform duration-400 rounded-lg" />
                    </Button>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-slow { 
                    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 
                    33% { transform: translateY(-15px) rotate(45deg) scale(1.02); }
                    66% { transform: translateY(8px) rotate(90deg) scale(0.98); }
                }
                
                @keyframes float-reverse { 
                    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); } 
                    33% { transform: translateY(12px) rotate(-30deg) scale(1.01); }
                    66% { transform: translateY(-8px) rotate(-60deg) scale(0.99); }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-8px) scale(1.05); }
                }

                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-15deg); }
                    100% { transform: translateX(200%) skewX(-15deg); }
                }

                .animate-float-slow { animation: float-slow 18s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 22s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 8s linear infinite; }
                .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
                .animate-shine { animation: shine 1.5s ease-in-out; }
            `}</style>
        </section>
    );
}
