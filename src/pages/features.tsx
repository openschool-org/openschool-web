import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ArrowRight, Check, Layers, Boxes, ListChecks} from 'lucide-react';
import DynamicIcon from '@site/src/components/DynamicIcon';
import Reveal from '@site/src/components/Reveal';
import SeoHead from '@site/src/components/SeoHead';
import features, {type FeatureGroup} from '@site/src/data/generated/features';
import styles from './features.module.css';

const layerMeta: Record<FeatureGroup, {order: number; eyebrow: string; title: string; desc: string; accent: string}> = {
  foundation: {
    order: 1,
    eyebrow: 'Layer 01 · Foundation',
    title: 'Platform Foundation',
    desc: 'The base every other module sits on - the school profile, ThunderID-backed identity, the in-app leadership hierarchy, and the audit log.',
    accent: '#0a5bf2',
  },
  structure: {
    order: 2,
    eyebrow: 'Layer 02 · Academic Structure',
    title: 'Academic Structure',
    desc: 'How a school year is organized before a single student is enrolled - years, the full Grade 1-13 flow, streams, mediums, and curriculum.',
    accent: '#0f766e',
  },
  people: {
    order: 3,
    eyebrow: 'Layer 03 · People & Classes',
    title: 'People & Classes',
    desc: 'Where the academic structure meets real people - students, teachers, guardians, non-academic staff, houses, and the prefect board.',
    accent: '#6d28d9',
  },
  operations: {
    order: 4,
    eyebrow: 'Layer 04 · Daily Operations',
    title: 'Daily Operations',
    desc: 'What runs every school day, once the structure and people are in place - attendance, records, promotion, timetables, notifications, and reports.',
    accent: '#b45309',
  },
};

const layers = Object.entries(layerMeta)
  .map(([group, meta]) => ({
    group: group as FeatureGroup,
    ...meta,
    modules: features.filter((f) => f.group === group),
  }))
  .sort((a, b) => a.order - b.order);

const totalCapabilities = features.reduce((sum, f) => sum + f.items.length, 0);

const stats = [
  {icon: Layers, value: layers.length, label: 'platform layers'},
  {icon: Boxes, value: features.length, label: 'modules'},
  {icon: ListChecks, value: totalCapabilities, label: 'individual capabilities'},
];

export default function Features(): React.ReactElement {
  const introPhotoSrc = useBaseUrl('img/school/school4.webp');

  const description = `${features.length} modules across ${layers.length} layers, from the school profile up to daily operations - academic years, classes, students, guardians, attendance, timetables, and more.`;

  return (
    <Layout title="Features & Modules" description={description}>
      <SeoHead
        path="/features"
        title={`Features & Modules - ${features.length} Capabilities Across ${layers.length} Layers`}
        description={description}
      />
      <header className="os-page-header">
        <div className="os-container">
          <div className={styles.introGrid}>
            <div className={styles.introInner}>
              <h1 className={`os-heading ${styles.title}`}>
                {features.length} modules. {layers.length} layers. One school system.
              </h1>
              <p className={`os-lead ${styles.lead}`}>
                OpenSchool isn&apos;t {features.length} disconnected features - it&apos;s four
                layers that build on one another, and every module below shows exactly what it
                does: a secured foundation, the academic structure for a year, the people inside
                it, and the daily operations that run on top.
              </p>
              <div className={styles.jumpNav} aria-label="Jump to a layer">
                {layers.map((layer) => (
                  <a
                    key={layer.group}
                    href={`#${layer.group}`}
                    className={styles.jumpLink}
                    style={{'--layer-accent': layer.accent} as React.CSSProperties}>
                    <span className={styles.jumpDot} aria-hidden="true" />
                    {layer.title}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.introPhotoWrap}>
              <img
                src={introPhotoSrc}
                alt="A teacher and students in a classroom in Sri Lanka"
                className={styles.introPhoto}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <div className={styles.statRow}>
            {stats.map((s) => (
              <div key={s.label} className={`os-card ${styles.statCard}`}>
                <s.icon className={styles.statIcon} size={22} strokeWidth={1.75} />
                <div>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="os-section os-section--tight">
        <div className={styles.layerContainer}>
          <div className={styles.layerStack}>
            {layers.map((layer, i) => (
              <div key={layer.group} className={styles.layerRow}>
                <Reveal>
                  <div
                    id={layer.group}
                    className={`os-panel ${styles.layerPanel}`}
                    style={{'--layer-accent': layer.accent} as React.CSSProperties}>
                    <div className={styles.layerHeader}>
                      <span className="os-eyebrow">{layer.eyebrow}</span>
                      <h2 className={styles.layerTitle}>{layer.title}</h2>
                      <p className={styles.layerDesc}>{layer.desc}</p>
                    </div>
                    <div className={styles.moduleGrid}>
                      {layer.modules.map((f) => (
                        <div key={f.slug} className={`os-card ${styles.featureCard}`}>
                          <div className={styles.featureHead}>
                            <div className={styles.featureIcon}>
                              <DynamicIcon name={f.icon} size={22} strokeWidth={1.75} />
                            </div>
                            <h3 className={styles.featureTitle}>{f.title}</h3>
                          </div>
                          <p className={styles.featureSummary}>{f.summary}</p>
                          <ul className={styles.featureList}>
                            {f.items.map((item) => (
                              <li key={item}>
                                <Check className={styles.checkMark} size={15} strokeWidth={2.5} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
                {i < layers.length - 1 && <div className={styles.layerConnector} aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="os-section">
        <div className="os-container">
          <div className={`os-panel ${styles.ctaBanner}`}>
            <div>
              <h2 className="os-heading" style={{marginBottom: '0.5rem'}}>
                Ready to see it running?
              </h2>
              <p className={styles.ctaText}>Stand up a fresh instance with the Setup Walkthrough.</p>
            </div>
            <Link className="os-btn os-btn--primary" to="/docs/setup">
              Setup Walkthrough
              <ArrowRight size={17} strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
