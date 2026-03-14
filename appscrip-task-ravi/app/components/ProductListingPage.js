'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from './Header';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';
import Footer from './Footer';
import styles from '../styles/ProductListingPage.module.css';

const SORT_OPTIONS = [
  { value: 'recommended', label: 'RECOMMENDED' },
  { value: 'newest', label: 'NEWEST FIRST' },
  { value: 'popular', label: 'POPULAR' },
  { value: 'price_high', label: 'PRICE : HIGH TO LOW' },
  { value: 'price_low', label: 'PRICE : LOW TO HIGH' },
];

export default function ProductListingPage({ initialProducts }) {
  const [filterVisible, setFilterVisible] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState('recommended');
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);

  // If SSR returned empty, fetch client-side as fallback
  useEffect(() => {
    if (initialProducts.length === 0) {
      setLoading(true);
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
          }
        })
        .catch((err) => console.error('Client fetch failed:', err))
        .finally(() => setLoading(false));
    }
  }, [initialProducts]);

  const sortedProducts = useMemo(() => {
    let prods = [...products];
    switch (sortValue) {
      case 'price_high':
        prods.sort((a, b) => b.price - a.price);
        break;
      case 'price_low':
        prods.sort((a, b) => a.price - b.price);
        break;
      case 'newest':
        prods.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        prods.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      default:
        break;
    }
    return prods;
  }, [products, sortValue]);

  const handleSortSelect = (value) => {
    setSortValue(value);
    setSortOpen(false);
  };

  const selectedSortLabel = SORT_OPTIONS.find((o) => o.value === sortValue)?.label;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.heroDesc}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor
            integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <span className={styles.itemCount}>
              {products.length > 0 ? `${products.length * 170} ITEMS` : '0 ITEMS'}
            </span>
            <button
              className={styles.filterToggle}
              onClick={() => setFilterVisible(!filterVisible)}
              aria-label={filterVisible ? 'Hide filter panel' : 'Show filter panel'}
            >
              {filterVisible ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  HIDE FILTER
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  SHOW FILTER
                </>
              )}
            </button>
          </div>

          <div className={styles.sortWrapper}>
            <button
              className={styles.sortBtn}
              onClick={() => setSortOpen(!sortOpen)}
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
            >
              {selectedSortLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {sortOpen && (
              <>
                <div className={styles.sortBackdrop} onClick={() => setSortOpen(false)} />
                <ul className={styles.sortDropdown} role="listbox" aria-label="Sort options">
                  {SORT_OPTIONS.map((option) => (
                    <li
                      key={option.value}
                      role="option"
                      aria-selected={sortValue === option.value}
                      className={`${styles.sortOption} ${sortValue === option.value ? styles.sortOptionActive : ''}`}
                      onClick={() => handleSortSelect(option.value)}
                    >
                      {sortValue === option.value && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.checkIcon}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {option.label}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className={styles.contentArea}>
          {filterVisible && <FilterSidebar onFilterChange={setFilters} />}

          {loading ? (
            <div className={styles.loadingGrid}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.skeletonCard}>
                  <div className={styles.skeletonImg} />
                  <div className={styles.skeletonText} />
                  <div className={styles.skeletonTextSm} />
                </div>
              ))}
            </div>
          ) : (
            <section
              className={`${styles.productGrid} ${!filterVisible ? styles.productGridFull : ''}`}
              aria-label="Product listing"
            >
              {sortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index < 3} />
              ))}
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}