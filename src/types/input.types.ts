import type { InputHTMLAttributes } from "react";

export interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement>  {
    placeholder: string;
    error?: string

}