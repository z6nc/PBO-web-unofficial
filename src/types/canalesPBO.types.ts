 interface PROPSSUBFRECUENCIAS {
    descripcion: string
    frecuencia: string
}

export interface PROPSCATEGORIA {
    categoria: "radio" | "cable" | "online"
}

export interface PROPSCANALESPBO  extends PROPSCATEGORIA {
    Nombre: string
    frecuenciaPrincipal: string
    subfrecuencias?: PROPSSUBFRECUENCIAS[]
    imagen: string
    url: string
}