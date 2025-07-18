import type { EstiloProps } from "../../types/estilo.types"

interface ProgramGridProps extends EstiloProps {
    children?: React.ReactNode;
} 
export const ProgramGrid = ({estilo , children}:ProgramGridProps) => {
    return(
            <div className={` ${estilo}`}>
                {children}
            </div>
    )
}