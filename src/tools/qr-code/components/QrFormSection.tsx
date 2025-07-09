import FormInput from '@components/form/FormInput'
import FormSelect from '@components/form/FormSelect'
import { QRFormInputs } from '@customTypes/types'
import { LinkIcon, QrCodeIcon, RefreshIcon } from '@icons/Icons'
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

type QrFormSectionProps = {
  register: UseFormRegister<QRFormInputs>
  handleSubmit: UseFormHandleSubmit<QRFormInputs>
  onSubmit: (data: QRFormInputs) => void
  errors: FieldErrors<QRFormInputs>
  isLoading: boolean
  refreshData: () => void
}

const sizeOptions = [
  { label: '128x128 px', value: '128' },
  { label: '256x256 px', value: '256' },
  { label: '512x512 px', value: '512' },
  { label: '1024x1024 px', value: '1024' },
]

export default function QrFormSection({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isLoading,
  refreshData,
}: QrFormSectionProps) {
  return (
    <section className="flex flex-col gap-4 border border-gray-200 rounded-md p-6 h-full">
      <header className="flex flex-col justify-center gap-2">
        <div className="flex items-center gap-2">
          <LinkIcon className="size-5" />
          <p className="font-semibold">Input</p>
        </div>
        <p className="text-sm text-gray-600">
          Enter the URL or text you want to convert to a QR code
        </p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full"
      >
        <div className="space-y-4">
          <FormInput
            label="URL or Text"
            placeholder="https://example.com"
            register={register('url', {
              required: 'URL or text is required',
            })}
            error={errors.url}
          />

          <FormSelect
            label="Size"
            placeholder="Select size"
            options={sizeOptions}
            register={register('size')}
            error={errors.size}
          />
        </div>
        <div className="flex gap-2 mt-4">
          <button
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 bg-black text-white whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none hover:cursor-pointer disabled:opacity-50 h-10 px-4 py-2 flex-1"
          >
            <QrCodeIcon className="size-4" />
            {isLoading ? 'Generating...' : 'Generate QR Code'}
          </button>
          <button
            type="button"
            onClick={refreshData}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border border-gray-300 h-10 px-4 py-2 hover:cursor-pointer hover:bg-gray-200"
          >
            <RefreshIcon className="size-5" />
          </button>
        </div>
      </form>
    </section>
  )
}
