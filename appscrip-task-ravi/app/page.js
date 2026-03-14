import ProductListingPage from './components/ProductListingPage';

// SSR - fetch products server side
async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return <ProductListingPage initialProducts={products} />;
}
