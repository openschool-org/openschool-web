import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {ArrowRight} from 'lucide-react';
import OsOrbs from '@site/src/components/OsOrbs';
import DynamicIcon from '@site/src/components/DynamicIcon';
import SeoHead from '@site/src/components/SeoHead';
import TornHeader from '@site/src/components/TornHeader';
import features, {type FeatureGroup} from '@site/src/data/generated/features';
import styles from './modules.module.css';

const layerMeta: Record<FeatureGroup, {order: number; eyebrow: string; title: string; desc: string}> = {
  foundation: {
    order: 1,
    eyebrow: 'Layer 01 · Foundation',
    title: 'Platform Foundation',
    desc: 'The base every other module sits on — the school itself, and the security that guards its data.',
  },
  structure: {
    order: 2,
    eyebrow: 'Layer 02 · Academic Structure',
    title: 'Academic Structure',
    desc: 'How a school year is organized before a single student is enrolled — years, grades, subjects, and A/L streams.',
  },
  people: {
    order: 3,
    eyebrow: 'Layer 03 · People & Classes',
    title: 'People & Classes',
    desc: 'Where the academic structure meets real people — classes, the students in them, their teachers, and their guardians.',
  },
  operations: {
    order: 4,
    eyebrow: 'Layer 04 · Daily Operations',
    title: 'Daily Operations',
    desc: 'What runs every school day, once the structure and people are in place.',
  },
};

const layers = Object.entries(layerMeta)
  .map(([group, meta]) => ({
    group: group as FeatureGroup,
    ...meta,
    modules: features.filter((f) => f.group === group),
  }))
  .sort((a, b) => a.order - b.order);

export default function Modules(): React.ReactElement {
  return (
    <Layout
      title="Modules"
      description="A layered look at how OpenSchool's 12 modules build on each other, from the school profile up to daily attendance.">
      <SeoHead path="/modules" />
      <OsOrbs />

      <TornHeader>
        <div className={styles.introInner}>
          <h1 className={`os-heading ${styles.title}`}>
            How the <span className="os-gradient-text">12 modules</span> build on each other
          </h1>
          <p className={`os-lead ${styles.lead}`}>
            OpenSchool isn&apos;t 12 disconnected features — it&apos;s four layers that build on
            one another: a secured foundation, the academic structure for a year, the people
            inside it, and the daily operations that run on top.
          </p>
        </div>
      </TornHeader>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <div className={styles.layerStack}>
            {layers.map((layer, i) => (
              <div key={layer.group} className={styles.layerRow}>
                <div className={`os-glass ${styles.layerPanel}`}>
                  <div className={styles.layerHeader}>
                    <span className="os-eyebrow">{layer.eyebrow}</span>
                    <h2 className={styles.layerTitle}>{layer.title}</h2>
                    <p className={styles.layerDesc}>{layer.desc}</p>
                  </div>
                  <div className={styles.moduleGrid}>
                    {layer.modules.map((m) => (
                      <div key={m.slug} className={styles.moduleChip}>
                        <span className={styles.moduleIconWrap}>
                          <DynamicIcon name={m.icon} size={18} strokeWidth={1.75} />
                        </span>
                        <div>
                          <div className={styles.moduleTitle}>{m.title}</div>
                          <div className={styles.moduleDesc}>{m.summary}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {i < layers.length - 1 && <div className={styles.layerConnector} aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="os-section">
        <div className="os-container">
          <div className={`os-glass-strong ${styles.ctaBanner}`}>
            <div>
              <h2 className="os-heading" style={{marginBottom: '0.5rem'}}>
                Want the full capability list?
              </h2>
              <p className={styles.ctaText}>See every action available in each module.</p>
            </div>
            <Link className="os-btn os-btn--primary" to="/features">
              View All Features
              <ArrowRight size={17} strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
