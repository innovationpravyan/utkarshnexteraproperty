
'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import type { PropertyForSale } from '@/lib/constants';
import PropertyCard, { PropertyCtaCard } from './property-card';

interface PropertyListProps {
  properties: PropertyForSale[];
  sortOrder: string;
  setSortOrder: (order: string) => void;
}

export default function PropertyList({ properties, sortOrder, setSortOrder }: PropertyListProps) {
  const ctaCardIndex = 5;

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Select value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Sort by: Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.slice(0, ctaCardIndex).map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
        ))}
        {properties.length > ctaCardIndex && <PropertyCtaCard />}
        {properties.slice(ctaCardIndex).map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
        ))}
      </div>

      <Pagination className="mt-12">
        <PaginationContent>
            <PaginationItem>
            <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
            <PaginationNext href="#" />
            </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
