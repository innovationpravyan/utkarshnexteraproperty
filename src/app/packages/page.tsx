import type { Metadata } from 'next';
import PackagesClientPage from './packages-client-page';

export const metadata: Metadata = {
  title: 'Construction Packages & Pricing',
  description: 'Discover transparent construction packages in Bengaluru, Varanasi, & Gurugram. Choose from Basic, Classic, and Premium to match your budget and dream home.',
  alternates: {
    canonical: '/packages',
  },
};

export default function PackagesPage() {
  return <PackagesClientPage />;
}
