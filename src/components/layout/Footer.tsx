import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-bg-primary border-t border-border py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm italic text-text-muted leading-relaxed">
          "{t('footer.quote')}"
        </p>
        <p className="font-mono text-xs text-border mt-3 tracking-widest uppercase">
          — Albert Einstein
        </p>
      </div>
    </footer>
  )
}
