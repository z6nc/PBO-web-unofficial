interface InputCustomProps {
    type?: string;
    placeholder?: string;
    required?: boolean;
}
export const InputCustom = ({ type, placeholder, required }: InputCustomProps) => {
    return(
        <input className=" bg-BlackPBO text-white placeholder:text-white px-4 rounded-md w-96 h-16" type={type} placeholder={placeholder} required={required}  />
    )
}