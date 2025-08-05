"use client";

import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CITIES_COVERED } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number."}),
  propertyType: z.string().min(1, { message: "Please select a property type."}),
  city: z.string().min(1, { message: "Please select a city." }),
  expectedPrice: z.string().min(3, { message: "Please enter an expected price." }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function SellPropertyForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      propertyType: "",
      city: "",
      expectedPrice: "",
      message: "",
    },
  });

  const { formState: { isSubmitting } } = form;

  async function onSubmit(values: FormData) {
    // Simulate a brief loading state
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Format the message for WhatsApp
    const whatsappMessage = `*Property Listing Request*

*Name:* ${values.name}
*Phone:* +91 ${values.phone}
*Property Type:* ${values.propertyType.charAt(0).toUpperCase() + values.propertyType.slice(1).replace('-', ' ')}
*City:* ${values.city}
*Expected Price:* ₹${values.expectedPrice}${values.message ? `

*Additional Information:*
${values.message}` : ''}

---
I'm interested in listing my property. Please contact me for further details.`;

    // Create WhatsApp URL with pre-filled message
    const whatsappNumber = "919214143300"; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Show success toast
    toast({
      title: "Redirecting to WhatsApp!",
      description: "You're being redirected to WhatsApp with your property details.",
    });
    
    // Reset form after submission
    form.reset();
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>List Your Property</CardTitle>
        <CardDescription>Provide your property details below and we'll take care of the rest.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                          <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                          <span className="border border-r-0 border-input bg-background p-2 rounded-l-md text-sm text-muted-foreground h-10 flex items-center">🇮🇳 +91</span>
                          <Input type="tel" placeholder="Mobile Number" {...field} className="rounded-l-none" />
                      </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="plot">Plot</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="independent-house">Independent House</SelectItem>
                        <SelectItem value="builder-floor">Builder Floor</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                        <FormLabel>City</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Select a city" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {CITIES_COVERED.map(city => (
                                <SelectItem key={city} value={city}>{city}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expectedPrice"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Expected Price (in INR)</FormLabel>
                      <FormControl>
                          <Input placeholder="e.g., 50,00,000" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us more about your property, e.g., square footage, key features, etc." rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send to WhatsApp
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}