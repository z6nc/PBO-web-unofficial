import { useState } from "react"
import { Logo ,ButtomCustom } from "../../common/index"
import { ListaItems } from "./listaItem"
import { MovilNavItem } from "./movilNavItem"
import { HamburIcon , ExitIcon} from "../../icons/index"
export const Navbar = () =>{
    const [isOpen , setOpen] = useState<boolean>(false)
    const openClass = isOpen ? "hidden" :"block"
    const closeClass = isOpen ? "block" : "hidden"
    return(
        <>
        <nav className="flex relative justify-around py-4  items-center  hover:backdrop-blur-md  bg-PBO lg:bg-transparent  ">
          <Logo estilo="w-20 lg:w-32 overflow-hidden" />
             <ListaItems estilo="hidden lg:inline-flex text-white gap-x-9  "/>
              <ButtomCustom onclick={()=>setOpen(!isOpen)} estilo="block lg:hidden">
                <HamburIcon estilo={openClass}/>
                <ExitIcon estilo={closeClass}/>
              </ButtomCustom>
            
           
        </nav>
          {
                isOpen && <MovilNavItem/>
              }
              </>
    )
}