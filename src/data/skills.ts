export interface SkillCategory {
  id: string
  labelKey: string
  items: string[]
  translateItems?: boolean
}

export const skills: SkillCategory[] = [
  {
    id: 'backend',
    labelKey: 'skills.categories.backend',
    items: ['C#', '.NET / ASP.NET', '.NET Framework', 'Node.js', 'Python', 'Web Forms', 'REST APIs', 'Swagger', 'xUnit'],
  },
  {
    id: 'frontend',
    labelKey: 'skills.categories.frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'Vue.js', 'Tailwind CSS'],
  },
  {
    id: 'database',
    labelKey: 'skills.categories.database',
    items: ['Oracle', 'PL/SQL', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    id: 'infrastructure',
    labelKey: 'skills.categories.infrastructure',
    items: ['Docker', 'RabbitMQ', 'Azure DevOps', 'Git / GitFlow'],
  },
  {
    id: 'practices',
    labelKey: 'skills.categories.practices',
    items: ['Clean Code', 'SOLID', 'System Design', 'Microservices', 'Scrum', 'Hexagonal Architecture', 'Clean Architecture', 'AI & Prompt Engineering'],
  },
  {
    id: 'soft',
    labelKey: 'skills.categories.soft',
    translateItems: true,
    items: [
      'skills.soft.requirements_gathering',
      'skills.soft.business_communication',
      'skills.soft.problem_solving',
      'skills.soft.teamwork',
      'skills.soft.continuous_learning',
      'skills.soft.adaptability',
      'skills.soft.creativity',
      'skills.soft.proactivity',
      'skills.soft.empathy',
      'skills.soft.ethics',
    ],
  },
]
