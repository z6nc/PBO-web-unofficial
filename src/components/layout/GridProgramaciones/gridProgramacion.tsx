import { SubtitleCustom } from "../../common/titulos/subtitleCustom"
import { colaboradores } from "../../../data/colaboradores"
import type { PROPSGRID } from "../../../types/grid.types"

export const GridProgramacion = ({ rol, numeroGRID, posiciontitulo, nombreTitulo }: PROPSGRID) => {

    const filteredColaboradores = rol ? colaboradores.filter(colaborador => colaborador.rol === rol) : colaboradores;

    return (
        <section className="flex flex-col mx-4 lg:mx-0">
            <SubtitleCustom Subtitulo={nombreTitulo} estilo={posiciontitulo} />
            <div className="grid grid-cols-1 grid-rows-3  md:grid-cols-2  lg:grid-cols-6   gap-4 overflow-hidden lg:h-[900px]">
                {
                    filteredColaboradores.slice(0, numeroGRID).map((colaborador, index) => (
                        <div key={index} className={`relative ${colaborador.estilo} rounded-lg overflow-hidden group `}>
                            <img className=" w-full h-full object-cover object-top group-hover:scale-110 transition-all ease-linear duration-150 " src={colaborador.imagen as string} alt={colaborador.NombreCompleto} />
                            <div className="absolute flex flex-col  z-20 text-white bottom-0 w-60 ">
                                <span className="bg-PBO/60 py-2 group-hover:bg-PBO/80 px-4 mr-auto">{colaborador.horarios ?? colaborador.rol}</span>
                                <h4 className=" bg-BlackPBO p-2 font-semibold text-lg font-Monserat ">{colaborador.programa ?? colaborador.NombreCompleto}</h4>
                            </div>
                        </div>
                    ))
                }


            </div>
        </section>
    )

}
