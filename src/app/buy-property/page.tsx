import type { Metadata } from 'next';
import BuyPropertyClientPage from './buy-property-client';

// export const metadata: Metadata = {
//   title: 'Buy Property | Lands & Plots for Sale | PropertyPro',
//   description: 'Explore and buy from a wide range of lands, plots, and properties. Filter by location, budget, and type to find your perfect investment with PropertyPro.',
//   alternates: {
//     canonical: '/buy-property',
//   },
// };

export default function BuyPropertyPage() {
  return <BuyPropertyClientPage />;
}