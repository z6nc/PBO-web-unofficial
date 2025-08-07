
export const DescriptionCustom = ({ descripcion , estilo }:{descripcion :string , estilo?:string}) => {
    return (
        <p className={` text-white text-lg md:text-xl  ${estilo}`}>{descripcion}</p>
    )
}