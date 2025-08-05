import type { TextareaHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
export interface InputAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>  {
    placeholder: string;
    error?: string;
    register?: UseFormRegisterReturn;
    
}

export const InputArea = ({ placeholder, error, register, ...rest }: InputAreaProps) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <textarea className="w-full h-40 bg-BlackPBO text-white placeholder:text-white px-4 py-2 rounded-md  focus:outline-none
             focus:ring-2 focus:ring-white transition-colors" placeholder={placeholder}  {...rest} {...register} />
            {error && (
                <span className="text-PBO text-sm mt-1">{error}</span>
            )}
        </div>
    )
}