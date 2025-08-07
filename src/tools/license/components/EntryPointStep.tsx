import { LicenseWizardStep } from '@customTypes/types'
import { CheckIcon, CircleQuestionMarkIcon, CompassIcon } from '@icons/Icons'

interface InitialStepProps {
  setCurrentStep: (step: LicenseWizardStep) => void
}

export default function EntryPointStep({ setCurrentStep }: InitialStepProps) {
  return (
    <>
      <header className="flex flex-col justify-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <CompassIcon className="size-5" />
          <p className="font-semibold">Let's get started</p>
        </div>
        <p className="text-sm text-gray-600">
          Do you already know which license you want to use?
        </p>
      </header>

      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => setCurrentStep('know-license')}
          className="inline-flex items-center justify-center gap-2 bg-black text-white whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none hover:cursor-pointer disabled:opacity-50 h-10 px-4 py-2 flex-1"
        >
          <CheckIcon className="size-4" />
          Yes, I know
        </button>
        <button className="inline-flex items-center justify-center gap-2 bg-black text-white whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none hover:cursor-pointer disabled:opacity-50 h-10 px-4 py-2 flex-1">
          <CircleQuestionMarkIcon className="size-4" />
          Help me choose
        </button>
      </div>
    </>
  )
}
