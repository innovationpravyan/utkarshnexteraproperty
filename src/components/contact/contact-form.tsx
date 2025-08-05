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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number."}),
  location: z.string().min(3, { message: "Location is required."}),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }).optional().or(z.literal("")),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).optional().or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  simple?: boolean;
}

export default function ContactForm({ simple = false }: ContactFormProps) {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { formState: { isSubmitting } } = form;

  async function onSubmit(values: FormData) {
     await new Promise(resolve => setTimeout(resolve, 500));
    
    const whatsappMessage = `*New Contact Inquiry*

*Name:* ${values.name}
*Phone:* +91 ${values.phone}
*Email:* ${values.email || 'Not provided'}
*Location:* ${values.location}
*Subject:* ${values.subject || 'General Inquiry'}

*Message:*
${values.message || 'No message provided.'}

---
This message was sent from the website contact form.`;

    const whatsappNumber = "919214143300";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    toast({
      title: "Redirecting to WhatsApp!",
      description: "Please send the pre-filled message in WhatsApp.",
    });

    form.reset();
  }

  if (simple) {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name*" {...field} />
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
                  <FormLabel className="sr-only">Phone</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                        <span className="border border-r-0 border-input bg-background p-2 rounded-l-md text-sm text-muted-foreground h-10 flex items-center">🇮🇳 +91</span>
                        <Input type="tel" placeholder="Mobile Number*" {...field} className="rounded-l-none" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Location of your Plot*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Book Free Consultation
          </Button>
          <p className="text-xs text-muted-foreground text-center text-balance">By submitting this form, I confirm that I have read and agreed to utkarsh next era's privacy policy</p>
        </form>
      </Form>
    )
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
        <CardDescription>Fill out the form and we will get back to you as soon as possible.</CardDescription>
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
                          <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                />
            </div>
             <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                          <span className="border border-r-0 border-input bg-background p-2 rounded-l-md text-sm text-muted-foreground h-10 flex items-center">🇮🇳 +91</span>
                          <Input type="tel" placeholder="Mobile Number*" {...field} className="rounded-l-none" />
                      </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                        <Input placeholder="Location of your Plot*" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Quote for a kitchen renovation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Please describe your project or question in detail." rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
