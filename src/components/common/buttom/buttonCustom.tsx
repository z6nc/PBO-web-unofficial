import type { PROPSBUTTOM } from "../../../types/buttom.types"
export const ButtonCustom = ({ onClick, children, estilo, ariaLabel , ...rest }: PROPSBUTTOM) => {
    return (
        <button aria-label={ariaLabel} className={`cursor-pointer ${estilo}`} onClick={onClick}  {...rest}>
            {children}
        </button>
    )
}