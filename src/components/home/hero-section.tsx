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

            {/* Geometric Shapes */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-32 left-20 w-16 h-16">
                    <Hexagon className="w-full h-full text-orange-400/30 animate-pulse duration-3000" />
                </div>
            </div> */}

            {/* Glowing Orbs */}
            {/* <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/30 via-amber-400/20 to-transparent rounded-full blur-3xl animate-pulse duration-4000 hover:scale-110 transition-all duration-2000"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-600/25 via-red-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-2000 duration-6000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full animate-spin duration-[30s]"></div>
            </div> */}

            <div className="relative z-10 container mx-auto px-4 lg:py-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Premium Badge */}
                        <div className="group hidden lg:inline-flex items-center gap-3 bg-gradient-to-r from-slate-900/80 via-blue-950/70 to-slate-900/80 backdrop-blur-2xl border-2 border-orange-400/50 rounded-full px-6 md:px-10 py-4 md:py-5 text-sm font-bold text-white shadow-2xl hover:shadow-orange-500/30 transition-all duration-700 hover:scale-105 hover:border-orange-400/80">
                            <div className="relative">
                                <Award className="w-6 h-6 text-orange-400 animate-pulse" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                            </div>
                            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent font-black tracking-wider">
                                LUXURY CONSTRUCTION SPECIALISTS
                            </span>
                            <Sparkles className="w-6 h-6 text-amber-400 animate-spin duration-3000" />
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Hero Title */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-[Poppins,sans-serif]">
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
                            <p className="text-lg md:text-xl text-[#f8f9fa]/80 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0 font-[Inter,sans-serif]">
                                Transform your vision into architectural masterpieces. Premium construction and luxury
                                real estate solutions with unmatched craftsmanship.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="group relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500
                                            hover:from-orange-700 hover:via-orange-600 hover:to-amber-600 text-white font-black
                                            ring-2 ring-orange-400/50 hover:ring-orange-400/80
                                            transition-all duration-700 transform hover:scale-105 hover:-translate-y-2
                                            px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl rounded-2xl"
                                asChild
                            >
                                <Link href="https://wa.me/919214143300" target="_blank" rel="noopener noreferrer">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shine"></div>
                                    <Building className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                                    START BUILDING
                                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="group relative overflow-hidden bg-slate-900/30 backdrop-blur-2xl hover:bg-slate-900/60
                                            border-2 border-orange-400/60 hover:border-orange-300 text-white hover:text-orange-300
                                            shadow-2xl hover:shadow-none-500/30 transition-all duration-700 hover:scale-105 hover:-translate-y-2
                                            px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold rounded-2xl"
                                asChild
                            >
                                <Link href="/projects">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Home className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                                    VIEW PROJECTS
                                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
                                </Link>
                            </Button>
                        </div>

                        {/* Additional CTA */}
                        {/* <div className="pt-6">
                            <Button
                                variant="ghost"
                                className="group relative text-orange-400 hover:text-amber-300 hover:bg-orange-500/20
                                            transition-all duration-500 hover:scale-105 backdrop-blur-sm border border-orange-400/30
                                            hover:border-orange-400/60 rounded-xl px-6 py-4"
                                asChild
                            >
                                <Link href="/sell-property">
                                    <DollarSign className="mr-2 h-5 w-5 group-hover:animate-spin" />
                                    <span className="font-semibold">Professional Property Valuation</span>
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                                </Link>
                            </Button>
                        </div> */}
                    </div>

                    {/* Enhanced Image Section */}
                    <div className="hidden lg:block relative mt-12 lg:mt-0 group">
                        {/* Background Effects */}
                        <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-orange-500/30 to-amber-400/20 rounded-3xl rotate-12 blur-2xl animate-pulse duration-3000 group-hover:rotate-45 transition-all duration-2000"></div>
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-tl from-orange-400/25 to-emerald-500/15 rounded-3xl -rotate-12 blur-2xl animate-pulse duration-4000 delay-1000 group-hover:-rotate-45 transition-all duration-2000"></div>

                        {/* Main Image Container */}
                        <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
                            {/* Layered Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 via-amber-400/30 to-orange-400/20 rounded-3xl transform rotate-2 animate-pulse duration-2000 group-hover:rotate-6 transition-all duration-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/50 to-emerald-500/20 rounded-3xl transform -rotate-2 animate-pulse duration-3000 delay-500 group-hover:-rotate-6 transition-all duration-1000"></div>

                            {/* Image Frame */}
                            <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 p-3 md:p-6 rounded-3xl transform -rotate-1 hover:rotate-0 transition-all duration-1000 border-2 border-orange-400/40 hover:border-orange-400/70 backdrop-blur-xl">
                                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                                    <Image
                                        src="/hero_bg/_hero_bg_image.png"
                                        alt="Modern construction project with premium architecture"
                                        fill
                                        className="object-cover transition-all duration-1500 group-hover:scale-115 filter group-hover:brightness-110 group-hover:contrast-110"
                                        data-ai-hint="luxury modern house exterior"
                                        priority
                                    />

                                    {/* Image Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent group-hover:from-slate-900/40 transition-all duration-700"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                                    {/* Floating Indicators */}
                                    {/* <div className="absolute top-6 right-6 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-80 group-hover:animate-bounce"></div>
                                    <div className="absolute top-12 right-12 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-500 opacity-70"></div>
                                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-amber-400 rounded-full animate-ping delay-1000 opacity-75"></div> */}

                                    {/* Scan Line Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-scan opacity-0 group-hover:opacity-100"></div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Stats Card */}
                        <div className="absolute -right-4 bottom-10 animate-bounce duration-6000 delay-1000">
                            <div className="bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-800/95 backdrop-blur-2xl rounded-xl p-3 border border-orange-400/50 transition-all duration-700 group">
                                <div className="flex items-center gap-2">
                                    <div className="relative w-8 h-8 bg-gradient-to-br from-orange-500 via-amber-400 to-orange-600 rounded-xl flex items-center justify-center animate-pulse delay-500">
                                        <Award className="w-4 h-4 text-white" />
                                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-black text-white font-mono">100%</div>
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