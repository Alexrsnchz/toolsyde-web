import { utilsData } from '@data/utilsData.ts'
import { LinkUtilProps, SidebarProps } from '@customTypes/sidebarTypes.ts'
import { NavLink } from 'react-router'
import { prefData } from '@data/prefData.ts'
import SideLink from '@components/navigation/sidebar/SideLink.tsx'

export function Utils({ isExpanded }: SidebarProps) {
  return (
    <ul className="flex flex-col items-start gap-5">
      {utilsData.map(({ icon, text, link }: LinkUtilProps, index) => (
        <li key={index} className="w-full">
          <SideLink link={link} icon={icon} text={text} isExpanded={isExpanded} />
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
      {prefData.map(({ icon: Icon, text, link, onClick }, index) => (
        <li
          key={index}
          className="w-full rounded-md hover:shadow-md group border border-transparent hover:border-purple-300 hover:bg-purple-950/30"
        >
          {link ? (
            <NavLink
              to={link}
              aria-label={`${text} page`}
              className="flex items-center p-2 w-full"
            >
              <Icon className="size-5 shrink-0 text-gray-700 group-hover:text-purple-800" />

              <div
                className={`
                ml-3 overflow-hidden transition-all duration-300 ease-in-out
                ${isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}
              `}
              >
                <span className="block whitespace-nowrap text-sm font-semibold text-gray-700 group-hover:text-purple-800">
                  {text}
                </span>
              </div>
            </NavLink>
          ) : (
            <button
              onClick={onClick}
              aria-label={`Switch to ${text}`}
              className="flex items-center p-2 w-full"
            >
              <Icon className="size-5 shrink-0 text-gray-700 group-hover:text-purple-800" />

              <div
                className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}
              >
                <span className="block whitespace-nowrap text-sm font-semibold text-gray-700 group-hover:text-purple-800">
                  {text}
                </span>
              </div>
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}
