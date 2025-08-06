import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import Logo from "./white_logo";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="bg-secondary text-secondary-foreground border-t border-border/20 pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <Link href="/" className="flex items-center gap-2">
                               <Logo className="h-20 text-white" />
                            </Link>
                            <p className="mt-4 text-white/70 max-w-sm text-balance">
                                Transforming dreams into reality with transparent, technology-driven property solutions. Your trusted partner for building, buying, and selling properties.
                            </p>
                             <ul className="mt-6 space-y-3 text-white/90">
                                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +91 9214143300</li>
                                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> info@utkarshnextera.com</li>
                                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Mahmoorganj Varanasi UP 221010</li>
                            </ul>
                            <div className="flex items-center gap-3 mt-6">
                                {SOCIAL_LINKS.map(social => (
                                     <Link key={social.name} href={social.href} className="text-white/70 bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                                        <social.icon className="h-5 w-5" />
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="font-semibold text-white">Services</h3>
                                <ul className="mt-4 space-y-2">
                                    {FOOTER_LINKS.services.map(link => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-white/70 hover:text-primary transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Resources</h3>
                                 <ul className="mt-4 space-y-2">
                                    {FOOTER_LINKS.resources.map(link => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-white/70 hover:text-primary transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Company</h3>
                                 <ul className="mt-4 space-y-2">
                                    {FOOTER_LINKS.company.map(link => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-white/70 hover:text-primary transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Support</h3>
                                 <ul className="mt-4 space-y-2">
                                    {FOOTER_LINKS.support.map(link => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-white/70 hover:text-primary transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
                        <p className="text-sm text-white/70 text-center md:text-left">
                            &copy; {new Date().getFullYear()} Utkarsh Next Era Property. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
                            {FOOTER_LINKS.legal.map(link => (
                                 <Link key={link.label} href={link.href} className="text-sm text-white/70 hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
