import { Title } from "../../common/titleCustom";
import { AudioPlayer } from "./auidoPlayer";
import { RedesSociales } from "../../common/RedesSociales/listRedsocial";

export function HeroSection() {
    return (
        <section className=" flex flex-col justify-center items-center text-center pt-24 ">
            <Title title="LA RADIO CON FE" />
            <p className="text-xl text-white">PBO es el primer canal multi-plataforma de Perú</p>
            <AudioPlayer/>
            <RedesSociales estilo="p-3 border-PBO "/>
        </section>
    )


}