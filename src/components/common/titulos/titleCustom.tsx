import type { PROPSTITLE } from "../../../types/title.types"
export const Title = ({title}:PROPSTITLE)=>{
    return (
        <h1 className="font-Monserat text-center text-white text-4xl md:text-5xl 2xl:text-7xl font-black drop-shadow-md drop-shadow-black">{title}</h1>
    )
}