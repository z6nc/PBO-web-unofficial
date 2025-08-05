import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    error?: string
    register?: UseFormRegisterReturn,
    estilo? :string
}