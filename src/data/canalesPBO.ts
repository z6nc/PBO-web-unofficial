interface PROPSCANALESPBO {
    id: number
    categoria: "radio" | "television"
    frecuencia: string
    imagen: string
    alt :string
    url: string
}

export const canalesPBO: PROPSCANALESPBO[] = [
    {
        id: 1,
        categoria: "radio",
        frecuencia: "91.9 FM ",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Logo_de_Radio_PBO.jpg/330px-Logo_de_Radio_PBO.jpg",
        alt :"imagen de la Radio PBO",
        url: "/"
    },
    {
        id: 2,
        categoria: "television",
        frecuencia: " 735 HD ",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Movistar_TV_logo_2018.png",
        alt : "Portada Movistar TV",
        url: "https://tv.movistar.com.pe/catalog/replay-15676/pbo-15884?type=l7d&sort=0&lastIndex=30"
    },
    {
        id: 3,
        categoria: "television",
        frecuencia: " 515 HD ",
        imagen: "https://play-lh.googleusercontent.com/MNLWoQMaCpFZ3Os8xgIdBVA3c41VWA-54wkPyUM5WnWTH0rF1r8DdjT6mG1hpo3e7a4",
        alt : "Portada Claro TV",
        url: "https://www.claro.com.pe/personas/hogar/tv/canales-digitales/"
    }


]