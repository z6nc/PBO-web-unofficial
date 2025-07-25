import { RedesSociales } from "../../common/RedesSociales/listRedsocial";
import { SubtitleCustom } from "../../common/titulos/subtitleCustom";
export const About = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4   mx-4 lg:mx-0">
            <article>
                <SubtitleCustom estilo=" text-center" titulo="Acerca de PBO" />
                <p className="text-base">
                    ¡Sintoniza PBO Radio 91.9 FM, la radio con fe! Fundado en 2016 por <span className="font-bold">Phillip Butters</span>, somos la primera multiplataforma del Perú.
                    Noticias al instante, opinión sin filtros, tecnología, salud, deportes y entretenimiento.
                    ¡Conéctate con lo que de verdad importa!
                </p>
            </article>
            <article>
                <SubtitleCustom estilo=" text-center" titulo="Programas de hoy" />
                <RedesSociales />
            </article>
            <article>
                <SubtitleCustom estilo=" text-center" titulo="Redes sociales" />
                <RedesSociales />
            </article>
        </section>
    );
}

