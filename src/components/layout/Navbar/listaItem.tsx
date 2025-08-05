import { NavbarItems } from "../../../data/navbarItems"
import { Link } from "react-router-dom"
export const ListaItems = ({ estilo }: { estilo: string }) => {
    return (
        <ul className={`tracking-wider ${estilo}`}>
            {
                NavbarItems.map((itemNavbar, idx) => {
                    const importante = itemNavbar.isImportante ? "font-semibold  bg-red-600 text-white" : ""
                    return (
                        <li className={`py-1 px-2 cursor-pointer  rounded-lg overflow-hidden ${importante} transition-colors duration-100 ease-linear hover:bg-PBO/80  `} key={idx}>
                            <Link to={itemNavbar.url}  >
                                {itemNavbar.item}
                            </Link>
                        </li>

                    )
                })

            }
        </ul>
    )
}