export function switchTheme() {
  const isDark = document.documentElement.classList.toggle('dark')

  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}
