export interface SubRoleEntry {
  id: string
  roleKey: string
  period: { start: string; end: string | null }
  introKey: string
  bulletsKey: string
}

export interface TimelineEntry {
  id: string
  organization: string
  period: { start: string; end: string | null }
  location: string
  subRoles?: SubRoleEntry[]
  roleKey?: string
  descriptionKey?: string
  tags?: string[]
}

export const experience: TimelineEntry[] = [
  {
    id: 'quicksoft',
    organization: 'Quick Soft Tecnologia',
    period: { start: '2022-06', end: null },
    location: 'Blumenau, SC',
    subRoles: [
      {
        id: 'quicksoft-pleno',
        roleKey: 'experience.quicksoft_pleno.role',
        period: { start: '2025-11', end: null },
        introKey: 'experience.quicksoft_pleno.intro',
        bulletsKey: 'experience.quicksoft_pleno.bullets',
      },
      {
        id: 'quicksoft-junior',
        roleKey: 'experience.quicksoft_junior.role',
        period: { start: '2023-04', end: '2025-11' },
        introKey: 'experience.quicksoft_junior.intro',
        bulletsKey: 'experience.quicksoft_junior.bullets',
      },
      {
        id: 'quicksoft-aprendiz',
        roleKey: 'experience.quicksoft_aprendiz.role',
        period: { start: '2022-06', end: '2023-04' },
        introKey: 'experience.quicksoft_aprendiz.intro',
        bulletsKey: 'experience.quicksoft_aprendiz.bullets',
      },
    ],
    tags: [
      'C#', 'ASP.NET', '.NET', '.NET Framework', 'React', 'TypeScript', 'JavaScript',
      'Node.js', 'Python', 'Oracle', 'PL/SQL', 'Docker', 'Redis',
      'RabbitMQ', 'REST APIs', 'Swagger', 'xUnit', 'Microservices',
      'Git', 'Azure DevOps', 'SOLID', 'Clean Code',
      'Hexagonal Architecture', 'Clean Architecture', 'Scrum',
    ],
  },
]
