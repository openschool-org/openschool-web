import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OpenSchool',
  tagline: 'Digital Infrastructure for Sri Lankan Schools',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://openschool.lk',
  baseUrl: '/',

  organizationName: 'openschool-lk',
  projectName: 'openschool-web',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
    image: 'img/og-cover.svg',
    metadata: [
      {
        name: 'description',
        content:
          'OpenSchool is a secure, API-first digital infrastructure platform built for Sri Lankan schools — covering academic years, students, guardians, attendance, streams, and more.',
      },
      {name: 'keywords', content: 'OpenSchool, Sri Lanka, school management system, education API, student information system, attendance management'},
      {name: 'theme-color', content: '#0b0f1a'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OpenSchool',
      logo: {
        alt: 'OpenSchool Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
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
          title: 'Get Started',
          items: [
            {label: 'Contact Us', to: '/contact'},
            {label: 'Request API Access', to: '/contact'},
          ],
        },
        {
          title: 'Info',
          items: [
            {label: 'Built for Sri Lankan Schools', to: '/about'},
            {label: 'Secure REST API', to: '/features'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenSchool. Digital Infrastructure for Sri Lankan Schools.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
