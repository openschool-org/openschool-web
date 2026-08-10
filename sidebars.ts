import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['intro', 'contributing', 'thunderid', 'setup'],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'architecture',
        {
          type: 'category',
          label: 'Architecture Decision Records',
          link: {type: 'doc', id: 'adr/index'},
          items: [
            'adr/0001-thunderid-as-sole-identity-provider',
            'adr/0002-in-app-position-layer',
            'adr/0003-single-current-academic-year',
            'adr/0004-in-app-only-notifications',
            'adr/0005-hand-rolled-password-reset',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
