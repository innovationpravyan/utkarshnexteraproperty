'use client';

import { useState } from "react";
import PackageCard from "@/components/packages/package-card";
import PackageFilters from "@/components/packages/package-filters";
import { PACKAGES_DATA, PackageType } from "@/lib/constants";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { useCity } from "@/context/city-context";

export default function PackagesClientPage() {
  const { selectedCity, setSelectedCity } = useCity();
  const [type, setType] = useState<PackageType>("Homes");

  const packages = PACKAGES_DATA[selectedCity]?.[type] || [];

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-headline font-bold text-foreground md:text-5xl">Construction Packages in {selectedCity}</h1>
        </div>
        
        <PackageFilters 
          location={selectedCity} 
          setLocation={setSelectedCity} 
          type={type} 
          setType={setType} 
        />

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 items-stretch">
          <AnimatePresence>
            {packages.map(pkg => (
              <PackageCard key={pkg.name} packageData={pkg} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
            <p className="text-muted-foreground">
                For a complete list of available offerings, <Link href="/compare-packages" className="text-primary font-semibold hover:underline">Compare Packages</Link>
            </p>
        </div>
      </div>
    </section>
  );
}
