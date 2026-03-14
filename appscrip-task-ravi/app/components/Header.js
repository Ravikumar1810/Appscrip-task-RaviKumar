'use client';

import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>

      {/* Main header */}
      <div className={styles.mainHeader}>
        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo left icon */}
        <div className={styles.logoIcon}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="13" stroke="black" strokeWidth="1.5"/>
            <rect x="18" y="1" width="13" height="13" stroke="black" strokeWidth="1.5"/>
            <rect x="1" y="18" width="13" height="13" stroke="black" strokeWidth="1.5"/>
            <rect x="18" y="18" width="13" height="13" stroke="black" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Logo text center */}
        <div className={styles.logoText}>LOGO</div>

        {/* Header icons right */}
        <div className={styles.headerIcons}>
          <button aria-label="Search" className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button aria-label="Wishlist" className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button aria-label="Cart" className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
          <button aria-label="Account" className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button className={styles.langBtn} aria-label="Language selector">
            ENG
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
        <ul className={styles.navList}>
          <li><a href="#" className={styles.navLink}>SHOP</a></li>
          <li><a href="#" className={styles.navLink}>SKILLS</a></li>
          <li><a href="#" className={styles.navLink}>STORIES</a></li>
          <li><a href="#" className={styles.navLink}>ABOUT</a></li>
          <li><a href="#" className={styles.navLink}>CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
}
