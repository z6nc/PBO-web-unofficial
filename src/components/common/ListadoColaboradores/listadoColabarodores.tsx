import { useState } from "react";
import { colaboradores } from "../../../data/colaboradores";
import { ButtonCustom } from "../buttom/buttonCustom";
import { ImagenCustom } from "../imagenCustom/imagenCustom";
import { ViewModalColaboradores } from "../../modal/ViewModalColaboradores";
import type { PROPSColaboradores } from "../../../types/colaboradores.types";

export function ListadoColaboradores() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedColaborador, setSelectedColaborador] = useState<PROPSColaboradores>();
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    function handleOpenModal(nombreColaborador: string) {
        setIsOpen(!isOpen);
        const colaborador = colaboradores.find(c => c.NombreCompleto === nombreColaborador);
        setSelectedColaborador(colaborador);
    }
    return (
        <>
            <section className="flex flex-wrap justify-center items-center gap-4 ">
                {colaboradores.map((colaborador) => (
                    <ButtonCustom key={colaborador.id} onClick={() => handleOpenModal(colaborador.NombreCompleto)} ariaLabel="s" className="flex flex-col items-center cursor-pointer">
                        <ImagenCustom src={String(colaborador.imagenPortada ?? colaborador.imagen)} alt={colaborador.NombreCompleto} />
                        <h3 className="text-lg font-semibold   w-full text-black text-center pt-1">{colaborador.NombreCompleto}</h3>
                        <p className="text-sm text-gray-600 text-center w-full ">{colaborador.programa ?? colaborador.rol}</p>
                    </ButtonCustom>
                ))}
            </section>
            {isOpen && selectedColaborador && (
                <ViewModalColaboradores colaborador={selectedColaborador} onclick={toggleModal} />
            )}
        </>


    )
}