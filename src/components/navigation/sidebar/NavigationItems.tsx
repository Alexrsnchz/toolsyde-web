import { utilsData } from '@data/utilsData.ts'
import { LinkUtilProps, SidebarProps } from '@customTypes/sidebarTypes.ts'
import { prefData } from '@data/prefData.ts'
import {
  SideButton,
  SideLink,
} from '@components/navigation/sidebar/SideComponents.tsx'
import { NavLink } from 'react-router'
import { LogoIcon } from '@icons/Icons.tsx'

export function Logo({ isExpanded }: SidebarProps) {
  return (
    <NavLink to="/toolbox" className="flex justify-start items-center w-full rounded-md">
      <div className="p-1.5 rounded-md border border-transparent bg-neutral-900">
        <LogoIcon className="size-6 shrink-0 text-white" />
      </div>

      <div
        className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out 
        ${isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}`}
      >
        <span className="block whitespace-nowrap text-2xl font-bold">
          Toolsyde
        </span>
      </div>
    </NavLink>
  )
}

export function Utils({ isExpanded }: SidebarProps) {
  return (
    <ul className="flex flex-col items-start gap-5">
      {utilsData.map(({ icon, text, link }: LinkUtilProps, index) => (
        <li key={index} className="w-full">
          <SideLink
            link={link}
            icon={icon}
            text={text}
            isExpanded={isExpanded}
          />
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
      {prefData.map(({ icon, text, link, handleClick }, index) => (
        <li key={index} className="w-full">
          {link ? (
            <SideLink
              link={link}
              icon={icon}
              text={text}
              isExpanded={isExpanded}
            />
          ) : (
            <SideButton
              icon={icon}
              text={text}
              handleClick={handleClick}
              isExpanded={isExpanded}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
