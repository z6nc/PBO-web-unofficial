import { Logo } from "../../common";
import { DescriptionCustom } from "../../common/titulos/descriptionCustom";
import { ListaItems } from "../Navbar/listaItem";
import { SectionContactos } from "../../common/contactos/contactos";
export function Footer() {
    return (
        <footer className="  bg-black text-white py-9 max-h-max ">
            <div className=" grid  grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 lg:max-w-7xl lg:mx-auto  items-start ">
                <div className="w-full flex items-center justify-center py-7 md:py-0">
                    <Logo estilo=" w-40 " />
                </div>
                <div className="w-full flex flex-col items-center justify-center py-7 md:py-0">
                    <DescriptionCustom
                        title="Acerca de Nosotros"
                    />
                    <ListaItems estilo="flex flex-col  items-center lg:items-start  gap-y-2 " />
                </div>
                <div className="w-full flex flex-col items-center justify-center py-7 md:py-0">
                    <DescriptionCustom
                        title="Contacto y Ubicación"
                    />
                    <SectionContactos />
                </div>
            </div>

        </footer>
    );
}

