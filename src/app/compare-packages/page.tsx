import CompareTable from "@/components/packages/compare-table";
import { packageComparisonData } from "@/lib/constants";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Construction Packages & Features',
  description: 'Side-by-side comparison of our construction packages. Find the perfect fit for your budget and needs, from Basic to Royale, with detailed feature breakdowns.',
  alternates: {
    canonical: '/compare-packages',
  },
};

export default function ComparePackagesPage() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold text-foreground md:text-5xl">Compare Our Packages</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Find the perfect package for your needs by comparing the features and specifications side-by-side.
          </p>
        </div>
        <CompareTable data={packageComparisonData} />
      </div>
    </section>
  );
}
