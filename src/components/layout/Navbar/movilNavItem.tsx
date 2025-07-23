import { ListaItems } from "./listaItem"
import { RedesSociales } from "../../common/RedesSociales/listRedsocial"
export const MovilNavItem = () => {
    return (
        <div className="h-[100dvh] bg-white    ">
            <ListaItems estilo="flex flex-col gap-y-4  p-9 text-black uppercase " />
            <RedesSociales />
        </div>
    )
}