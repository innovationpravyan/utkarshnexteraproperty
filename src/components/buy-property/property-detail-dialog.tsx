
'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IndianRupee, MapPin, Share2, Heart, Phone, MessageSquare } from 'lucide-react';
import type { PropertyForSale } from '@/lib/constants';

interface PropertyDetailDialogProps {
  property: PropertyForSale;
  children: React.ReactNode;
}

const DetailItem = ({ label, value }: { label: string; value: string | number }) => (
  <div>
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

export default function PropertyDetailDialog({ property, children }: PropertyDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-4 pb-0 md:p-6 md:pb-0">
          <DialogTitle className="sr-only">{property.title}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2">
          {/* Left Side: Image Carousel & Description */}
          <div className="p-4 md:p-6">
            <Carousel className="w-full">
              <CarouselContent>
                {property.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`${property.title} image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <Separator className="my-4" />

            <div>
                <h3 className="font-semibold text-lg mb-2">Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <DetailItem label="Type" value="For Sale" />
                    <DetailItem label="Listed By" value={property.details.listedBy} />
                    <DetailItem label="Plot Area" value={`${property.details.plotArea} sqft`} />
                    <DetailItem label="Length" value={`${property.details.length} ft`} />
                    <DetailItem label="Breadth" value={`${property.details.breadth} ft`} />
                    <DetailItem label="Facing" value={property.details.facing} />
                </div>
            </div>

            <Separator className="my-4" />
            
             <div>
                <h3 className="font-semibold text-lg mb-2">Description</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {property.description}
                </p>
            </div>
          </div>

          {/* Right Side: Details & Actions */}
          <div className="p-6 border-l flex flex-col gap-4">
             <div className="flex justify-between items-center">
                <div className="flex items-center text-2xl font-bold">
                    <IndianRupee className="h-6 w-6" />
                    <span>{property.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon"><Share2 className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon"><Heart className="h-5 w-5" /></Button>
                </div>
            </div>
            <p className="text-muted-foreground">{property.title}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {property.location}
            </p>

            <Separator />
            
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={property.seller.avatarUrl} alt={property.seller.name} />
                        <AvatarFallback>{property.seller.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{property.seller.name}</p>
                        <p className="text-xs text-muted-foreground">Member since {property.seller.memberSince}</p>
                    </div>
                </div>
                {/* Optional items listed count */}
            </div>

            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <MessageSquare className="mr-2 h-5 w-5" /> Chat with Seller
            </Button>
            <Button size="lg" variant="outline" className="w-full">
                <Phone className="mr-2 h-5 w-5" /> Show Number
            </Button>

            <Separator />

            <div>
                <h4 className="font-semibold mb-2">Posted In</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                     <MapPin className="h-4 w-4" /> {property.location.split(',')[1].trim()}, {property.location.split(',')[0].trim()}
                </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
