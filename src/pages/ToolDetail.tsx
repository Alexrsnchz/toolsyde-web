import { useParams } from 'react-router'
import License from 'src/tools/license/components/License'
import QrCodeGenerator from 'src/tools/qr-code/QrCodeGenerator'

export default function ToolDetail() {
  const { slug } = useParams()
  // const { category, slug } = useParams()

  return (
    <>
      {slug === 'qr-code' && <QrCodeGenerator />}
      {slug === 'license' && <License />}
    </>
  )
}
