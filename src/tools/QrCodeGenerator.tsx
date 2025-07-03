import FormInput from '@components/form/FormInput'
import FormSelect from '@components/form/FormSelect'
import {
  DownloadIcon,
  LinkIcon,
  QrCodeIcon,
  RefreshIcon,
  SpinnerIcon,
} from '@icons/Icons'
import { useForm } from 'react-hook-form'
import useQr from 'src/hooks/useQr'

type Inputs = {
  url: string
  size: '128' | '256' | '512' | '1024'
}

const sizeOptions = [
  { label: '128x128 px', value: '128' },
  { label: '256x256 px', value: '256' },
  { label: '512x512 px', value: '512' },
  { label: '1024x1024 px', value: '1024' },
]

export default function QrCodeGenerator() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      url: '',
      size: '256',
    },
  })

  const { qrBlobUrl, isLoading, onSubmit, onDownloadQr, resetQr } = useQr()

  const refreshData = () => {
    // Reset QR code URL
    resetQr()
    // Reset form values
    reset()
  }

  return (
    <>
      <header className="py-4 border-b-2 border-gray-300">
        <div className="flex items-center gap-2">
          <QrCodeIcon className="size-4" />
          <p>QR Code Generator</p>
        </div>
      </header>
      <article className="grid grid-cols-2 gap-6 max-w-4xl mx-auto py-6 items-stretch">
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
            className="flex flex-col h-full"
          >
            <div className="space-y-2">
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

        <section className="flex flex-col gap-4 border border-gray-200 rounded-md p-6">
          <header className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <QrCodeIcon className="size-5" />
              <p className="font-semibold">Generated QR Code</p>
            </div>
            <p className="text-sm text-gray-600">
              Your QR code will appear here once generated
            </p>
          </header>

          <div className="bg-gray-200 w-full h-72 rounded-md flex items-center justify-center">
            {isLoading ? (
              <SpinnerIcon className="animate-spin text-gray-500 size-6" />
            ) : qrBlobUrl ? (
              <div className="space-y-4 text-center">
                <img
                  src={qrBlobUrl}
                  alt={`Qr code for ${watch('url')}`}
                  className="rounded-md w-36 mx-auto"
                />
                <button
                  onClick={onDownloadQr}
                  className="flex justify-center items-center gap-2 py-2 bg-black text-white font-medium text-sm rounded-md w-full hover:cursor-pointer"
                >
                  <DownloadIcon className="size-4" />
                  Download PNG
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 text-center text-gray-600">
                <QrCodeIcon className="size-14" />
                <div>
                  <p className="font-medium">No QR code generated</p>
                  <p className="text-sm">Enter a URL and click generate</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </article>
    </>
  )
}
