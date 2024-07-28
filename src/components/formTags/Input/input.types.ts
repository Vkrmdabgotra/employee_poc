import { ReactNode } from "react";
import { Control } from "react-hook-form";

export interface ControlledInputProps {
    control: Control<any>;
    name: string;
    type?: "text" | "password" | "email";
    label?: string | ReactNode
}