import { ToolsydeIcon } from '@icons/Icons.tsx'
import InfoNavigation from '@components/navigation/sidebar/InfoNavigation.tsx'
import UtilsNavigation from '@components/navigation/sidebar/UtilsNavigation.tsx'
import PreferencesNavigation from '@components/navigation/sidebar/PreferencesNavigation.tsx'

export default function Sidebar() {
  return (
    <aside className="p-3 border border-gray-300 bg-gray-200">
      <nav className="flex flex-col justify-between h-full">
        <div>
          <div className="p-2 rounded-md bg-gray-300">
            <ToolsydeIcon className="h-6 w-6 text-gray-700" />
          </div>

          <hr className="my-5 border-t border-gray-700" />

          <InfoNavigation />

          <hr className="my-5 border-t border-gray-700" />

          <UtilsNavigation />
        </div>

        <div>
          <hr className="my-5 border-t border-gray-700" />

          <PreferencesNavigation />
        </div>
      </nav>
    </aside>
  )
}
