
"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PACKAGES_DATA, CITIES_COVERED } from "@/lib/constants";
import { useCity } from "@/context/city-context";

const formSchema = z.object({
  city: z.string().min(1, { message: "Please select a city." }),
  package: z.string().min(1, { message: "Please select a package." }),
  area: z.coerce.number().min(10, { message: "Must be at least 10 sq ft." }),
});

type FormData = z.infer<typeof formSchema>;

export default function CalculatorForm() {
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const { selectedCity, setSelectedCity } = useCity();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: selectedCity,
      package: "",
      area: 1000,
    },
  });

  const { watch, setValue } = form;
  const currentCity = watch('city');

  useEffect(() => {
    setValue('city', selectedCity);
    setValue('package', ''); // Reset package when city changes
  }, [selectedCity, setValue]);
  
  useEffect(() => {
    // When the form's city value changes (e.g., user interaction), update the global context
    if (currentCity !== selectedCity) {
      setSelectedCity(currentCity);
    }
  }, [currentCity, selectedCity, setSelectedCity]);

  const availablePackages = PACKAGES_DATA[currentCity]?.["Homes"] || [];

  function onSubmit(values: FormData) {
    const selectedPackage = availablePackages.find(p => p.name === values.package);
    if (!selectedPackage) {
      console.error("Selected package not found");
      setEstimatedCost(null);
      return;
    }
    const cost = selectedPackage.price * values.area;
    setEstimatedCost(cost);
  }

  const { formState: { isSubmitting } } = form;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Project Details</CardTitle>
        <CardDescription>Fill in the details below to get your estimate.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
               <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select City</FormLabel>
                     <Select onValueChange={(value) => {
                         field.onChange(value);
                         setValue('package', ''); // Reset package on city change
                      }} 
                      value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CITIES_COVERED.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Package</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} disabled={!currentCity}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availablePackages.map((pkg) => (
                          <SelectItem key={pkg.name} value={pkg.name}>
                            {pkg.name} (₹{pkg.price}/sqft)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plot Area (in square feet)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 1500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
               {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Calculate Estimate
            </Button>
          </form>
        </Form>
      </CardContent>
      {estimatedCost !== null && (
        <>
        <Separator className="my-6" />
        <CardFooter>
            <div className="w-full text-center p-6 bg-primary/10 rounded-lg">
                <p className="text-lg text-muted-foreground">Estimated Construction Cost</p>
                <p className="text-4xl font-bold text-primary mt-2">
                    ₹{estimatedCost.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-muted-foreground mt-2">*This is an estimate for the selected package. Final cost may vary.</p>
            </div>
        </CardFooter>
        </>
      )}
    </Card>
  );
}
