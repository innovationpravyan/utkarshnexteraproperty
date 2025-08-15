import type { Metadata } from 'next';
import HowItWorksClientPage from './how-it-works-client';

export const metadata: Metadata = {
  title: 'Our Construction Process | How It Works | PropertyPro',
  description: 'Our streamlined process for home construction, from initial consultation and design to project execution and final handover. Learn about our transparent approach.',
  alternates: {
    canonical: '/how-it-works',
  },
};

export default function HowItWorksPage() {
    return <HowItWorksClientPage />;
}
