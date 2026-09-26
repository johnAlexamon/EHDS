// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EHDS Integration Research',
  tagline:
    'EU European Health Data Space: HIS/EMR/EHR integration, Finland and EU member states, gateway market, and API status',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://johnalexamon.github.io',
  baseUrl: '/EHDS/',

  organizationName: 'johnAlexamon',
  projectName: 'EHDS',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsDir: '../docs/ehds-integration',
        docsRouteBasePath: '/',
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs/ehds-integration',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/johnAlexamon/EHDS/tree/main/docs/ehds-integration/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'EHDS Integration Research',
        logo: {
          alt: 'EHDS logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'ehdsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/johnAlexamon/EHDS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Overview', to: '/'},
              {label: 'Implementation Timeline', to: '/implementation-timeline'},
              {label: 'Finland', to: '/finland'},
              {label: 'Gateway Market & API Status', to: '/gateway-market-and-api-status'},
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub repository',
                href: 'https://github.com/johnAlexamon/EHDS',
              },
            ],
          },
        ],
        copyright: `EHDS integration research — synthesized from public sources, September 2026. Verify against EUR-Lex before relying on this for legal/compliance decisions.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
