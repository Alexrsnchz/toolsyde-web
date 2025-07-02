import { useParams } from 'react-router'
import QrCodeGenerator from 'src/tools/QrCodeGenerator'

export default function ToolDetail() {
  const { category, slug } = useParams()

  switch (slug) {
    case 'qr-code':
      return <QrCodeGenerator />
    default:
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
        </div>
      )
  }
}
