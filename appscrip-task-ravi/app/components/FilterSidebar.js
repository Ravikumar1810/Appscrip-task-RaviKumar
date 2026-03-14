'use client';

import { useState } from 'react';
import styles from '../styles/FilterSidebar.module.css';

const FILTER_SECTIONS = [
  {
    id: 'customizable',
    label: 'CUSTOMIZABLE',
    type: 'checkbox',
    options: null,
  },
  {
    id: 'idealFor',
    label: 'IDEAL FOR',
    type: 'radio',
    defaultValue: 'All',
    options: ['All', 'Men', 'Women', 'Baby & Kids'],
  },
  {
    id: 'occasion',
    label: 'OCCASION',
    type: 'radio',
    defaultValue: 'All',
    options: ['All', 'Casual', 'Formal', 'Party', 'Sport'],
  },
  {
    id: 'work',
    label: 'WORK',
    type: 'radio',
    defaultValue: 'All',
    options: ['All', 'Office', 'Outdoor', 'Home'],
  },
  {
    id: 'fabric',
    label: 'FABRIC',
    type: 'radio',
    defaultValue: 'All',
    options: ['All', 'Cotton', 'Linen', 'Polyester', 'Leather'],
  },
  {
    id: 'segment',
    label: 'SEGMENT',
    type: 'radio',
    defaultValue: 'All',
    options: ['All', 'Luxury', 'Premium', 'Budget'],
  },
  {
    id: 'suitableFor',
    label: 'SUITABLE FOR',
    type: 'radio',
    defaultValue: 'All',
    options: ['All', 'Daily Use', 'Travel', 'Gifting'],
  },
  {
    id: 'rawMaterials',
    label: 'RAW MATERIALS',
    type: 'radio',
    defaultValue: 'All',
    options: ['All', 'Organic', 'Recycled', 'Natural'],
  },
  {
    id: 'pattern',
    label: 'PATTERN',
    type: 'radio',
    defaultValue: 'All',
    options: ['All', 'Solid', 'Striped', 'Printed', 'Textured'],
  },
];

export default function FilterSidebar({ onFilterChange }) {
  const [expandedSections, setExpandedSections] = useState({});
  const [filterValues, setFilterValues] = useState({
    customizable: false,
    idealFor: 'All',
    occasion: 'All',
    work: 'All',
    fabric: 'All',
    segment: 'All',
    suitableFor: 'All',
    rawMaterials: 'All',
    pattern: 'All',
  });

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRadioChange = (sectionId, value) => {
    const updated = { ...filterValues, [sectionId]: value };
    setFilterValues(updated);
    onFilterChange && onFilterChange(updated);
  };

  const handleCheckbox = (e) => {
    const updated = { ...filterValues, customizable: e.target.checked };
    setFilterValues(updated);
    onFilterChange && onFilterChange(updated);
  };

  return (
    <aside className={styles.sidebar} aria-label="Product filters">
      {FILTER_SECTIONS.map((section) => (
        <div key={section.id} className={styles.filterSection}>
          {section.type === 'checkbox' ? (
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={filterValues.customizable}
                onChange={handleCheckbox}
                className={styles.checkbox}
              />
              <span>{section.label}</span>
            </label>
          ) : (
            <>
              <button
                className={styles.sectionHeader}
                onClick={() => toggleSection(section.id)}
                aria-expanded={!!expandedSections[section.id]}
              >
                <span className={styles.sectionTitle}>{section.label}</span>
                <svg
                  className={`${styles.chevron} ${expandedSections[section.id] ? styles.chevronOpen : ''}`}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className={styles.sectionValue}>
                {filterValues[section.id]}
              </div>

              {expandedSections[section.id] && (
                <div className={styles.optionsList}>
                  <button
                    className={styles.unselectAll}
                    onClick={() => handleRadioChange(section.id, 'All')}
                  >
                    Unselect All
                  </button>
                  {section.options.map((option) => (
                    <label key={option} className={styles.optionLabel}>
                      <input
                        type="checkbox"
                        checked={filterValues[section.id] === option || (option === 'All' && filterValues[section.id] === 'All')}
                        onChange={() => handleRadioChange(section.id, option)}
                        className={styles.optionCheckbox}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}
              <div className={styles.divider} />
            </>
          )}
        </div>
      ))}
    </aside>
  );
}
