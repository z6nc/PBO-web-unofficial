import type { PROPSPROGRAMAS } from "../types/programas.types";
import { ImagenesProgramas } from "../data/programasImg";


const convertirHoras = (hora: number, min: number): string => {
    return `${hora}:${min}` 
}
const diaSemana = (dia: number) => {
    const diasSemana= ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    return diasSemana[dia];
}


function DiasYHoras() {
    const Tiempo = new Date(); //
    const horas = Tiempo.getHours();
    const minutos = Tiempo.getMinutes()
    const nombreDelDia = diaSemana(Tiempo.getDay());
    const horasCompletas = convertirHoras(horas, minutos)
    return { horasCompletas, nombreDelDia }

}



export function verificarHora(HorariosProgramas:PROPSPROGRAMAS[]) {
    const { horasCompletas, nombreDelDia } = DiasYHoras();

    const filtradoFecha = HorariosProgramas.find((h) => h.dia === nombreDelDia);

    if (!filtradoFecha) return ; 

    // encuentra el programa
    const encontrarPrograma = filtradoFecha.programas.find((p) => horasCompletas >= p.inicio && horasCompletas <= p.fin
    );
    if (!encontrarPrograma) return ;
    // asigna la imagen al programa
    // si no encuentra la imagen, asigna una por defecto
    const programaConImagen = ImagenesProgramas[encontrarPrograma?.programa || "default"] || ImagenesProgramas["default"];
    
    const programaConImagenCompleto = {
        ...encontrarPrograma,
        imagen: programaConImagen ,
    };
    return programaConImagenCompleto || undefined;
}







