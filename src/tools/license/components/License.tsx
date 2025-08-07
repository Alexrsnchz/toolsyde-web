import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  LicenseFormInputs,
  LicenseType,
  LicenseWizardStep,
} from '@customTypes/types'
import InitialStep from './EntryPointStep'
import KnownLicenseStep from './KnownLicenseStep'
import LicenseDetailsStep from './LicenseDetailsStep'
import { generateLicense } from '@functions/license/GenerateLicense'
import { CopyIcon, FileCheck } from '@icons/Icons'
import { getLicenseName } from '@functions/license/GetLicenseName'
import { copyLicense } from '@functions/license/CopyLicense'

export default function License() {
  const [currentStep, setCurrentStep] = useState<LicenseWizardStep>('initial')
  const licenseTypeForm = useForm<LicenseType>()
  const licenseForm = useForm<LicenseFormInputs>({
    defaultValues: {
      year: new Date().getFullYear(),
    },
  })

  const showResult = () => {
    setCurrentStep('result')
  }

  const renderResult = () => {
    const licenseData = licenseForm.getValues()
    const licenseType = licenseTypeForm.getValues()
    const license = generateLicense(licenseData, licenseType)

    return (
      <>
        <header className="flex justify-between items-center mb-4">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
              <FileCheck className="size-5" />
              <p className="font-semibold">Generated License</p>
            </div>
            <p className="text-sm text-gray-600">
              {getLicenseName(licenseTypeForm.getValues().type)}
            </p>
          </div>
          <button
            onClick={() => copyLicense(license)}
            className="flex items-center gap-2 text-sm cursor-pointer border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-200 h-fit transition-colors duration-200"
          >
            <CopyIcon className="size-4" />
            <span>Copy</span>
          </button>
        </header>

        <pre className="bg-gray-100 rounded-md mono p-6 text-sm">{license}</pre>
        <button
          onClick={() => resetLicense()}
          className="inline-flex items-center justify-center gap-2 bg-black text-white whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none hover:cursor-pointer disabled:opacity-50 h-10 px-4 py-2 flex-1"
        >
          Generate Another License
        </button>
      </>
    )
  }

  const resetLicense = () => {
    setCurrentStep('initial')
    licenseTypeForm.reset()
    licenseForm.reset()
  }

  return (
    <div className="flex justify-center items-center h-full">
      <section className="flex flex-col gap-4 border border-gray-200 rounded-md p-6 w-full">
        {currentStep === 'initial' && InitialStep({ setCurrentStep })}
        {currentStep === 'know-license' &&
          KnownLicenseStep({ form: licenseTypeForm, setCurrentStep })}
        {currentStep === 'generate' &&
          LicenseDetailsStep({
            form: licenseForm,
            licenseType: licenseTypeForm.getValues().type,
            setCurrentStep,
            showResult,
          })}
        {currentStep === 'result' && renderResult()}
      </section>
    </div>
  )
}
