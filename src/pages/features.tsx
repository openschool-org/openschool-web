import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {ArrowRight, Check} from 'lucide-react';
import OsOrbs from '@site/src/components/OsOrbs';
import DynamicIcon from '@site/src/components/DynamicIcon';
import SeoHead from '@site/src/components/SeoHead';
import TornHeader from '@site/src/components/TornHeader';
import features from '@site/src/data/generated/features';
import styles from './features.module.css';

export default function Features(): React.ReactElement {
  return (
    <Layout
      title="Features"
      description="12 integrated modules covering academic years, classes, students, guardians, attendance, streams, and secure API access.">
      <SeoHead path="/features" />
      <OsOrbs />

      <TornHeader>
        <div className={styles.introInner}>
          <h1 className={`os-heading ${styles.title}`}>
            Twelve modules. <span className="os-gradient-text">One school system.</span>
          </h1>
          <p className={`os-lead ${styles.lead}`}>
            Every capability your school office, teachers, and admin team need - from opening an
            academic year to marking today&apos;s attendance - exposed through a secure, consistent
            REST API.
          </p>
        </div>
      </TornHeader>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <div className="os-grid os-grid--3">
            {features.map((f) => (
              <div key={f.slug} className={`os-glass os-card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>
                  <DynamicIcon name={f.icon} size={22} strokeWidth={1.75} />
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
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
      </section>

      <section className="os-section">
        <div className="os-container">
          <div className={`os-glass-strong ${styles.ctaBanner}`}>
            <div>
              <h2 className="os-heading" style={{marginBottom: '0.5rem'}}>
                Want to see how the modules connect?
              </h2>
              <p className={styles.ctaText}>Explore the architecture on the Modules page.</p>
            </div>
            <Link className="os-btn os-btn--primary" to="/modules">
              View Modules
              <ArrowRight size={17} strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
