import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const SITE_URL = 'https://openschool.lk';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpenSchool',
  url: SITE_URL,
  logo: `${SITE_URL}/img/brand/logo-mark.png`,
  description:
    'OpenSchool is a secure, API-first digital infrastructure platform built for Sri Lankan schools — covering academic years, students, guardians, attendance, streams, and more.',
  areaServed: 'LK',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OpenSchool',
  url: SITE_URL,
};

const config: Config = {
  title: 'OpenSchool',
  tagline: 'Digital Infrastructure for Sri Lankan Schools',
  favicon: 'img/favicons/favicon.ico',

  future: {
    v4: true,
  },

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'openschool-org',
  projectName: 'openschool-web',

  onBrokenLinks: 'throw',

  clientModules: [require.resolve('./src/clientModules/navbarAdaptive.ts')],

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicons/favicon-32x32.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicons/favicon-16x16.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicons/apple-touch-icon.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'manifest', href: '/site.webmanifest'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'author', content: 'OpenSchool'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'twitter:card', content: 'summary_large_image'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify(organizationJsonLd),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify(websiteJsonLd),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/brand/og-cover.png',
    metadata: [
      {
        name: 'description',
        content:
          'OpenSchool is a secure, API-first digital infrastructure platform built for Sri Lankan schools — covering academic years, students, guardians, attendance, streams, and more.',
      },
      {name: 'keywords', content: 'OpenSchool, Sri Lanka, school management system, education API, student information system, attendance management'},
      {name: 'theme-color', content: '#fafafa'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'OpenSchool',
        src: 'img/brand/logo-wordmark.png',
        width: 78,
        height: 36,
      },
      items: [
        {to: '/', label: 'Home', position: 'left', exact: true},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/features', label: 'Features', position: 'left'},
        {to: '/modules', label: 'Modules', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {
          to: '/contact',
          label: 'Get in touch',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'OpenSchool',
        src: 'img/brand/logo-wordmark.png',
        width: 88,
        height: 41,
      },
      links: [
        {
          title: 'Platform',
          items: [
            {label: 'About', to: '/about'},
            {label: 'Features', to: '/features'},
            {label: 'Modules', to: '/modules'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Contact Us', to: '/contact'},
            {label: 'Dashboard', to: '/coming-soon'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} OpenSchool. All rights reserved.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
