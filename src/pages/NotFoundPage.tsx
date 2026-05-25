import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>404 – Leonardo Pottmayer</title>
      </Helmet>

      <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6 relative overflow-hidden">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[500px] h-[500px] rounded-full bg-accent-dim blur-[120px] opacity-40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center"
        >
          <div className="font-display font-extrabold text-[8rem] md:text-[12rem] leading-none text-border select-none">
            {t('notfound.code')}
          </div>

          <h1 className="font-display font-bold text-2xl md:text-3xl text-text-primary mt-4 mb-3">
            {t('notfound.heading')}
          </h1>

          <p className="font-body text-text-muted mb-10">
            {t('notfound.description')}
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body font-medium text-sm px-6 py-3 rounded-full border border-border hover:border-accent text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <ArrowLeft size={15} />
            {t('notfound.back')}
          </Link>
        </motion.div>
      </div>
    </>
  )
}
