import type { Metadata } from 'next';
import FloorPlansClientPage from './floor-plans-client';

export const metadata: Metadata = {
  title: 'Custom Floor Plans for Indian Homes',
  description: 'Explore a wide range of customizable floor plans for your dream home. Filter by plot size, area, and more to find the perfect layout for your needs in India.',
  alternates: {
    canonical: '/floor-plans',
  },
};

export default function FloorPlansPage() {
  return <FloorPlansClientPage />;
}
