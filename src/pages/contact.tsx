import React, {useState} from 'react';
import Layout from '@theme/Layout';
import {Mail, MapPin, Clock, KeyRound} from 'lucide-react';
import OsOrbs from '@site/src/components/OsOrbs';
import SeoHead from '@site/src/components/SeoHead';
import styles from './contact.module.css';

const CONTACT_EMAIL = 'hello@openschool.lk';

const channels = [
  {icon: Mail, title: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`},
  {icon: MapPin, title: 'Based in', value: 'Sri Lanka', href: undefined},
  {icon: Clock, title: 'Response time', value: 'Within 1–2 business days', href: undefined},
];

export default function Contact(): React.ReactElement {
  const [form, setForm] = useState({name: '', school: '', email: '', message: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`OpenSchool inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nSchool: ${form.school}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Layout
      title="Contact"
      description="Get in touch about rolling out OpenSchool for your school, or request API access.">
      <SeoHead path="/contact" />
      <OsOrbs />

      <header className="os-section">
        <div className="os-container">
          <div className={styles.introInner}>
            <h1 className={`os-heading ${styles.title}`}>
              Let&apos;s bring <span className="os-gradient-text">OpenSchool</span> to your school
            </h1>
            <p className={`os-lead ${styles.lead}`}>
              Whether you&apos;re a principal exploring a digital records system or a developer
              requesting API access, tell us a bit about your school and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </header>

      <section className="os-section os-section--tight">
        <div className="os-container">
          <div className={styles.contactGrid}>
            <div className={`os-glass ${styles.formPanel}`}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <label className={styles.label} htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={styles.input}
                    placeholder="Nimal Perera"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.label} htmlFor="school">
                    School name
                  </label>
                  <input
                    id="school"
                    name="school"
                    type="text"
                    className={styles.input}
                    placeholder="Royal College, Colombo"
                    value={form.school}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.label} htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={styles.input}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.label} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={styles.textarea}
                    placeholder="Tell us about your school and what you're looking for..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="os-btn os-btn--primary" style={{width: 'fit-content'}}>
                  Send Message
                </button>
              </form>
            </div>

            <div className={styles.sidePanel}>
              {channels.map((c) => (
                <div key={c.title} className={`os-glass ${styles.channelCard}`}>
                  <div className={styles.channelIcon}>
                    <c.icon size={19} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className={styles.channelTitle}>{c.title}</div>
                    {c.href ? (
                      <a className={styles.channelValueLink} href={c.href}>
                        {c.value}
                      </a>
                    ) : (
                      <div className={styles.channelValue}>{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
              <div className={`os-glass ${styles.channelCard}`}>
                <div className={styles.channelIcon}>
                  <KeyRound size={19} strokeWidth={1.75} />
                </div>
                <div>
                  <div className={styles.channelTitle}>API Access</div>
                  <div className={styles.channelValue}>
                    Ask us for bearer token credentials to try the OpenSchool API.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
