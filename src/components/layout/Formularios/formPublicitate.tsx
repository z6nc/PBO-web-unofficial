import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputCustom } from "../../common/Email/inputCustom";
import { InputArea } from "../../common/Email/inputArea";
import { PublicitateSchema } from "../../../schemas/publicitate.schema";
import type { PublicitateForm } from "../../../schemas/publicitate.schema";
import { ButtonCustom } from "../../common";
export function FormPublicitate() {
    const { register, handleSubmit, formState: { errors }, } = useForm<PublicitateForm>({ resolver: zodResolver(PublicitateSchema), });
    const onSubmit = (data: PublicitateForm) => {
        console.log("Datos válidos:", data);
        alert("Si quieres publicitarte en PBO , dirigete a el sitio web oficial de PBO ");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-4 px-2 md:px-6 ">
            <InputCustom estilo="w-full h-16" type="text" placeholder="Nombre y Apellido" register={register("nombreUsuario")} error={errors.nombreUsuario?.message} />
            <InputCustom estilo=" w-full h-16" type="email" placeholder="Correo Electronico" register={register("correoElectronico")} error={errors.correoElectronico?.message} />
            <InputCustom estilo=" w-full h-16" type="text" placeholder="Numero de Celular" register={register("telefono")} error={errors.telefono?.message} />
            <InputArea placeholder="Empresa" register={register("informacionEmpresa")} error={errors.informacionEmpresa?.message} />
            <InputArea placeholder="Mensaje informativo" register={register("mensaje")} error={errors.mensaje?.message} />
            <ButtonCustom estilo="border border-white bg-PBO py-4 px-6  text-white active:scale-95 transition-all duration-300" ariaLabel="Enviar formulario">
                Enviar
            </ButtonCustom>
        </form>
    )
}