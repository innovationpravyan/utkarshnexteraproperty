import type {Metadata} from 'next';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import './globals.css';
import { CityProvider } from '@/context/city-context';
import BottomNav from '@/components/common/bottom-nav';
import WhatsAppFab from '@/components/common/whatsapp-fab';
import PageLoader from '@/components/common/page-loader';
import RunningParticles from '@/components/common/running-particles';
import VirtualAssistantFab from '@/components/common/virtual-assistant-fab';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshnexteraproperty.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Top Construction Company in India | Utkarsh Next Era',
    template: `%s | Utkarsh Next Era`,
  },
  description: 'Utkarsh Next Era offers top-tier construction, renovation, and interior design services in Bengaluru, Varanasi & Gurugram. Build your dream home with the best.',
  keywords: ['construction company', 'home builders', 'renovation services', 'interior design', 'property developer', 'Bengaluru', 'Varanasi', 'Gurugram', 'real estate India'],
  openGraph: {
    title: 'Utkarsh Next Era - Your Trusted Partner in Construction',
    description: 'Top-tier construction, renovation, and interior design services. Get a free estimate today!',
    url: siteUrl,
    siteName: 'Utkarsh Next Era',
    images: [
      {
        url: '/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Utkarsh Next Era Hero Image',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utkarsh Next Era - Top Construction & Renovation Company',
    description: 'Building dreams with excellence in Bengaluru, Varanasi, & Gurugram. Explore our projects and get a free quote.',
     images: [`${siteUrl}/og-image.png`], 
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
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Utkarsh Next Era",
  "url": "https://utkarshnexteraproperty.vercel.app",
  "logo": "https://utkarshnexteraproperty.vercel.app/logo/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-92141-43300",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://instagram.com/utkarshproperties"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&family=Inter:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <CityProvider>
          <PageLoader />
          <div className="relative flex min-h-dvh flex-col bg-background">
            <RunningParticles />
            <Header />
            <main className="flex-1 pb-24 md:pb-0">
              {children}
            </main>
            <Footer />
            <BottomNav />
            <WhatsAppFab />
            <VirtualAssistantFab />
          </div>
          <Toaster />
        </CityProvider>
      </body>
    </html>
  );
}
