import { LicenseFormInputs, LicenseType } from '@customTypes/types'
import mit from 'src/assets/licenses/mit.txt?raw'
import boost from 'src/assets/licenses/boost.txt?raw'

export function generateLicense(
  data: LicenseFormInputs,
  licenseType: LicenseType,
): string {
  const { company, year } = data
  console.log({ licenseType })
  const templates = {
    mit,
    boost,
  }

  let license = templates[licenseType.type]
  license = license
    .replace('{{YEAR}}', year.toString())
    .replace('{{AUTHOR}}', company)

  return license
}
