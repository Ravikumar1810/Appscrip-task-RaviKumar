import ProductListingPage from './components/ProductListingPage';

export const dynamic = 'force-dynamic';

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error('No data');
    return data;
  } catch (error) {
    console.error('API Error:', error.message);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  return <ProductListingPage initialProducts={products} />;
}