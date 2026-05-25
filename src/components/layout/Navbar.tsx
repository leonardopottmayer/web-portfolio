import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'

const NAV_LINKS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.education', href: '#education' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.contact', href: '#contact' },
]

export function Navbar() {
  const { t, i18n } = useTranslation()
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)

  const currentLang = i18n.language.startsWith('pt') ? 'pt' : 'en'
  const otherLang = currentLang === 'pt' ? 'en' : 'pt'

  const toggleLang = () => {
    i18n.changeLanguage(otherLang)
    localStorage.setItem('i18n_lang', otherLang)
  }

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-surface/80 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollTo('#hero') }}
            className="font-display font-extrabold text-xl text-text-primary hover:text-accent transition-colors"
          >
            LP<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.key}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                className="font-body text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                {t(link.key)}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="font-mono text-xs text-accent border border-accent/40 hover:border-accent hover:bg-accent/10 px-3 py-1.5 rounded transition-all duration-200"
              aria-label={`Switch to ${otherLang.toUpperCase()}`}
            >
              {otherLang.toUpperCase()}
            </button>
          </nav>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLang}
              className="font-mono text-xs text-accent border border-accent/40 px-2.5 py-1 rounded"
            >
              {otherLang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="text-text-secondary hover:text-text-primary p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg-surface/95 backdrop-blur-md border-b border-border"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                  className="font-body text-base text-text-secondary hover:text-text-primary transition-colors py-1"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
