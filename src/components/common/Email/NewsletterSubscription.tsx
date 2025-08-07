import { Banner } from "../../layout/Banner/banner";
import { InputCustom } from "./inputCustom";
import { ButtonCustom } from "../buttom/buttonCustom";
import { DescriptionCustom } from "../titulos/descriptionCustom";
export function  NewsletterSubscription() {
    return (
        <Banner estilo=" h-screen text-center">
            <h3 className="font-Monserat text-wrap text-3xl 2xl:text-4xl text-white font-bold py-2 mx-2 lg:mx-0">Sé el primero en saberlo.</h3>
            <DescriptionCustom descripcion="Únete a nuestro newsletter." />
            <form action="" className="flex flex-col md:flex-row items-center justify-center gap-2 pt-4" >
                <InputCustom estilo=" w-72 md:w-96 h-16" type="email" placeholder="Tu Email" required/>
                <ButtonCustom ariaLabel="enviar el correo" type="submit" estilo="border border-white bg-black py-4 px-6 text-white active:scale-95 transition-all duration-300">
                    Enviar
                </ButtonCustom>
            </form>
        </Banner>
    )
}