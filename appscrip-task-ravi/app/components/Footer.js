'use client';

import { useState } from 'react';
import styles from '../styles/Footer.module.css';

const FOOTER_SECTIONS = [
  {
    id: 'mettaMuse',
    title: 'mettā muse',
    links: ['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'],
  },
  {
    id: 'quickLinks',
    title: 'QUICK LINKS',
    links: [
      'Orders & Shipping',
      'Join/Login as a Seller',
      'Payment & Pricing',
      'Return & Refunds',
      'FAQs',
      'Privacy Policy',
      'Terms & Conditions',
    ],
  },
  {
    id: 'followUs',
    title: 'FOLLOW US',
    type: 'social',
  },
  {
    id: 'accepts',
    title: 'mettā muse ACCEPTS',
    type: 'payments',
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Top footer */}
      <div className={styles.footerTop}>
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
          <p className={styles.newsletterText}>Sign up for updates from mettā muse.</p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              aria-label="Email address for newsletter"
            />
            <button type="submit" className={styles.subscribeBtn}>SUBSCRIBE</button>
          </form>
        </div>

        {/* Contact & Currency */}
        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>CONTACT US</h3>
          <p className={styles.contactPhone}>+44 221 133 5360</p>
          <a href="mailto:customercare@mettamuse.com" className={styles.contactEmail}>
            customercare@mettamuse.com
          </a>

          <h3 className={styles.currencyTitle}>CURRENCY</h3>
          <div className={styles.currencySelector}>
            <span className={styles.currencyFlag}>🇺🇸</span>
            <span className={styles.currencyCode}>• USD</span>
          </div>
          <p className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <div className={styles.footerDivider} />

      {/* Bottom footer links */}
      <div className={styles.footerBottom}>
        {/* Brand + links columns */}
        <div className={styles.footerColumns}>

          {/* metta muse column */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>mettā muse</h3>
            <ul className={styles.colLinks}>
              {['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'].map((link) => (
                <li key={link}><a href="#" className={styles.colLink}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>QUICK LINKS</h3>
            <ul className={styles.colLinks}>
              {['Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}><a href="#" className={styles.colLink}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Follow Us column */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>FOLLOW US</h3>
            <div className={styles.socialLinks}>
              {/* Instagram */}
              <a href="#" aria-label="Follow us on Instagram" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="Follow us on LinkedIn" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>

            <h3 className={`${styles.colTitle} ${styles.acceptsTitle}`}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              {/* Google Pay */}
              <div className={styles.paymentIcon} title="Google Pay">
                <svg width="36" height="22" viewBox="0 0 50 30" fill="none">
                  <rect width="50" height="30" rx="4" fill="#fff" stroke="#e0e0e0"/>
                  <text x="25" y="20" textAnchor="middle" fontSize="9" fontFamily="Work Sans, sans-serif" fontWeight="600" fill="#333">GPay</text>
                </svg>
              </div>
              {/* Mastercard */}
              <div className={styles.paymentIcon} title="Mastercard">
                <svg width="36" height="22" viewBox="0 0 50 30">
                  <rect width="50" height="30" rx="4" fill="#fff" stroke="#e0e0e0"/>
                  <circle cx="18" cy="15" r="9" fill="#EB001B"/>
                  <circle cx="32" cy="15" r="9" fill="#F79E1B"/>
                  <path d="M25 8.5a9 9 0 0 1 0 13 9 9 0 0 1 0-13z" fill="#FF5F00"/>
                </svg>
              </div>
              {/* PayPal */}
              <div className={styles.paymentIcon} title="PayPal">
                <svg width="36" height="22" viewBox="0 0 50 30" fill="none">
                  <rect width="50" height="30" rx="4" fill="#fff" stroke="#e0e0e0"/>
                  <text x="25" y="20" textAnchor="middle" fontSize="8" fontFamily="Work Sans, sans-serif" fontWeight="700" fill="#003087">Pay</text>
                </svg>
              </div>
              {/* Amex */}
              <div className={styles.paymentIcon} title="American Express">
                <svg width="36" height="22" viewBox="0 0 50 30" fill="none">
                  <rect width="50" height="30" rx="4" fill="#007BC1"/>
                  <text x="25" y="20" textAnchor="middle" fontSize="7" fontFamily="Work Sans, sans-serif" fontWeight="700" fill="#fff">AMEX</text>
                </svg>
              </div>
              {/* Apple Pay */}
              <div className={styles.paymentIcon} title="Apple Pay">
                <svg width="36" height="22" viewBox="0 0 50 30" fill="none">
                  <rect width="50" height="30" rx="4" fill="#000"/>
                  <text x="25" y="20" textAnchor="middle" fontSize="7" fontFamily="Work Sans, sans-serif" fill="#fff">Pay</text>
                </svg>
              </div>
              {/* Diners */}
              <div className={styles.paymentIcon} title="Diners Club">
                <svg width="36" height="22" viewBox="0 0 50 30" fill="none">
                  <rect width="50" height="30" rx="4" fill="#fff" stroke="#e0e0e0"/>
                  <circle cx="25" cy="15" r="9" fill="none" stroke="#004A97" strokeWidth="1.5"/>
                  <line x1="25" y1="6" x2="25" y2="24" stroke="#004A97" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile accordion sections */}
        <div className={styles.mobileAccordion}>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id} className={styles.accordionSection}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection(section.id)}
                aria-expanded={!!expandedSections[section.id]}
              >
                <span>{section.title}</span>
                <svg
                  className={`${styles.accordionChevron} ${expandedSections[section.id] ? styles.accordionChevronOpen : ''}`}
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {expandedSections[section.id] && (
                <div className={styles.accordionContent}>
                  {section.type === 'social' && (
                    <div className={styles.socialLinks}>
                      <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/>
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                      </a>
                    </div>
                  )}
                  {section.type === 'payments' && (
                    <div className={styles.paymentIcons}>
                      {['GPay', 'MC', 'PP', 'AMEX', 'APay', 'Diners'].map((p) => (
                        <div key={p} className={styles.paymentIcon}>{p}</div>
                      ))}
                    </div>
                  )}
                  {section.links && (
                    <ul className={styles.accordionLinks}>
                      {section.links.map((link) => (
                        <li key={link}><a href="#" className={styles.accordionLink}>{link}</a></li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <div className={styles.accordionDivider} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footerDivider} />

      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
