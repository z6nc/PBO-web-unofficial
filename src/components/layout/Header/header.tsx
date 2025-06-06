
interface PROPSHEADER {
    children: React.ReactNode
    imagen: string
}
export const HEADERMAIN = ({ children, imagen }: PROPSHEADER) => {
    return (
        <header className="relative h-[100dvh] overflow-hidden w-full ">
            <img
                className="absolute inset-0 -z-10 w-full h-full object-cover brightness-[60%]"
                src={imagen}
                alt=""
            />

            {children}
        </header>
    )
}