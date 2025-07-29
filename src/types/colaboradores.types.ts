import type { Programa } from "../types/programas.types"

export interface PROPSColaboradores  {
    id: string
    NombreCompleto: string
    programa?: Programa['programa']
    horarios?: string
    imagen: React.ReactNode
    imagenPortada?: React.ReactNode
    descripcion: string
    rol: "Conductor" | "Periodista"
    estilo?: string
}