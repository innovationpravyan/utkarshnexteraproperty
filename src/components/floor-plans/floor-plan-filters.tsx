// The filter sidebar is now implemented with checkboxes, scroll areas, and state management to handle user selections.

'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";

const dimensionOptions = [ "30x40 sq.ft", "20x30 sq.ft", "40x60 sq.ft", "50x80 sq.ft", "60x40 sq.ft", "30x50 sq.ft", "50x20 sq.ft", "50x30 sq.ft" ];
const areaOptions = [
    { label: 'Under 1000 sqft', value: '0-1000' },
    { label: '1000 - 1500 sqft', value: '1000-1500' },
    { label: '1501 - 2000 sqft', value: '1501-2000' },
    { label: '2001 - 2500 sqft', value: '2001-2500' },
    { label: 'Above 2500 sqft', value: '2501' },
];

const filterCategories = [
    { id: 'dimensions', name: "Plot Dimensions (sq ft)", options: dimensionOptions, type: 'checkbox' },
    { id: 'area', name: "House Area (sq ft)", options: areaOptions, type: 'checkbox' },
    { id: 'budget', name: "House Budget", type: 'placeholder' },
    { id: 'facing', name: "Road Facing Direction", type: 'placeholder' },
    { id: 'floors', name: "Number of Floors", type: 'placeholder' },
    { id: 'bedrooms', name: "Number of Bedrooms", type: 'placeholder' },
    { id: 'vastu', name: "Vastu Compliant", type: 'placeholder' },
    { id: 'special', name: "Special Requirement", type: 'placeholder' }
];

export type FilterState = {
    dimensions: string[];
    area: string[];
};

interface FloorPlanFiltersProps {
    onFilterChange: (filters: FilterState) => void;
    activeFilterCount: number;
}

export default function FloorPlanFilters({ onFilterChange, activeFilterCount }: FloorPlanFiltersProps) {
    const [selectedFilters, setSelectedFilters] = useState<FilterState>({
        dimensions: [],
        area: [],
    });

    const handleCheckboxChange = (category: keyof FilterState, value: string) => {
        const newFilters = { ...selectedFilters };
        const currentCategoryFilters = newFilters[category] as string[];

        if (currentCategoryFilters.includes(value)) {
            newFilters[category] = currentCategoryFilters.filter(item => item !== value);
        } else {
            newFilters[category] = [...currentCategoryFilters, value];
        }

        setSelectedFilters(newFilters);
        onFilterChange(newFilters);
    };

    const handleReset = () => {
        const resetFilters = { dimensions: [], area: [] };
        setSelectedFilters(resetFilters);
        onFilterChange(resetFilters);
    };

    return (
        <div className="bg-card p-6 rounded-lg shadow-sm sticky top-24">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters ({activeFilterCount})</h3>
                <Button variant="ghost" size="sm" onClick={handleReset}>Reset</Button>
            </div>
            <Accordion type="multiple" className="w-full" defaultValue={['item-0', 'item-1']}>
                {filterCategories.map((category, index) => (
                    <AccordionItem key={category.id} value={`item-${index}`} className={index === filterCategories.length - 1 ? "border-b-0" : ""}>
                        <AccordionTrigger className="py-3 text-sm text-accent">{category.name}</AccordionTrigger>
                        <AccordionContent>
                            {category.type === 'placeholder' ? (
                                <p>Placeholder for {category.name} filter options.</p>
                            ) : (
                                <ScrollArea className="h-48">
                                    <div className="space-y-3 pr-4">
                                        {category.id === 'dimensions' && dimensionOptions.map(option => (
                                            <div key={option} className="flex items-center gap-2">
                                                <Checkbox
                                                    id={`dim-${option}`}
                                                    checked={selectedFilters.dimensions.includes(option)}
                                                    onCheckedChange={() => handleCheckboxChange('dimensions', option)}
                                                />
                                                <Label htmlFor={`dim-${option}`} className="font-normal">{option}</Label>
                                            </div>
                                        ))}
                                        {category.id === 'area' && areaOptions.map(option => (
                                            <div key={option.value} className="flex items-center gap-2">
                                                <Checkbox
                                                    id={`area-${option.value}`}
                                                    checked={selectedFilters.area.includes(option.value)}
                                                    onCheckedChange={() => handleCheckboxChange('area', option.value)}
                                                />
                                                <Label htmlFor={`area-${option.value}`} className="font-normal">{option.label}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}