import { licenseOptions } from '@data/licenseData'

export function getLicenseName(licenseType: string): string {
  const licenseNames = licenseOptions.filter(
    (option) => option.value === licenseType,
  )

  return licenseNames[0].label || 'Unknown License'
}
