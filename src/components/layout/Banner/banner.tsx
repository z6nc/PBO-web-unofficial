interface PROPSBANNER  {
    children: React.ReactNode
    estilo?: string
}
export const Banner = ({ children , estilo }: PROPSBANNER) => {
    return (
        <article className={`w-full min-h-4 max-h-max bg-PBO flex flex-col items-center justify-center overflow-hidden ${estilo}`} >
            {children}
        </article>
    )
}