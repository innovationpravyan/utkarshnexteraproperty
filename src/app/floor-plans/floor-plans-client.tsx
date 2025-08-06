'use client';

import { useState } from 'react';
import FloorPlanList from "@/components/floor-plans/floor-plan-list";
import FloorPlanFilters from "@/components/floor-plans/floor-plan-filters";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HappyCustomers from "@/components/home/happy-customers";
import { Button } from "@/components/ui/button";
import { Layout, Lightbulb } from "lucide-react";
import { floorPlansData } from '@/lib/floor-plans-data';
import type { FilterState } from '@/components/floor-plans/floor-plan-filters';

const planFaqs = [
  {
    question: "Can I customize a floor plan?",
    answer: "Absolutely! All our floor plans are fully customizable. You can work with our design team to modify layouts, change room sizes, add or remove features, and select different materials to perfectly match your needs and preferences."
  },
  {
    question: "What is included when I download a plan?",
    answer: "When you download a floor plan, you receive a detailed PDF file that includes the layout with dimensions, room labels, and key architectural features. For full construction-ready blueprints, please contact our team for a consultation."
  },
  {
    question: "Do you offer 3D visualizations?",
    answer: "Yes, we provide 3D visualizations and virtual tours for any of our floor plans. This allows you to experience the space before construction begins and make informed decisions about the design and finishes."
  },
  {
    question: "Are these plans compliant with local building codes?",
    answer: "Our floor plans are designed to meet general building standards. However, since local codes can vary, we will ensure that your chosen and customized plan is fully compliant with your specific city's regulations during the formal architectural design phase."
  }
];

export default function FloorPlansClientPage() {
  const [filters, setFilters] = useState<FilterState>({
    dimensions: [],
    area: [],
  });

  const filteredPlans = floorPlansData.filter(plan => {
    const dimensionMatch = filters.dimensions.length === 0 || filters.dimensions.includes(plan.dimensions);
    const areaMatch = filters.area.length === 0 || filters.area.some(areaRange => {
      const [min, max] = areaRange.split('-').map(Number);
      return plan.area >= min && (max ? plan.area <= max : true);
    });
    return dimensionMatch && areaMatch;
  });

  const activeFilterCount = Object.values(filters).reduce((acc, curr) => acc + curr.length, 0);

  return (
    <div className="bg-background">
        <section className="container mx-auto px-4 py-16 lg:py-24">
            <div className="text-left mb-8">
                <h1 className="text-3xl font-headline font-bold text-foreground md:text-4xl">Total Floor Plans - {filteredPlans.length} Designs</h1>
            </div>
            <div className="grid lg:grid-cols-12 gap-12">
                <aside className="lg:col-span-3">
                    <FloorPlanFilters onFilterChange={setFilters} activeFilterCount={activeFilterCount} />
                </aside>
                <main className="lg:col-span-9">
                    <FloorPlanList plans={filteredPlans} />
                </main>
            </div>
        </section>

        <section className="py-16 lg:py-24 bg-card">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-headline font-bold text-foreground md:text-4xl">Our Design Philosophy</h2>
                  <p className="mt-4 text-md md:text-lg text-muted-foreground">
                    We believe a home is more than just a structure; it's a sanctuary. Our design philosophy centers around three core principles: functionality, aesthetics, and sustainability. We create spaces that are not only beautiful but also practical for everyday living, optimized for natural light and airflow, and built with materials that are kind to the environment.
                  </p>
                   <Button asChild size="lg" className="mt-6">
                    <a href="/contact">Start Designing Your Home</a>
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full"><Layout className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-semibold text-lg">Functional Layouts</h4>
                      <p className="text-muted-foreground">Every square foot is designed with purpose, ensuring a logical flow and maximizing usable space for your family's lifestyle.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full"><Lightbulb className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-semibold text-lg">Aesthetic Harmony</h4>
                      <p className="text-muted-foreground">We blend modern trends with timeless design principles to create homes that are stylish, elegant, and uniquely yours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

       <HappyCustomers />

       <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-headline font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-2 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have questions about our floor plans? We've got answers.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                 <Accordion type="single" collapsible className="w-full">
                  {planFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
            </div>
        </div>
      </section>
    </div>
  );
}
