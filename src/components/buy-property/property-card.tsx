
'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { PropertyForSale } from '@/lib/constants';
import PropertyDetailDialog from './property-detail-dialog';

interface PropertyCardProps {
  property: PropertyForSale;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-video bg-muted">
        <Image
          src={property.imageUrl}
          alt={property.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={property.aiHint}
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-white/70 hover:bg-white text-gray-600 hover:text-red-500 rounded-full backdrop-blur-sm"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Favorite</span>
        </Button>
        {property.tag && (
            <Badge variant="secondary" className="absolute bottom-2 left-2 bg-yellow-400 text-black">
            {property.tag}
            </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
            <p className="text-xl font-bold text-foreground">
            ₹{property.price.toLocaleString('en-IN')}
            </p>
        </div>
        <h3 className="font-semibold text-foreground mt-1 truncate">{property.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{property.location}</p>
        <div className="flex justify-end mt-4">
            <PropertyDetailDialog property={property}>
                <Button variant="outline" size="sm">
                    View
                </Button>
            </PropertyDetailDialog>
        </div>
      </CardContent>
    </Card>
  );
}

export function PropertyCtaCard() {
    return (
        <Card className="overflow-hidden group transition-all duration-300 bg-blue-600 text-white flex flex-col justify-center items-center text-center p-6 h-full">
             <h3 className="text-xl font-bold">Want to see your stuff here?</h3>
             <p className="mt-2 text-sm text-blue-100">
                List your property with us and connect with thousands of potential buyers.
             </p>
             <Button variant="secondary" className="mt-4 bg-white text-blue-600 hover:bg-gray-100">
                Start Selling
            </Button>
        </Card>
    )
}
