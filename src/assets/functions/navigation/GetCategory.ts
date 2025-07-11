import type { LinkUtilProps } from '@customTypes/navigationTypes.ts'

export function getCategory(data: LinkUtilProps[], text: string): LinkUtilProps | undefined {
  return data.find(item => item.text === text)
}