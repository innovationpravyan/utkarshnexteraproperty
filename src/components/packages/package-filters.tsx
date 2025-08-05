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
    // A simple way to show starting price, you might want a more robust way to get this
    const getStartingPrice = (pkgType: PackageType) => {
        if (pkgType === 'Homes') return 1850;
        if (pkgType === 'Luxury Homes') return 3810;
        return 0;
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 my-8">
            <div className="flex items-center gap-2">
                <Label htmlFor="location-select" className="font-semibold">Location:</Label>
                <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="location-select" className="w-[180px]">
                        <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                        {CITIES_COVERED.map(city => (
                            <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                <Label className="font-semibold">Type:</Label>
                <RadioGroup value={type} onValueChange={(value) => setType(value as PackageType)} className="flex items-center gap-4">
                    {packageTypes.map(pkgType => (
                        <div key={pkgType.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={pkgType.id} id={pkgType.id} />
                            <Label htmlFor={pkgType.id} className="cursor-pointer">
                                {pkgType.label} <span className="text-xs text-muted-foreground">STARTS AT ₹{getStartingPrice(pkgType.id)} PER SQFT</span>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
}
