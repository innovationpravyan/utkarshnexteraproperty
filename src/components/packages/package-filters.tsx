'use client';

import { CITIES_COVERED, PackageType } from "@/lib/constants";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface PackageFiltersProps {
    location: string;
    setLocation: (location: string) => void;
    type: PackageType;
    setType: (type: PackageType) => void;
}

const packageTypes: { id: PackageType; label: string; }[] = [
    { id: "Homes", label: "Homes" },
    { id: "Luxury Homes", label: "Luxury Homes" },
];

export default function PackageFilters({ location, setLocation, type, setType }: PackageFiltersProps) {
    const getStartingPrice = (pkgType: PackageType) => {
        if (pkgType === 'Homes') return 1850;
        if (pkgType === 'Luxury Homes') return 3810;
        return 0;
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 my-8">
            <div className="flex items-center gap-2 w-full md:w-auto">
                <Label htmlFor="location-select" className="font-semibold whitespace-nowrap">Location:</Label>
                <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="location-select" className="w-full md:w-[180px]">
                        <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                        {CITIES_COVERED.map(city => (
                            <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 md:mt-0">
                <Label className="font-semibold">Type:</Label>
                <RadioGroup value={type} onValueChange={(value) => setType(value as PackageType)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {packageTypes.map(pkgType => (
                        <div key={pkgType.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={pkgType.id} id={pkgType.id} />
                            <Label htmlFor={pkgType.id} className="cursor-pointer">
                                {pkgType.label} <span className="text-xs text-muted-foreground block sm:inline">STARTS AT ₹{getStartingPrice(pkgType.id)} PER SQFT</span>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
}
