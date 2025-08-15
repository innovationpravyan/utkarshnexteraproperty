
// app/layout.tsx or equivalent

import type {Metadata} from 'next';
import {cn} from "@/lib/utils";
import './globals.css';
import {Toaster} from "@/components/ui/toaster"
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import {CityProvider} from '@/context/city-context';
import BottomNav from '@/components/common/bottom-nav';
import WhatsAppFab from '@/components/common/whatsapp-fab';
import PageLoader from '@/components/common/page-loader';
import RunningParticles from '@/components/common/running-particles';
import VirtualAssistantFab from '@/components/common/virtual-assistant-fab';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.propertypro.in';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'PropertyPro - Your Trusted Partner in Construction & Real Estate',
        template: '%s | PropertyPro',
    },
    description: 'PropertyPro offers top-tier construction, renovation, and interior design services. Your one-stop solution for building, buying, or selling property.',
    keywords: ['construction company', 'home builders', 'renovation', 'interior design', 'property development', 'real estate India'],
    openGraph: {
        title: 'PropertyPro - Your Trusted Partner in Construction & Real Estate',
        description: 'High-quality construction, renovation, and design services. Get a free quote today!',
        url: siteUrl,
        siteName: 'PropertyPro',
        images: [
            {
                url: '/og-image.png', // Ensure you have this image in your public folder
                width: 1200,
                height: 630,
                alt: 'PropertyPro Hero Image',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PropertyPro - Top Construction & Renovation Company',
        description: 'Build your dream home with PropertyPro, your trusted partner in construction and real estate.',
        images: ['/og-image.png'], // Ensure you have this image in your public folder
    },
    alternates: {
        canonical: siteUrl,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
        { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PropertyPro",
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.ico`, // Adjust if you have a different logo URL
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-92141-43300",
        "contactType": "Customer Service"
    },
    "sameAs": [
        "https://instagram.com/propertypro" // Add your social media links here
    ]
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Poppins:wght@400;600;700&display=swap"
                rel="stylesheet"/>
        </head>
        <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <CityProvider>
            <PageLoader/>
            <div className="relative flex min-h-dvh flex-col bg-background">
                <RunningParticles/>
                <Header/>
                <main className="flex-1 pb-24 md:pb-0">
                    {children}
                </main>
                <Footer/>
                <BottomNav/>
                <WhatsAppFab/>
                <VirtualAssistantFab/>
            </div>
            <Toaster/>
        </CityProvider>
        </body>
        </html>
    );
}
