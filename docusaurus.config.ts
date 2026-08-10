import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const SITE_URL = 'https://openschool.lk';

const SITE_DESCRIPTION =
  'OpenSchool is a free, open-source, self-hosted school management system built for Sri Lankan schools — covering academic years, students, guardians, attendance, timetables, and more.';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpenSchool',
  url: SITE_URL,
  logo: `${SITE_URL}/img/brand/logo.webp`,
  description: SITE_DESCRIPTION,
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
  favicon: 'img/favicons/favicon.webp',

  future: {
    v4: true,
  },

  url: SITE_URL,
  baseUrl: '/openschool-web/',

  organizationName: 'openschool-org',
  projectName: 'openschool-web',

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/webp', href: '/openschool-web/img/favicons/favicon.webp'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: '/openschool-web/img/favicons/favicon.webp'},
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
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/openschool-org/openschool-web/edit/main/docs/',
        },
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

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: 'img/brand/og-cover.png',
    metadata: [
      {
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      {name: 'keywords', content: 'OpenSchool, open source, self-hosted, Sri Lanka, school management system, student information system, attendance management'},
      {name: 'theme-color', content: '#ffffff'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // Used by the mobile sidebar header;
      // the desktop navbar renders its own logo — see
      // the swizzled src/theme/Navbar/Content.
      logo: {
        alt: 'OpenSchool',
        src: 'img/brand/logo.webp',
        width: 40,
        height: 40,
      },
      items: [
        {to: '/', label: 'Home', position: 'left', exact: true},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/features', label: 'Features', position: 'left'},
        {to: '/modules', label: 'Modules', position: 'left'},
        {type: 'docSidebar', sidebarId: 'docs', label: 'Docs', position: 'left'},
        {to: '/community', label: 'Community', position: 'left'},
        {
          type: 'html',
          position: 'right',
          value: navbarGithubLinksHtml,
        },
        {
          to: '/docs/intro',
          label: 'Get Started',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'OpenSchool',
        src: 'img/brand/logo.webp',
        width: 36,
        height: 36,
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
            {label: 'Docs', to: '/docs/intro'},
            {label: 'Community', to: '/community'},
            {label: 'Privacy Policy', to: '/privacy'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'GitHub', href: GITHUB_URL},
            {label: 'Report an Issue', href: `${GITHUB_URL}/issues`},
            {label: 'Security Policy', href: `${GITHUB_URL}/blob/main/SECURITY.md`},
            {label: 'MIT License', href: `${GITHUB_URL}/blob/main/LICENSE`},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} OpenSchool. Open source under the MIT License.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
