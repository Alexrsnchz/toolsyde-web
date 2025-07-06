export function SwitchTheme() {
  const isDark = document.documentElement.classList.toggle('dark')

  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}
