import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

export function HomePage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('pt') ? 'pt' : 'en'
  const siteUrl = 'https://pottmayer.dev'

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <link rel="canonical" href={siteUrl} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={t('seo.title')} />
        <meta property="og:description" content={t('seo.description')} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t('seo.title')} />
        <meta name="twitter:description" content={t('seo.description')} />
      </Helmet>

      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </>
  )
}
