import { useTranslation } from 'react-i18next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SkillTag } from '@/components/ui/SkillTag'
import { skills } from '@/data/skills'

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="bg-bg-primary py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionLabel label={t('skills.label')} heading={t('skills.heading')} />
        </AnimatedSection>

        <div className="space-y-8">
          {skills.map((category, i) => (
            <AnimatedSection key={category.id} delay={i * 0.08}>
              <div>
                <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase mb-3">
                  {t(category.labelKey)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(item => (
                    <SkillTag key={item} label={category.translateItems ? t(item) : item} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
