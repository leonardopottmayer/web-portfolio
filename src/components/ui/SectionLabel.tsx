interface SectionLabelProps {
  label: string
  heading: string
}

export function SectionLabel({ label, heading }: SectionLabelProps) {
  return (
    <div className="mb-12">
      <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">
        {heading}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
    </div>
  )
}
