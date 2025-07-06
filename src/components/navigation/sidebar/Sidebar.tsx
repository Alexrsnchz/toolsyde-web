import { ToolsydeIcon } from '@icons/Icons.tsx'
import {
  Preferences,
  Utils,
} from '@components/navigation/sidebar/NavigationItems.tsx'
import { useState } from 'react'

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <aside
      className={`${isExpanded ? 'w-55' : 'w-16'} border-r-2 border-gray-300 bg-gray-200/30 dark:bg-cyan-500 transition-all duration-300 ease-in-out`}
    >
      <nav className="flex flex-col justify-between px-3 py-5 h-full">
        <div>
          <div className="flex justify-start items-center gap-3">
            <div className="p-2 rounded-md bg-purple-500/40">
              <ToolsydeIcon className="size-5 text-purple-800" />
            </div>

            {isExpanded && (
              <span className="text-lg font-bold text-gray-800">Toolsyde</span>
            )}
          </div>

          <hr className="my-5 border-t-2 border-gray-300" />

          <Utils isExpanded={isExpanded} />
        </div>
        <div>
          <hr className="my-5 border-t-2 border-gray-300" />

          <Preferences isExpanded={isExpanded} />
        </div>
      </nav>
      <button onClick={expandSidebar} className="px-2 py-1 bg-gray-500">
        Change
      </button>
    </aside>
  )
}
