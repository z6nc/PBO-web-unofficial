import { Title } from "../../common/titleCustom";
import { AudioPlayer } from "./playerAudio/auidoPlayer";
import { ListaCanalesPbo } from "../../common/canales/ListaCanalesPBO";
export function HeroSection() {
    return (
        <section className=" flex flex-col justify-around h-full items-center  text-center   ">
            <div className=" flex  flex-col justify-center items-center">
                <Title title="LA RADIO CON FE" />
                <p className="text-lg md:text-xl  text-gray-100 mx-4 pt-2 pb-4"><span className="font-Monserat font-bold">PBO</span> es el primer canal multi-plataforma del Perú</p>
                <AudioPlayer />
            </div>

            <ListaCanalesPbo />
        </section>
    )


}