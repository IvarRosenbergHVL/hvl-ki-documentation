/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'HVLs KI-økosystem',
  tagline: 'Prosjektopplæring og dokumentasjon',
  url: process.env.SITE_URL || 'http://localhost:3000',
  baseUrl: process.env.BASE_URL || '/',
  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'nb', locales: ['nb'] },
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [['classic', {
    docs: { sidebarPath: './sidebars.js' },
    blog: false,
    theme: { customCss: './src/css/custom.css' }
  }]],
  themeConfig: {
    navbar: { title: 'HVL KI / prosjektopplæring', items: [
      {to:'/docs/utviklere/intro',label:'Utviklere',position:'left'},
      {to:'/docs/interessenter/intro',label:'Interessenter',position:'left'},
      {to:'/docs/prodekanforum/intro',label:'Prodekanforum',position:'left'},
      {to:'/docs/felles/begreper',label:'Begreper',position:'right'}
    ]},
    footer: {style:'dark',copyright:'HVL KI-økosystem · Prosjektutkast · Målarkitektur'},
    colorMode: {respectPrefersColorScheme:true}
  }
};
