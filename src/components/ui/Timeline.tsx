import { useTranslation } from 'react-i18next'
import { AnimatedSection } from './AnimatedSection'
import { SkillTag } from './SkillTag'
import type { TimelineEntry } from '@/data/experience'

interface TimelineProps {
  entries: TimelineEntry[]
  presentKey: string
}

function formatPeriod(start: string, end: string | null, presentLabel: string): string {
  const fmt = (s: string) => {
    const [year, month] = s.split('-')
    return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
  }
  return `${fmt(start)} — ${end ? fmt(end) : presentLabel}`
}

export function Timeline({ entries, presentKey }: TimelineProps) {
  const { t } = useTranslation()
  const presentLabel = t(presentKey)

  return (
    <div className="relative">
      {/* vertical rail */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-10">
        {entries.map((entry, i) => (
          <AnimatedSection key={entry.id} delay={i * 0.1}>
            <div className="flex gap-6">
              {/* dot */}
              <div className="relative flex-shrink-0 mt-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-bg-primary" />
              </div>

              {/* content */}
              <div className="pb-2">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-display font-semibold text-lg text-text-primary leading-tight">
                    {t(entry.roleKey)}
                  </h3>
                  <span className="text-accent font-body font-medium text-sm">
                    {entry.organization}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                  <span className="font-mono text-xs text-text-muted">
                    {formatPeriod(entry.period.start, entry.period.end, presentLabel)}
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    {entry.location}
                  </span>
                </div>

                <p className="font-body text-text-secondary text-sm leading-relaxed mb-4 max-w-2xl">
                  {t(entry.descriptionKey)}
                </p>

                {entry.tags && entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map(tag => (
                      <SkillTag key={tag} label={tag} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
