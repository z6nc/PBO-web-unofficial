import { HorariosProgramas } from "../data/horariosProgramas";

export const OrdenHorarioPorDia = (diaSelecto : string) => {
    return  HorariosProgramas.find((horario)=> horario.dia === diaSelecto)

}