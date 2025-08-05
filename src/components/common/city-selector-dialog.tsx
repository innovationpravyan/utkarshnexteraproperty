'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { ChevronDown, MapPin } from 'lucide-react';
import { CITIES_COVERED } from '@/lib/constants';
import { useCity } from '@/context/city-context';

export default function CitySelectorDialog() {
  const { selectedCity, setSelectedCity } = useCity();
  const [isOpen, setIsOpen] = useState(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
          <span className="font-bold">{selectedCity.toUpperCase()}</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select your city</DialogTitle>
          <DialogDescription>
            Choose your location to get personalized information.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {CITIES_COVERED.map((city) => (
            <Button
              key={city}
              variant={selectedCity === city ? 'default' : 'outline'}
              className="justify-start gap-2"
              onClick={() => handleCitySelect(city)}
            >
              <MapPin className="h-4 w-4"/>
              {city}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
