export function copyLicense(licenseText: string): void {
  navigator.clipboard
    .writeText(licenseText)
    .then(() => {
      console.log('License copied to clipboard')
    })
    .catch((error) => {
      console.error('Failed to copy license:', error)
    })
}
