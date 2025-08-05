/* estilos para Grid {   
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
        imagenPortada: ImagenesProgramas["PBO Salud"],
        descripcion: "Giulianna Saldarriaga, nutricionista con más de 10 años de experiencia en nutrición clínica. Con una especialización en nutrición oncológica por la Universidad de Barcelona - España.",
        rol: "Conductor",
        estilo: "col-span-1 row-span-1 md:col-span-1    lg:col-span-3 lg:row-span-1 h-96 md:h-auto"
    },
    {
        id: "Phillip Butters",
        NombreCompleto: "Phillip Butters Rivadeneira",
        programa: "PBO Noticias",
        horarios: "L-V / 12:00 am - 2:00 am",
        imagen: ImagenesProgramas["PBO Noticias"],
        descripcion: "Phillip Butters Rivadeneira, nacido en Trujillo el 13 de junio de 1967, inició como periodista deportivo en programas como “Al ataque” y “El especialista”. Más adelante incursionó en la radio política, consolidándose como líder de opinión. En 2017 fundó PBO, donde es Director-Gerente y conductor, destacando como una multiplataforma de comunicación. También conduce “Combutters” en Willax Televisión.",
        rol: "Conductor",
        estilo: "col-span-1 row-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2 h-96 md:h-auto"
    },
    {
        id: "Ricardo Vázquez Kunze",
        NombreCompleto: "Ricardo Vázquez Kunze",
        programa: "PBO con Rvk y Carmen",
        horarios: "L-V / 8:30 pm - 9:30 pm",
        imagen: ImagenesProgramas["PBO con Rvk y Carmen"],
        imagenPortada: ColaboradesFotoPortada["Ricardo Vasquez Kunze"],
        descripcion: "Ricardo Vásquez Kunze es abogado por la PUCP y destacado analista político peruano. Ha sido columnista principal en los diarios más importantes del país y es conocido por sus análisis críticos y directos. Actualmente conduce “Katherine y RVK” en PBO Radio y el miniprograma “La Terraza de RVK” en YouTube, consolidándose como una figura influyente en el debate público nacional.",
        rol: "Conductor",
        estilo: "col-span-1 row-span-1  md:col-span-1 lg:col-span-3 lg:row-span-1 h-96 md:h-auto"
    },
    {
        id: "Carlos Alberto Navarro",
        NombreCompleto: "Carlos Alberto “El Tigrillo” Navarro ",
        programa: "PBO Campeonisimo",
        horarios: "L-V / 6:00 pm - 7:30 pm",
        imagen: ImagenesProgramas["PBO Campeonisimo"],
        descripcion: "Carlos Alberto Navarro Hernández, nacido en el Callao en 1964 e hijo del periodista Tito Navarro, es un reconocido periodista deportivo. Desde 1984 dirige el programa radial “Campeonísimo” y participa en televisión desde 1996. Es conocido por su opinión precisa y actualmente conduce el bloque deportivo de PBO en Willax y PBO-Campeonísimo.",
        rol: "Conductor",
        estilo: "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1 h-96 md:h-auto"
    },

    {
        id: "Chema Salcedo",
        NombreCompleto: "Chema Salcedo",
        programa: "PBO con Chema Salcedo",
        horarios: "L-S / 10:00 am - 2:00 pm",
        imagen: ImagenesProgramas["PBO con Chema Salcedo"],
        descripcion: "José María “Chema” Salcedo, periodista con doble nacionalidad peruana y española, nació en Bilbao en 1946 y tiene casi 50 años de trayectoria. Fue director de noticias en RPP, ha escrito 11 libros, realizado 3 espectáculos unipersonales y varios documentales en EE.UU. y España. En cine ha sido dirigido por Alberto Durant y Francisco J. Lombardi. Su documental más reciente es “Ruanda: Mi última utopía”, centrado en la reconciliación tras el genocidio de 1994.",
        rol: "Conductor",
        estilo: "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1 h-96 md:h-auto"

    },
    {
        id: "Marycarmen Sjoo",
        NombreCompleto: "Marycarmen Sjoo",
        programa: "PBO Marycarmen Sjoo",
        horarios: "L-V / 2:00 pm - 4:00 pm",
        imagen: ImagenesProgramas["PBO Marycarmen Sjoo"],
        descripcion: "MaryCarmen Sjoo, nacida en Lima y formada como periodista en la Florida International University (FIU) en EE.UU., tiene más de 15 años de experiencia en medios de comunicación. Inició su carrera en Univisión y ha trabajado en medios como América TV, RPP y TVPerú, abordando temas de entretenimiento, ayuda social, cultura y deportes. También fue locutora en Radio América. Actualmente es conductora y reportera del magazine “En PBO con MaryCarmen Sjoo” en la multiplataforma PBO.",
        rol: "Conductor",
        estilo: "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1 h-96 md:h-auto"
    },
    {
        id: "Dennis Vargas Marín",
        NombreCompleto: "Dennis Vargas Marín",
        programa: "PBO con Denis Vargas Marín",
        horarios: "Domingo 8:00 am - 10:00 am",
        imagen: ImagenesProgramas["PBO con Denis Vargas Marín"],
        descripcion: "Dennis Vargas Marín es periodista y abogado constitucionalista, nacido en San Miguel de Mamara. Comenzó en la radio a los 5 años y se inició formalmente en el periodismo a los 13, narrando fútbol en Radio Tahuantinsuyo del Cusco. Conocido como “El hijo natural de la radio”, llegó a Lima en los años 70 para estudiar en San Marcos. Actualmente es doctor en comunicación social y gestión universitaria.",
        rol: "Conductor",
        estilo: "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1 h-96 md:h-auto"

    },
    {
        id: "Agatha Lys",
        NombreCompleto: "Agatha Lys",
        programa: "Agatha Lys en PBO",
        horarios: "L-V 8:00 pm - 8:30 pm",
        imagen: ImagenesProgramas["Agatha Lys en PBO"],
        descripcion: "Agatha Lys, reconocida como “La esoterista de mayor credibilidad en Hispanoamérica”, es psíquica, tarotista y astróloga, además de periodista, psicóloga, coach de vida y terapeuta holística. Es conocida por sus predicciones cumplidas y ha sido consultada por presidentes, celebridades y deportistas, así como por el público general que la sigue en radio, televisión y medios digitales.",
        rol: "Conductor"
    },
    {
        id: "Andrea Meza",
        NombreCompleto: "Andrea Meza",
        programa: "PBO Edicion Estelar",
        horarios: "L-V / 7:30 pm - 8:00 pm",
        imagen: ColaboradesFotoPortada["Andrea Meza"],
        descripcion: "Comunicadora social por la Universidad de Lima, con más de 8 años de experiencia en programas educativos para USMP TV. Ha conducido el backstage de “La Gran Idea” en Panamericana TV. Actualmente es imagen en redes sociales del BBVA y conduce “PBO Noticias Edición Estelar” en PBO.",
        rol: "Conductor",
        estilo: "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1 h-96 md:h-auto"

    },

    {
        id: "Judit Rodríguez",
        NombreCompleto: "Judit Rodríguez",
        imagen: ColaboradesFotoPortada["Judy Rodríguez"],
        descripcion: "Judy Angélica Rodríguez Saavedra, nacida en Tocache en 1994, es periodista y futura abogada. Llegó a Lima a los 16 años y desde entonces ha sido conductora de noticias y productora de contenidos. Es licenciada en periodismo, estudia Derecho y cursa una maestría en resolución de conflictos sociales. Actualmente es directora de noticias de PBO y figura clave en todas sus plataformas.",
        rol: "Periodista",
        estilo: "col-span-1 row-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2 h-96 md:h-auto"
    },
    {
        id: "Kike Bravo Prado",
        NombreCompleto: "Kike Bravo Prado",
        imagen: ColaboradesFotoPortada["Kike Prado"],
        descripcion: "Kike Bravo Prado, nacido en Lima el 22 de octubre de 1971, inició su carrera periodística en 1994, participando en medios como Ovación, Radio El Sol, Panamericana Televisión y otros. También incursionó en fotografía y publicidad, gestionando páginas web de entretenimiento. En 2012 regresó a la radio como productor de contenidos y desde entonces trabaja junto a Phillip Butters, con quien inició el proyecto PBO. Ha sido productor y conductor de varios segmentos, incluyendo el programa radial “Maestra Vida”.",
        rol: "Periodista",
        estilo: "col-span-1 row-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2 h-96 md:h-auto"
    },
    {
        id: "Karen Herrera",
        NombreCompleto: "Karen Herrera",
        imagen: ColaboradesFotoPortada["Karen Herrera"],
        descripcion: "Karen Herrera es licenciada en Comunicación y Periodismo por la UPC, con más de 10 años de experiencia en medios. Ha sido productora y conductora en RPP Noticias y en el programa de salud “Vive más” de RTV. Fue docente en la UPEU y dictó talleres en EE. UU. sobre periodismo en salud y redes sociales. Actualmente, trabaja en la multiplataforma de PBO.",
        rol: "Periodista",
        estilo: "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1 h-96 md:h-auto"
    },
    {
        id: "Elejalder Godos",
        NombreCompleto: "Elejalder Godos",
        imagen: ColaboradesFotoPortada["Elejalder Godos"],
        descripcion: "Elejalder Godos inició como narrador en la Segunda División y se hizo conocido por su frase “¡Cuaaaaareeeeenta minutos!”. Comenzó en el programa “Campeonísimo” de Tito Navarro y en 1981 ingresó a Radio Ovación, donde trabajó con Pocho Rospigliosi. Su estilo irreverente dio origen al llamado “Godismo”, y siempre tuvo clara su pasión por el periodismo deportivo.",
        rol: "Periodista",
        estilo: "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1 h-96 md:h-auto"
    },
    {
        id: "Katherine Donayre",
        NombreCompleto: "Katherine Donayre",
        imagen: ImagenesProgramas["PBO Edicion Estelar"],
        descripcion: "Katherine Donayre, periodista con más de 10 años de experiencia en radio y televisión. Empresaria de bienes raíces y conferencista.",
        rol: "Periodista",
        estilo: "col-span-1 row-span-1 md:col-span-1  lg:col-span-2 lg:row-span-1 h-96 md:h-auto"
    }




]