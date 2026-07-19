import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const LOGOS = [
  {key: 'typescript', label: 'TypeScript', src: 'img/tech/type-script.png'},
  {key: 'go', label: 'Go', src: 'img/tech/Go-Logo.png'},
  {key: 'swagger', label: 'Swagger / OpenAPI', src: 'img/tech/swagger-logo.png'},
  {key: 'json', label: 'JSON', src: 'img/tech/JSON_vector_logo.png'},
  {key: 'webhook', label: 'Webhooks', src: 'img/tech/webhook.png'},
];

// Repeated so the strip has enough items to loop seamlessly at any width.
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS];

function LogoChip({label, src}: {label: string; src: string}): React.ReactElement {
  const resolvedSrc = useBaseUrl(src);
  return (
    <span className={styles.chip} title={label}>
      <img src={resolvedSrc} alt={label} className={styles.logoImg} loading="lazy" />
    </span>
  );
}

export default function TechLogos(): React.ReactElement {
  return (
    <div className={styles.marqueeViewport} role="list" aria-label="Built on: TypeScript, Go, Swagger / OpenAPI, JSON, and Webhooks">
      <div className={styles.marqueeTrack} aria-hidden="true">
        {TRACK.map((item, i) => (
          <LogoChip key={`${item.key}-${i}`} label={item.label} src={item.src} />
        ))}
      </div>
    </div>
  );
}
