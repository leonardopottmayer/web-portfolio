import { useTranslation } from 'react-i18next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { personal } from '@/data/personal'

function yearsSince(dateStr: string): number {
  const start = new Date(dateStr)
  const now = new Date()
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
}

export function About() {
  const { t } = useTranslation()

  const stats = [
    { value: `${yearsSince(personal.studyingSince)}+`, key: 'about.stats.studying' },
    { value: `${yearsSince(personal.professionalSince)}+`, key: 'about.stats.experience' },
    { value: '10+', key: 'about.stats.technologies' },
  ]

  return (
    <section id="about" className="bg-bg-secondary py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionLabel label={t('about.label')} heading={t('about.heading')} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
            {t('about.paragraph')}
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.2}>
          <div className="mt-12 grid grid-cols-3 gap-6 md:gap-10 max-w-lg">
            {stats.map(stat => (
              <div key={stat.key} className="group">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-accent group-hover:text-accent-hover transition-colors">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-text-muted mt-1 leading-snug">
                  {t(stat.key)}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
