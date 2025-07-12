import { useForm } from 'react-hook-form'
import useQr from 'src/hooks/useQr'
import type { QRFormInputs } from '@customTypes/types.ts'
import QrOutputSection from './components/QrOutputSection'
import QrFormSection from './components/QrFormSection'

export default function QrCodeGenerator() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<QRFormInputs>({
    defaultValues: {
      url: '',
      size: '256',
    },
  })

  const { qrBlobUrl, isLoading, onSubmit, onDownloadQr, resetQr } = useQr()

  const refreshData = () => {
    resetQr()
    reset()
  }

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl w-full items-center">
        <QrFormSection
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          isLoading={isLoading}
          refreshData={refreshData}
        />

        <QrOutputSection
          qrBlobUrl={qrBlobUrl}
          isLoading={isLoading}
          onDownloadQr={onDownloadQr}
          watch={watch}
        />
      </article>
    </section>
  )
}
