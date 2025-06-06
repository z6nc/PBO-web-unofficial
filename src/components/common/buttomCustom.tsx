import type { EstiloProps } from "../../types/estilo.types"
interface PROPSBUTTOM extends EstiloProps{
    onclick?: () => void
    children : React.ReactNode 
}
export const ButtomCustom = ({onclick , children ,estilo}:PROPSBUTTOM)=>{
    return(
        <button className={estilo} onClick={onclick} >
            {children}
        </button>
    )
}