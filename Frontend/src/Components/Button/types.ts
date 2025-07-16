import type { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode
    onTabChange?: (key: number) => void
    id?: number
    path?: string | undefined
    arrow?: string
    activeTab?: number
}