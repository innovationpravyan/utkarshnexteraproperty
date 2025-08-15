import type { Metadata } from 'next';
import PackagesClientPage from './packages-client-page';

export const metadata: Metadata = {
  title: 'Construction Packages & Pricing | PropertyPro',
  description: 'Discover transparent construction packages. Choose from a range of options to match your budget and build your dream home with us.',
  alternates: {
    canonical: '/packages',
  },
};

export default function PackagesPage() {
  return <PackagesClientPage />;
}
