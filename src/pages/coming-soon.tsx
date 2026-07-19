import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ArrowLeft, ArrowRight, GraduationCap, UserRound, UsersRound} from 'lucide-react';
import OsOrbs from '@site/src/components/OsOrbs';
import SeoHead from '@site/src/components/SeoHead';
import TornHeader from '@site/src/components/TornHeader';
import styles from './coming-soon.module.css';

const CONTACT_EMAIL = 'hello@openschool.lk';

export default function ComingSoon(): React.ReactElement {
  const dashboardSrc = useBaseUrl('img/illustrations/dashboard-live.svg');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent('Notify me when the OpenSchool Dashboard launches');
    const body = encodeURIComponent(`Please notify this email when the Dashboard is ready:\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Layout
      title="Dashboard — Coming Soon"
      description="The OpenSchool web dashboard for principals, teachers, and guardians is in development. Leave your email to be notified at launch.">
      <SeoHead path="/coming-soon" />
      <OsOrbs />

      <TornHeader>
        <div className={styles.inner}>
          <h1 className={`os-heading ${styles.title}`}>
            The OpenSchool <span className="os-gradient-text">Dashboard</span> is on its way
          </h1>
          <p className={`os-lead ${styles.lead}`}>
            We&apos;re building the web app where principals, teachers, and guardians will log in
            to manage academic years, classes, attendance, and more - powered by the same API
            you can already explore today. Leave your email and we&apos;ll let you know the
            moment it launches.
          </p>

          <div className={styles.roles}>
            <span className={styles.role}>
              <UsersRound size={15} strokeWidth={2.25} />
              Teachers
            </span>
            <span className={styles.role}>
              <GraduationCap size={15} strokeWidth={2.25} />
              Students
            </span>
            <span className={styles.role}>
              <UserRound size={15} strokeWidth={2.25} />
              Parents
            </span>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="os-btn os-btn--primary">
              Notify Me
            </button>
          </form>

          <div className={styles.links}>
            <Link className={styles.backLink} to="/">
              <ArrowLeft size={16} strokeWidth={2.25} />
              Back to Home
            </Link>
            <Link className={styles.backLink} to="/features">
              Explore Features
              <ArrowRight size={16} strokeWidth={2.25} />
            </Link>
          </div>

          <div className={styles.artWrap}>
            <img
              src={dashboardSrc}
              alt="Preview of the upcoming OpenSchool dashboard"
              className={styles.art}
              width={640}
              height={480}
            />
            <div className={styles.artOverlay}>
              <span className={styles.artBadge}>Preview - Still In Development</span>
            </div>
          </div>
        </div>
      </TornHeader>
    </Layout>
  );
}
