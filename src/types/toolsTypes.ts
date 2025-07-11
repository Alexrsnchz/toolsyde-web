import type * as React from "react";
import type { IconProps } from "@customTypes/generalTypes.ts";

export interface ToolCardProps {
    category: string
    slug: string
    icon: React.ComponentType<IconProps>
    color: string
    title: string
    description: string
    stats: string
    features: string[]
}