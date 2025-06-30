import type * as React from 'react'

export interface IconProps {
  className?: string
}

export interface SidebarProps {
  isExpanded: boolean
}

export interface UtilProps {
  icon: React.ComponentType<IconProps>
  text: string
}

export interface LinkUtilProps extends UtilProps {
  link: string
}

export interface Tool {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
  color: string
  stats: string
  category: string
  features: string[]
  slug: string
}
