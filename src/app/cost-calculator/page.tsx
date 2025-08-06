import CalculatorForm from '@/components/cost-calculator/calculator-form';
import { Calculator } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Cost Calculator India',
  description: "Estimate the cost of your construction project in Bengaluru, Varanasi, or Gurugram with our easy-to-use calculator. Get a free quote for your dream home.",
  alternates: {
    canonical: '/cost-calculator',
  },
};

export default function CostCalculatorPage() {
  return (
    <section className="min-h-[calc(100vh-10rem)] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Calculator className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Construction Cost Calculator</h1>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                Get a preliminary estimate for your project with our easy-to-use calculator. Simply enter your project details to get a ballpark figure. Please note that this is an approximation and a detailed quote will require a consultation with our experts to finalize the scope, materials, and finishes.
            </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <CalculatorForm />
        </div>
      </div>
    </section>
  );
}
