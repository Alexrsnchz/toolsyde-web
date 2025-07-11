import { CogIcon, MoonIcon, SunIcon } from '@icons/Icons.tsx'
import { switchTheme } from '@functions/navigation/SwitchTheme.ts'

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
    handleClick: switchTheme,
  },
]
