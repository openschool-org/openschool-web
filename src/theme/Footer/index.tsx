import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig, type MultiColumnFooter} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const VERTEX_LABS_URL = 'https://vertexlabs.team';

function Footer(): ReactNode {
  const {footer} = useThemeConfig();
  const vertexLabsLogo = useBaseUrl('img/brand/vertexLabs-white.webp');
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
              {logo && <img src={logoSrc} alt="" aria-hidden="true" className={styles.brandLogo} width={26} height={26} />}
              <span className={styles.brandName}>
                <span className={styles.brandNameOpen}>Open</span>
                <span className={styles.brandNameSchool}>School</span>
              </span>
            </Link>
            <p className={styles.brandTagline}>
              Digital infrastructure for Sri Lankan schools.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <div className={styles.columnTitle}>{col.title}</div>
              <ul className={styles.columnList}>
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      href={item.href}
                      className={styles.columnLink}
                      target={item.href ? '_blank' : undefined}
                      rel={item.href ? 'noopener noreferrer' : undefined}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomWrap}>
        <div className="os-container">
          <div className={styles.bottom}>
            <span className={styles.copyright}>{copyright}</span>
            <a
              className={styles.maintainedBy}
              href={VERTEX_LABS_URL}
              target="_blank"
              rel="noopener noreferrer">
              <span>Maintained by</span>
              <img src={vertexLabsLogo} alt="Vertex Labs" className={styles.maintainedByLogo} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
