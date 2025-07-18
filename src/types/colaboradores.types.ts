import type { Programa } from "../types/programas.types"
import type { EstiloProps } from "../types/estilo.types"

export interface PROPSColaboradores extends EstiloProps {
    id: string
    NombreCompleto: string
    programa?: Programa['programa']
    horarios?: string
    imagen: React.ReactNode
    imagenPortada?: React.ReactNode
    descripcion: string
    rol: "Conductor" | "Periodista"
}