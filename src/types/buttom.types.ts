import type { ButtonHTMLAttributes } from "react"
export interface PROPSBUTTOM extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void
    children : React.ReactNode
    type?: "button" | "submit"
    ariaLabel: string
    estilo?: string
}