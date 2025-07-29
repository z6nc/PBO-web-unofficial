import { useState } from "react"
import { Logo, ButtonCustom } from "../../common/index"
import { ListaItems } from "./listaItem"
import { MovilNavItem } from "./movilNavItem"
import { HamburIcon, ExitIcon } from "../../icons/index"
export const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const openClass = isOpen ? "hidden" : "block"
  const closeClass = isOpen ? "block" : "hidden"
  return (
    <>
      <nav className="flex relative justify-around py-4  items-center  hover:backdrop-blur-md  bg-PBO lg:bg-transparent  ">
        <Logo estilo="w-20 lg:w-32 overflow-hidden" priority={true} />
        <ListaItems estilo="hidden lg:inline-flex text-white gap-x-9  " />
        <ButtonCustom onClick={() => setOpen(!isOpen)} estilo="block lg:hidden" ariaLabel="abrir menu movil" type="button">
          <HamburIcon estilo={openClass} />
          <ExitIcon estilo={closeClass} />
        </ButtonCustom>
      </nav>
      {
        isOpen && <MovilNavItem />
      }
    </>
  )
}