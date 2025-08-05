
'use client';
import { useInView } from 'framer-motion';
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const StepCard = ({ step, index }: { step: typeof HOW_IT_WORKS_STEPS[0], index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const isLeft = index % 2 === 0;

    return (
        <div ref={ref} className="relative flex items-center justify-between md:justify-normal w-full">
            {/* Left Card */}
            {isLeft ? (
                <div className={cn("w-full md:w-5/12 transition-all duration-700", isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
                    <div className="bg-card p-6 rounded-xl shadow-md border-t-4 border-primary text-left">
                        <h3 className="font-semibold text-lg mb-1 text-primary">{step.title}</h3>
                        <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                </div>
            ) : <div className="hidden md:block w-5/12"></div>}
            
            {/* Timeline Connector */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:relative md:top-auto md:left-auto md:-translate-x-0 md:-translate-y-0 w-20 flex items-center justify-center">
                 <div className="h-full w-0.5 bg-border md:h-0.5 md:w-full" />
                 <div className={cn(
                    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-500 z-10",
                    isInView ? "scale-100" : "scale-0"
                )}>
                     <div className={cn(
                        "w-16 h-16 relative flex items-center justify-center rounded-full shadow-lg",
                        isInView ? "bg-primary" : "bg-border"
                    )}>
                        <step.icon className={cn(
                            "w-8 h-8 transition-colors duration-500",
                            isInView ? "text-white" : "text-muted-foreground"
                        )} />
                    </div>
                </div>
            </div>

             {/* Right Card */}
            {!isLeft ? (
                <div className={cn("w-full md:w-5/12 transition-all duration-700", isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}>
                     <div className="bg-card p-6 rounded-xl shadow-md border-t-4 border-primary text-left">
                        <h3 className="font-semibold text-lg mb-1 text-primary">{step.title}</h3>
                        <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                </div>
            ) : <div className="hidden md:block w-5/12"></div>}
        </div>
    );
}

export default function HowItWorksClientPage() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-headline font-bold text-foreground md:text-5xl">How It Works</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                Building your dream home is a journey, and we've simplified it into a clear, transparent, and efficient process. Follow our step-by-step guide from vision to reality.
            </p>
        </div>
        
        <div className="relative">
           <div className="space-y-16">
               {HOW_IT_WORKS_STEPS.map((step, index) => (
                   <StepCard key={index} step={step} index={index} />
               ))}
           </div>
        </div>

        <div className="mt-24 text-center bg-card p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-headline font-bold text-foreground">Our Core Promises</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                <h4 className="font-semibold text-lg">Price Match Guarantee</h4>
                <p className="text-muted-foreground mt-1 text-balance">We offer competitive pricing without compromising on quality.</p>
            </div>
             <div className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                <h4 className="font-semibold text-lg">On-Time Delivery</h4>
                <p className="text-muted-foreground mt-1 text-balance">Your project will be completed on the agreed-upon schedule.</p>
            </div>
             <div className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
                <h4 className="font-semibold text-lg">10-Year Warranty</h4>
                <p className="text-muted-foreground mt-1 text-balance">We stand by our work with a decade-long structural warranty.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
