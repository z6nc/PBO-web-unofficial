
export const DescriptionCustom = ({ descripcion , estilo }:{descripcion :string , estilo?:string}) => {
    return (
        <p className={` text-white text-xl md:text-lg 2xl:text-xl font-bold ${estilo}`}>{descripcion}</p>
    )
}