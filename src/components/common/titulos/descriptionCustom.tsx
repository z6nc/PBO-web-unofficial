import type { PROPSTITLE } from "../../../types/title.types"
import type { EstiloProps } from "../../../types/estilo.types"

export const DescriptionCustom = ({ title, estilo }: PROPSTITLE & EstiloProps) => {
    return (
        <p className={` text-white text-xl md:text-lg 2xl:text-xl font-bold ${estilo}`}>{title}</p>
    )
}