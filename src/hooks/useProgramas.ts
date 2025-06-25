import { useEffect, useState } from 'react';
import { HorariosProgramas } from '../data/horariosProgramas';
import { verificarHora } from '../logica/fechas';
import type { PROPSINFOPROGRAMA } from '../types/infoPrograma.types';
export const useProgramas = () => {
    const [currentProgram, setCurrentProgram] = useState<PROPSINFOPROGRAMA>();

    useEffect(() => {
        const program = verificarHora(HorariosProgramas);
        console.log("Programa actual:", program);
        setCurrentProgram(program );
        const interval = setInterval(() => {
            const updatedProgram = verificarHora(HorariosProgramas);
            setCurrentProgram(updatedProgram );
            console.log("Programa actual:", updatedProgram);
        }, 600000); // actualiza cada 10 minutos

        return () => clearInterval(interval); // limpia al desmontar
    }, []);

    return currentProgram;
}