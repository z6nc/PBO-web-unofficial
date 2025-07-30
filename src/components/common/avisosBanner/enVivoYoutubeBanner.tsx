import { Banner } from "../../layout/Banner/banner";
import { DescriptionCustom } from "../titulos/descriptionCustom";
export const EnVivoYoutubeBanner = () => {
    return (
        <Banner estilo="py-36 text-center px-4">
            <h3 className="font-Monserat text-2xl  md:text-3xl 2xl:text-4xl text-white font-bold py-2">¡Estamos en Vivo en YouTube!</h3>
            <DescriptionCustom descripcion="Únete a nuestra transmisión en vivo y no te pierdas ningún detalle." />
            <a href="" className="cursor-pointer bg-black border-white border  rounded transition-all ease-linear duration-100 hover:scale-105 p-4 my-4">
                <p className="  text-white  ">Ver en YouTube</p>
            </a>
        </Banner>
    );
}
