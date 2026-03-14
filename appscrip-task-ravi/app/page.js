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
    return getFallbackProducts();
  }
}

function getFallbackProducts() {
  const images = [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_FMwebp_QL65_.jpg',
    'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  ];

  const titles = [
    'Recycled Backpack Premium Edition',
    'Milkyway Crossbody Bag',
    'Artisan Leather Tote',
    'Woven Shoulder Bag',
    'Classic Canvas Backpack',
    'Mini Clutch Bag',
    'Striped Zip Pouch',
    'Travel Duffel Bag',
  ];

  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: titles[i % titles.length],
    price: (19.99 + i * 5).toFixed(2) * 1,
    category: i % 2 === 0 ? "women's clothing" : "men's clothing",
    image: images[i % images.length],
    rating: { rate: 3.5 + (i % 3) * 0.5, count: 50 + i * 10 },
  }));
}

export default async function Home() {
  const products = await getProducts();
  return <ProductListingPage initialProducts={products} />;
}