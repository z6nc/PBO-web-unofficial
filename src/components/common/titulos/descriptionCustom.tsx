import type { PROPSTITLE } from "../../../types/title.types"
export const DescriptionCustom = ({ title }: PROPSTITLE) => {
    return (
        <p className=" text-white text-base md:text-lg 2xl:text-xl">{title}</p>
    )
}