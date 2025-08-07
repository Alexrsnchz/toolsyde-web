import FormSelect from '@components/form/FormSelect'
import { LicenseType, LicenseWizardStep } from '@customTypes/types'
import { licenseOptions } from '@data/licenseData'
import { FileSlidersIcon, MoveLeftIcon, MoveRightIcon } from '@icons/Icons'
import { UseFormReturn } from 'react-hook-form'

type KnownLicenseStepProps = {
  form: UseFormReturn<LicenseType>
  setCurrentStep: (step: LicenseWizardStep) => void
}

export default function KnownLicenseStep({
  form,
  setCurrentStep,
}: KnownLicenseStepProps) {
  const {
    register,
    formState: { errors },
  } = form

  return (
    <>
      <header className="flex flex-col justify-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <FileSlidersIcon className="size-5" />
          <p className="font-semibold">Select Your License</p>
        </div>
        <p className="text-sm text-gray-600">
          Choose the license you want to generate
        </p>
      </header>

      <FormSelect
        label="License Type"
        placeholder="Select license"
        options={licenseOptions}
        register={register('type')}
        error={errors.type}
      />

      <div className="flex gap-2">
        <button
          onClick={() => setCurrentStep('initial')}
          className="inline-flex items-center justify-center gap-2 bg-black text-white whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none hover:cursor-pointer disabled:opacity-50 h-10 px-4 py-2 flex-1"
        >
          <MoveLeftIcon className="size-4" />
          Back
        </button>
        <button
          onClick={() => setCurrentStep('generate')}
          className="inline-flex items-center justify-center gap-2 bg-black text-white whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none hover:cursor-pointer disabled:opacity-50 h-10 px-4 py-2 flex-1"
        >
          Continue
          <MoveRightIcon className="size-4" />
        </button>
      </div>
    </>
  )
}
