import SellPropertyForm from "@/components/sell-property/sell-property-form";
import { DollarSign, CheckCircle, Users } from "lucide-react";
import HappyCustomers from "@/components/home/happy-customers";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Property Fast | Free Valuation | PropertyPro',
  description: 'Sell your property with PropertyPro for a hassle-free and profitable experience. Get a free valuation and access our network of vetted buyers.',
  alternates: {
    canonical: '/sell-property',
  },
};

const benefits = [
    {
        icon: DollarSign,
        title: "Get the Best Price",
        description: "Our market expertise ensures you get the most competitive price for your property. We handle negotiations to maximize your profit."
    },
    {
        icon: Users,
        title: "Access to Vetted Buyers",
        description: "We have a network of pre-screened, serious buyers ready to invest, which means a faster and more reliable selling process for you."
    },
    {
        icon: CheckCircle,
        title: "Hassle-Free Process",
        description: "From listing and marketing to legal paperwork and closing the deal, we manage the entire process, making it seamless for you."
    }
]

export default function SellPropertyPage() {
  return (
    <div className="bg-background">
      <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h1 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Sell Your Property With Us</h1>
                    <p className="mt-4 text-md md:text-lg text-muted-foreground text-balance">
                        Ready to sell your property? Let our team of experts handle everything for a smooth, transparent, and profitable experience. Fill out the form, and we'll get in touch with a free valuation and a clear plan.
                    </p>
                    <div className="mt-12 space-y-8">
                        {benefits.map((benefit, index) => (
                             <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                    <benefit.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">{benefit.title}</h4>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 lg:mt-0">
                    <SellPropertyForm />
                </div>
            </div>
          </div>
      </section>
      {/* <HappyCustomers /> */}
    </div>
  );
}
