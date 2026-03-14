import './styles/globals.css';

export const metadata = {
  title: 'Discover Our Products | Metta Muse',
  description:
    'Explore our curated collection of handcrafted bags, accessories, and lifestyle products. Shop sustainable, artisan-made goods at Metta Muse.',
  keywords: 'handcrafted bags, sustainable fashion, artisan products, metta muse, recycled backpack',
  openGraph: {
    title: 'Discover Our Products | Metta Muse',
    description:
      'Explore our curated collection of handcrafted bags, accessories, and lifestyle products.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Discover Our Products',
    description:
      'Curated collection of handcrafted bags, accessories, and lifestyle products at Metta Muse.',
    url: 'https://appscrip-task-ravi.netlify.app/',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: 'Shop', item: '/shop' },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
