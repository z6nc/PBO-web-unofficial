import { ItemProgramacion } from "./itemProgramacion"
import { OrdenHorarioPorDia } from "../../../logica/listaHorarios"
import { FiltroDias } from "./filtroDias";
import { useState } from "react"
export function ListaProgramacion() {
    const [dia, setDia] = useState<string>("Lunes")
    const Horarios = OrdenHorarioPorDia(dia)
    return (
        <section className="flex flex-col justify-center items-center gap-y-9">
            <FiltroDias dia={dia} setDia={setDia}/>
            <article className="flex flex-col gap-y-9 justify-center items-center">
                {
                    Horarios?.programas.map((horario, idx) => {
                        return (
                            <ItemProgramacion key={idx} programa={horario.programa} inicio={horario.inicio} fin={horario.fin} />
                        )
                    })
                }
            </article>

        </section>

    )
}