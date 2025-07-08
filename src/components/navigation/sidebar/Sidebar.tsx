import { ContractedPanelIcon } from '@icons/Icons.tsx'
import {
  Logo,
  Preferences,
  Utils,
} from '@components/navigation/sidebar/NavigationItems.tsx'
import { useState } from 'react'

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
    const panelIcon = document.getElementById('panel_icon') as HTMLElement
    panelIcon.classList.toggle('rotate-180')
  }

  return (
    <aside
      className={`${isExpanded ? 'w-55' : 'w-16'} border-r-2 border-gray-300 bg-gray-200/30 dark:bg-cyan-500 transition-all duration-300 ease-in-out`}
    >
      <nav className="flex flex-col justify-between px-3 py-5 h-full">
        <div>
          <Logo isExpanded={isExpanded} />

          <hr className="relative my-5 border-t-2 border-gray-300" />

          <Utils isExpanded={isExpanded} />
        </div>
        <div>
          <hr className="my-5 border-t-2 border-gray-300" />

          <button
            onClick={toggleSidebar}
            aria-label={`${isExpanded ? 'Contract sidebar' : 'Expand sidebar'}`}
            className="flex justify-start items-center p-2 mb-5 w-full rounded-md hover:bg-gray-300/50 transition-all duration-300 ease-in-out"
          >
            <ContractedPanelIcon
              id="panel_icon"
              className="size-5 shrink-0 text-gray-700 group-hover:text-purple-800 transition-all duration-200 ease-in-out"
            />
          </button>

          <Preferences isExpanded={isExpanded} />
        </div>
      </nav>
    </aside>
  )
}
