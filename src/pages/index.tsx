import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ArrowRight} from 'lucide-react';
import Reveal from '@site/src/components/Reveal';
import DynamicIcon from '@site/src/components/DynamicIcon';
import SeoHead from '@site/src/components/SeoHead';
import TechLogos from '@site/src/components/TechLogos';
import features from '@site/src/data/generated/features';
import styles from './index.module.css';

const GITHUB_URL = 'https://github.com/openschool-org/openschool';

function GithubIcon(): React.ReactElement {
  return (
    <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

const stats = [
  {value: '12', label: 'Core Modules'},
  {value: 'LK', label: 'Built for Sri Lanka'},
];

const services = features.filter((f) => f.homeFeatured);

const API_SAMPLE = `curl https://api.openschool.lk/v1/classes/1A/attendance \\
  -H "Authorization: Bearer <token>"

{
  "class": "1A",
  "date": "2026-08-09",
  "present": 41,
  "absent": 2
}`;

export default function Home(): React.ReactElement {
  const aboutSrc = useBaseUrl('img/illustrations/about-illustration.svg');

  return (
    <Layout
      title="OpenSchool"
      description="A secure, API-first platform covering academic years, students, guardians, attendance, streams, and more purpose-built for Sri Lankan schools.">
      <SeoHead
        path="/"
        title="Digital Infrastructure for Sri Lankan Schools"
        description="A secure, API-first platform covering academic years, students, guardians, attendance, streams, and more purpose-built for Sri Lankan schools."
      />

      <header className={styles.hero}>
        <div className="os-container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className="os-badge">API-First &middot; Built for Sri Lanka</span>
              <h1 className={`os-heading ${styles.heroTitle}`}>
                One platform for your entire school&apos;s records
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
                <a
                  className={styles.githubLink}
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <GithubIcon />
                  View on GitHub
                </a>
              </div>
            </div>

            <div className={styles.heroCode}>
              <CodeBlock language="bash" title="Attendance API">
                {API_SAMPLE}
              </CodeBlock>
            </div>
          </div>

          <div className={styles.statBar}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <Reveal>
            <div className={`os-panel ${styles.aboutBanner}`}>
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

      <section className="os-section os-section--alt">
        <div className="os-container">
          <Reveal>
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
                <div key={s.slug} className={`os-card ${styles.serviceCard}`}>
                  <span className={styles.serviceNumber}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.serviceIcon}>
                    <DynamicIcon name={s.icon} size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.summary}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
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
