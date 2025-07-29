
interface PROPSHEADER {
    children: React.ReactNode
    imagen: string
    priority?: boolean
    info:string
}
export const HEADERMAIN = ({ children, imagen, priority , info}: PROPSHEADER) => {

    return (
        <header className="relative max-h-max md:h-[100dvh] overflow-hidden w-full  ">
            <img
                className="absolute inset-0 -z-10 w-full h-full object-cover brightness-[60%]"
                src={imagen}
                alt={`Imagen de fondo de ${info}`}
                loading={priority ? "eager" : "lazy"}
            />
            {children}
        </header>
    )
}