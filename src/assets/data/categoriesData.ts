import type { Category } from '@customTypes/types'

export const categoriesData: Category[] = [
  {
    title: 'Generators',
    slug: 'generators',
    color: 'bg-red-300/60',
  },
  {
    title: 'Validators',
    slug: 'validators',
    color: 'bg-emerald-300/60',
  },
  {
    title: 'UI Tools',
    slug: 'ui-tools',
    color: 'bg-violet-300/60',
  },
  {
    title: 'Formatters',
    slug: 'formatters',
    color: 'bg-cyan-300/60',
  },
]

export function getToolCategory(title: string) {
  return categoriesData.find(
    (category) => category.title.toLowerCase() === title.toLowerCase(),
  )
}
