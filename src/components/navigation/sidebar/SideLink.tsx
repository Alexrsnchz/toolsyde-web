import { NavLink } from 'react-router'
import type { LinkUtilProps } from '@customTypes/sidebarTypes.ts'

export default function SideLink({ icon: Icon, text, link, isExpanded }: LinkUtilProps) {
  return (
    <NavLink
      to={link}
      aria-label={`Go to ${text} page`}
      className={({ isActive }) =>
        `flex items-center p-2 w-full rounded-md hover:shadow-md group border hover:border-orange-300 hover:bg-orange-600/40 hover:text-orange-700 transition-color duration-300 ease-in-out
        ${isActive ? 'shadow-md border-orange-300 bg-orange-500/40 text-orange-900' : 'border-transparent text-gray-700'}`
      }
    >
      <Icon className="size-5 shrink-0" />

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
