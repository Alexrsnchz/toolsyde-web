import { utilsData } from '@data/utilsData.ts'
import { LinkUtilProps, SidebarProps } from '@customTypes/types.ts'
import { NavLink } from 'react-router'
import { CogIcon, SunIcon } from '@icons/Icons.tsx'

export function Utils({ isExpanded }: SidebarProps) {
  return (
    <ul className={`flex flex-col items-start gap-5`}>
      {utilsData.map(({ icon: Icon, text, link }: LinkUtilProps, index) => (
        <li
          key={index}
          className="p-2 rounded-md hover:shadow-md group border border-transparent hover:border-purple-300 hover:bg-purple-950/30"
        >
          <NavLink
            to={link}
            aria-label={`${text} page`}
            className="flex items-center gap-3"
          >
            <Icon className="size-5 text-gray-700 group-hover:text-purple-800" />

            <span
              className={`${isExpanded ? 'opacity-100' : 'opacity-0'} whitespace-nowrap text-sm font-semibold text-gray-700 group-hover:text-purple-800 transition-opacity duration-200 ease-in-out`}
            >
              {text}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export function Preferences({ isExpanded }: SidebarProps) {
  return (
    <ul
      className={`flex flex-col ${isExpanded ? 'justify-start' : 'items-center'} gap-5`}
    >
      <li className="p-2 rounded-md hover:shadow-md group border border-transparent hover:border-purple-300 hover:bg-purple-950/30">
        <NavLink
          to="/settings"
          aria-label="Settings page"
          className="flex items-center gap-3"
        >
          <CogIcon className="size-5 text-gray-700 group-hover:text-purple-800" />

          {isExpanded && (
            <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-800">
              Configuration
            </span>
          )}
        </NavLink>
      </li>

      <li className="p-2 rounded-md hover:shadow-md group border border-transparent hover:border-purple-300 hover:bg-purple-950/30">
        <button aria-label="Change theme" className="flex items-center gap-3">
          <SunIcon className="size-5 text-gray-700 group-hover:text-purple-800" />

          {isExpanded && (
            <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-800">
              Light theme
            </span>
          )}
        </button>
      </li>

      <li>
        <NavLink
          to="/profile/:{id}"
          aria-label="View profile"
          className="flex items-center gap-3"
        >
          <div className="p-5 rounded-md hover:shadow-md group bg-gray-500"></div>
          {isExpanded && (
            <div className="flex flex-col">
              <h5 className="text-sm font-semibold text-gray-700 group-hover:text-purple-800">
                Alex Sanchez
              </h5>

              <span className="text-xs font-semibold text-gray-700 group-hover:text-purple-800">
                User tier
              </span>
            </div>
          )}
        </NavLink>
      </li>
    </ul>
  )
}
