'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product, priority = false }) {
  const [wishlisted, setWishlisted] = useState(false);

  // Create SEO-friendly image name from product title
  const seoImageName = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const isOutOfStock = product.rating?.count < 10;
  const isNew = product.id <= 3;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {isNew && <span className={styles.badgeNew}>NEW PRODUCT</span>}
        {isOutOfStock && <span className={styles.badgeOutOfStock}>OUT OF STOCK</span>}

        <Image
          src={product.image}
          alt={`${product.title} - ${product.category}`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className={styles.productImage}
          style={{ objectFit: 'contain' }}
          title={seoImageName}
          priority={priority}
          priority={product.id <= 3}
        />

        <button
          className={`${styles.wishlistBtn} ${wishlisted ? styles.wishlisted : ''}`}
          onClick={() => setWishlisted(!wishlisted)}
          aria-label={wishlisted ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={wishlisted ? '#e75480' : 'none'}
            stroke={wishlisted ? '#e75480' : '#999'}
            strokeWidth="1.5"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className={styles.cardInfo}>
        <h2 className={styles.productName}>
          {product.title.length > 28 ? product.title.substring(0, 28) + '...' : product.title}
        </h2>
        <p className={styles.productPrice}>
          <a href="#" className={styles.signInLink}>Sign In</a>
          {' '}or{' '}
          <a href="#" className={styles.signInLink}>Create an account</a>
          {' '}to see pricing
        </p>
      </div>
    </article>
  );
}
