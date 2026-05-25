import { useTranslation } from 'react-i18next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Timeline } from '@/components/ui/Timeline'
import { education } from '@/data/education'

export function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="bg-bg-secondary py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionLabel label={t('education.label')} heading={t('education.heading')} />
        </AnimatedSection>

        <Timeline entries={education} presentKey="education.present" />
      </div>
    </section>
  )
}
