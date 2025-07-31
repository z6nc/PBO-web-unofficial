import { Modal } from "./modal"
import { ButtonCustom } from "../common";
import type { PROPSColaboradores } from "../../types/colaboradores.types";
import { ImagenCustom } from "../common/imagenCustom/imagenCustom";
export const ViewModalColaboradores = ({ colaborador, onclick }: { colaborador: PROPSColaboradores, onclick: () => void }) => {

    return (
        <Modal estilo="bg-black/65 flex justify-center items-center">

            <div className="absolute flex flex-col h-[90%] md:max-w-6xl md:h-auto overflow-y-auto bg-white/90 border rounded-4xl mx-2 md:mx-0">
                <ButtonCustom ariaLabel="Nuestras redes sociales " type="button" onClick={onclick} estilo="ml-auto  bg-PBO py-4 px-6 text-white " >
                    <span className="text-white">X</span>
                </ButtonCustom>
                <div className=" mx-auto flex flex-col items-center justify-center  gap-4 p-0 lg:p-5">
                    <h3 className="text-xl md:text-3xl font-bold text-black text-center  font-Monserat">{colaborador.NombreCompleto}</h3>
                    <p className=" text-gray-600 text-center  ">{colaborador.programa ?? colaborador.rol}</p>

                    <div className="flex flex-col lg:flex-row justify-center  items-center   md:items-start       gap-y-4 p-2">
                        <ImagenCustom src={colaborador.imagen as string} estilo="flex-1" alt={colaborador.NombreCompleto} />
                        <div className="flex flex-col gap-y-2 px-9 lg:w-96   ">
                            <h4 className="text-lg font-semibold text-white text-center bg-PBO">{colaborador.rol}</h4>
                            <p className="text-sm md:text-base text-gray-600 ">{colaborador.descripcion}</p>
                        </div>
                    </div>


                </div>
            </div>
        </Modal>
    )
}