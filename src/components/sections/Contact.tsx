import { useTranslation } from 'react-i18next'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { personal } from '@/data/personal'

const links = [
  {
    key: 'contact.links.linkedin',
    href: personal.links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    key: 'contact.links.github',
    href: personal.links.github,
    icon: Github,
    external: true,
  },
  {
    key: 'contact.links.email',
    href: `mailto:${personal.email}`,
    icon: Mail,
    external: false,
  },
  {
    key: 'contact.links.whatsapp',
    href: `https://wa.me/${personal.whatsapp.replace(/\D/g, '')}`,
    icon: MessageCircle,
    external: true,
  },
]

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="bg-bg-secondary py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-accent-dim blur-[100px] opacity-40"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionLabel label={t('contact.label')} heading={t('contact.heading')} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="font-body text-text-muted text-base max-w-lg mb-12 leading-relaxed">
            {t('contact.subheading')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          {links.map(({ key, href, icon: Icon, external }, i) => (
            <AnimatedSection key={key} delay={i * 0.07}>
              <motion.a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent bg-bg-surface hover:bg-bg-elevated group transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-md bg-bg-elevated group-hover:bg-accent/10 border border-border group-hover:border-accent/40 flex items-center justify-center transition-colors duration-200">
                  <Icon size={16} className="text-text-muted group-hover:text-accent transition-colors" />
                </div>
                <span className="font-body font-medium text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  {t(key)}
                </span>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)',
          opacity: 0.2,
        }}
      />
    </section>
  )
}
