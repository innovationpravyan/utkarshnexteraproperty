const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarshnexteraproperty.vercel.app';

export default function sitemap(): ({ url: string; lastModified: Date; changeFrequency: string; priority: number })[] {
  return [
      {url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1.0},
      {url: `${siteUrl}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8},
      {url: `${siteUrl}/packages`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8},
      {url: `${siteUrl}/floor-plans`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7},
      {url: `${siteUrl}/sell-property`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6},
      {url: `${siteUrl}/cost-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7},
      {url: `${siteUrl}/how-it-works`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6},
      {url: `${siteUrl}/more`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5},
      {url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7},
      {url: `${siteUrl}/careers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6},
      {url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5},
      {url: `${siteUrl}/smart-faq`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5},
      {url: `${siteUrl}/compare-packages`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6},
    ];
}
