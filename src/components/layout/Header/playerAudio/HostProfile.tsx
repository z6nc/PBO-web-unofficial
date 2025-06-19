import type { PROPSINFOPROGRAMA } from "../../../../types/infoPrograma.types";
export function HostProfile(  { ActualPrograma }: { ActualPrograma: PROPSINFOPROGRAMA }) {
    return (
        <div className="flex flex-1 items-center gap-4  ">
            <div className=" w-12 h-12  lg:w-16 lg:h-16 rounded-lg">
                <img className="w-full h-full object-cover rounded-lg  " src={ActualPrograma?.imagen} alt={`imagen de ${ActualPrograma?.programa}`} />
            </div>
            <div className="flex flex-col text-start">
                <span className="font-semibold">{ActualPrograma?.programa}</span>
                <span className="text-sm">Escuchando en vivo</span>
            </div>
        </div>
    )

}