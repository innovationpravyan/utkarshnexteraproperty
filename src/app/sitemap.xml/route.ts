
import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.propertypro.in';

export async function GET() {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1.0 },
    { url: `${siteUrl}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/packages`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/floor-plans`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/buy-property`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${siteUrl}/sell-property`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/cost-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/how-it-works`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/more`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/careers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/smart-faq`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/compare-packages`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified?.toISOString()}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
