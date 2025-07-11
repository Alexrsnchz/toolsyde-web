import type * as React from 'react'

export interface SidebarProps {
  isExpanded?: boolean
}

export interface UtilProps extends SidebarProps {
  icon: React.ComponentType<{ className?: string }>
  text: string
  handleClick?: () => void
}

export interface LinkUtilProps extends UtilProps {
  link: string
}
