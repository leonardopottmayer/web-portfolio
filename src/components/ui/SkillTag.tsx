interface SkillTagProps {
  label: string
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-block px-3 py-1.5 text-sm font-body font-medium text-text-secondary bg-bg-surface border border-border rounded-md hover:border-accent hover:text-accent transition-colors duration-200">
      {label}
    </span>
  )
}
