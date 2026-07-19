import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {ShieldCheck, MapPinned, Puzzle, TrendingUp, Building2, Presentation, UsersRound, GraduationCap, ArrowRight} from 'lucide-react';
import OsOrbs from '@site/src/components/OsOrbs';
import SeoHead from '@site/src/components/SeoHead';
import styles from './about.module.css';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    desc: 'Every endpoint sits behind bearer token authentication, so school data is never exposed to unauthenticated access.',
  },
  {
    icon: MapPinned,
    title: 'Built for the Sri Lankan System',
    desc: 'Grades, terms, and A/L streams like Science, Commerce, and Arts are modeled the way local schools actually run.',
  },
  {
    icon: Puzzle,
    title: 'API-First & Interoperable',
    desc: 'A consistent REST API means OpenSchool can plug into portals, mobile apps, or reporting tools you already use.',
  },
  {
    icon: TrendingUp,
    title: 'Built to Scale',
    desc: 'From a single classroom to a multi-grade national school, the same data model holds up as records grow.',
  },
];

const audiences = [
  {icon: Building2, title: 'Principals & Admins', desc: 'Manage the school profile, academic years, grades, and classes from one dashboarded structure.'},
  {icon: Presentation, title: 'Teachers', desc: 'View assigned classes, mark attendance, and see the students and subjects you’re responsible for.'},
  {icon: UsersRound, title: 'Guardians', desc: 'Stay linked to your child’s class, attendance, and subject selections as a primary or secondary contact.'},
  {icon: GraduationCap, title: 'Students', desc: 'Get a clear record of your class, subjects, electives, and attendance history over the academic year.'},
];

export default function About(): React.ReactElement {
  return (
    <Layout
      title="About"
      description="Why OpenSchool exists: a secure, API-first digital infrastructure platform built specifically for the way Sri Lankan schools operate.">
      <SeoHead path="/about" />
      <OsOrbs />

      <header className="os-section">
        <div className="os-container">
          <div className={styles.introInner}>
            <h1 className={`os-heading ${styles.title}`}>
              Replacing paper registers with <span className="os-gradient-text">one secure system</span>
            </h1>
            <p className={`os-lead ${styles.lead}`}>
              OpenSchool is a digital infrastructure platform purpose-built for Sri Lankan schools —
              a single, authenticated API that models everything from academic years and A/L streams
              to guardians and daily attendance, so school records stop living across notebooks,
              spreadsheets, and disconnected systems.
            </p>
          </div>
        </div>
      </header>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <div className="os-grid os-grid--2">
            <div className={`os-glass os-card ${styles.storyCard}`}>
              <span className="os-eyebrow">Our Mission</span>
              <h3 className={styles.cardTitle}>Give every school a proper system of record</h3>
              <p className={styles.cardText}>
                Most Sri Lankan schools still track students, grades, and attendance across paper
                registers and disconnected spreadsheets. OpenSchool gives every school — regardless
                of size — a structured, secure, API-driven system of record for its academic data.
              </p>
            </div>
            <div className={`os-glass os-card ${styles.storyCard}`}>
              <span className="os-eyebrow">Our Vision</span>
              <h3 className={styles.cardTitle}>Infrastructure, not just software</h3>
              <p className={styles.cardText}>
                We&apos;re building OpenSchool as infrastructure — a dependable API layer that other
                school portals, parent apps, and reporting tools can be built on top of, instead of
                every school reinventing student records from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="os-section">
        <div className="os-container">
          <span className="os-eyebrow">What guides us</span>
          <h2 className="os-heading" style={{marginBottom: '2.5rem'}}>Principles behind the platform</h2>
          <div className="os-grid os-grid--4">
            {principles.map((p) => (
              <div key={p.title} className={`os-glass os-card ${styles.principleCard}`}>
                <div className={styles.principleIcon}>
                  <p.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <span className="os-eyebrow">Who it&apos;s for</span>
          <h2 className="os-heading" style={{marginBottom: '2.5rem'}}>Built for everyone around a school</h2>
          <div className="os-grid os-grid--4">
            {audiences.map((a) => (
              <div key={a.title} className={`os-glass os-card ${styles.audienceCard}`}>
                <div className={styles.audienceIcon}>
                  <a.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className={styles.audienceTitle}>{a.title}</h3>
                <p className={styles.audienceDesc}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="os-section">
        <div className="os-container">
          <div className={`os-glass-strong ${styles.ctaBanner}`}>
            <div>
              <h2 className="os-heading" style={{marginBottom: '0.5rem'}}>Want to see it fit your school?</h2>
              <p className={styles.ctaText}>Reach out and we&apos;ll walk you through the modules.</p>
            </div>
            <Link className="os-btn os-btn--primary" to="/contact">
              Contact Us
              <ArrowRight size={17} strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
