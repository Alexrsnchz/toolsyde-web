import { info } from '@data/infoData.ts'
import type { UtilProps } from '@customTypes/types.ts'

export default function InfoNavigation() {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {info.map(({ icon: Icon, tooltip }: UtilProps) => (
        <button className="relative p-2 rounded-md hover:shadow-md group border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-200 ease-in-out">
          <Icon className="w-5 h-5 text-gray-700 group-hover:text-gray-950" />

          <span className="absolute left-full top-1/2 -translate-y-1/2 px-2 py-1 ml-3 rounded-md shadow-md opacity-0 group-hover:opacity-100 bg-white whitespace-nowrap text-sm font-medium transition-opacity duration-200 ease-in-out">
            {tooltip}
          </span>
        </button>
      ))}
    </div>
  )
}
