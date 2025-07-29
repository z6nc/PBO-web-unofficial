import { PinMap } from "../../icons"
import { WhatsApp } from "../../icons/redesSocialesIcons";

import { RedesSocialesPBO } from "../../../data/redesSociales";
export function SectionContactos({ estilo }: { estilo?: string }) {
    const redesSociales = RedesSocialesPBO.find(item => item.NombreRedSocial === "WhatsApp");

    return (
        <div className={`${estilo} flex flex-col gap-y-9 lg:gap-y-5 text-white py-2`}>
            <div className="flex  flex-col text-center  lg:text-start lg:flex-row items-center gap-2">
                <PinMap estilo="size-15 lg:size-9" />
                <div className="flex flex-col">
                    <span className="font-bold">Oficina PBO</span>
                    <span>Av. Angamos Oeste 651, Miraflores, Perú</span>
                </div>
            </div>
            {/* puedes reutilizar el componente de enlace */}
            {
                redesSociales ? (
                    <a key={redesSociales.NombreRedSocial} href={redesSociales.url} target="_blank" rel="noopener noreferrer" className="
                     flex  flex-col text-center  lg:text-start lg:flex-row items-center gap-2 pl-1">
                        <WhatsApp estilo="size-10 lg:size-8" />
                        <span className="font-bold">{redesSociales.NombreRedSocial}</span>
                        <span>{redesSociales.info}</span>
                    </a>
                ) : null
            }

        </div>
    )
}