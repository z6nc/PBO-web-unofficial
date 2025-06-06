import type { PROPSTITLE } from "../../types/title.types"
export const Title = ({title}:PROPSTITLE)=>{
    return (
        <h1 className="font-Monserat text-white text-3xl md:text-4xl 2xl:text-6xl font-black drop-shadow-sm drop-shadow-black">{title}</h1>
    )
}