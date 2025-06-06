import { ListaItems } from "./listaItem"
import { RedesSociales } from "../../common/RedesSociales/listRedsocial"
export const MovilNavItem = () => {
    return (
        <div className="h-[100dvh] bg-white    ">
            <ListaItems estilo="flex flex-col gap-y-4  p-9 text-black uppercase " />
            <RedesSociales estilo="p-2 border-gray-700 bg-white/25"/>
        </div>
    )
}