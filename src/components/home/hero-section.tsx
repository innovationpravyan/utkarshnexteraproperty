"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building, Home as HomeIcon, DollarSign, ArrowRight, Award, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a365d] via-[#343a40] to-black">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 via-transparent to-amber-400/10"></div>
            
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-amber-400/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-500/15 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="hidden md:block absolute top-1/4 left-1/4 w-3 h-3 bg-amber-400 rounded-full animate-ping delay-500 opacity-60"></div>
                <div className="hidden md:block absolute top-3/4 right-1/4 w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-700 opacity-80"></div>
                <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-300 opacity-70"></div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                <div className="hidden md:block absolute top-40 left-20 w-12 h-12 border-2 border-amber-400/40 rotate-45 animate-spin duration-[8000ms] opacity-60"></div>
                <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-orange-500/25 to-orange-400/20 rounded-full animate-bounce duration-3000 opacity-70"></div>
                <div className="hidden md:block absolute bottom-40 left-20 w-6 h-6 bg-emerald-500/25 transform rotate-12 animate-pulse duration-2000 opacity-50"></div>
                <div className="absolute bottom-20 right-10 w-14 h-14 border border-orange-500/30 rounded-full animate-ping duration-4000 opacity-40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:py-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="hidden lg:inline-flex items-center gap-3 bg-gradient-to-r from-[#1a365d]/80 to-[#343a40]/60 backdrop-blur-xl border border-amber-400/40 rounded-full px-4 md:px-8 py-3 md:py-4 text-sm font-semibold text-[#f8f9fa] shadow-2xl animate-fade-in hover:scale-105 transition-all duration-500">
                            <Award className="w-5 h-5 text-amber-400 animate-pulse" />
                            LUXURY CONSTRUCTION SPECIALISTS
                            <Sparkles className="w-5 h-5 text-orange-500 animate-spin duration-3000" />
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-[Poppins,sans-serif]">
                                <span className="block bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent animate-pulse">
                                    BUILD
                                </span>
                                <span className="block bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
                                    DREAMS
                                </span>
                                <span className="block text-[#f8f9fa] drop-shadow-lg">
                                    REALITY
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#f8f9fa]/80 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0 font-[Inter,sans-serif]">
                                Transform your vision into architectural masterpieces. Premium construction and luxury real estate solutions with unmatched craftsmanship.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="group relative z-30 bg-gradient-to-r from-orange-500 to-amber-500 
                                            hover:from-orange-600 hover:to-amber-600 text-white 
                                            shadow-[0_0_15px_rgba(255,107,53,0.4)] ring-1 ring-amber-400/50 
                                            transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 
                                            px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-bold rounded-xl font-[Poppins,sans-serif]"
                                asChild
                            >
                                <Link
                                href="https://wa.me/919214143300"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <Building className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                                    START BUILDING
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </Button>

                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="group bg-[#1a365d]/20 backdrop-blur-xl hover:bg-[#1a365d]/40 border-2 border-amber-400/50 hover:border-amber-400 text-[#f8f9fa] hover:text-amber-400 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-bold rounded-xl font-[Poppins,sans-serif]" 
                                asChild
                            >
                                <Link href="/projects">
                                    <HomeIcon className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                                    VIEW PROJECTS
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </Button>
                        </div>

                        <div className="pt-4">
                            <Button 
                                variant="ghost" 
                                className="group text-amber-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 font-[Inter,sans-serif]" 
                                asChild
                            >
                                <Link href="/sell-property">
                                    <DollarSign className="mr-2 h-4 w-4 group-hover:animate-spin" />
                                    Professional Property Valuation
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="hidden lg:block relative mt-12 lg:mt-0">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-500/25 to-amber-400/20 rounded-3xl rotate-12 blur-sm animate-pulse duration-3000"></div>
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-orange-400/20 to-emerald-500/15 rounded-3xl -rotate-12 blur-sm animate-pulse duration-4000 delay-1000"></div>
                        
                        <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-amber-400/25 to-orange-400/20 rounded-3xl transform rotate-1 animate-pulse duration-2000"></div>
                            <div className="absolute inset-0 bg-gradient-to-bl from-[#1a365d]/40 to-emerald-500/20 rounded-3xl transform -rotate-1 animate-pulse duration-3000 delay-500"></div>
                            
                            <div className="relative bg-gradient-to-br from-[#1a365d] to-[#343a40] p-2 md:p-4 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-700 group-hover:shadow-orange-500/25 border border-amber-400/30">
                                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                                    <Image
                                        src="/hero_bg/_hero_bg_image.png"
                                        alt="Modern construction project with premium architecture"
                                        fill
                                        className="object-cover transition-all duration-1000 group-hover:scale-110 filter group-hover:brightness-110"
                                        data-ai-hint="luxury modern house exterior"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/50 via-transparent to-transparent group-hover:from-[#1a365d]/30 transition-all duration-500"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    
                                    <div className="absolute top-6 right-6 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-75"></div>
                                    <div className="hidden md:block absolute top-12 right-12 w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-500 opacity-60"></div>
                                    <div className="absolute bottom-8 left-8 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-1000 opacity-80"></div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:block absolute -right-6 bottom-12 animate-bounce duration-4000 delay-1000">
                            <div className="bg-gradient-to-br from-[#1a365d]/95 to-[#343a40]/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4 md:p-6 border border-amber-400/40 hover:border-amber-400/70 hover:shadow-orange-500/20 hover:scale-110 transition-all duration-500">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse delay-500">
                                        <Award className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-black text-[#f8f9fa] font-[Poppins,sans-serif]">100%</div>
                                        <div className="text-xs md:text-sm text-amber-400 font-medium font-[Inter,sans-serif]">Quality Build</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
