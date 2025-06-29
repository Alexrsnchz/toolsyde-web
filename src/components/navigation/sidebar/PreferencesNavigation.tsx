import { Link } from 'react-router'
import { CogIcon, SunIcon } from '@icons/Icons.tsx'

export default function PreferencesNavigation() {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <Link
        to="/settings"
        className="relative p-2 rounded-md hover:shadow-md group border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-200 ease-in-out"
      >
        <CogIcon className="w-5 h-5 text-gray-700 group-hover:text-gray-950" />

        <span className="absolute left-full top-1/2 -translate-y-1/2 px-2 py-1 ml-3 rounded-md shadow-md opacity-0 group-hover:opacity-100 bg-white whitespace-nowrap text-sm font-medium transition-opacity duration-200 ease-in-out">
          Configuración
        </span>
      </Link>

      <button className="relative p-2 rounded-md hover:shadow-md group border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-200 ease-in-out">
        <SunIcon className="w-5 h-5 text-gray-700 group-hover:text-gray-950" />

        <span className="absolute left-full top-1/2 -translate-y-1/2 px-2 py-1 ml-3 rounded-md shadow-md opacity-0 group-hover:opacity-100 bg-white whitespace-nowrap text-sm font-medium transition-opacity duration-200 ease-in-out">
          Tema claro
        </span>
      </button>

      <button className="relative p-5 rounded-md cursor-pointer bg-gray-500"></button>
    </div>
  )
}
