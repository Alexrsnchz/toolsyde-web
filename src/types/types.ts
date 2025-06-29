import type * as React from 'react'

export interface IconProps {
  className?: string
}

export interface UtilProps {
  icon: React.ComponentType<IconProps>
  tooltip: string
}

export interface LinkUtilProps extends UtilProps {
  link: string
}
