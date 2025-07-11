import type { UtilProps } from '@customTypes/navigationTypes.ts'

export default function Header({ icon: Icon, text }: UtilProps) {
  return (
    <header className="py-[24.8px] px-5 border-b-2 border-gray-300">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-gray-700" />

        <span className="text-lg font-semibold text-gray-700">{text}</span>
      </div>
    </header>
  )
}
