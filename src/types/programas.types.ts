interface Programa {
    programa: "Baella Talks" | "Agatha Lys en PBO" | "PBO con Chema Salcedo" | "PBO Noticias" | "PBO Marycarmen Sjoo" | "PBO Salud" | "PBO Campeonisimo" | "PBO Edicion Estelar" | "PBO con Rvk y Carmen" |"Rumbo Minero" |"PBO UMA Emprendedora"|"Vox Populi"|"Rescatando Valores"|"En la Mira"|"Conversando con el Perú"|"PBO con Denis Vargas Marín"|"Entre Nos";
    inicio: string;
    fin: string;
}

export interface PROPSPROGRAMAS {
    dia: "Lunes" | "Martes" | "Miercoles" | "Jueves" | "Viernes" | "Sabado" | "Domingo";
    programas: Programa[];
}
