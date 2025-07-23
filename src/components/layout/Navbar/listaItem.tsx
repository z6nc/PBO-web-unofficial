import { NavbarItems } from "../../../data/navbarItems"
import type { EstiloProps } from "../../../types/estilo.types"
export const ListaItems = ({ estilo }: EstiloProps) => {


    return (
        <ul className={`tracking-wider ${estilo}`}>
            {
                NavbarItems.map((i, idx) => {
                    const importante = i.isImportante ? "font-semibold  bg-red-600 text-white" : ""
                    return (
                        <li className={`py-1 px-2 cursor-pointer  rounded-lg overflow-hidden ${importante} transition-colors duration-100 ease-linear hover:bg-PBO  `} key={idx}>
                            {i.item}
                        </li>

                    )
                })

            }
        </ul>
    )
}