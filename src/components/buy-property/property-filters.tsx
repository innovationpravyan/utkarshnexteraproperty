
'use client';

import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '../ui/button';
import { PROPERTIES_FOR_SALE } from '@/lib/constants';

const allLocations = [...new Set(PROPERTIES_FOR_SALE.map(p => p.location.split(',')[0].trim()))].sort();

export interface FilterState {
  locations: string[];
  budget: [number, number];
}

interface PropertyFiltersProps {
    onFilterChange: (filters: FilterState) => void;
}

export default function PropertyFilters({ onFilterChange }: PropertyFiltersProps) {
  const [locations, setLocations] = useState<string[]>([]);
  const [budget, setBudget] = useState<[number, number]>([0, 20000000]);

  useEffect(() => {
    // Debounce or apply button could be used here for performance on large datasets
    onFilterChange({ locations, budget });
  }, [locations, budget, onFilterChange]);
  
  const handleLocationChange = (location: string, checked: boolean) => {
    setLocations(prev => 
      checked ? [...prev, location] : prev.filter(l => l !== location)
    );
  };

  const resetFilters = () => {
    setLocations([]);
    setBudget([0, 20000000]);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={resetFilters}>Reset</Button>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['item-1', 'item-2']} className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Locations</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {allLocations.map((loc) => (
                  <div key={loc} className="flex items-center gap-2">
                    <Checkbox 
                      id={`loc-${loc}`} 
                      checked={locations.includes(loc)}
                      onCheckedChange={(checked) => handleLocationChange(loc, !!checked)}
                    />
                    <Label htmlFor={`loc-${loc}`} className="font-normal cursor-pointer">
                      {loc}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Budget</AccordionTrigger>
            <AccordionContent>
                <div className="p-2">
                    <Slider 
                      defaultValue={[0, 20000000]} 
                      max={20000000} 
                      step={500000}
                      value={budget}
                      onValueChange={(value: [number, number]) => setBudget(value)}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>₹{budget[0].toLocaleString('en-IN')}</span>
                        <span>₹{budget[1].toLocaleString('en-IN')}</span>
                    </div>
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
