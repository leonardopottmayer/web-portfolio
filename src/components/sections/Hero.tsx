import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTypewriter } from '@/hooks/useTypewriter'
import { personal } from '@/data/personal'

type SupportedLang = keyof typeof personal.cv

export function Hero() {
  const { t, i18n } = useTranslation()
  const tagline = useTypewriter(t('hero.tagline'), 35, 900)
  const lang = (i18n.language.startsWith('pt') ? 'pt' : 'en') as SupportedLang
  const cvUrl = personal.cv[lang]

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-bg-primary"
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-accent-dim blur-[120px] opacity-60" />
      </div>

      {/* Grid texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent uppercase">
            {t('hero.label')}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <h1 className="font-display leading-none">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-primary">
              {personal.name.first}
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-light text-text-secondary mt-1">
              {personal.name.last}
            </span>
          </h1>
        </motion.div>

        {/* Tagline with typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="h-8 mb-10 flex items-center justify-center"
        >
          <p className="font-body text-base md:text-lg text-text-muted">
            {tagline}
            <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 animate-blink" />
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="font-body font-medium text-sm px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white transition-colors duration-200"
          >
            {t('hero.cta_contact')}
          </a>
          <a
            href={cvUrl}
            download
            className="font-body font-medium text-sm px-6 py-3 rounded-full border border-border hover:border-accent text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            {t('hero.cta_resume')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>

      {/* Gradient separator */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)',
          opacity: 0.4,
        }}
      />
    </section>
  )
}
