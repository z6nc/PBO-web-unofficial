import { NavbarItems } from "../../../data/navbarItems"
export const ListaItems = ({ estilo }:{estilo:string}) => {
    return (
        <ul className={`tracking-wider ${estilo}`}>
            {
                NavbarItems.map((itemNavbar, idx) => {
                    const importante = itemNavbar.isImportante ? "font-semibold  bg-red-600 text-white" : ""
                    return (
                        <li className={`py-1 px-2 cursor-pointer  rounded-lg overflow-hidden ${importante} transition-colors duration-100 ease-linear hover:bg-PBO  `} key={idx}>
                            {itemNavbar.item}
                        </li>

                    )
                })

            }
        </ul>
    )
}