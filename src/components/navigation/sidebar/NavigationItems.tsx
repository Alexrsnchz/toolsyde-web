import { utilsData } from '@data/utilsData.ts'
import { LinkUtilProps, SidebarProps } from '@customTypes/sidebarTypes.ts'
import { prefData } from '@data/prefData.ts'
import {
  SideButton,
  SideLink,
} from '@components/navigation/sidebar/SideComponents.tsx'

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
