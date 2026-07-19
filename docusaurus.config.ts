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

const GITHUB_ICON_SVG =
  '<svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>';

const GITHUB_URL = 'https://github.com/openschool-org/openschool';

const navbarGithubLinksHtml = `
  <span class="navbar-github-group">
    <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer" class="navbar-icon-link" aria-label="Main project on GitHub" title="Main project - openschool">
      ${GITHUB_ICON_SVG}
    </a>
  </span>
`;

const config: Config = {
  title: 'OpenSchool',
  tagline: 'Digital Infrastructure for Sri Lankan Schools',
  favicon: 'img/favicons/favicon.ico',

  future: {
    v4: true,
  },

  url: SITE_URL,
  baseUrl: '/openschool-web/',

  organizationName: 'openschool-org',
  projectName: 'openschool-web',

  onBrokenLinks: 'throw',

  clientModules: [require.resolve('./src/clientModules/navbarAdaptive.ts')],

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/openschool-web/img/favicons/favicon-32x32.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/openschool-web/img/favicons/favicon-16x16.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: '/openschool-web/img/favicons/apple-touch-icon.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'manifest', href: '/openschool-web/site.webmanifest'},
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
      // Used by the mobile sidebar header (always on a light background);
      // the desktop navbar renders its own light/dark-adaptive mark — see
      // the swizzled src/theme/Navbar/Content.
      logo: {
        alt: 'OpenSchool',
        src: 'img/brand/logo-mark-black.png',
        width: 30,
        height: 30,
      },
      items: [
        {to: '/', label: 'Home', position: 'left', exact: true},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/features', label: 'Features', position: 'left'},
        {to: '/modules', label: 'Modules', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {
          type: 'html',
          position: 'right',
          value: navbarGithubLinksHtml,
        },
        {
          to: '/coming-soon',
          label: 'Try Login',
          position: 'right',
        },
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
        src: 'img/brand/logo-mark-white.png',
        width: 34,
        height: 34,
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
