import type { EstiloProps } from "../../types/estilo.types"
interface PROPSBUTTOM extends EstiloProps{
    onclick?: () => void
    children : React.ReactNode 
    type?: "button" | "submit" 
    arialabel: string
}
export const ButtomCustom = ({onclick , children ,estilo, type, arialabel}:PROPSBUTTOM)=>{
    return(
        <button aria-label={arialabel} className={`cursor-pointer ${estilo}`} onClick={onclick} type={type}>
            {children}
        </button>
    )
}