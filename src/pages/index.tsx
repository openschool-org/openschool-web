import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ArrowRight} from 'lucide-react';
import OsOrbs from '@site/src/components/OsOrbs';
import Reveal from '@site/src/components/Reveal';
import DynamicIcon from '@site/src/components/DynamicIcon';
import SeoHead from '@site/src/components/SeoHead';
import TornHeader from '@site/src/components/TornHeader';
import HeroCube from '@site/src/components/HeroCube';
import TechLogos from '@site/src/components/TechLogos';
import features from '@site/src/data/generated/features';
import styles from './index.module.css';

const stats = [
  {value: '12', label: 'Core Modules'},
  {value: 'LK', label: 'Built for Sri Lanka'},
];

const services = features.filter((f) => f.homeFeatured);

export default function Home(): React.ReactElement {
  const aboutSrc = useBaseUrl('img/illustrations/about-illustration.svg');

  return (
    <Layout
      title="OpenSchool"
      description="A secure, API-first platform covering academic years, students, guardians, attendance, streams, and more purpose-built for Sri Lankan schools.">
      <SeoHead path="/" />
      <OsOrbs />

      <TornHeader>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 className={`os-heading ${styles.heroTitle}`}>
              One platform for your entire school&apos;s <span className="os-gradient-text">records</span>
            </h1>
            <p className={`os-lead ${styles.heroLead}`}>
              Academic years, classes, students, guardians, and attendance - in one secure API.
              No more spreadsheets. No more paper registers.
            </p>
            <div className={styles.heroActions}>
              <Link className="os-btn os-btn--primary" to="/contact">
                Get Started
              </Link>
              <Link className="os-btn os-btn--ghost" to="/features">
                Explore Features
              </Link>
            </div>
          </div>

          <div className={styles.heroArt}>
            <div className={styles.heroArtGlow} />
            <HeroCube />
          </div>
        </div>

        <Reveal>
          <div className={`os-glass ${styles.statBar}`}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </TornHeader>

      <section className="os-section">
        <div className="os-container">
          <Reveal>
            <div className={`os-glass-strong os-card ${styles.aboutBanner}`}>
              <div>
                <h2 className="os-heading" style={{marginBottom: '0.5rem'}}>
                  Ready to modernize your school&apos;s records?
                </h2>
                <p className={styles.bannerText}>
                  Talk to us about rolling out OpenSchool for your academic year.
                </p>
              </div>
              <Link className="os-btn os-btn--primary" to="/contact">
                Contact the Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="os-section--tight">
        <Reveal>
          <div className={`os-section--dark ${styles.servicesPanel}`}>
            <div className="os-container">
              <div className={styles.servicesIntro}>
                <span className="os-eyebrow">What We Automate</span>
                <div className={styles.servicesIntroGrid}>
                  <h2 className={`os-heading ${styles.servicesTitle}`}>
                    Every school operation, one platform
                  </h2>
                  <p className={styles.servicesDesc}>
                    From opening an academic year to marking today&apos;s attendance, OpenSchool
                    replaces disconnected tools with one consistent, API-driven system that scales
                    with your school.
                  </p>
                </div>
              </div>

              <div className="os-grid os-grid--3">
                {services.map((s, i) => (
                  <div key={s.slug} className={styles.serviceCard}>
                    <span className="os-service-number">{String(i + 1).padStart(2, '0')}</span>
                    <div className={styles.serviceIcon}>
                      <DynamicIcon name={s.icon} size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className={styles.serviceTitle}>{s.title}</h3>
                    <p className={styles.serviceDesc}>{s.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <Reveal>
            <div className={styles.techIntro}>
              <span className="os-eyebrow" style={{textAlign: 'center'}}>
                Built On Open Standards
              </span>
            </div>
            <TechLogos />
          </Reveal>
        </div>
      </section>

      <section className="os-section">
        <div className="os-container">
          <Reveal>
            <div className={styles.aboutGrid}>
              <img
                src={aboutSrc}
                alt="Abstract illustration representing OpenSchool's structured student records"
                className={styles.aboutImg}
              />
              <div className={styles.aboutCopy}>
                <span className="os-eyebrow">About OpenSchool</span>
                <h2 className={`os-heading ${styles.aboutTitle}`}>
                  Infrastructure built for how Sri Lankan schools actually run
                </h2>
                <p className={styles.aboutText}>
                  Most schools still track students, grades, and attendance across paper
                  registers and disconnected spreadsheets. OpenSchool gives every school a
                  structured, secure, API-driven system of record - modeled around the full
                  Grade 1-13 flow, from Scholarship years through O/Level and A/Level streams,
                  and the people who keep a school running.
                </p>
                <Link className={styles.aboutLink} to="/about">
                  Learn more about our mission
                  <ArrowRight size={16} strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
