import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'GDPR in 60 Minutes',
  description: 'Companion reading guide for the GDPR video tutorial series. Plain-language explanations grounded in official EUR-Lex and EDPB sources.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  base: '/GDPR-in-60-minutes/',

  head: [
    ['link', { rel: 'icon', href: '/GDPR-in-60-minutes/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#003399' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'GDPR in 60 Minutes' }],
    ['meta', { name: 'og:description', content: 'A friendly companion guide to the EU General Data Protection Regulation, paired with a free video series.' }]
  ],

  appearance: 'dark',

  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: 'Tip',
      warningLabel: 'Warning',
      dangerLabel: 'Danger',
      infoLabel: 'Info',
      detailsLabel: 'Details'
    }
  },

  themeConfig: {
    logo: { src: '/logo.svg', alt: 'GDPR in 60 Minutes' },
    siteTitle: 'GDPR in 60 Minutes',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/guide/getting-started' },
      {
        text: 'Modules',
        items: [
          { text: 'Module 1: Foundations', link: '/modules/01-foundations' },
          { text: 'Module 2: Key Definitions', link: '/modules/02-definitions' },
          { text: 'Module 3: Principles', link: '/modules/03-principles' },
          { text: 'Module 4: Lawful Bases', link: '/modules/04-lawful-bases' },
          { text: 'Module 5: Data Subject Rights', link: '/modules/05-data-subject-rights' },
          { text: 'Module 6: Controller and Processor', link: '/modules/06-controller-processor' },
          { text: 'Module 7: Security and Breach', link: '/modules/07-security-breach' },
          { text: 'Module 8: International Transfers', link: '/modules/08-international-transfers' },
          { text: 'Module 9: DPO and DPIA', link: '/modules/09-dpo-dpia' },
          { text: 'Module 10: Penalties', link: '/modules/10-penalties' }
        ]
      },
      { text: 'Resources', link: '/guide/resources' },
      { text: 'Glossary', link: '/guide/glossary' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'How to use this site', link: '/guide/getting-started' },
            { text: 'About the video series', link: '/guide/about-the-series' },
            { text: 'Glossary', link: '/guide/glossary' },
            { text: 'Resources and references', link: '/guide/resources' }
          ]
        }
      ],
      '/modules/': [
        {
          text: 'Course Modules',
          collapsed: false,
          items: [
            { text: '1. Foundations of GDPR', link: '/modules/01-foundations' },
            { text: '2. Key Definitions', link: '/modules/02-definitions' },
            { text: '3. Core Principles', link: '/modules/03-principles' },
            { text: '4. Lawful Bases for Processing', link: '/modules/04-lawful-bases' },
            { text: '5. Data Subject Rights', link: '/modules/05-data-subject-rights' },
            { text: '6. Controller and Processor Duties', link: '/modules/06-controller-processor' },
            { text: '7. Security and Breach Notification', link: '/modules/07-security-breach' },
            { text: '8. International Data Transfers', link: '/modules/08-international-transfers' },
            { text: '9. DPO, DPIA, and Accountability', link: '/modules/09-dpo-dpia' },
            { text: '10. Penalties and Enforcement', link: '/modules/10-penalties' }
          ]
        },
        {
          text: 'Self-Audit Checklists',
          collapsed: true,
          items: [
            { text: 'Compliance self-audit', link: '/guide/self-audit' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/whatsdd/GDPR-in-60-minutes' }
    ],

    footer: {
      message: 'Educational companion only. Not legal advice. Always consult qualified counsel for binding interpretations.',
      copyright: 'Content based on Regulation (EU) 2016/679 as published on EUR-Lex.'
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    editLink: {
      pattern: 'https://github.com/whatsdd/GDPR-in-60-minutes/edit/main/docs/:path',
      text: 'Suggest an edit on GitHub'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous module',
      next: 'Next module'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'medium' }
    }
  },

  mermaid: {
    theme: 'default'
  }
}))
