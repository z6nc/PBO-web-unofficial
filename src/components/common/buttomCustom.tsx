import type { EstiloProps } from "../../types/estilo.types"
interface PROPSBUTTOM extends EstiloProps{
    onclick?: () => void
    children : React.ReactNode 
    type?: "button" | "submit" 
}
export const ButtomCustom = ({onclick , children ,estilo, type}:PROPSBUTTOM)=>{
    return(
        <button className={`cursor-pointer ${estilo}`} onClick={onclick} type={type}>
            {children}
        </button>
    )
}