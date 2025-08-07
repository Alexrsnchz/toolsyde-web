import FormInput from '@components/form/FormInput'
import { LicenseFormInputs, LicenseWizardStep } from '@customTypes/types'
import { getLicenseName } from '@functions/license/GetLicenseName'
import { FileSlidersIcon, MoveLeftIcon } from '@icons/Icons'
import { UseFormReturn } from 'react-hook-form'

type KnowLicenseStepProps = {
  form: UseFormReturn<LicenseFormInputs>
  licenseType: string
  setCurrentStep: (step: LicenseWizardStep) => void
  showResult: () => void
}

export default function LicenseDetailsStep({
  form,
  licenseType,
  setCurrentStep,
  showResult,
}: KnowLicenseStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <>
      <header className="flex flex-col justify-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <FileSlidersIcon className="size-5" />
          <p className="font-semibold">License details</p>
        </div>
        <p className="text-sm text-gray-600">
          Generating: {getLicenseName(licenseType)}
        </p>
      </header>
      <form
        className="space-y-2"
        onSubmit={handleSubmit(() => {
          showResult()
        })}
      >
        <FormInput
          label="Company/Author Name"
          placeholder="https://example.com"
          register={register('company', {
            required: 'Company is required',
          })}
          error={errors.company}
          focus
        />

        <FormInput
          label="Year"
          type="number"
          placeholder="e.g. 2025"
          register={register('year', {
            required: 'Year is required',
          })}
          error={errors.year}
        />

        <div className="flex gap-2 pt-4">
          <button
            type="button"
            onClick={() => setCurrentStep('know-license')}
            className="inline-flex items-center justify-center gap-2 bg-black text-white whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none hover:cursor-pointer disabled:opacity-50 h-10 px-4 py-2 flex-1"
          >
            <MoveLeftIcon className="size-4" />
            Back
          </button>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-black text-white whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none hover:cursor-pointer disabled:opacity-50 h-10 px-4 py-2 flex-1"
          >
            Generate License
          </button>
        </div>
      </form>
    </>
  )
}
