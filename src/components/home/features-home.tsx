import { FEATURES } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function FeaturesHome() {
    return (
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/40 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-32 w-48 h-48 bg-amber-200 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 rounded-full text-sm font-semibold border border-orange-200/50 shadow-sm">
                        ✨ Why Choose Us
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-slate-800 leading-tight">
                        Why Utkarsh Next Era?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We ensure peace of mind, trust, and transparent house construction services.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full shadow-lg"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, index) => (
                        <Card 
                            key={index} 
                            className="group relative text-left border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 overflow-hidden rounded-2xl"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/50 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Top accent border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            
                            <CardHeader className="relative z-10 pb-4">
                                <div className="relative h-40 w-full mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-500">
                                    <Image 
                                        src={feature.imageUrl}
                                        alt={feature.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                                        data-ai-hint={feature.title}
                                    />
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight mb-2">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10 pt-0">
                                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300 mb-4">
                                    {feature.description}
                                </p>
                                
                                {/* Bottom accent line */}
                                <div className="w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
                            </CardContent>
                            
                            {/* Corner glow */}
                            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            
                            {/* Floating dot */}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
