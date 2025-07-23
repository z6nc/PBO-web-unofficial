interface PROPSBANNER {
    children:React.ReactNode
}
export const Banner = ({children}: PROPSBANNER) =>{
    return(
        <article className="w-full min-h-32 max-h-max bg-PBO flex flex-col items-center justify-center " >
           
             {children}
        </article>
    )
}