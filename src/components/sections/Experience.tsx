import { useTranslation } from 'react-i18next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Timeline } from '@/components/ui/Timeline'
import { experience } from '@/data/experience'

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="bg-bg-primary py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionLabel label={t('experience.label')} heading={t('experience.heading')} />
        </AnimatedSection>

        <Timeline entries={experience} presentKey="experience.present" />
      </div>
    </section>
  )
}
