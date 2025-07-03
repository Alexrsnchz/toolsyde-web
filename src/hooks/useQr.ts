import { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

type Inputs = {
  url: string
  size: '128' | '256' | '512' | '1024'
}

export default function useQr() {
  const [qrBlobUrl, setQrBlobUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    return () => {
      if (qrBlobUrl) URL.revokeObjectURL(qrBlobUrl)
    }
  }, [])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (qrBlobUrl) URL.revokeObjectURL(qrBlobUrl)

    setIsLoading(true)
    setQrBlobUrl(null)

    const { url, size } = data

    const encoded = encodeURIComponent(url.trim())
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encoded}&size=${size}x${size}&margin=16&t=${Date.now()}`

    try {
      const response = await fetch(qrCodeUrl)
      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)

      setQrBlobUrl(blobUrl)
    } catch (error) {
      alert('Error generating QR code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Create a temporary link element, set its href to the QR code blob URL, and trigger a download
  const onDownloadQr = async () => {
    if (!qrBlobUrl) return

    const link = document.createElement('a')
    link.href = qrBlobUrl
    link.download = 'qr-code.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resetQr = () => {
    if (qrBlobUrl) URL.revokeObjectURL(qrBlobUrl)
    setQrBlobUrl(null)
    setIsLoading(false)
  }

  return { qrBlobUrl, isLoading, onSubmit, onDownloadQr, resetQr }
}
