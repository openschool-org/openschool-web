import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import OsOrbs from '@site/src/components/OsOrbs';
import SeoHead from '@site/src/components/SeoHead';
import styles from './privacy.module.css';

const EFFECTIVE_DATE = 'July 19, 2026';
const CONTACT_EMAIL = 'hello@openschool.lk';

const sections = [
  {id: 'overview', title: '1. Overview'},
  {id: 'information-we-collect', title: '2. Information We Collect'},
  {id: 'how-we-use-it', title: '3. How We Use Information'},
  {id: 'student-guardian-data', title: '4. Student & Guardian Data'},
  {id: 'security', title: '5. Data Storage & Security'},
  {id: 'sharing', title: '6. Data Sharing'},
  {id: 'cookies', title: '7. Cookies & Analytics'},
  {id: 'retention', title: '8. Data Retention'},
  {id: 'your-rights', title: '9. Your Rights'},
  {id: 'changes', title: '10. Changes to This Policy'},
  {id: 'contact', title: '11. Contact Us'},
];

export default function Privacy(): React.ReactElement {
  return (
    <Layout
      title="Privacy Policy"
      description="How OpenSchool collects, uses, and protects data for schools, students, guardians, and website visitors.">
      <SeoHead path="/privacy" />
      <OsOrbs />

      <header className="os-section os-section--tight">
        <div className="os-container">
          <div className={styles.introInner}>
            <span className="os-badge">Legal</span>
            <h1 className={`os-heading ${styles.title}`}>Privacy Policy</h1>
            <p className={styles.effective}>Effective {EFFECTIVE_DATE}</p>
          </div>
        </div>
      </header>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <div className={styles.layout}>
            <nav className={styles.toc} aria-label="Table of contents">
              <span className={styles.tocLabel}>On this page</span>
              <ul className={styles.tocList}>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={`os-glass ${styles.article}`}>
              <p className={styles.lead}>
                OpenSchool (&quot;OpenSchool&quot;, &quot;we&quot;, &quot;us&quot;) provides digital
                infrastructure — academic records, attendance, guardians, and related tools — for
                schools in Sri Lanka. This policy explains what information we collect, how it is
                used, and the choices available to schools, guardians, students, and visitors to
                this website.
              </p>

              <h2 id="overview" className={styles.h2}>
                1. Overview
              </h2>
              <p>
                This policy covers two kinds of data: information collected through this marketing
                website (such as contact form submissions), and information a school enters into
                the OpenSchool platform to manage its own students, staff, and records. Schools
                remain the owner of their academic data; OpenSchool acts as the infrastructure
                that stores and secures it on their behalf.
              </p>

              <h2 id="information-we-collect" className={styles.h2}>
                2. Information We Collect
              </h2>
              <p>Depending on how you interact with us, we may collect:</p>
              <ul>
                <li>
                  <strong>Contact form data</strong> — name, school name, email address, and any
                  message you submit through the Contact page.
                </li>
                <li>
                  <strong>School-entered records</strong> — academic years, grades, classes,
                  subjects, streams, student profiles, guardian details, teacher assignments, and
                  attendance entries that authorized school staff add to the platform.
                </li>
                <li>
                  <strong>Technical data</strong> — basic, non-invasive web server logs (such as
                  page requests) needed to keep this website running securely.
                </li>
              </ul>

              <h2 id="how-we-use-it" className={styles.h2}>
                3. How We Use Information
              </h2>
              <p>Information is used only to:</p>
              <ul>
                <li>Respond to inquiries submitted through the Contact page.</li>
                <li>Provide, operate, and secure the OpenSchool platform for participating schools.</li>
                <li>Maintain accurate academic, attendance, and guardian records on behalf of a school.</li>
                <li>Improve the reliability and security of our infrastructure.</li>
              </ul>
              <p>We do not use school or student data for advertising, and we do not sell personal data.</p>

              <h2 id="student-guardian-data" className={styles.h2}>
                4. Student &amp; Guardian Data
              </h2>
              <p>
                Where OpenSchool stores data relating to students and guardians, the school that
                entered the data is the data controller, and OpenSchool acts as a data processor
                on the school&apos;s instructions. Requests to access, correct, or remove a
                student&apos;s or guardian&apos;s information should generally start with the
                relevant school; we support schools in fulfilling those requests. We design our
                data handling around the principles of Sri Lanka&apos;s Personal Data Protection
                Act and comparable regional data protection standards.
              </p>

              <h2 id="security" className={styles.h2}>
                5. Data Storage &amp; Security
              </h2>
              <p>
                Access to the OpenSchool API is protected by bearer token authentication on
                nearly every endpoint. We apply role-appropriate access controls so that staff can
                only reach the records relevant to their school and responsibilities, and we
                review our security practices as the platform evolves.
              </p>

              <h2 id="sharing" className={styles.h2}>
                6. Data Sharing
              </h2>
              <p>
                We do not sell personal data. We may share limited information with trusted
                infrastructure providers (for example, hosting) strictly to operate the platform,
                or when required to comply with a legal obligation. Any such provider is expected
                to protect data to a standard consistent with this policy.
              </p>

              <h2 id="cookies" className={styles.h2}>
                7. Cookies &amp; Analytics
              </h2>
              <p>
                This marketing website does not use third-party advertising cookies or trackers.
                If we introduce analytics in the future to understand site usage, we will update
                this policy to describe what is collected and how to opt out.
              </p>

              <h2 id="retention" className={styles.h2}>
                8. Data Retention
              </h2>
              <p>
                Contact form submissions are retained only as long as needed to respond to your
                inquiry. School records are retained for as long as a school actively uses the
                platform, or as otherwise agreed with the school, after which they are deleted or
                anonymized on request.
              </p>

              <h2 id="your-rights" className={styles.h2}>
                9. Your Rights
              </h2>
              <p>
                You may ask us what information we hold about you, request a correction, or
                request deletion, subject to any school&apos;s own record-keeping obligations. To
                make a request, contact us using the details below.
              </p>

              <h2 id="changes" className={styles.h2}>
                10. Changes to This Policy
              </h2>
              <p>
                We may update this policy as OpenSchool evolves. Material changes will update the
                effective date at the top of this page.
              </p>

              <h2 id="contact" className={styles.h2}>
                11. Contact Us
              </h2>
              <p>
                Questions about this policy or your data can be sent to{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or via our{' '}
                <Link to="/contact">Contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
