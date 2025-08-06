import Image from "next/image";
import ContactForm from "@/components/contact/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Utkarsh Next Era',
  description: "Get in touch with Utkarsh Next Era for your construction needs. Call us, email us, or visit our office. We're here to help build your dream project.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
        </div>

        <div className="grid lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
                <ContactForm />
            </div>
            <div className="lg:col-span-2 mt-12 lg:mt-0">
                <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-headline font-semibold">Get in Touch</h3>
                    <p className="mt-2 text-muted-foreground text-balance">Find us at our office or drop us a line through email or phone.</p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Our Office</h4>
                                <p className="text-muted-foreground">Mahmoorganj Varanasi UP 221010</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Email Us</h4>
                                <p className="text-muted-foreground">info@utkarshnextera.com</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Call Us</h4>
                                <p className="text-muted-foreground">(91) 92141-43300</p>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-8 relative h-64 w-full rounded-lg overflow-hidden">
                        <Image
                            src="/contact_us/generate a contact u.png"
                            alt="Map to utkarsh next era office"
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint="office building map"
                        />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
