import { CogIcon, MoonIcon, SunIcon } from '@icons/Icons.tsx'
import { SwitchTheme } from '@functions/SwitchTheme.ts'

const theme: string | null = localStorage.getItem('theme')

export const prefData = [
  {
    icon: CogIcon,
    text: 'Settings',
    link: '/settings',
  },
  {
    icon: theme === 'dark' ? MoonIcon : SunIcon,
    text: theme === 'dark' ? 'Dark theme' : 'Light theme',
    handleClick: SwitchTheme,
  },
]
