import { RedesSociales } from "../../common/RedesSociales/listRedsocial";
import { SubtitleCustom } from "../../common/subtitleCustom";
export const About = () => {
    return (
        <div className="flex flex-col items-start  p-4 h-[60dvh]">
            <SubtitleCustom titulo="Acerca de PBO" />
            <p className="text-lg mb-2">
                ¡Sintoniza PBO Radio 91.9 FM, la radio con fe! Fundado en 2016 por <span className="font-bold">Phillip Butters</span>, somos la primera multiplataforma del Perú.
                Noticias al instante, opinión sin filtros, tecnología, salud, deportes y entretenimiento.
                ¡Conéctate con lo que de verdad importa!
            </p>
            <RedesSociales />
        </div>
    );
}

