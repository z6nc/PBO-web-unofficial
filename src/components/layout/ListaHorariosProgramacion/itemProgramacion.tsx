import type { Programa } from "../../../types/programas.types"
import { ImagenesProgramas, InfoProgramas } from "../../../data/programasImg"


export const ItemProgramacion = ({ programa, fin, inicio }: Programa) => {
    return (
        <div className="flex border-b border-gray-300 pb-4 cursor-default">
            <div className="w-16 text-gray-500 font-bold font-Monserat text-sm lg:text-base">
                <p>{inicio}</p>
                <p>{fin}</p>
            </div>
            <div className="flex-9/12 inline-flex gap-x-4">
                <div className=" w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-xl border border-gray-400">
                    <img className="w-full h-full object-cover" src={ImagenesProgramas[programa]} alt={`Imagen de ${programa}`} />
                </div>
                <div className="w-32 h-32  md:w-[550px] overflow-hidden">
                    <h1 className="font-bold font-Monserat text-wrap">{programa}</h1>
                    <p className="text-sm text-gray-500 text-wrap">{InfoProgramas[programa]}</p>
                </div>

            </div>

        </div>
    )
}