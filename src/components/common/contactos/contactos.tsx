import { PinMap } from "../../icons"
import { WhatsApp } from "../../icons/redesSocialesIcons"
import type { EstiloProps } from "../../../types/estilo.types"
import { useFindData } from "../../../hooks/useFindData";
import { RedesSocialesPBO } from "../../../data/redesSociales";
export function SectionContactos({ estilo }: EstiloProps) {
    const redesSociales = useFindData(RedesSocialesPBO, "whatsapp");
    return (
        <div className={`${estilo} flex flex-col gap-y-9 lg:gap-y-5 text-white py-2`}>
            <div className="flex  flex-col text-center  lg:text-start lg:flex-row items-center gap-2">
                <PinMap estilo="size-15 lg:size-9" />
                <div className="flex flex-col">
                    <span className="font-bold">Oficina PBO</span>
                    <span>Av. Angamos Oeste 651, Miraflores, Perú</span>
                </div>
            </div>
            {
                redesSociales ? (
                    <a key={redesSociales.id} href={redesSociales.url} target="_blank" rel="noopener noreferrer" className="
                     flex  flex-col text-center  lg:text-start lg:flex-row items-center gap-2 pl-1">
                        <WhatsApp estilo="size-12 lg:size-9" />
                        <span>+51 1 6449550</span>
                    </a>
                ) : null
            }

        </div>
    )
}