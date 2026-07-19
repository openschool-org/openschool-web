import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig, type MultiColumnFooter} from '@docusaurus/theme-common';
import styles from './styles.module.css';

function Footer(): ReactNode {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }

  const {links, logo, copyright} = footer as MultiColumnFooter;
  const columns = links ?? [];
  const logoSrc = useBaseUrl(logo?.src ?? '');

  return (
    <footer className={`footer footer--${footer.style}`}>
      <div className="os-container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandRow}>
              {logo && <img src={logoSrc} alt={logo.alt ?? ''} className={styles.brandLogo} width={88} height={41} />}
            </Link>
            <p className={styles.brandTagline}>
              Digital infrastructure for Sri Lankan schools — academic records, attendance, and
              guardians in one secure, API-first platform.
            </p>
            <a href="mailto:hello@openschool.lk" className={styles.brandEmail}>
              hello@openschool.lk
            </a>
          </div>

          <div className={styles.columns}>
            {columns.map((col) => (
              <div key={col.title} className={styles.column}>
                <div className={styles.columnTitle}>{col.title}</div>
                <ul className={styles.columnList}>
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} href={item.href} className={styles.columnLink}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>{copyright}</span>
          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
