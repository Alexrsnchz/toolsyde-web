import { NavLink } from 'react-router'
import type { LinkUtilProps, UtilProps } from '@customTypes/sidebarTypes.ts'

export function SideLink({
  icon: Icon,
  text,
  link,
  isExpanded,
}: LinkUtilProps) {
  return (
    <NavLink
      to={link}
      aria-label={`Go to ${text} page`}
      className={({ isActive }) =>
        `group flex items-center p-2 w-full rounded-md border transition-color duration-300 ease-in-out
        ${
          isActive
            ? 'shadow-md border-orange-300 bg-orange-500/40 text-orange-900'
            : 'border-transparent text-gray-700 hover:border-orange-300 hover:bg-orange-600/40 hover:text-orange-700'
        }`
      }
    >
      <div className="relative flex items-center">
        <Icon className="size-5 shrink-0" />

        {!isExpanded && (
          <span className="absolute left-full z-20 px-1.5 py-0.5 ml-4 rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap text-xs font-medium text-gray-100 bg-neutral-900 transition-opacity duration-300 ease-in-out">
            {text}
          </span>
        )}
      </div>

      <div
        className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out
        ${isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}
      >
        <span className="block whitespace-nowrap text-sm font-semibold">
          {text}
        </span>
      </div>
    </NavLink>
  )
}

export function SideButton({
  icon: Icon,
  text,
  handleClick,
  isExpanded,
}: UtilProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Go to ${text} page`}
      className="flex items-center p-2 w-full rounded-md hover:shadow-md group border border-transparent hover:border-orange-300 hover:bg-orange-600/40 text-gray-700 hover:text-orange-700 transition-color duration-300 ease-in-out"
    >
      <div className="relative flex items-center">
        <Icon className="size-5 shrink-0" />

        {!isExpanded && (
          <span className="absolute left-full z-20 px-1.5 py-0.5 ml-4 rounded-sm opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap text-xs font-medium text-gray-100 bg-neutral-900 transition-opacity duration-300 ease-in-out">
            {text}
          </span>
        )}
      </div>

      <div
        className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out
        ${isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}
      >
        <span className="block whitespace-nowrap text-sm font-semibold">
          {text}
        </span>
      </div>
    </button>
  )
}
