/* estilos para Grid de colaboradores
Imagen grande : "col-span-1 row-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2"
Imagen mediana: "col-span-1 row-span-1 md:col-span-1    lg:col-span-3 lg:row-span-1"
Imagen pequeña : "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1"
*/

import { ImagenesProgramas, ColaboradesFotoPortada } from "./programasImg"
import type { PROPSColaboradores } from "../types/colaboradores.types";


export const colaboradores: PROPSColaboradores[] = [
    {
        id: "Giuliana Saldarriaga",
        NombreCompleto: "Giuliana Saldarriaga",
        programa: "PBO Salud",
        horarios: "L-V / 6:00 am - 7:00 am",
        imagen: ImagenesProgramas["PBO Salud"],
        imagenPortada: ColaboradesFotoPortada["PBO Salud"],
        descripcion: "",
        rol: "Conductor",
        estilo:"col-span-1 row-span-1 md:col-span-1    lg:col-span-3 lg:row-span-1"
    },
    {
        id: "Phillip Butters",
        NombreCompleto: "Phillip Butters",
        programa: "PBO Noticias",
        horarios: "L-V / 12:00 am - 2:00 am",
        imagen: ImagenesProgramas["PBO Noticias"],
        descripcion: "",
        rol: "Conductor",
        estilo:"col-span-1 row-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2"
    },
    {
        id: "Ricardo Vázquez Kunze",
        NombreCompleto: "Ricardo Vázquez Kunze",
        programa: "PBO con Rvk y Carmen",
        horarios: "L-V / 8:30 pm - 9:30 pm",
        imagen: ImagenesProgramas["PBO con Rvk y Carmen"],
        imagenPortada: ColaboradesFotoPortada["PBO con Rvk y Carmen"],
        descripcion: "",
        rol: "Conductor",
        estilo:"col-span-1 row-span-1  md:col-span-1 lg:col-span-3 lg:row-span-1"
    },
    {
        id: "Carlos Alberto Navarro",
        NombreCompleto: "Carlos Alberto “El Tigrillo” Navarro ",
        programa: "PBO Campeonisimo",
        horarios: "L-V / 6:00 pm - 7:30 pm",
        imagen: ImagenesProgramas["PBO Campeonisimo"],
        imagenPortada: ColaboradesFotoPortada["PBO con Rvk y Carmen"],
        descripcion: "",
        rol: "Conductor",
        estilo:"col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1"
    },

    {
        id: "Chema Salcedo",
        NombreCompleto: "Chema Salcedo",
        programa: "PBO con Chema Salcedo",
        horarios: "L-S / 10:00 am - 2:00 pm",
        imagen: ImagenesProgramas["PBO con Chema Salcedo"],
        descripcion: "",
        rol: "Conductor",
        estilo:"col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1"

    },
     {
        id: "Marycarmen Sjoo",
        NombreCompleto: "Marycarmen Sjoo",
        programa: "PBO Marycarmen Sjoo",
        horarios: "L-V / 2:00 pm - 4:00 pm",
        imagen: ImagenesProgramas["PBO Marycarmen Sjoo"],
        descripcion: "",
        rol: "Conductor",
        estilo:"col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1"
    },
    {
        id: "Dennis Vargas Marín",
        NombreCompleto: "Dennis Vargas Marín",
        programa: "PBO con Denis Vargas Marín",
        horarios: "Domingo 8:00 am - 10:00 am",
        imagen: ImagenesProgramas["PBO con Denis Vargas Marín"],
        descripcion: "",
        rol: "Conductor",
        estilo:"col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1"

    },
    {
        id: "Agatha Lys",
        NombreCompleto: "Agatha Lys",
        programa: "Agatha Lys en PBO",
        horarios: "L-V 8:00 pm - 8:30 pm",
        imagen: ImagenesProgramas["Agatha Lys en PBO"],
        descripcion: "",
        rol: "Conductor"
    },
    {
        id: "Andrea Mesa",
        NombreCompleto: "Andrea Mesa",
        programa: "PBO Edicion Estelar",
        horarios: "L-V / 7:30 pm - 8:00 pm",
        imagen: ImagenesProgramas["PBO Edicion Estelar"],
        descripcion: "",
        rol: "Conductor",
        estilo:"col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1"

    },
    


]