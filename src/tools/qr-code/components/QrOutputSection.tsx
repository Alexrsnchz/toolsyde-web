import { QRFormInputs } from '@customTypes/types'
import { DownloadIcon, QrCodeIcon, SpinnerIcon } from '@icons/Icons'
import { UseFormWatch } from 'react-hook-form'

type QrOutputSectionProps = {
  qrBlobUrl: string | null
  isLoading: boolean
  onDownloadQr: () => void
  watch: UseFormWatch<QRFormInputs>
}

export default function QrOutputSection({
  qrBlobUrl,
  isLoading,
  onDownloadQr,
  watch,
}: QrOutputSectionProps) {
  return (
    <section className="flex flex-col gap-4 border border-gray-200 rounded-md p-6 h-full">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <QrCodeIcon className="size-5" />
          <p className="font-semibold">Generated QR Code</p>
        </div>
        <p className="text-sm text-gray-600">
          Your QR code will appear here once generated
        </p>
      </header>

      <div className="bg-gray-200 w-full h-60 rounded-md flex items-center justify-center">
        {isLoading ? (
          <SpinnerIcon />
        ) : qrBlobUrl ? (
          <div className="space-y-4 text-center">
            <div className="p-3 rounded-md bg-white">
              <img
                src={qrBlobUrl}
                alt={`Qr code for ${watch('url')}`}
                className="rounded-md w-30 mx-auto"
              />
            </div>

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
  )
}
