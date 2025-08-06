"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building, Home, DollarSign, ArrowRight, Award, Sparkles, Star, Zap, Layers, Hexagon } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-black">
            {/* Dynamic Background Layers */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,_transparent_0deg,_orange-500/10_120deg,_amber-400/10_180deg,_transparent_360deg)] animate-spin duration-[20s]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent animate-pulse duration-4000"></div>
            </div>

            {/* Animated Mesh Background */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-400/10 transform transition-transform duration-1000"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${mousePosition.x * 0.01}deg)`
                    }}
                ></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-4 sm:py-6 lg:py-10">
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center min-h-screen lg:min-h-0">
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
                        {/* Premium Badge */}
                        <div className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-slate-900/80 via-blue-950/70 to-slate-900/80 backdrop-blur-2xl border-2 border-orange-400/50 rounded-full px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5 text-xs sm:text-sm font-bold text-white shadow-2xl hover:shadow-orange-500/30 transition-all duration-700 hover:scale-105 hover:border-orange-400/80">
                            <div className="relative">
                                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400 animate-pulse" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-ping"></div>
                            </div>
                            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent font-black tracking-wider">
                                LUXURY CONSTRUCTION SPECIALISTS
                            </span>
                            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400 animate-spin duration-3000" />
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Hero Title - Reduced size on mobile */}
                        <div className="space-y-2 sm:space-y-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight font-[Poppins,sans-serif]">
                                <span
                                    className="block bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent animate-pulse">
                                    BUILD
                                </span>
                                <span
                                    className="block bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
                                    DREAMS
                                </span>
                                <span className="block text-[#f8f9fa] drop-shadow-lg">
                                    REALITY
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#f8f9fa]/80 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0 font-[Inter,sans-serif]">
                                Transform your vision into architectural masterpieces. Premium construction and luxury
                                real estate solutions with unmatched craftsmanship.
                            </p>
                        </div>

                        {/* Action Buttons - Smaller on mobile */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="group relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500
                                            hover:from-orange-700 hover:via-orange-600 hover:to-amber-600 text-white font-black
                                            ring-2 ring-orange-400/50 hover:ring-orange-400/80
                                            transition-all duration-700 transform hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2
                                            px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl sm:rounded-2xl"
                                asChild
                            >
                                <Link href="https://wa.me/919214143300" target="_blank" rel="noopener noreferrer">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shine"></div>
                                    <Building className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-500" />
                                    START BUILDING
                                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-transform duration-500" />
                                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="group relative overflow-hidden bg-slate-900/30 backdrop-blur-2xl hover:bg-slate-900/60
                                            border-2 border-orange-400/60 hover:border-orange-300 text-white hover:text-orange-300
                                            shadow-2xl hover:shadow-none-500/30 transition-all duration-700 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2
                                            px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl"
                                asChild
                            >
                                <Link href="/projects">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Home className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-500" />
                                    VIEW PROJECTS
                                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-transform duration-500" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Enhanced Image Section - Image at bottom on mobile */}
                    <div className="relative group">
                        {/* Background Effects - Smaller on mobile */}
                        <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 lg:-top-12 lg:-left-12 w-20 h-20 sm:w-30 sm:h-30 lg:w-40 lg:h-40 bg-gradient-to-br from-orange-500/30 to-amber-400/20 rounded-2xl sm:rounded-3xl rotate-12 blur-xl sm:blur-2xl animate-pulse duration-3000 group-hover:rotate-45 transition-all duration-2000"></div>
                        <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-12 lg:-right-12 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-tl from-orange-400/25 to-emerald-500/15 rounded-2xl sm:rounded-3xl -rotate-12 blur-xl sm:blur-2xl animate-pulse duration-4000 delay-1000 group-hover:-rotate-45 transition-all duration-2000"></div>

                        {/* Main Image Container - Responsive sizing */}
                        <div className="relative aspect-[4/3] w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
                            {/* Layered Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 via-amber-400/30 to-orange-400/20 rounded-2xl sm:rounded-3xl transform rotate-2 animate-pulse duration-2000 group-hover:rotate-6 transition-all duration-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/50 to-emerald-500/20 rounded-2xl sm:rounded-3xl transform -rotate-2 animate-pulse duration-3000 delay-500 group-hover:-rotate-6 transition-all duration-1000"></div>

                            {/* Image Frame - Responsive padding */}
                            <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 p-2 sm:p-3 md:p-4 lg:p-6 rounded-2xl sm:rounded-3xl transform -rotate-1 hover:rotate-0 transition-all duration-1000 border-2 border-orange-400/40 hover:border-orange-400/70 backdrop-blur-xl">
                                <div className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden">
                                    <Image
                                        src="/hero_bg/_hero_bg_image.png"
                                        alt="Modern construction project with premium architecture"
                                        fill
                                        className="object-cover transition-all duration-1500 group-hover:scale-110 sm:group-hover:scale-115 filter group-hover:brightness-110 group-hover:contrast-110"
                                        data-ai-hint="luxury modern house exterior"
                                        priority
                                    />

                                    {/* Image Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent group-hover:from-slate-900/40 transition-all duration-700"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                                    {/* Scan Line Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-scan opacity-0 group-hover:opacity-100"></div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Stats Card - Responsive sizing and positioning */}
                        <div className="absolute -right-2 sm:-right-4 bottom-4 sm:bottom-6 lg:bottom-10 animate-bounce duration-6000 delay-1000">
                            <div className="bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-800/95 backdrop-blur-2xl rounded-lg sm:rounded-xl p-2 sm:p-3 border border-orange-400/50 transition-all duration-700 group">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="relative w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 via-amber-400 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center animate-pulse delay-500">
                                        <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-ping"></div>
                                    </div>
                                    <div>
                                        <div className="text-base sm:text-lg font-black text-white font-mono">100%</div>
                                        <div className="text-xs text-orange-400 font-bold">Quality</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(10deg); }
                }
                @keyframes shine {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
                @keyframes scan {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes shimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .animate-shine {
                    animation: shine 2s linear infinite;
                }
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}