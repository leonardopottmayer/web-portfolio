export interface TimelineEntry {
  id: string
  organization: string
  roleKey: string
  period: { start: string; end: string | null }
  location: string
  descriptionKey: string
  tags?: string[]
}

export const experience: TimelineEntry[] = [
  {
    id: 'quicksoft-pleno',
    organization: 'Quick Soft Tecnologia',
    roleKey: 'experience.roles.pleno',
    period: { start: '2025-11', end: null },
    location: 'Blumenau, SC',
    descriptionKey: 'experience.quicksoft_pleno.description',
    tags: ['C#', 'ASP.NET', '.NET', '.NET Framework', 'React', 'TypeScript', 'Docker', 'Oracle', 'PL/SQL', 'Redis', 'RabbitMQ', 'Node.js', 'Python', 'Microservices', 'Scrum'],
  },
  {
    id: 'quicksoft-junior',
    organization: 'Quick Soft Tecnologia',
    roleKey: 'experience.roles.junior',
    period: { start: '2023-04', end: '2025-11' },
    location: 'Blumenau, SC',
    descriptionKey: 'experience.quicksoft_junior.description',
    tags: ['C#', 'ASP.NET', '.NET', '.NET Framework', 'React', 'TypeScript', 'Docker', 'Oracle', 'PL/SQL', 'Redis', 'RabbitMQ', 'Node.js', 'Python', 'Microservices', 'Scrum'],
  },
  {
    id: 'quicksoft-aprendiz',
    organization: 'Quick Soft Tecnologia',
    roleKey: 'experience.roles.aprendiz',
    period: { start: '2022-06', end: '2023-04' },
    location: 'Blumenau, SC',
    descriptionKey: 'experience.quicksoft_aprendiz.description',
    tags: ['C#', 'ASP.NET', '.NET', '.NET Framework', 'Oracle', 'PL/SQL', 'Web Forms'],
  },
]
