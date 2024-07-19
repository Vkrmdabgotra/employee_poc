import { HTMLAttributes } from "react"

export const primary = "primary"
export const secondary = "secondary"
export const outline="outline"
export type variantTypes = "primary" | "secondary"|"outline"
export interface buttonTypes extends HTMLAttributes<HTMLButtonElement> {
    variant:variantTypes;
    btnsize: "sm" | "md";
}
