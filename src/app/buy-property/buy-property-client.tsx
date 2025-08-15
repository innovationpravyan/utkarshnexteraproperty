'use client';

import { useState, useEffect } from 'react';
import PropertyFilters, { FilterState } from '@/components/buy-property/property-filters';
import PropertyList from '@/components/buy-property/property-list';
import { PROPERTIES_FOR_SALE, PropertyForSale } from '@/lib/constants';

const initialFilters: FilterState = {
  locations: [],
  budget: [0, 20000000], // Default range
};

export default function BuyPropertyClientPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [filteredProperties, setFilteredProperties] = useState(PROPERTIES_FOR_SALE);
  const [sortOrder, setSortOrder] = useState('featured');

  useEffect(() => {
    let tempProperties = [...PROPERTIES_FOR_SALE];

    // Location filter
    if (filters.locations.length > 0) {
      tempProperties = tempProperties.filter(p => 
        filters.locations.some(loc => p.location.split(',')[0].trim() === loc)
      );
    }

    // Budget filter
    tempProperties = tempProperties.filter(p => p.price >= filters.budget[0] && p.price <= filters.budget[1]);
    
    // Sorting logic
    switch (sortOrder) {
      case 'price-asc':
        tempProperties.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        tempProperties.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming higher ID is newer. Replace with a date field if available.
        tempProperties.sort((a, b) => b.id - a.id);
        break;
      // 'featured' is the default, no specific sort needed unless there's a featured flag
      default:
        // Reset to default order if needed, or maintain current order.
        // For this case, we can rely on the original order from PROPERTIES_FOR_SALE.
        break;
    }
    
    setFilteredProperties(tempProperties);
  }, [filters, sortOrder]);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold font-headline text-foreground md:text-5xl">
            Lands & Plots for Sale
          </h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Explore {PROPERTIES_FOR_SALE.length} properties and find your perfect investment. Use the filters to narrow down your search.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <PropertyFilters onFilterChange={setFilters} />
          </aside>
          <main className="lg:col-span-9">
            <PropertyList properties={filteredProperties} sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </main>
        </div>
      </div>
    </section>
  );
}