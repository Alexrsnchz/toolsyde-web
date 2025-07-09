import { QrCodeIcon } from '@icons/Icons'

type Props = {
  children: React.ReactNode
}

export default function ToolsLayout({ children }: Props) {
  return (
    <>
      <header className="py-[26.9px] px-5 border-b-2 border-gray-300">
        <div className="flex items-center gap-2">
          <QrCodeIcon className="size-5" />
          <span className="font-medium">QR Code Generator</span>
        </div>
      </header>

      <section className="h-[calc(100vh-79.5px)] px-4">{children}</section>
    </>
  )
}
