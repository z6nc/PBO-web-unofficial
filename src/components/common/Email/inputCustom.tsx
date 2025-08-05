import type { InputCustomProps } from "../../../types/input.types"
export const InputCustom = ({ type = "text", placeholder, error, register, estilo, ...rest }: InputCustomProps) => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <input className={`${estilo}  bg-BlackPBO text-white placeholder:text-white px-4 py-2 rounded-md  focus:outline-none
             focus:ring-2 focus:ring-white transition-colors `} type={type} placeholder={placeholder}  {...rest} {...register}  required/>
            {error && (
                <span className="text-PBO text-sm mt-1">{error}</span>
            )}
        </div>
    )
}