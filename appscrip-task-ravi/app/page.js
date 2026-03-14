import ProductListingPage from './components/ProductListingPage';

async function getProducts() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Empty response from API');
    }

    return data;
  } catch (error) {
    console.error('FakeStore API failed:', error.message);
    // Fallback static products so page never shows empty
    return getFallbackProducts();
  }
}

function getFallbackProducts() {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: 'PPXOC Milkyway Dress In...',
    price: 29.99,
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 4.2, count: 120 },
  }));
}

export default async function Home() {
  const products = await getProducts();
  return <ProductListingPage initialProducts={products} />;
}