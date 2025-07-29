import type { InputCustomProps } from "../../../types/input.types"
export const InputCustom = ({ type = "text", placeholder , error, ...rest }: InputCustomProps) => {
    return (
        <div>
            <input className="w-72 md:w-96 h-16 bg-BlackPBO text-white placeholder:text-white px-4 rounded-md  focus:outline-none
             focus:ring-2 focus:ring-white transition-colors" type={type} placeholder={placeholder}  {...rest} />
            {error && (
                <span className="text-white text-sm mt-1">{error}</span>
            )}
        </div>
    )
}