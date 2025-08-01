import type { PROPSCATEGORIA } from "../../../types/canalesPBO.types"
import { SubtitleCustom } from "../../common/titulos/subtitleCustom"
import { canalesPBO } from "../../../data/canalesPBO"
export function ListaCableOperadores({ categoria }: PROPSCATEGORIA) {
    const categoriaCanalesfilter = canalesPBO.filter((canal) => canal.categoria === categoria)

    return (
        <section className=" mx-4 lg:mx-0">
            <SubtitleCustom estilo="text-center" Subtitulo="DISPONIBLE EN TU CABLE FAVORITO" />
            <div className="flex flex-wrap justify-center items-center gap-5  overflow-hidden">
                {
                    categoriaCanalesfilter.slice(0, 5).map((c) => {
                        return (
                            <a key={c.Nombre} href={c.url} target="_blank" className="relative group flex flex-col items-center rounded-lg  h-36 md:h-60  overflow-hidden ">
                                <img loading="lazy" className=" w-full h-full  object-cover brightness-95 group-hover:brightness-100 group-hover:scale-110 transition-transform duration-200" src={c.imagen} alt={`Portada de ${c.Nombre}`} />
                                <div className="absolute bottom-0  w-full text-center z-10 ">
                                    <p className="font-Monserat font-bold bg-black text-white py-2">{c.frecuenciaPrincipal}</p>
                                </div>

                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}
